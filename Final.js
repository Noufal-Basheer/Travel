 
import React from 'react';
import "../styles/Final.css"
import {Link} from 'react-router-dom';

const Final = () => {
  return (
    <div>
      <form>
      <div class="container">
        <h1>Let's Go</h1>
        <p>Know more about your place and have a wonderful trip</p>
        <hr></hr>

        <label for="type"><b>Destination Name</b></label>
        
         <output type="text" placeholder="International/Local" name="type" required>Mount Everest , Nepal</output> 


        <label for="area"><b>Detailed Info</b></label>
        <output type="text" placeholder="Mountain/Beach/Island/Forest" name="area" required>Sub-range of Himalayas,Snow-covered</output>

        <label for="mode"><b>Travel method</b></label>
        <output type="text" placeholder="Flight/Train/Bus/Trucking" name="mode" required>Flight</output>

        <label for="expenditure"><b>Expenditure</b></label>
        <output type="text" placeholder="Expected expenses" name="expenditure" required>80,000</output>



        <label for="company"><b>Distance</b></label>
        <output type="text" placeholder="Enter interested travel company" name="company" required>2171 kM</output>

        <label for="season"><b>Recommendations</b></label>
        <output type="text" placeholder="Summer/Winter/Autumn/Rainy" name="season" required>Kathmandu,Pokhara Lakes,Chitwan National Park</output>

        

        <div class="clearfix">
          
          <button type="submit" class="signupbtn">Happy journey </button>
          <button type="button"  class="cancel-btn"><Link to = '/sign-in'> Log out </Link></button>

        </div>
      </div>
      </form>
    </div>
  );
}

export default Final;
