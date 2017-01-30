'use strict';
var Chart = require('chart.js');
Chart = typeof(Chart) === 'function' ? Chart : window.Chart;

var defaults = require('lodash.defaults');

/* eslint "global-require": 0 */
var plugins = [
  require('./types/bar'),
  require('./types/pie'),
  require('./types/horizontalBar'),
  require('./types/line')
];

var formatFns = {
  pie: require('./format/pie'),
  default: require('./format/default')
};

function draw(ctx, label) {
  ctx.textAlign = label.textAlign;
  ctx.textBaseline = label.textBaseline;
  ctx.fillStyle = label.fontColor;
  ctx.font = label.fontStyle + ' ' + label.fontSize + 'px ' + label.fontFamily;
  ctx.fillText(label.value, label.x, label.y);
}

function getDefaults (type, dataset) {
  var options = defaults({}, dataset.dataLabels, {
    display: true,
    format: formatFns[type] || formatFns.default,
    fontSize: Chart.defaults.global.defaultFontSize,
    fontStyle: Chart.defaults.global.defaultFontStyle,
    fontFamily: Chart.defaults.global.defaultFontFamily,
    color: Chart.defaults.global.defaultFontColor,
    colors: [],
    minRadius: 35
  });

  options.colors = dataset.data.map(function(value, index) {
    return options.colors[index] || options.color;
  });

  return options;
}

// Get the chart variable
Chart.pluginService.register({
  afterDatasetsDraw: function (chartInstance) {
    var ctx = chartInstance.chart.ctx;
    var graphs = [];

    chartInstance.data.datasets.forEach(function (dataset, index) {

      var meta = chartInstance.getDatasetMeta(index);

      if (meta.hidden) {
        return;
      }

      var type = meta.type;

      var options = getDefaults(type, dataset);

      if (!options.display) {
        return;
      }

      graphs.push({
        dataset: dataset,
        meta: meta,
        options: options
      });
    });

    plugins.forEach(function(plugin) {
      plugin(graphs).forEach(function(label) {
        draw(ctx, label);
      });
    });
  }
});
