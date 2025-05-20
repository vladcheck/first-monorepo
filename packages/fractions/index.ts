export default class Fraction {
  nom: number;
  den: number;

  constructor(nominator: number, denominator: number) {
    if (denominator === 0) {
      throw Error("Denominator equals zero");
    }
    this.nom = nominator;
    this.den = denominator;
  }

  add(F: Fraction) {
    if (this.den === F.den) {
      return new Fraction(this.nom + F.nom, this.den);
    }
  }

  sub(F: Fraction) {
    if (this.den === F.den) {
      return new Fraction(this.nom - F.nom, this.den);
    }
  }

  mult(F: Fraction) {
    return new Fraction(this.nom * F.nom, this.den * F.den);
  }

  div(F: Fraction) {
    return new Fraction(this.nom * F.den, this.den * F.nom);
  }

  toString() {
    return `${this.nom}/${this.den}`;
  }
}
