class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year; 
    }

    honk() {
        return "Beep!"; 
    }

    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`; 
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year); 
        this.numWheels = 4; 
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2; 
    }

    revEngine(){
        return "VROOOM!!!!"
    }
}

class Garage {
    constructor(capacity){
        this.vehicles = new Array(); 
        this.capacity = capacity
    }

    add(vehicle){
        if(typeof vehicle === "object") {
            if(this.capacity > this.vehicles.length){
                this.vehicles.push(vehicle); 
                return "Vehicle Added!"
            } else {
                return "Sorry, we're full."
            }
        } else {
            return "Only vehicles are allowed in here!"; 
        }
    }
}