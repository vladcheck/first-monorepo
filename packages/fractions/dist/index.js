"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fraction {
    constructor(nominator, denominator) {
        if (denominator === 0) {
            throw Error("Denominator equals zero");
        }
        this.nom = nominator;
        this.den = denominator;
    }
    add(F) {
        if (this.den === F.den) {
            return new Fraction(this.nom + F.nom, this.den);
        }
    }
    sub(F) {
        if (this.den === F.den) {
            return new Fraction(this.nom - F.nom, this.den);
        }
    }
    mult(F) {
        return new Fraction(this.nom * F.nom, this.den * F.den);
    }
    div(F) {
        return new Fraction(this.nom * F.den, this.den * F.nom);
    }
    toString() {
        return `${this.nom}/${this.den}`;
    }
}
exports.default = Fraction;
