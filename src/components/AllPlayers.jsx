import { useGetPlayersQuery } from '../API/api';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';

const Players = () => {
    const { data = {}, error, isLoading } = useGetPlayersQuery();
    const [playersData, setPlayersData] = useState([]);
  
    useEffect(() => {
      if (data?.data?.players) {
        setPlayersData(data.data.players);
      }
    }, [data]);
    // console.log(player)
    if (isLoading) {
        <h1>Page Loading...</h1>
    }
    if (error) {
        alert("Fetch Failed")
    }
    
      
// console.log(data, isLoading)

    return (
        <div className='players'>
            {playersData.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          <div className="player-image-container">
            <img className="player-image" src={player.imageUrl} alt={player.name} />
          </div>
          <div className="player-details">
            <h2>{player.name}</h2> 
            <p>Breed: {player.breed}</p> 
            <p>Status: {player.status}</p>
            <Link to ={`/players/${player.id}`}>More Details</Link>
          </div>
        </div>
      ))}
        </div>
    );
};

export default Players;
