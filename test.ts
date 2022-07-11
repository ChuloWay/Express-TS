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
  // we can also add ? to show that it is not a most that there is gonna be an argument.
  
  
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
  