import { useParams } from "react-router";
import whiskey from './dogImages/whiskey.jpg';
import duke from './dogImages/duke.jpg';
import perry from './dogImages/perry.jpg';
import tubby from './dogImages/tubby.jpg';
import './DogDetails.css'

const dogs = [
        {
            name: "Whiskey",
            age: 5,
            src: whiskey,
            facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!"
            ]
        },
        {
            name: "Duke",
            age: 3,
            src: duke,
            facts: [
                "Duke believes that ball is life.",
                "Duke likes snow.",
                "Duke enjoys pawing other dogs."
            ]
        },
        {
            name: "Perry",
            age: 4,
            src: perry,
            facts: [
                "Perry loves all humans.",
                "Perry demolishes all snacks.",
                "Perry hates the rain."
            ]
        },
        {
            name: "Tubby",
            age: 4,
            src: tubby,
            facts: [
                "Tubby is really stupid.",
                "Tubby does not like walks.",
                "Angelina used to hate Tubby, but claims not to anymore."
            ]
        }
    ]

const DogDetails = () => {
    const {name} = useParams();
    let HTML;
    
    for(let i = 0; i < dogs.length; i++){
        let dogName = dogs[i].name;

        if(name == dogName.toLowerCase()){
            HTML = (
                <div className='DogDetails'>
                    <h1>My name is {dogs[i].name}, and I am {dogs[i].age} years old!</h1>
                    <img src={dogs[i].src}/>
                    <ul>
                        <li>{dogs[i].facts[0]}</li>
                        <li>{dogs[i].facts[1]}</li>
                        <li>{dogs[i].facts[2]}</li>
                    </ul>
                </div>
            )
        }
    }

    return HTML;
}

export default DogDetails;