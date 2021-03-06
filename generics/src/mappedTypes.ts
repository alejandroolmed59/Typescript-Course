type Fruit = 'apple' | 'orange' | 'banana';
interface Rating {
  estrellas: number;
  sabor: string
}

type FruitCount<F extends keyof any, T> = {
  [K in F]: T;
}

const fruits: FruitCount<Fruit, Rating> = {
    orange: {estrellas:2, sabor:"acido"},
    apple: {estrellas:5, sabor:"dulce"},
    banana: {estrellas:1, sabor:"amargo"}
};
console.log(fruits);

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


function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'd');

//Key remapping

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface PersonMapped {
  firstName: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<PersonMapped>;

// Map over arbitrary unions, not just unions of string | number | symbol, but unions of any type:
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}

type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>

// Mapped types work well with other features in this type manipulation section, 
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? boolean : string;
};
 
type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;

const algo : ObjectsNeedingGDPRDeletion = {
  id: "",
  name: false
}