type Fruit = 'apple' | 'orange' | 'banana';

type FruitCount = {
  [key in Fruit]: number;
}

const fruits: FruitCount = {
    apple: 2,
    orange: 4,
    banana: 6
};
console.log(fruits);