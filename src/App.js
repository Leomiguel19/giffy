import React from "react"
import { useState } from "react/cjs/react.development";
import "./App.css"
import ListOfGifs from "./components/ListOfGifs"

function App() {
	const [keyword, setKeyword ] = useState('shingeki no kyojin')

  	return (
    	<div className="App">
      		<section className="App-content">		
			  	<button onClick={() => setKeyword('tokyo revenger')}>
				Cambiar keyword</button>
				<ListOfGifs keyword={keyword}/>			
			</section>
		</div>
  	);
}

export default App;
