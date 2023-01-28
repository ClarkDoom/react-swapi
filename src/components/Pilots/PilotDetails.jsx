const PilotDetails = (props) => {
  return ( 
    <div id='pilot'>
      {props.starshipDetails.pilots.length ?
        <>
          <h3>Pilots</h3>
          {props.pilotDetails.map(pilot =>
            <p key={pilot.name}>{pilot.name}</p>  
          )}   
        </>
        :
        <>
          <h3>No Pilots On File</h3>
        </>
      }
    </div>
  );
}

export default PilotDetails;