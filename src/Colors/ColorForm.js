import {useState} from 'react';
import { useHistory } from 'react-router';

const ColorForm = ({addColor}) => {
    const INITIAL_STATE = {
        name: '',
        color: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({[formData.name]: formData.color});
        setFormData(INITIAL_STATE);
        history.push('/colors');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Color Name:</label>
            <input id='name' type='text' name='name' placeholder='Color Name' value={formData.name} onChange={handleChange}/>

            <label htmlFor='color'>Color:</label>
            <input id='color' type='color' name='color' placeholder='Color' value={formData.color} onChange={handleChange}/>

            <button>Submit</button>
        </form>
    )
}

export default ColorForm;