import './components/css/HomePage.css';
import {useState} from "react";
import {colors} from './colors.js'
import ApartmentCard from './components/js/ApartmentCard';
import Filter from './components/js/Filter';

function HomePage() {

   
    return (
      <div className="bigContainer home-container">
        <div className="filters-container">
          <Filter name="1 bedroom"></Filter>
          <Filter name="Close to groceries"></Filter>
          <Filter name="Quiet neighborhood"></Filter>
          <Filter name="Fast Internet"></Filter>
          <Filter name="Affordable"></Filter>
          <Filter name="Safe"></Filter>
        </div>
        <div className="apartments-container">
            <ApartmentCard aptName="The Green at West Village"></ApartmentCard>
            <ApartmentCard aptName="Sol at West Village"></ApartmentCard>
            <ApartmentCard aptName="The U Apartments"></ApartmentCard>
            <ApartmentCard aptName="Identity Davis"></ApartmentCard>
            <ApartmentCard aptName="Ryder on Olive"></ApartmentCard>

            
        </div>
            
       
       
      </div>
    );
  }
  
  export default HomePage;
  