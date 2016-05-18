import {Stuff} from '/lib/collections';

export default function() {
  if (!Stuff.findOne()) {
    for(let i = 1; i <= 5; i++) {
      const title = `stuff ${i}`;
      const data = `data for ${i}`;

      Stuff.insert({title, data});
      console.log(`inserted ${i}!`);
    }
  }
}
