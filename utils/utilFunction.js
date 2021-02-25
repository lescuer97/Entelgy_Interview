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

// searches either an id of client in the client array or the id of a policy in the policy array
exports.searcher = (array, query) => {
  let results = array.filter((obj) => obj.id === query);
  return results;
};

// searches the policy  array for the id of the client and returns it in the array if equal
exports.searchClientIdinPolicy = (array, query) => {
  let results = array.filter((obj) => obj.clientId === query);
  return results;
};
// TODO WRITE FUNCTION
exports.filterForPolicy = (array) => {};
