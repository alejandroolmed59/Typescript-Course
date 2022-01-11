type Admin = {
  id: number;
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

class SuperEmpleado implements ElevatedEmployee{
  public id: number;
  public name: string;
  public privileges: string[];
  public startDate: Date;
  
  constructor(obj:any){
    this.id = obj.id
    this.name = obj.name
    this.privileges = obj.privileges
    this.startDate = obj.startDate
  }
}

const empleadoEjemplo = new SuperEmpleado({
  id: 4,
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
  quejesto:"algo",
  shouldntWork:"osi"
})

//console.log(empleadoEjemplo);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

type UnknowEmployee = Admin | Employee;

const printEmployee = (employee:UnknowEmployee) =>{
  console.log(employee.name);
  if('privileges' in employee){
    console.log(employee.privileges);
  }
}

interface Bird {
  kind :'bird';
  flyingSpeed:number;
}
interface Horse {
  kind : 'horse';
  runningSpeed:number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) =>{
  let speed: number;
  switch(animal.kind){
    case 'bird':
      speed= animal.flyingSpeed;
      break;
    case 'horse':
      speed= animal.runningSpeed;
      break;  
  }
  console.log(`Viajanding a ${speed} km/h`);
}
const macaw :Bird = {
  kind : 'bird',
  flyingSpeed: 1200
} 
moveAnimal(macaw);
moveAnimal({runningSpeed:32, kind:'horse'});