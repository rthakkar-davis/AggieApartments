import React from 'react'
import { Link, useLoaderData } from "react-router-dom";
import apartmentList from '../../config/Apartments.json';

function ApartmentCard({aptName}) {
  const coverPhoto = apartmentList[aptName].coverPhoto;

  const address = apartmentList[aptName].address;
  const plusCode = apartmentList[aptName].plusCode;
  const floorPlans = apartmentList[aptName].floorPlans;
  const avgRating = apartmentList[aptName].avgRating;

  let bgColor;
  if(avgRating <= 5.0 && avgRating >= 4.0){
    bgColor = "#93E187";
  }
  else if(avgRating <= 4.0 && avgRating >= 3.0){
      bgColor = "#FFD967"
  }
  else{
      bgColor = "#FFA7AD"
  }

  return (
    <div className="apartment-card-container">
      <Link to={`/apartment/${aptName}`}>
        <div className="image-container">
          <img src={coverPhoto} alt="apartment image"></img>
        </div>
        <div className="apt-desc">
          <div className="basic-desc">
            <p style={{fontWeight: "bold"}}>{aptName}</p>
            <p>{address}, Davis CA</p>
            <p>{floorPlans}</p>
            <p><span style={{fontWeight: "bold"}}>$1,499 - 2,000</span> month</p>
          </div>
          <div className="rating-container">
            <div style={{backgroundColor: bgColor}} className="rating">
                {avgRating}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ApartmentCard