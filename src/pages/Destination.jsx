import { Link, useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { destLoader } from "../data/loaders.js";

export default function Destination() {
  const [destination, setDestination] = useState(null);

  const { id } = useParams();
  const destinations = useOutletContext();

  useEffect(() => {
    const fetchData = async () => {
      const data = await destLoader();

      const destination = data.find((destination) => destination.slug === id);

      setDestination(destination);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img src={destination?.image} alt={destination?.slug} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{destination?.title}</h2>
            <p>{destination?.description}</p>
            <div className="card-actions justify-center">
              <Link to="/destinations">
                <button className="btn btn-primary w-full mt-4">
                  back to overview
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
