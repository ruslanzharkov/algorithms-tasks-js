// via Symbol.toPrimitive
function sumNewFeature(num) {
  const func = (value) => {
    return sum(num + value);
  }

  func[Symbol.toPrimitive] = () => num;

  return func;
}

// via valueOf propertty of objects
function sumOldWay(num) {
  const func = (value) => {
    return sum(num + value);
  }

  func.valueOf = () => num;

  return func;
}
