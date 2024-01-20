import { useState } from "react";
import { useAddNewPlayerMutation } from "../API/api";
import { useNavigate } from "react-router-dom";

const NewPlayerForm = () => {
  const navigate = useNavigate();
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
  });
  const [isPlayerAdded, setIsPlayerAdded] = useState(false);

  const [addPlayer, { isLoading, error }] = useAddNewPlayerMutation();

  const handleChange = (e) => {
    setPlayerData({
      ...playerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {


    try {
      // Call the mutation function with the user input
      const response = await addPlayer(playerData);

      // Check if the mutation was successful
      if (addPlayer.isSuccess(response)) {
        setIsPlayerAdded(true);
        console.log("Player added successfully!");
        navigate("/");
      } else if (addPlayer.isError(response)) {
        // Handle errors from the server
        setIsPlayerAdded(false);
        console.error("Sign-up failed. Please try again.");
      }
    } catch (error) {
      // Handle other errors, such as network issues
      console.error("An error occurred during player addition:", error);
      setIsPlayerAdded(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        {isPlayerAdded && <p>Player added successfully!</p>}
        {error && <p>{error}</p>}

        <div className="sign-up">
        <h2>Sign Up!</h2>
        <p>Enter details about your puppy below.</p>
        </div>

        <form id="form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={playerData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Breed:
            <input
              type="text"
              name="breed"
              value={playerData.breed}
              onChange={handleChange}
            />
          </label>

          <label>
            Status:
            <select
              name="status"
              value={playerData.status}
              onChange={handleChange}
            >
              <option value="Bench">Bench</option>
              <option value="Starting">Starting</option>
            </select>
          </label>

          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              value={playerData.imageUrl}
              onChange={handleChange}
            />
          </label>

          <button id="button" type="submit" disabled={isLoading}>
            {isLoading ? "Adding Player..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPlayerForm;

