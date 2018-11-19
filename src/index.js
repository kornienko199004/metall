console.log('hello, dudde!');
const fn = () => {
  const objA = { a: 1 };
  const objB = { b: 2 };
  const objC = { ...objA, ...objB };
  console.log(objC);
};

fn();