import { NavLink } from "react-router-dom";
import { useHistory, useParams } from "react-router";

const Color = ({colors}) => {
    const {color} = useParams();
    const history = useHistory();
    let HTML;

    if(colors[color]){
        HTML = (
            <div style={{backgroundColor: colors[color]}}>
                <h1>Isn't {color} beautiful?</h1>
                <NavLink to='/colors'>GO BACK</NavLink>
            </div>
        )
    } else {
        history.push('/colors');
        return null;
    }

    return HTML;
}

export default Color;