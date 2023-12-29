function unCertoDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  const originale = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Prima dell'esecuzione di ${key}.`);
    const risultato = originale.apply(this, args);
    console.log(`Dopo l'esecuzione di ${key}.`);
    return risultato;
  };

  return descriptor;
}

class UnaCertaClasse {
  @unCertoDecorator
  unCertoMetodo() {
    console.log('Esecuzione del metodo log.');
  }
}

const istanza = new UnaCertaClasse();
istanza.unCertoMetodo();
