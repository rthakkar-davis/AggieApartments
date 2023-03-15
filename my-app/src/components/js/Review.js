import '../css/Review.css';
import {  BsDot } from "react-icons/bs";
import TopQualities from '../../components/js/TopQualities.js';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Review({review}) {
    const ratingAwesome = require('../../images/rating/ratingAwesome.png');
    const ratingAverage = require('../../images/rating/ratingAverage.png');
    const ratingPoor = require('../../images/rating/ratingPoor.png');
    const bedDoubleIcon = require('../../images/bed-double-outline.png');

    const name = review.username;
    let rating = review.rating;
    const opinion = review.reviewText;
    const roomType = review.numBedBath;
    const apartmentType = review.apartmentType;

    const listQualities = review.qualities;

    let ratingPhoto;
    let bgColor;

    if(rating <= 5.0 && rating >= 4.0){
        ratingPhoto = ratingAwesome;
        bgColor = "#93E187";
    }
    else if(rating >= 3.0 && rating < 4.0){
        ratingPhoto = ratingAverage;
        bgColor = "#FFD967"
    }
    else{
        ratingPhoto = ratingPoor;
        bgColor = "#FFA7AD"
    }

    rating = (Math.round(rating * 10) / 10).toFixed(1);
    return (
        <div className="reviewBigContainer" style={{borderRadius: "20px"}}>
            <div className="ratingBigContainer">
                <h3 style={{margin:0}}>Rating</h3>
                <div className="ratingContainer" style={{ backgroundColor: bgColor}}>
                    <h3><b>{rating}</b></h3>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <div className='reviewNameContainer'>
                    <h2 style={{marginRight: "20px"}}>{name}</h2>
                    <div style={{marginLeft: "40px"}}>
                        <img className="image" src={ratingPhoto} alt={"NoImage"}/>
                    </div>
                </div>
                <div style={{display:"flex", alignItems: "center", marginTop: "10px", marginBottom: "10px"}}>
                    <img style={{marginRight: "10px"}} src={bedDoubleIcon} alt={"NoImage"}/>
                    <p style={{margin: "0"}}><b>{roomType}</b></p>
                    <BsDot fontSize="20px"/>
                    <p style={{margin: "0"}}><b>{apartmentType}</b></p>
                </div>
                <p>{opinion}</p>
                <TopQualities qualities={listQualities}/>
            </div>
            
        </div>
    );
  }
  
  export default Review;
  