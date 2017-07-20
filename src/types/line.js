var getBorders = require('../helpers/getBorders');
var Label = require('../models/label');

function comparePriority(labelA, labelB) {
  return labelB.priority - labelA.priority;
}

function intersect(label, index, labels) {
  for (var i = 0; i < index; i++) {
    if (!(labels[i].borders.y1 > label.borders.y2 || labels[i].borders.y2 < label.borders.y1 || labels[i].borders.x2 < label.borders.x1 || labels[i].borders.x1 > label.borders.x2)) {
      return false;
    }
  }
  return true;
}

function LinePlugin(graphs) {
  var labels = [];
  graphs.forEach(function(graph) {
    if (graph.meta.type !== 'line') {
      return;
    }

    var margin = graph.options.fontSize / 2;
    var points = graph.meta.data;

    points.forEach(function(point, index) {
      var prevPoint = points[index - 1];
      var nextPoint = points[index + 1];
      var model = point._model;
      var isInter = prevPoint && nextPoint;

      var x = model.x;
      var y = model.y;
      var priority, textAlign, textBaseline;

      if (isInter) {
        var prevModel = prevPoint._model;
        var nextModel = nextPoint._model;
        textAlign = 'center';
        var textInBottom = prevModel.y - model.y < model.y - nextModel.y;

        if (textInBottom) {
          y += margin;
          priority = model.y;
          textBaseline = 'top';
        } else {
          y -= margin;
          priority = -model.y;
          textBaseline = 'bottom';
        }
      } else {
        var isLeft = index === 0;
        y -= margin;
        x += isLeft ? 3 : 0;
        priority = -model.y;
        textBaseline = 'bottom';
        textAlign = isLeft ? 'left' : 'right';
      }

      var value = graph.dataset.data[index] + (graph.options.suffix || '');
      var label = new Label({
        x: x,
        y: y,
        textAlign: textAlign,
        textBaseline: textBaseline,
        fontSize: graph.options.fontSize,
        fontColor: graph.options.colors[index],
        fontStyle: graph.options.fontStyle,
        fontFamily: graph.options.fontFamily,
        value: graph.options.format(value, point)
      });

      label.borders = getBorders(label);

      if (isInter && (label.borders.x1 < point._xScale.left
        || label.borders.x2 > point._xScale.right)
        || label.borders.y1 < point._yScale.top
        || label.borders.y2 > point._yScale.bottom) {
        return;
      }

      label.priority = priority;
      labels.push(label);
    });
  });

  return labels.sort(comparePriority).filter(intersect);
}

module.exports = LinePlugin;
