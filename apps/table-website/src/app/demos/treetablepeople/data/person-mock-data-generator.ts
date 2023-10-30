import { Address } from "./address";
import { Person } from "./person";
import { PersonIf } from "./person.if";

export class PersonMockDataGenerator {

  static buildPersonMockData(): PersonIf[] {
    const counts = [100, 300, 1900, 10000];
    const chunks = [];

    let i = 0;
    for (let c = 0; c < counts.length; c++) {
      const chunk: PersonIf[] = [];
      chunks.push(chunk);

      for (; i < counts[c]; i++) {
        chunk.push(PersonMockDataGenerator.buildPerson(i));
      }
    }
    for (let c = counts.length - 1; c > 0; c--) {
      while (chunks[c].length) {
        const p = chunks[c].shift();
        if (p) {
          const idx = Math.floor((chunks[c - 1].length - 1) * Math.random());
          let parent = chunks[c - 1][idx];
          if (!parent.friends) {
            parent.friends = [];
          }
          parent.friends.push(p);
        }
      }
    }
    return chunks[0];
  }


  private static buildPerson(i: number) {
    const adr = new Address(
      "Street" + i,
      Math.floor(88 * Math.random()) + "a",
      Math.floor(99999 * Math.random()) + "",
      "City" + i,
      "Germany"
    );
    return new Person(
      i,
      "Prename" + i,
      "Lastname" + i,
      new Date(Math.floor(1677864433663 * Math.random())).toISOString(),
      Math.floor(99 * Math.random()),
      Math.random() < 0.5 ? "male" : "female",
      adr,
      []
    );
  }
}
