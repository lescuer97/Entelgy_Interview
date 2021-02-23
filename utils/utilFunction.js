exports.range = (array, query) => {
  let result = [];

  let limit;
  if (array.length <= query) {
    limit = array.length;
  } else {
    limit = query;
  }

  if (!query || query === {}) {
    for (let i = 0; i < 10; i++) {
      const element = array[i];
      result.push(element);
    }
  } else {
    for (let i = 0; i < limit; i++) {
      const element = array[i];
      result.push(element);
    }
  }
  return result;
};
