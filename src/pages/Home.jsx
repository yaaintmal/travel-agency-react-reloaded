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
      <div className="breadcrumbs text-sm mb-4">
        <ul className="mb-4">
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="/destinations">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Destinations
            </a>
          </li>
          <li>
            <span className="inline-flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
              Spotlight of the Day
            </span>
          </li>
        </ul>
      </div>
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
