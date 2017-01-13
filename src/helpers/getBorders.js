var getStrSize = require('./stringSize');

function getBorders(label) {
  var coordinates = {};
  var padding = 4;
  if (label.textBaseline === 'bottom') {
    coordinates.y1 = label.y - label.fontSize - padding;
    coordinates.y2 = label.y + padding;
  } else if (label.textBaseline === 'middle') {
    coordinates.y1 = label.y - label.fontSize / 2 - padding;
    coordinates.y2 = label.y + label.fontSize / 2 + padding;
  } else if (label.textBaseline === 'top') {
    coordinates.y1 = label.y - padding;
    coordinates.y2 = label.y + label.fontSize + padding;
  }

  var strSize = getStrSize(label.value);
  if (label.textAlign === 'left') {
    coordinates.x1 = label.x - padding;
    coordinates.x2 = label.x + strSize + padding;
  } else if (label.textAlign === 'center') {
    coordinates.x1 = label.x - strSize / 2 - padding;
    coordinates.x2 = label.x + strSize / 2 + padding;
  } else if (label.textAlign === 'right') {
    coordinates.x1 = label.x - strSize - padding;
    coordinates.x2 = label.x + padding;
  }
  return coordinates;
}

module.exports = getBorders;
