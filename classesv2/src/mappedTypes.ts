type Fruit = 'apple' | 'orange' | 'banana';
interface Rating {
  estrellas: number;
  sabor: string
}

type FruitCount<T> = {
  [key in Fruit]: T;
}

const fruits: FruitCount<Rating> = {
    orange: {estrellas:2, sabor:"acido"},
    apple: {estrellas:5, sabor:"dulce"},
    banana: {estrellas:1, sabor:"amargo"}
};
console.log(fruits);