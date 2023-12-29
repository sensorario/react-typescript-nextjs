"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function unCertoDecorator(target, key, descriptor) {
    const originale = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Prima dell'esecuzione di ${key}.`);
        const risultato = originale.apply(this, args);
        console.log(`Dopo l'esecuzione di ${key}.`);
        return risultato;
    };
    return descriptor;
}
class UnaCertaClasse {
    unCertoMetodo() {
        console.log('Esecuzione del metodo log.');
    }
}
__decorate([
    unCertoDecorator
], UnaCertaClasse.prototype, "unCertoMetodo", null);
const istanza = new UnaCertaClasse();
istanza.unCertoMetodo();
