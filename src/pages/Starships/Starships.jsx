import { getAllStarships } from "../../services/sw-api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarshipDetails from "../Starship/StarshipDetails";

const Starships = () => {
  const [starships, setStarships] = useState([])
  
  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarships()
  },[])

  return ( 
    <>
      <h1>Starships</h1>
      {starships.length ?
        <>
          {starships.map(starship =>
              <div key={starship.name}>
                <Link to='/starship' state={{starship}}>
                  <button id="card" key={starship.url}>
                    {starship.name}
                  </button>
                </Link>
              </div>
          )}
        </>
        :
        <>
          <div>Starships loading...</div>
        </>
      }
    </>
  );
}

export default Starships;