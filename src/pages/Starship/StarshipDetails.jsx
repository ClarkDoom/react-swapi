import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getPilotDetails, getStarshipDetails } from "../../services/sw-api";
import { Link } from "react-router-dom";
import PilotDetails from "../../components/Pilots/PilotDetails";

const StarshipDetails = ({starship}) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  const [pilotDetails, setPilotDetails] = useState([]) 
  
  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  },[location.state.starship.url])

  useEffect(() => {
    const fetchPilotDetails = async () => {
      const pilotData = await getPilotDetails(location.state.starship.pilots)
      setPilotDetails(pilotData)
    }
    fetchPilotDetails()
  },[location.state.starship.pilots])

  return ( 
    <div id='container'>
      {starshipDetails.length ?
        <>
          <div id="starship">
            <h1>Starship details</h1>
            <p><b>Name:</b> {starshipDetails.name}</p>
            <p><b>Model:</b> {starshipDetails.model}</p>
            <PilotDetails 
              starshipDetails={starshipDetails}
              pilotDetails={pilotDetails}  
            />
            <Link to="/starships" id='link'>Return</Link>
          </div>
        </>
        :
        <>
          <div>Details Loading...</div>
        </>
      }
    </div>
  );
}

export default StarshipDetails;