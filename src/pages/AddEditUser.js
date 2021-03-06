import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createUserStart } from '../redux/actions'



const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
}

const AddEditUser = () => {


    const [formValue, setFormValue] = useState(initialState);
    const { name, email, phone, address } = formValue;
    const history = useHistory();

    const dispatch= useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email && phone && address) {
             console.warn(name, email, phone, address);
             dispatch(createUserStart(formValue));
        }
        setTimeout(() => history.push('/'), 500)
    }

    const onInputChange = (e) => {
        let { name , value} = e.target;
        setFormValue({...formValue, [name] : value})
    }


    return (<div>
        <form onSubmit={handleSubmit}>
            <p>Add Users Details</p>
            <div>
            <label>Name:</label>
                <input
                    value={name || ""}
                    name="name"
                    type="text"
                    onChange={onInputChange}
                    required
                    label="Name"
                    validation="Please provide a name"
                    invalid
                />
                <br />
                <label>Email:</label>
                <input
                    value={email || ""}
                    name="email"
                    type="email"
                    onChange={onInputChange}
                    required
                    label="Email"
                    validation="Please provide an email"
                    invalid
                />
                <br />
                <label>Phone:</label>
                <input
                    value={phone || ""}
                    name="phone"
                    type="number"
                    onChange={onInputChange}
                    required
                    label="Phone"
                    validation="Please provide a phone no."
                    invalid
                />
                <br />
                <label>Address:</label>
                <input
                    value={address || ""}
                    name="address"
                    type="text"
                    onChange={onInputChange}
                    required
                    label="Address"
                    validation="Please provide an address"
                    invalid
                />
                <br />
                <div>
                    <button type="submit">Add</button>
                    <br />
                    <br />
                    <br />
                    <button>
                    <div style={{color: 'green'}} onClick={() => history.push('/')}>Go Back</div>
                    </button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default AddEditUser;