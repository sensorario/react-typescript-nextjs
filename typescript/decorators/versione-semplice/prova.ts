function decoratore(options) {
  console.log(options)
  return function (target : any, key : string, descriptor: PropertyDescriptor) {
    console.log(`dentro al decorator decoratore`)
    return descriptor.value.apply(this, arguments)
  }
}

class Foo {
  @decoratore({op: "zioni"})
  funzione () { console.log(`dentro alla funzione`); }
}