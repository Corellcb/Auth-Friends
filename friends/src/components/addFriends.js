import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriends = (props) => {
    const [friends, setFriends] = useState({
        name: '',
        age: '',
        email: '',
    });

    const handleChanges = (e) => {
        setFriends({
            ...friends,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', friends)
            .then(response => console.log(response))
        props.history.push('/dashboard')
        axiosWithAuth()
            .get('/friends', friends)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    };

    return (
        <div className="add-container">
            <h1>Add Friends</h1>
            <div className="add-form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Name"
                        name='name'
                        type="text"
                        value={friends.name}
                        onChange={handleChanges}
                    />
                    <input
                        placeholder="Age"
                        name='age'
                        type="text"
                        value={friends.age}
                        onChange={handleChanges}
                    />
                    <input
                        placeholder="Email"
                        name='email'
                        type="text"
                        value={friends.email}
                        onChange={handleChanges}
                    />
                    <button className="add-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddFriends;

// class AddFriends extends React.Component {
//     state = [
//         {
//             id: '',
//             name: '',
//             age: '',
//             email: ''
//         }
//     ];

//     addNewFriend = addedFriend => {
//         const newFriend = {
//             name: "",
//             age: "",
//             email: ""
//         };
//         this.setState({
//             friends: [...this.state, newFriend]
//         })
//     }

//     handleChanges = e => {
//         this.setState({
//             friends: e.target.avlue
//         });
//     };

//     handleSubmit = e => {
//         event.preventDefault();
//         this.
//     }

// }