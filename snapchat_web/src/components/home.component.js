import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import App from '../App.js';
import logo from '../assets/logo.png';
export default class Home extends Component {

	disconnect(){
        localStorage.clear();
        window.location.href = '/';
    }
                

	
	render(){
		if (localStorage.getItem('token') === null){
		return (
			<div className="container border rounded p-5 mt-5">
				<div className="mx-auto d-block">
                    <img src={logo} className="img-fluid mx-auto d-block" alt="logo"/>
                </div>
				<div className="title row align-items-center justify-content-center">
					<h1 className="display-3 mt-3">Azeroth'Snap</h1>
				</div>

				<div className="row mt-5 align-items-center justify-content-center">
					<div className="col-sm text-center"> 
						<p>Vous avez un compte ? Connectez vous !</p>
						<Link to="/login" className="btn btn-danger ">Connection</Link>
					</div>
					<div className="col-sm text-center">
						<p>Vous n'avez pas de compte ? Inscrivez vous !</p>
						<Link to="/register" className="btn btn-danger ">Inscription</Link>
					</div>
				</div>
			</div>


			)
		}
		else{
			return(
				<div className="container border rounded p-5 mt-5">
					<div className="mx-auto d-block">
                    	<img src={logo} className="img-fluid mx-auto d-block" alt="logo"/>
                	</div>
					<div className="title row align-items-center justify-content-center">
						<h1 className="display-3 mt-3">Azeroth'Snap</h1>
					</div>

					<div className="row mt-5 align-items-center justify-content-center">
						<div className="col-sm text-center">
							<Link to="/send" className="btn btn-danger ">Snapper</Link>
						</div>
						<div className="col-sm text-center">
							<Link to="/snaps" className="btn btn-danger ">Mes snaps</Link>
						</div>
						<div className="col-sm text-center">
							<button className="btn btn-danger " onClick={this.disconnect}>Log Out</button>
						</div>
					</div>
				</div>
			
)
		}
	}
}