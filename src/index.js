exports.min = function min (array) {
  array = array || [];
  return (array.length ? Math.min(...array) : 0)
}

exports.max = function max (array) {
  array = array || [];
  return (array.length ? Math.max(...array) : 0);
}

exports.avg = function avg (array) {
  array = array || [];
  return (array.length ? array.reduce((a,c) => a + c) / array.length : 0);
}

