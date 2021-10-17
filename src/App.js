import React, {useState, useEffect} from 'react';
import './App.css';

const GIFS = [
  'https://media3.giphy.com/media/l0Iyoy5VglR6QKJiw/giphy.gif?cid=ecf05e477h6nc0lu202xl0icph383ido8ezi44qh307lstyg&rid=giphy.gif&ct=g',
  'https://media0.giphy.com/media/3o7bugwhhJE9WhxkYw/giphy.gif?cid=ecf05e477h6nc0lu202xl0icph383ido8ezi44qh307lstyg&rid=giphy.gif&ct=g'
]

const DIFFERENT_GIFS = [
  'https://media2.giphy.com/media/xUPGcC4A6ElcqtUJck/giphy.gif?cid=ecf05e47viuqcm01tf344df1xem1vlb3xakgk2ywvj4gcgzu&rid=giphy.gif&ct=g'  
]

function App() {
  const [gifs, setGifs] = useState(GIFS)

  useEffect(function () {
    setGifs(DIFFERENT_GIFS)
  }, [])

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
