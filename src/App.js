import React from "react"
import "./App.css"
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { Route, Link } from "wouter"
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  	return (
		<StaticContext.Provider value={{name: 'Leonardo', AprendiendoReact: true}}> 
			<div className="App">
				<section className="App-content">
					<Link to="/">
						<img className="App-logo" alt='Giffy logo'  src='/logo.png'/>
					</Link>	
					<GifsContextProvider>
						<Route 
							component={Home}
							path="/" />			
						<Route
							component={SearchResults}
							path="/search/:keyword" />					
						<Route 
							component={Detail}
							path="/gif/:id" />
					</GifsContextProvider>
				</section>
			</div>
		</StaticContext.Provider>
  	)
}

export default App;
