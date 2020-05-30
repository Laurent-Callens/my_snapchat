import React, {Component} from 'react';
import axios from "axios";
import App from '../App.js';

export default class SendSnap extends Component {

	constructor(props){
        super(props);
        this.state = {
        	users: [],
            image : '',
            to : '',
            duration : '',
            result : <div></div>

        };
        
    }

    setImage = (e) => {
        this.setState({image : e.target.files[0]});
        console.log(this.state.image);
    };

    setTo = (e) => {
        this.setState({to : e.target.value});
    };

    setDuration = (e) => {
        this.setState({duration : e.target.value}); 
    };

    componentDidMount(){

        axios
        .get('http://snapi.epitech.eu/all', {headers : { token : localStorage.getItem('token')}})
        .then( value => {
         	this.setState({ users: value.data.data });
         	
     	})
        .catch(err => { console.log(err)})
    }

    snap = (e) => {
    	e.preventDefault();
    	let form = new FormData();
    	form.append('duration', this.state.duration);
        form.append('to', this.state.to);
        form.append('image', this.state.image);
		axios
        .post('http://snapi.epitech.eu/snap', form, {
            headers: {
                'Content-Type': 'multipart/form-data',
                token: localStorage.getItem('token'),
                }
        })
    	.then( confirm => {
    		this.setState({result :<div className="alert alert-success mt-3">Snap envoyé !</div>});
    	})
    	.catch(error => {
    		this.setState({result :<div className="alert alert-danger mt-3">Echec lors de l'envoi du snap</div>});
    	})
    }

	render(){
		return(
			<div className="container">
                <div className='row'>
                    <div className="col-xl-5 col-sm-12 mx-auto d-block">
                        <form method="post" action="/snap" encType="multipart/form-data" onSubmit={this.snap}>
                            <div className="form-group">
                                <label htmlFor="email">Image</label>
                                <input className="form-control" id="file" type="file" onChange={this.setImage} value={this.file}/>
                            </div>
                            <div className="form-group">
                            	<select className="form-control" id="users" name="users" onChange={this.setTo} value={this.dest} >
                            		<option value='' > A qui voulez vous envoyer cette image ? </option>
                            	{this.state.users.map( function(item,i){
                            		
                            		return <option id={i} value={item.email}> {item.email} </option> ;
                            		
                            	})}
                            	</select> 
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Durée</label>
                                <input className="form-control" id="file" type="number" onChange={this.setDuration} value={this.duration} min="5" max="20"/>
                            </div>
                            <button className="btn btn-danger btn-lg mx-auto d-block mt-5" type="submit">Snap !
                            </button>
                        </form>
                        {this.state.result}
                    </div>
                </div>
            </div>
			);
	}


}