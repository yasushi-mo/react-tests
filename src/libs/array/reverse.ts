export const reverse = () => {
  const array = [1, 2, 3];
  console.log(array);
  // Output: Array [1, 2, 3]

  const reversed = array.reverse();
  console.log(reversed);
  // Output: Array [3, 2, 1]

  console.log(array);
  // Output: Array [3, 2, 1]
};

export const toReversed = () => {
  const array = [1, 2, 3];
  console.log(array);
  // Output: Array [1, 2, 3]

  const reversed = array.toReversed();
  console.log(reversed);
  // Output: Array [3, 2, 1]

  console.log(array);
  // Output: Array [1, 2, 3]
};
