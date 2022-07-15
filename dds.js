function isEqual(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }

  return true;
}

// obj1 == obj2;
// isEqual(obj1, obj2);
// console.log(isEqual(obj1, obj2));
console.log(isEqual({ a: 1 }, { a: 1 }));
console.log(isEqual({ a: 1 }, { a: 2 }));
console.log(isEqual({ a: "1" }, { a: "2" }));
console.log(isEqual({ a: "1" }, { a: "1" }));
