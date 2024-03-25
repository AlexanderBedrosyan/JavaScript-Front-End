function solve(input) {
    const arrays = [];
  
    for (const line of input) {
      const currentArray = JSON.parse(line);
      currentArray.sort((a, b) => b - a); // Sort in descending order
      const isUnique = arrays.every(arr => JSON.stringify(arr) !== JSON.stringify(currentArray));
      
      if (isUnique) {
        arrays.push(currentArray);
      }
    }
  
    arrays.sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length; // Sort by length in ascending order
      } else {
        return input.indexOf(JSON.stringify(a)) - input.indexOf(JSON.stringify(b));
      }
    });
  
    for (const arr of arrays) {
      console.log(`[${arr.join(', ')}]`);
    }
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
)
