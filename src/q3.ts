interface Animal{
    name: string;
    age : number;
    weight : String;
    numOfLegs: number;
}

interface Fish{
    name: string;
    age : number;
    weight : String;
    colorOfFins : String
}

function printPet(pet: Animal| Fish): void {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Weight: ${pet.weight}`);

    if ("numOfLegs" in pet) {
        console.log(`Number of legs: ${pet.numOfLegs}`);
    }

    if ("colorOfFins" in pet) {
        console.log(`Color of fins: ${pet.colorOfFins}`);
    }
}

const animal1: Animal = {
    name: "Liza",
    age: 4,
    weight: "2kg",
    numOfLegs: 4
};

const fish1: Fish = {
    name: "Nemo",
    age: 1,
    weight: "0.1g",
    colorOfFins: "Orange"
};

printPet(animal1);
printPet(fish1);