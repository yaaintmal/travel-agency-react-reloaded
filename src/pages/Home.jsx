import { useEffect, useState } from "react";
import { destLoader } from "../data/loaders.js";
import { Link } from "react-router"; // Use react-router-dom for Link

const Home = () => {
  const [randomDestination, setRandomDestination] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allDestinations = await destLoader();

      // Generate a random ID between 1 and 13
      const randomId = Math.floor(Math.random() * 13) + 1;

      // Find the destination that matches the random ID
      const selectedDestination = allDestinations.find(
        (dest) => dest.id === randomId
      );

      // Set the state with the single, randomly selected destination
      setRandomDestination(selectedDestination);
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  if (!randomDestination) {
    return <p className="message--loading">Loading...</p>;
  }

  // Display only the single random destination
  return (
    <>
      <title>Travel Agency - Spotlight of the Week</title>
      <h3 className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-secondary text-lg font-p-4 bg-gradient-to-r from-primary to-secondary text-right">
        Featured Destination: Spotlight
      </h3>
      <div className="spotlight-container">
        <div key={randomDestination.id} className="spotlight-item">
          <img
            className="spotlight-image"
            src={randomDestination.image}
            alt={randomDestination.title}
          />
          <div className="spotlight-content">
            <h3 className="spotlight-title">{randomDestination.title}</h3>
            <p className="spotlight-description">
              {randomDestination.description}
            </p>
            <Link
              to={`/destinations/${randomDestination.slug}`}
              className="spotlight-link"
            >
              <button className="btn btn-secondary">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
