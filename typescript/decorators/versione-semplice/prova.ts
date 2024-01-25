function decoratore() {
  return function (target : any, key : string, descriptor: PropertyDescriptor) {
    console.log(`dentro al decorator decoratore`)
    return descriptor.value.apply(this, arguments)
  }
}

function cose (target : any, key : string, descriptor: PropertyDescriptor) {
  console.log(`dentro al decorator cose`)
  return descriptor.value.apply(this, arguments)
}

class Foo {
  @decoratore()
  @cose
  funzione () { console.log(`dentro alla funzione`); }
}