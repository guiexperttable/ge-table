
var str = ('name' + '_' + new Date().toISOString())
  .trim()
  .replace(/[^a-zA-Z0-9_@]/g, "")
  .toUpperCase()
  .split("");

var len = str.length;
for (let i = len; i > 0; i = i - 5) {
  if (i !== len) {
    str[i - 1] = str[i - 1] + "-";
  }
}

var license = str.join("");


console.info(license)
