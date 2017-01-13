var strSize = require('../helpers/stringSize');
var Label = require('../models/label');

function BarPlugin (graphs) {
  var labelsForDraw = [];
  graphs.forEach(function(graph) {
    if (graph.meta.type !== 'bar') {
      return;
    }

    var points = graph.meta.data;
    points.forEach(function(point, index) {
      var margin = graph.options.fontSize / 2;
      var model = points[index]._model;
      if (Math.abs(model.base - model.y) > (graph.options.fontSize + margin * 2) && model.width > strSize(graph.dataset.data[index])) {
        var value = graph.dataset.data[index];
        var formattedValue = graph.options.format(value, point);

        if (model.base < model.y) {
          labelsForDraw.push(new Label({
            x: model.x,
            y: model.y - (graph.options.fontSize + margin),
            textAlign: 'center',
            textBaseline: 'top',
            fontSize: graph.options.fontSize,
            fontColor: graph.options.colors[index],
            value: formattedValue
          }));
        } else {
          labelsForDraw.push(new Label({
            x: model.x,
            y: model.y + margin,
            textAlign: 'center',
            textBaseline: 'top',
            fontSize: graph.options.fontSize,
            fontColor: graph.options.colors[index],
            value: formattedValue
          }));
        }
      }
    });
  });
  return labelsForDraw;
}

module.exports = BarPlugin;
