import {Stuff} from '/lib/collections';
import {Categories} from '/lib/collections';

export default function() {
  if (!Stuff.findOne()) {
    for(let i = 1; i <= 5; i++) {
      const title = `stuff ${i}`;
      const data = `data for ${i}`;
      const cat1 = "Electronics";
      const cat2 = "Fashion";

      if(i % 2 === 0) {
        Stuff.insert({title, data, category: cat1});
      } else {
        Stuff.insert({title, data, category: cat2});
      }
      console.log(`inserted ${i}!`);
    }
  }

  if(!Categories.findOne()) {
    Categories.insert({name: "Electronics"});
    Categories.insert({name: "Fashion"});
  }
}
