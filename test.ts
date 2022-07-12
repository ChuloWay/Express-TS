function greet(person: String) {
    console.log(`Hello ${person}`);
  }
  greet("Ada");
  
  // const add = (x ,y) =>{
  //     return x + y
  //     console.log(x+y);
  // }
  
  // add(5,6);
  
  // Union Type
  const test = (id: number | string) => {
    if (typeof id === "string") {
      console.log(`Your Id is ${id.toUpperCase()}`);
    } else{
        console.log(id);
    }
  };
  test('twenty');
  
  
  // Type Aliases
  // used to predefine a type, almost like declaring a var for a type so it can be used in multiple places.
  // we can either use a 'type' or an 'interface'...interface can be re-opened to assign new types ,using 'extends' we can also mke a new interface with the properties of the formwer, type cant be
  type Point = {
          x: Number;
          y: Number;
  };
  
  const printCoord = (pt: Point)=> {
      console.log(`The point is x:${pt.x} & y:${pt.y}!`);
  }
   printCoord({x:30, y:80});
  
  // Type Assertion, makes it that a declared type remains that type.
  // using 'as'
  const req = {url : "https://test.com", method: 'Get'as 'get'} 
  const req1 = {url : "https://test.com", method: 'Get'} as const  
  
  
  // less common primitive BigInt
  const oneHundred : bigint = BigInt(100);
  console.log(oneHundred);
  const anotherH : bigint = 200n;
  console.log(anotherH);
  
  // In a union between a type and the null type
  // string|null we can use ! to say that the valur is not of type null
  
  function live (x: number|null){
      console.log(x!);
  }
  live(4);
  // we can also add ? to show that it is not a most that there is gonna be an argument/it is optional
  
  
  const printAll = (strs: string | string[] | null) => {
      if (strs !== null ) {
          if (typeof strs === "object") {
              for ( const s of strs){
                  console.log(s);
              }
          }
          else if (typeof strs === "string"){
              console.log(strs);
          }
      }
  }
  printAll(["house", "car"]);
  
  
  
  // Using In Operator
  
  type Fish = { swim : ()=> void };
  type Bird = { fly : ()=> void};
  
  function move(animal : Fish | Bird ){
      if ("swim" in animal ) {
          return animal.swim();
      }
      else {
          return animal.fly();
      }
  }
  
  // Type Predicate
  // Narrows the variable to that specific type if the original type is compatible
  
  const isFish = (pet: Fish | Bird ) : pet is Fish =>{
      return ( pet as Fish ). swim !== undefined;
  }
  
  
  
  interface Circle {
      kind : "circle",
      radius : number;
  }
  
  interface Square {
      kind : "square", 
      sideLength : number;
  }
  
  type Shape = Circle | Square
  
  
  const getArea = (shape : Shape) => {
      if (shape.kind === "circle") {
          return Math.PI * shape.radius ** 2;
      }
  };


//   function Types

function greeter(fn: (a: string )=> void) {
    fn("Hello World")
}
//   fxn with one parameter that is a string that doesnt return any value 
// alternatively we can set it as a type alias
type greetfunction = (a: string) => void;
function greeter1(fn: greetfunction) {
console.log();
};
 type describeFxn = {
     description : string;
     (someArg: number) : boolean ;
 };

 function doStuff(fn : describeFxn) {
     console.log(fn.description + "returned" + fn(6));;
     return(fn.description + "returned" + fn(6));
 }



//  generic
const exe = (arr: any[])=>{
    console.log(arr[1]);
    return arr[1]
}

exe(["hey", "test"]);

// can be modified to return the type of the array passed in instead of 'any'
const example = <Type>(arr: Type[]) : Type | undefined =>{
    console.log(arr[3]);
    return arr[1]
}

example([1,2,3,"hello", true, null]);

const s = example(["hi", 'read', 'try', 'fast']);

// constraints

const longest = <Type extends { length : number}> (a: Type, b: Type)=> {
    if (a.length > b.length){
        console.log(a);
        return a;
    }
    else {
        console.log(b);
        return b;
    }
}

longest([9,2,1,2], [0,2,1]);
longest("hello", "hey");


// declare function f(x? : number) : void;


// never== shows that the return property doesnt have any value
function fail(msg: string) : never {
    throw new Error(msg)
}

// rest parameter
const multiply = (n: number, ...m: number[])=>{
    return m.map((x)=> n * x);
}
console.log(multiply(5,4,3,2,1)); 


// spread argument
const args = [3,4] as const
const angle = Math.atan2(...args);

