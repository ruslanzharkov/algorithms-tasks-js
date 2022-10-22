// via Symbol.toPrimitive
function sumWithSymbol(num) {
  const func = (value) => {
    return sumWithSymbol(num + value);
  }

  func[Symbol.toPrimitive] = () => num;

  return func;
}

// via valueOf propertty of objects
function sumWithValueOf(num) {
  const func = (value) => {
    return sumWithValueOf(num + value);
  }

  func.valueOf = () => num;

  return func;
}
