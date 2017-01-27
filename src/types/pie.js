var Label = require('../models/label');

function PiePlugin (graphs) {
  var labelsForDraw = [];
  graphs.forEach(function(graph) {
    if (graph.meta.type !== 'pie') {
      return;
    }

    var points = graph.meta.data;
    points.forEach(function(point, index) {
      var margin = graph.options.fontSize * 2;
      var model = point._model;

      if (model.outerRadius * model.circumference > 30 && model.outerRadius > 80) {
        labelsForDraw.push(new Label({
          x: Math.cos((model.startAngle + model.endAngle)/2) * (model.outerRadius - margin) + model.x,
          y: Math.sin((model.startAngle + model.endAngle)/2) * (model.outerRadius - margin) + model.y,
          textAlign: 'center',
          textBaseline: 'middle',
          fontSize: graph.options.fontSize,
          fontColor: graph.options.colors[index],
          fontStyle: graph.options.fontStyle,
          fontFamily: graph.options.fontFamily,
          value: graph.options.format(graph.dataset.data[index], point)
        }));
      }
    });
  });
  return labelsForDraw;
}

module.exports = PiePlugin;
