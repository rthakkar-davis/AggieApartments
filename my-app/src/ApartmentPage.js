import './components/css/ApartmentPage.css';
import TopQualities from './components/js/TopQualities.js'
import Transportation from './components/js/Transportation.js';
import Reviews from './components/js/Reviews.js';
import {useState} from "react";
import { BsHeartFill, BsHeart, BsDot } from "react-icons/bs";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {colors} from './colors.js'
import QnA from './components/js/QnA';
import Map from './components/js/Map';
import Carousel from 'react-bootstrap/Carousel';
import apartmentList from './config/Apartments.json';
import QnAList from './config/QnA.json';
import reviewsList from './config/Reviews.json';
import { useParams } from "react-router-dom";


function ApartmentPage() {
    const [pressedHeart, setPressedHeart] = useState(false);
    const unitransMap = require('./images/GreenToSilo.png');
    const apt1 = require('./images/theGreen/theGreen1.jpg');
    const apt2 = require('./images/theGreen/theGreen2.jpg');
    const apt3 = require('./images/theGreen/theGreen3.jpg');
    const apt4 = require('./images/theGreen/theGreen4.png');

    const { aptName } = useParams();

    const aptObj = apartmentList[aptName];

    const listQualities = aptObj.qualities;
    const title = aptObj.title;
    const aptAddress = aptObj.address;
    const aptDescription = aptObj.description;
    const aptFloorplans = aptObj.floorPlans;
    const plusCode = aptObj.plusCode;
    const avgRating = aptObj.avgRating;

    const reviews = reviewsList;
    const qna = QnAList;


    const handleHeartClick = () => {
        setPressedHeart(!pressedHeart);
      };
    

    return (
      <div className="bigContainer">
        <div className="nameContainer">
            <div className="nameAndAddress">
                <h1 style={{color: colors["blue"], marginTop: "30px"}}>{title}</h1>
                <div style={{marginBottom: "30px"}}>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <p style={{color: colors["blue"], margin: "0"}}>⭐ {avgRating}</p>
                    <BsDot fontSize="20px"/>
                    <p style={{color: colors["blue"], margin: "0"}}> 300 reviews </p>
                    <BsDot fontSize="20px"/>
                    <p style={{color: colors["blue"], margin: "0"}}> {aptAddress}, {plusCode}</p>
                  </div>
                </div>                
            </div>
            <div className="priorityContainer">
              <div onClick={handleHeartClick}>
                {pressedHeart ?  <BsHeartFill color="red" fontSize="24px"/> : <BsHeart fontSize="24px" /> }
              </div>
              <p style={{marginRight: "12px", marginLeft: "5px"}}> Favorite </p>
              <AiOutlineQuestionCircle fontSize="24px"/>
              <p>Compare</p>
            </div>
        </div>
        <div style={{display: "flex", justifyContent:"center", margin: "0"}}>
          <Carousel style={{marginBottom: "30px", width: "70%", height: "100%"}}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={apt1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Spacious Floorplans</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={apt2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Great location</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={apt3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Study Lounge w/FREE WiFi, Printing, & Coffee Station</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={apt4}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>24-Hour Amenities including pool & spa, gym</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <h2>{aptFloorplans}</h2>
        <TopQualities qualities={listQualities}/>
        <div style={{borderBottom: "1px solid black"}}>
          <p> {aptDescription}
          </p>
        </div>
        <Transportation aptName={aptName} />
        <QnA qna={qna}/>
        <Reviews reviews={reviews}/>
      </div>
    );
  }
  
  export default ApartmentPage;
  