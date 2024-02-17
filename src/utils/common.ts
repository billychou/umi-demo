export function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj];
  }
  return obj;
}

export function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log('hello, ' + x.join(' and '));
  } else {
    console.log('hello, ' + x);
  }
}

export function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input;
  }
  return padding + input;
}

function printAll(strs: string | string[] | null) {
  if (typeof strs === 'object') {
    //both null and array are object
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === 'string') {
    console.log(strs);
  } else {
    console.log('do nothing');
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ('swim' in animal) {
    console.log('fish');
  } else {
    console.log('bird');
  }
}

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
  // fn
}

// Call Signatures
type DescriableFunction = {
  description: string;
  (someArg: number): boolean;
};

// const isPositive: DescriableFunction = {
//     description: "检查一个数是否为正数",
//     (someArg: number): boolean {
//         return someArg > 0;
//     }
// }

function doSomething(fn: DescriableFunction) {
  console.log(fn.description + ' returned  ' + fn(6));
}

function myFunc(someArg: number) {
  return someArg > 3;
}

myFunc.description = 'default description';

doSomething(myFunc);

type SomeConstructor = {
  new (someArg: number): { someProperty: string };
};

function fn(ctor: SomeConstructor) {
  return new ctor('hello');
}

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}
