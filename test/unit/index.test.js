/* global expect */
const { makeUnique } = require('../../removeDuplicateItems');

describe('Remove Duplicate Test', () => {
  it('Should remove duplicates from array of objects', async () => {
    let obj = [
      { id: 1, name: 'Object 1' },
      { id: 2, name: 'Object 2' },
      { id: 1, name: 'Object 3' },
    ];

    obj = makeUnique(obj);

    expect(obj.length).to.equal(2);

    for (let i = 0; i < obj.length; i++) {
      expect(obj[i].name).to.equal('Object ' + (i + 1));
    }
  });
});
