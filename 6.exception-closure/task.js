//Задача 1

function parseCount(value) {
    if(isNaN(Number.parseInt(value))) {
        throw new Error ("Невалидное значение");
    }
    return Number.parseInt(value);
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b) < c || (a + c) < b || (b + c) < a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return Number(this.a + this.b + this.c);
    }

    getArea() {
        let p = 0.5 * (this.a + this.b + this.c);
        return Number(Math.sqrt((p * (p - this.a)) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}