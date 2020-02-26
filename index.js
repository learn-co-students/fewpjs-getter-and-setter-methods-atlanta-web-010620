// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area() {
        return Math.PI * (this.radius ** 2)
    }

    set diameter(newDia) {
        this.radius = newDia/2
    }

    set circumference(newCir) {
        this.diameter = newCir/Math.PI
    }
}