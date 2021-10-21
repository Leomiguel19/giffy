import React from "react"
import "./App.css"
import ListOfGifs from "./components/ListOfGifs"

import { Route } from "wouter"

function App() {
  	return (
    	<div className="App">
      		<section className="App-content">
				<h1>App</h1>
				<a href='/gif/tokyo revenger'>Gif de tokyo revenger</a>
				<a href='/gif/hunterxhunter'>Gif de hunterxhunter</a>
				<a href='/gif/god of war'>Gif de god of war</a>
				<a href='/gif/horizon zero dawn'>Gif de horizon zero dawn</a>
			  	<Route 
					component={ListOfGifs}
				  	path="/gif/:keyword" 			  
				/>
			</section>
		</div>
  	);
}

export default App;
