import React, {useState, useEffect} from 'react';
import './App.css';

const apiURL = [
  'https://api.giphy.com/v1/gifs/search?api_key=SLIWUFflTX1UgjsJDduoKU2AnTN4pNt1&q=shingeki+no+kyojin&limit=25&offset=0&rating=g&lang=en'
]

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    console.log('actualizando los gifs')
    // setGifs(DIFFERENT_GIFS)
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs)
      })
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} alt="" />)
        }   
        {/* <button onClick={() => setGifs(DIFFERENT_GIFS)}>Cambiar gifs</button> */}
      </section>
    </div>
  );
}

export default App;
