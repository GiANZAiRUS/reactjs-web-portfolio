import React, { Component } from 'react'
import {Header, About, Contact, Resume, Footer} from './components'
import './App.scss';

export default class App extends Component {
	render(){
		return(
			<div className="App">
				<Header />
				<About />
				<Contact />
				<Resume />
				<Footer />
			</div>
			)
	}

}
