import React, {Component} from 'react';
import axios from "axios";
import App from '../App.js';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            result : <div></div>

        };
    }

    setPassword = (e) => {
        this.setState({password : e.target.value});
    };

    setEmail = (e) => {
        this.setState({email : e.target.value});
    };

    login = (e) => {
        e.preventDefault();
        axios
            .post('http://snapi.epitech.eu/connection', this.state)
            .then(confirm => {
                localStorage.setItem('token', confirm.data.data.token);
                window.location.href = '/';

            })
            .catch(error => {
                this.setState({result :<div className="alert alert-danger mt-3">Email ou mot de passe incorrect !</div>});
            });
    };


    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className="col-xl-5 col-sm-12 mx-auto d-block">
                        <form method="post" action="/connection" onSubmit={this.login}>
                            <div className="form-group">
                                <label htmlFor="email">Email :</label>
                                <input className="form-control" onChange={this.setEmail} value={this.email} id="email" type="email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password :</label>
                                <input className="form-control" onChange={this.setPassword} value={this.password} id="password" type="password"/>
                            </div>
                            <button className="btn btn-danger btn-lg mx-auto d-block mt-5" type="submit">Connexion
                            </button>
                        </form>
                        {this.state.result}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;