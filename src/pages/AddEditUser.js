import React, { useState, useEffect } from 'react';
import { useHistory, usePrams } from 'react-router-dom';


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

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email && phone && address) {
            console.warn(name, email, phone, address);
        }
    }

    const onInputChange = (e) => {
        let { name , value} = e.target;
        setFormValue({...formValue, [name] : value})
    }


    return (<div>
        <form onSubmit={handleSubmit}>
            <p>Add Users Details</p>
            <div>
                <input
                    value={""}
                    name="name"
                    type="text"
                    onChange={onInputChange}
                    required
                    label="Name"
                    validation="Please provide a name"
                    invalid
                />
                <br />
                <input
                    value={""}
                    name="email"
                    type="email"
                    onChange={onInputChange}
                    required
                    label="Email"
                    validation="Please provide an email"
                    invalid
                />
                <br />
                <input
                    value={""}
                    name="phone"
                    type="number"
                    onChange={onInputChange}
                    required
                    label="Phone"
                    validation="Please provide a phone no."
                    invalid
                />
                <input
                    value={""}
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
                    <div onClick={() => history.push('/')}>Go Back</div>
                </div>
            </div>
        </form>
    </div>
    )
}

export default AddEditUser;