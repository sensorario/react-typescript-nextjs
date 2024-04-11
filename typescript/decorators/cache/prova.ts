function cache(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const memory = new Map<any, any>();

  descriptor.value = function (...args: any[]) {
    const key = JSON.stringify(args);

    if (!memory.has(key)) {
      console.log('calcolo valore')
      const result = originalMethod.apply(this, args);
      memory.set(key, result);
      return result;
    }

    console.log('recupero valore')
    return memory.get(key);
  };

  return descriptor;
}

class NonEAcqua {
  @cache
  doSomething(x: number): number {
    return x * 2;
  }
}


const obj = new NonEAcqua()
obj.doSomething(42)
obj.doSomething(42)
obj.doSomething(42)
