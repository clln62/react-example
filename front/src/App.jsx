//TEST EXAMPLE

import React from 'react';
import Welcome from './welcome/Welcome.jsx';
import User from './user/User.jsx';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            searchBar: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render () {
        return (
            <div>
                <Welcome onChange={this.onChange}/>
                {/* <User /> */}
            </div>
        )
    }
}