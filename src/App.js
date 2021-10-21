import React from "react"
import "./App.css"
import ListOfGifs from "./components/ListOfGifs"

import { Route, Link } from "wouter"

function App() {
  	return (
    	<div className="App">
      		<section className="App-content">
				<h1>App</h1>
				<Link href='/gif/tokyo revenger'>Gif de tokyo revenger</Link>
				<Link href='/gif/hunterxhunter'>Gif de hunterxhunter</Link>
				<Link href='/gif/god of war'>Gif de god of war</Link>
				<Link href='/gif/horizon zero dawn'>Gif de horizon zero dawn</Link>
			  	<Route 
					component={ListOfGifs}
				  	path="/gif/:keyword" 			  
				/>
			</section>
		</div>
  	);
}

export default App;
