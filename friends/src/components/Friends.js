import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const Friend = styled.div`
    text-align: center;
    background-color: moccasin;
    margin: auto;
    width: 95%;
`

export default class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        // fetch initial data - but it's protected! Use axiosWithAuth to send the token on the header of the request
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                // res.data.data
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err));
    };

    render(){
        return (
            <Friend>
                {this.state.friends.map(el => (
                    <h3 key={el.id} >{el.name}</h3>
                ))}
            </Friend>
        );
    };
};