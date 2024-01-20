import { useParams } from 'react-router-dom';
import { useGetPlayerQuery, useDeletePlayerMutation } from '../API/api';
import { useState } from 'react';

function SinglePlayer(){
    const { id } = useParams();
    const {data, isLoading}= useGetPlayerQuery(id);
    const playerInfo = data?.data?.player;
    const [error, setError] = useState(null);
    const [isPlayerDeleted, setIsPlayerDeleted] = useState(false); // New state for delete message

    // const [error, setError] = useState(null);
    const [deletePlayer, { isLoading: isError }] = useDeletePlayerMutation();

    const handleDelete = async () => {
        try {
            console.log("Deleting player...");
            // Check if the mutation was successful
            const response = await deletePlayer(id);

            if (!isError(response)) {
                setIsPlayerDeleted(true);

                console.log("Player deleted successfully!");
              } else {
                // Handle errors from the server
                setError("Player deletion failed. Please try again.");
                setIsPlayerDeleted(false);
              }
            } catch (error) {
                console.error("An error occurred during player deletion:", error);
              // Handle other errors, such as network issues
              setError("An error occurred during player deletion. Please try again later.");
              setIsPlayerDeleted(false);
            }
          };
    

    return (
    <>
    {isPlayerDeleted && <p>Player deleted successfully!</p>}
      {error && <p>{error}</p>}
        <div>
            {isLoading?<h1>Loading...</h1>: null}
            <div key={playerInfo?.id} className="single-player-card">
          <div className="single-player-image-container">
            <img className="player-image" src={playerInfo?.imageUrl} alt={playerInfo?.name} />
          </div>
          <div className="single-player-details">
            <h2>{playerInfo?.name}</h2> 
            <p>Breed: {playerInfo?.breed}</p> 
            <p>Status: {playerInfo?.status}</p>
            <p>Created: {playerInfo?.createdAt}</p>
            <p>Updated: {playerInfo?.updatedAt}</p>
            <button id="button" type="button" onClick={handleDelete} disabled={isLoading}>
        {isLoading ? "Deleting..." : "Delete"}
        </button>
          </div>
        </div>
        </div>
    </>
    );
}

export default SinglePlayer;

