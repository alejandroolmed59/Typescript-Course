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

// Removing the readonly in generics 
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]; //Its an indexed access type Type[Property]
};
 
type LockedAccount = {
  readonly id: string;
  readonly name: string;
  readonly balance: number;
};
 
type UnlockedAccount = CreateMutable<LockedAccount>;

const pruebis : UnlockedAccount = {
  id: "",
  name: "",
  balance: 0
}
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
 
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
 
type User = Concrete<MaybeUser>;

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

//The omit default generic utility type
type Person = {
  firstName: string;
  age: number;
  dayofB: Date;
}

const perMuti: Omit<Person, "dayofB" | "age"> = { firstName: "ale" }
console.log(perMuti);


// Record utility type and mapped types
interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "mordred" | "Frodo";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
  Frodo: { age: 6, breed: "furry " }
};



//'keyof' keyword used in generic function
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'd');

//Indexed access types

const Harold = {status:44,mood:"angry"}
type HaroldType = typeof Harold["status"];

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person2 = typeof MyArray[0]["name"]; 

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof: ()=>void;
}

const frosty : Dog = {
  live: ()=>{console.log("vive")},
  woof: ()=>{console.log("wooof woof 🐶");}
}
