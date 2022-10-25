const myNew = (constructor, ...args) => {
  let first = Object.create(constructor.prototype);

  const second = constructor.apply(first, args);

  if(!!second && typeof second === 'object') {
    return second;
  }
  
  return first;
}
