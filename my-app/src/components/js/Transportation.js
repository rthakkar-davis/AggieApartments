import '../css/Transportation.css';
import {colors} from '../../colors.js';
import Map from './Map';
import apartmentList from '../../config/Apartments.json';
import busLinesData from "../../config/BusLines.json";

function Transportation({aptName}) {
    const bikeMap = require('../../images/GreenToSilo.png');
    const unitransMap = require('../../images/GreenToSilo.png');

    const busLine = apartmentList[aptName].busLine;
    const busLineCoords = busLinesData[aptName];
    return (
        <div className="bigTransportationContainer" style={{width: "90%", marginTop: "50px"}}>
            <div>
                <div>
                    <h1 style={{color: colors["blue"]}}>Transportation Details</h1>
                </div>
                <div className="transportationContainer">
                    <div>
                        <div className='MapContainer'>
                            <Map defaultLocation={busLineCoords.center} busStopCoords={busLineCoords.busStop} />
                        </div>
                    </div>
                    <div className="travelTimeContainer" style={{borderRadius: "20px"}}>
                        <h2 style={{color: colors["blue"], marginTop: 0}}>Travel Time to Silo Terminal</h2>
                        <p style={{color: colors["blue"], fontWeight: "bold"}}>By Walking:
                            <p style={{color: colors["yellow"], fontWeight: "bold"}}> 20 min</p>
                        </p>
                        <p style={{color: colors["blue"], fontWeight: "bold"}}>By Biking: 
                            <p style={{color: colors["yellow"], fontWeight: "bold"}}> 10 min</p>
                        </p>
                        <p style={{color: colors["blue"], fontWeight: "bold"}}>By Driving: 
                            <p style={{color: colors["yellow"], fontWeight: "bold"}}> 15 min</p>
                        </p>
                        <p style={{color: colors["blue"], fontWeight: "bold"}}>By Unitrans: 
                            <p style={{color: colors["yellow"], fontWeight: "bold"}}> 15 min</p>
                        </p>
                        <div>
                            <h2>Bus Lines</h2>
                            <div className="busLineContainer">
                                {busLine.map((line) => (
                                    <div className="busLineIcon">
                                        <a target="_blank" href={`https://unitrans.ucdavis.edu/routes/${line}/`}>
                                            <p style={{margin: 0}}>{line}</p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
  }
  
  export default Transportation;
  