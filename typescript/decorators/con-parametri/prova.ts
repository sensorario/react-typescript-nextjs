function raddoppia(options: { duplica: boolean }): any {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      if (options.duplica === true) {
        args[0] *= 2;
        console.log(args)
      }
      originalMethod.apply(this, args)
    }
    return descriptor
  }
}

class UnaClasse {
  @raddoppia({ duplica: true })
  @raddoppia({ duplica: true })
  @raddoppia({ duplica: true })
  unMetodo(numero : number) {
    console.log(`Dentro alla funzione il numero è ${numero}`);
  }
}

// Creare un'istanza della classe e chiamare il metodo decorato
const unaIstanza = new UnaClasse();
unaIstanza.unMetodo(654);
