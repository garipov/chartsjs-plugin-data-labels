module.exports = function (ctx, dataset, point) {

  var color = dataset.dataLabels && dataset.dataLabels.color;
  var colors = dataset.dataLabels && dataset.dataLabels.colors || [];

  ctx.fillStyle = color || 'black';

  var customColor = colors[point._index];
  if (customColor) {
    ctx.fillStyle = customColor;
    return;
  }
  return;
};
