/*
 * This method is only useful for an array containing objects having a property called id.
 */
module.exports.makeUnique = function(array) {
  const usedIds = new Set();
  const uniqueItems = [];
  for (let i = 0; i < array.length; i++) {
    let foundItem = false;

    if (!usedIds.has(array[i].id)) {
      uniqueItems.push(array[i]);
      usedIds.add(array[i].id);
    }
  }

  return uniqueItems;
};
