import React from 'react'
import { Link } from "wouter"

const POPULAR_GIFS = ["tokyo revenger", "hunterxhunter", "god of war", "horizon zero dawn", "shingeki no kyojin"]

export default function Home() {
    return (
        <>
          <h3 className="App-title"> Los Gif mas populares</h3>  
          <ul>
            {POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>
                        Gifs de {popularGif}
                    </Link>
                </li>
            ))}
          </ul>
        </>
    )
}