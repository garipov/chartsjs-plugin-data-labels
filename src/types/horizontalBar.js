var strSize = require('../helpers/stringSize');
var Label = require('../models/label');

function horizontalBar (graphs) {
  var labelsForDraw = [];
  graphs.forEach(function(graph) {
    if (graph.meta.type !== 'horizontalBar') {
      return;
    }

    var points = graph.meta.data;
    points.forEach(function(point, index) {
      var margin = graph.options.fontSize / 2;
      var model = points[index]._model;
      if (Math.abs(model.base - model.x) > strSize(graph.dataset.data[index]) + (graph.options.fontSize + margin) && model.height > graph.options.fontSize + margin) {
        var value = graph.dataset.data[index];
        var formattedValue = graph.options.format(value, point);

        if (model.base < model.x) {
          labelsForDraw.push(new Label({
            x: model.x - margin,
            y: model.y,
            textAlign: 'right',
            textBaseline: 'middle',
            fontSize: graph.options.fontSize,
            fontColor: graph.options.colors[index],
            fontStyle: graph.options.fontStyle,
            fontFamily: graph.options.fontFamily,
            value: formattedValue
          }));
        } else {
          labelsForDraw.push(new Label({
            x: model.x + margin,
            y: model.y,
            textAlign: 'left',
            textBaseline: 'middle',
            fontSize: graph.options.fontSize,
            fontColor: graph.options.colors[index],
            fontStyle: graph.options.fontStyle,
            fontFamily: graph.options.fontFamily,
            value: formattedValue
          }));
        }
      }
    });
  });
  return labelsForDraw;
}

module.exports = horizontalBar;
