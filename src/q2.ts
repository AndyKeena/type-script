function reverseArray<T>(array: T[]): T[] {
    return array.slice().reverse();
  }
  
  const array = [2, 3, 4, 5, 6];
  const reversedArray = reverseArray(array);//
  console.log(reversedArray); 
  