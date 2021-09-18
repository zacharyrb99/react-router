import { NavLink } from "react-router-dom";

const ColorList = ({colors}) => {
    const colorNames = Object.keys(colors).map(colorName => (
        <li>
            <NavLink to={`/colors/${colorName}`}>{colorName}</NavLink>
        </li>
    )); 

    return (
        <div className='ColorList'>
            <h1>Welcome to the color Factory</h1>
            <NavLink exact to='/colors/new'>Add a color</NavLink>
            
            <p>Please select a color: </p>
            <ul>
                {colorNames}
            </ul>
        </div>
    )
}

export default ColorList;