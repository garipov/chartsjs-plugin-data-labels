function Label(obj) {
  this.x = obj.x;
  this.y = obj.y;

  this.textAlign = obj.textAlign;
  this.textBaseline = obj.textBaseline;
  this.fontSize = obj.fontSize;
  this.fontColor = obj.fontColor;
  this.fontStyle = obj.fontStyle;
  this.fontFamily = obj.fontFamily;

  this.value = obj.value;
}

module.exports = Label;
