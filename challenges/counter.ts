function createCounter(): {count: number } {
  let count = 0;

  const obj = {
    get count() {
      return count++;
    },
  }

  return obj
}

