// When to use type annotaions
// 1) Function thet return any type

// const json = '{"x": 10, "y": 20}'


// const coord: { x: 10, y: 20 } = JSON.parse(json);

// alert(coord);


// const profile = {
//   age: 20,
//   coords: {
//     x: 0,
//     y: 10
//   },
//   changeName(age: number): void {
//     this.age = age
//   }
// }

// const { age }: { age: number } = profile;

// const { coords: { x, y } }: { coords: { x: number, y: number } } = profile

// let a = [[1,2],[2]]


// let arr: (Date | string)[] = [new Date()];
// arr.push('2')

// type Test =  {
// id: number
// }


class Car {
  // color: string = '22';

  constructor(private color: string  = 'we') {
    this.color = color
  }

  getColor(){
    console.log(this.color);
  }
}

const ssa = new Car('ss');
console.log(ssa.getColor());
