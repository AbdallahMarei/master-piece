import React,{useEffect,useState} from 'react'
import "./featured-games.css"
import axios from 'axios'
import {Link} from "react-router-dom"

function FeaturedGames() {
  const [games,setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/boards').then(res=>{
      console.log(res.data.boards)
      setGames(res.data.boards);
    });
  }, []);
    return (
        <div>
            <div>
                <h1 className='featured-games-title'>Most Selling Games</h1>
                <hr />
            </div>
            <div className='games-container-home'>
            {games.filter((game,index) => index <3).map((game) => (
          <div data-aos="fade-up" data-aos-duration="2000" className="game-container-home" key={game.id}>
            <div className="game-photo-container">
              <img className="game-photo-home" src={game.image} alt={game.title} />
            </div>
            <h2 className="game-title-home">{game.name}</h2>
            <div className='price-and-btn'>
              <span className="game-price-home">Price: ${game.price}</span>
              <Link to={`/games/${game.id}`}><button className="view-game-btn">
              View Game
            </button></Link>
            </div>
          </div>
        ))}
            </div>
        </div>
    )
}

export default FeaturedGames
