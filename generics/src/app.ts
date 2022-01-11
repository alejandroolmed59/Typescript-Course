/*
const mergeObj= <T extends object, U extends object, >(a: T , b: U): T&U =>{
    return Object.assign(a, b);
}

const mergedObj = mergeObj({name:"Vladi dog 😏"}, {color:'red'})
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy >(element: T) : [T,string]{
    let description = 'Has no value';
    if(element.length>=1){
        description = `Has ${element.length} elements`;
    }
    return [element,description]
}

console.log(countAndDescribe(['Hola Mundooo!']));

// keyof in generics
function extractProperty<T, U extends keyof T>(object: T, key:U){
    return object[key];
}
console.log(extractProperty({name:"Olme", age:42}, 'age'));


class DataStorage<T extends string | number | boolean> {
    protected data: T[] = [];
  
    addItem(item: T) {
      this.data.push(item);
    }
  
    removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1); // -1
    }
  
    getItems() {
      return [...this.data];
    }
  }
  
  const textStorage = new DataStorage<string>();
  textStorage.addItem('Max');
  textStorage.addItem('Manu');
  textStorage.addItem('Olme');
  textStorage.addItem('Pedro');
  textStorage.removeItem('Max');
  console.log(textStorage.getItems());
  
  const numberStorage = new DataStorage<number>();
  numberStorage.addItem(42);
  numberStorage.addItem(564342);
  numberStorage.addItem(774342);
  numberStorage.addItem(90942321);
  numberStorage.removeItem(564342);
  console.log(numberStorage.getItems());
  */
type Person ={
    firstName: string;
    age:number;
    dayofB:Date;
}

const perMuti : Omit<Person, "dayofB" | "age"> = {firstName:"ale"} 
console.log(perMuti);

interface CatInfo {
    age: number;
    breed: string;
  }
type CatName = "miffy" | "boris" | "mordred" | "Frodo";
   
const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
    Frodo: {age:6, breed:"peludo "}
};

cats.boris;
