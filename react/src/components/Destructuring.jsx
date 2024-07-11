// import animals, { useAnimals } from "./data";
import cars from "./cars";


function Destructuring() {
    const [ honda, tesla ] = cars;
    const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
    const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;
    const { coloursByPopularity: [hondaTopColour] } = honda;
    const { coloursByPopularity: [teslaTopColour] } = tesla;
    return(
        <table>
            <tr>
                <th>Brand</th>
                <th>Top Speed</th>
            </tr>
            <tr>
                <td>{tesla.model}</td>
                <td>{teslaTopSpeed}</td>
                <td>{teslaTopColour}</td>
            </tr>
            <tr>
                <td>{honda.model}</td>
                <td>{hondaTopSpeed}</td>
                <td>{hondaTopColour}</td>
            </tr>
        </table>
    )
    // console.log(animals);
    // const [cat, dog] = animals; //destructuring of array
    // console.log(cat);
    // console.log(dog);

    // const { name: dogName, sound: dogSound } = dog; //destructuring of object
    // console.log(dogName);
    // console.log(dogSound);

    // const { name, sound, feedingRequirements: { food, water }  } = cat; //destructuring of object
    // console.log(name);
    // console.log(sound);
    // console.log(food);
    // console.log(water);

    // const {name = "Fluffy", sound = "Purr" } = cat;
    // console.log(name);
    // const [animal, makeSound] = useAnimals(cat);
    // console.log(animal);
    // makeSound();

}

export default Destructuring;