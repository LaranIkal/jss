

// Function inside another function
const addCurry = ( a ) => {
  return( b ) => {
    return( c ) => {
      return a+b+c
    }
  }
}


const result = addCurry(2)(3) // => a = 2, b = 3

print("Print result:" + result )
print("Print result(5):" + result( 5 ) ) // => c = 5


