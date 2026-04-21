

// The returned function forms a closure(function that retains access to variables) over count. 
// Even though createCounter() has finished, the count variable persists 
// and is only accessible through the counter function.

function createCounter() {
  let count = 0; // Private variable
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
print("Counter: " + counter()); // 1
print("Counter: " + counter()); // 2   

const counterNew = createCounter();

print("Counter: " + counter()); // 3 
print("CounterNew: " + counterNew()); // 1  
print("Counter: " + counter()); // 4
print("CounterNew: " + counterNew()); // 2



