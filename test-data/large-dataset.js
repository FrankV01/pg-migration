
function generateData() {
  const size = 10000;
  const retVal = new Array(size);
  for(var i = 0; i < size; i++) {
    retVal[i] = `insert into large_dataset(key, value) VALUES(${i}, 'row item ${i}');`;
  }
  return retVal;
}

module.exports = {
  '1.0.0': {
    tables: ["CREATE TABLE large_dataset(key bigint PRIMARY KEY NOT NULL, value VARCHAR(500) NOT NULL)"],
    data: [],
    indexes: []
  },
  '1.1.0': {
    tables: [],
    data: generateData(),
    indexes: []
  }
};
