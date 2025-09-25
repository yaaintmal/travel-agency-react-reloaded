import { useEffect, useState } from "react";
import { destLoader } from "../data/loaders.js";
import { Link } from "react-router";

const Destinations = () => {
  const [destinations, setDestinations] = useState(null);

  // const stars =

  useEffect(() => {
    const fetchData = async () => {
      const data = await destLoader();
      console.log(data);
      setDestinations(data);
    };
    fetchData();
  }, []);

  if (!destinations) return <p className="message--loading">Loading...</p>;

  return (
    <>
      <title>Travel Agency - Destinations List</title>
      <h3 className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary text-lg font-p-4 bg-gradient-to-r from-primary to-secondary text-right">
        Destinations Overview
      </h3>
      <ul className="list-container mb-22">
        {destinations.map((destination) => (
          <li key={destination.id} className="list-item">
            <img
              className="item-image"
              src={destination.image}
              alt={destination.title}
            />
            <div className="item-content">
              <h3 className="item-title">{destination.title}</h3>
              <p className="item-description">{destination.description}</p>
              <span className="item-slug">{destination.slug}</span>
            </div>
            <Link
              to={`/destinations/${destination.slug}`}
              className="item-link"
            >
              <button className="btn btn-primary">Visit</button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Destinations;
