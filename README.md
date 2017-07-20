[![npm](https://img.shields.io/npm/v/chartsjs-plugin-data-labels.svg?style=flat-square)](https://www.npmjs.com/package/chartsjs-plugin-data-labels)
# chartsjs-plugin-data-labels
Plugin for ChartJS to draw labels on charts
## Installation
You can download the latest version of Plugin for ChartJS to draw labels on charts from the [GitHub releases](https://github.com/garipov/chartsjs-plugin-data-labels)  

To install via npm:  
```
npm i chartsjs-plugin-data-labels
```
## Configuration
To configure this plugin, you can simply add the following entries to your chart options:  

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `display` | `Boolean` | `true` | `true` to enable this graph, else `false` to disable it for the associated graph.
| `fontSize` | `Number` | `Chart.defaults.global.defaultFontSize` |
| `fontStyle` | `String` | `Chart.defaults.global.defaultFontStyle` |
| `fontFamily` | `String` | `Chart.defaults.global.defaultFontFamily` |
| `color` | `String` | `Chart.defaults.global.defaultFontColor` | One color for all labels.
| `colors` | `Array` | `[]` | It takes a set of values for each labels. If not specified, the default color.
| `minRadius` | `Number` | `35` | The minimum radius, in pixels, in which even the labels are displayed (for pie charts).
| `suffix` | `String` | `undefined` | Suffix to append to each label (eg: `'%'`).

For example:
```
datasets: [
  {
    dataLabels: {           //  disabled by default
        colors: ['#fff', '#ccc', '#000'], //  Array colors for each labels
        minRadius: 30, //  minimum radius for display labels (on pie charts)
    }
  }
]
```
Please see JSBin: https://jsbin.com/joponil/4/edit
