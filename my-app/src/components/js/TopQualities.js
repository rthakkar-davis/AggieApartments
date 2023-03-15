import '../css/TopQualities.css';
import {colors} from "../../colors.js";
import Button from 'react-bootstrap/Button';


function TopQualities({qualities}) {

    return (
        <div className='topQualitiesContainer'>
            <div className='listQualities'>
                {qualities.map((quality) => (
                    <Button style={{border: "0", marginRight: "5px", marginBottom: "5px", fontWeight: "bold", backgroundColor: "#E2E2E2", color: "black"}} >{quality}</Button>
                ))}
            </div>
        </div>
    );
  }
  
  export default TopQualities;
  