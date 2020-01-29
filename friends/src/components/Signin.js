import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload);
                this.props.history.push('/dashboard');
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;