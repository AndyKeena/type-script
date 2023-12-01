interface MathOperation{
    calculate(number1: number, number2: number): number;
}

class Addition implements MathOperation{
    calculate(number1: number, number2: number): number {
        return number1 + number2;
    }
}
class Subtraction implements MathOperation{
    calculate(number1: number, number2: number): number {
        return number1 - number2;
    }
}
class Multiplication implements MathOperation{
    calculate(number1: number, number2: number): number {
        return number1 * number2;
    }
}

const addition1 = new Addition()
const additionResult = addition1.calculate(8, 2);
console.log("Addition is " + additionResult);

const subtraction1 = new Subtraction()
const subtractionResult = subtraction1.calculate(8, 2);
console.log("Subtraction is " + subtractionResult);

const multiplication1 = new Multiplication()
const multiplicationResult = multiplication1.calculate(8, 2);
console.log("Multiplication is " + multiplicationResult);
