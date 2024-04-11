var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoratore() {
    return function (target, key, descriptor) {
        console.log(`dentro al decorator decoratore`);
        return descriptor.value.apply(this, arguments);
    };
}
function cose(target, key, descriptor) {
    console.log(`dentro al decorator cose`);
    return descriptor.value.apply(this, arguments);
}
class Foo {
    funzione() { console.log(`dentro alla funzione`); }
}
__decorate([
    decoratore(),
    cose
], Foo.prototype, "funzione", null);
