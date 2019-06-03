import React, {Component} from 'react';
import store from '../store';

export default class Profile extends Component {
    constructor(){
        super();
        this.state = store.getState().username;
    }
    render() {
        // console.log(store.getState())
        return(
            <div>
                <h1>Welcome {this.state.username}</h1>
                <input placeholder="Favorite Show" />
                <input placeholder="Favorite Movie" />
                <input placeholder="Favorite Color" />
                <input placeholder="Favorite Food" />
                <input placeholder="Favorite Band" />
            </div>
        )
    }
}