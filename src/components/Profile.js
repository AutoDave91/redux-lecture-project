import React, {Component} from 'react';
import store, {UPDATE_FAV_SHOW} from '../store';

export default class Profile extends Component {
    constructor(){
        super();
        this.state = {
            username: store.getState().username,
            favShow: store.getState().favShow
        }
    }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({favShow: store.getState().favShow})
        })
    }
    handleShowChange = e =>{
        let action = {
            payload: e.target.value,
            type: UPDATE_FAV_SHOW
        }
        store.dispatch(action);
    }

    render() {
        // console.log(store.getState())
        return(
            <div>
                <h1>Welcome {this.state.username}</h1>
                <input placeholder="Favorite Show" onChange={this.handleShowChange} />
                <input placeholder="Favorite Movie" />
                <input placeholder="Favorite Color" />
                <input placeholder="Favorite Food" />
                <input placeholder="Favorite Band" />
                <h2>Favorite Show: {this.state.favShow}</h2>
            </div>
        )
    }
}