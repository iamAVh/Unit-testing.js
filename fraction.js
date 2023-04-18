class Fraction {
  constructor(numerator, denominator){
    if (denominator == 0) {
       throw new Error("Denominator can not be zero.");
    }
    const gcd = Fracton.findGcd(numerator, denominator);
    this.numerator = numerator / gcd;
    this.denominator = denominator /gcd;
    this.sign = this.denominator < 0 ? -1 : 1;
    this.denominator *=this.sign;
    this.numerator *= this.sign;
  }
  
  static findGcd(a,b) {
    return b ===0 ? a: Fraction.findGcd(b, a % b);
  }
  
  add(other) {
    const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, new Denominator);
  }
  
