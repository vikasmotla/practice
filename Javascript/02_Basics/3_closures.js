/*
    Closures = Combination of fn bunldedl togetyher with reference to its lecical environmwent.
    like it has access to variable in its lexicalk scoping. 
    in JS Closures are created everytime a fn is created, at fn created time. 

    Closure has 3 scope - Local/Own scope, Enclosing Scope(block, fn), Global Scope.
*/


function outerFn() {
    const name = "Mozilla";
    function innerFn() {
      console.log(name);
    }
    return innerFn;
  }
  
  const inner = outerFn();
  inner();

  // even though the outer fn is executed already but inner fn still has access to name variables.
