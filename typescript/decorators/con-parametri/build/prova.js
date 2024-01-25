var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function raddoppia(options) {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (options.duplica === true) {
                args[0] *= 2;
                console.log(args);
            }
            originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
class UnaClasse {
    unMetodo(numero) {
        console.log(`Dentro alla funzione il numero è ${numero}`);
    }
}
__decorate([
    raddoppia({ duplica: true }),
    raddoppia({ duplica: true }),
    raddoppia({ duplica: true })
], UnaClasse.prototype, "unMetodo", null);
// Creare un'istanza della classe e chiamare il metodo decorato
const unaIstanza = new UnaClasse();
unaIstanza.unMetodo(654);
