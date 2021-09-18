import { NavLink } from "react-router-dom";
import './DogList.css'

const DogList = () => {
    return (
        <div className='DogList'>
            <ul>
                <p>
                    <NavLink exact to='/dogs/whiskey'>Whiskey</NavLink>
                </p>

                <p>
                    <NavLink exact to='/dogs/duke'>Duke</NavLink>
                </p>

                <p>
                    <NavLink exact to='/dogs/perry'>Perry</NavLink>
                </p>

                <p>
                    <NavLink exact to='/dogs/tubby'>Tubby</NavLink>
                </p>
            </ul>
        </div>
    )
}

export default DogList;