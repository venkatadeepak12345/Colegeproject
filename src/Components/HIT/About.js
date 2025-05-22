import React from 'react'
import bann1img from "./assests/CITb-1366-x-600.jpg"
import bann2img from "./assests/Japanese.jpg"
import bann3img from "./assests/SDG-Goals-1366-x-600.jpg"
import Branches from '../Branches'
import Table from './Table'
import Artifical from './Artifical'
import Mec from './Mec'
import Cse from './Cse'
import Elec from './Elec'
import Civil from './Civil'
import Bio from './Bio'

const About = () => {
  return (
    <div className='container-fluid'>
      
          <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-bs-target="#carouselId"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="First slide"
              ></li>
              <li
                data-bs-target="#carouselId"
                  data-bs-slide-to="1"
              
                aria-label="Second slide"
              ></li>
              <li
                data-bs-target="#carouselId"
                  data-bs-slide-to="2"
                
                aria-label="Third slide"
              ></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img
                  src={bann1img}
                  class="w-100 d-block"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  src={bann2img}
                  class="w-100 d-block"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  src={bann3img}
                  class="w-100 d-block"
                  alt="Third slide"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselId"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <Table/>
          <Branches/>
          <Artifical/>
          <Mec/>
          <Cse/>
          <Elec/>
          <Bio/>
          <Civil/>
          
          
        </div>
      
    
  )
}

export default About