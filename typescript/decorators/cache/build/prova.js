var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function cache(target, key, descriptor) {
    const originalMethod = descriptor.value;
    const memory = new Map();
    descriptor.value = function (...args) {
        const key = JSON.stringify(args);
        if (!memory.has(key)) {
            console.log('calcolo valore');
            const result = originalMethod.apply(this, args);
            memory.set(key, result);
            return result;
        }
        console.log('recupero valore');
        return memory.get(key);
    };
    return descriptor;
}
class NonEAcqua {
    doSomething(x) {
        return x * 2;
    }
}
__decorate([
    cache
], NonEAcqua.prototype, "doSomething", null);
const obj = new NonEAcqua();
obj.doSomething(42);
obj.doSomething(42);
obj.doSomething(42);
