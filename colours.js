const c = require("ansi-colors");

module.exports.fg = (text, time) => {
  let textModifier = c.bold;
  if (time > 10000) textModifier = textModifier.red;
  else if (time > 2000) textModifier = textModifier.yellow;
  else textModifier = textModifier.green;

  return textModifier(text);
};

module.exports.bg = (text) => c.bgBlack.green.bold(text);
