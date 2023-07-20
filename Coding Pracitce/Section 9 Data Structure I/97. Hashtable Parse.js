class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < this.size; i++) {
      this.table.push([]);//  Array<Array> ,[[],[],[]....]
    }
  }

  parse(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i);
    }
    return result % this.size;
  }

  // division method
  hash1(key) {
    let parsedKey = 0;
    if (typeof key !== "Number") {
      parsedKey = this.parse(key);
    } else {
      parsedKey = key
    }
    return key % this.size;
  }
  // multiplication method
  hash2(key) {
    let parsedKey = 0;
    if (typeof key !== "Number") {
      parsedKey = this.parse(key);
    } else {
      parsedKey = key
    }
    const A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((key * A) % 1));
  }

  set(key, value) {
    const index = this.hash2(key);
    this.table[index].push({ key, value });
  }

  get(key) {
    const index = this.hash2(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return this.table[table][i];
      }
    }
    return null;
  }

  printAll() {
    console.log(this.table);
  }
}

let myHashTable = new HashTable(6);
// CSS
myHashTable.set("white", "#FFFFFF")
myHashTable.set("magenta", "#FF00FF")
myHashTable.set("red", "#FF0000")

myHashTable.printAll();