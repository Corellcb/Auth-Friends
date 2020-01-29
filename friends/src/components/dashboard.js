import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class Dashboard extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then(response => {
                this.setState({
                    friends: response.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="friend-list">
                <h1>Friends List</h1>
                {this.state.friends.map(friend => (
                    <div key={friend.id} className="friend">
                        <h3>{friend.name}</h3>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Dashboard;