module.exports = function(value, point) {
  return Math.round(point._model.circumference / (2 * Math.PI) * 100) + '%';
};
