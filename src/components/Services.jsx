import React from 'react';
import { Tilt } from 'react-tilt'; 
import organic from '../assets/services/organic.jpg';
import landscaping from '../assets/services/landscaping.jpg';
import gardenMaintenance from '../assets/services/garden-maintenance.jpg';
import irrigationSystems from '../assets/services/irrigation-system.jpg';
import treeCare from '../assets/services/tree-care.jpg';
import gardenDesign from '../assets/services/garden-design.jpg';

function ServicesSection() {
  return (
    <section className="py-12 border-4 border-white rounded-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600" id='services'>
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">Our Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            <Tilt className="w-full h-full">
              <img src={organic} alt="Organic Gardening" className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-gray-800 bg-opacity-75 rounded-lg hover:bg-opacity-0">
                <h3 className="text-xl font-semibold text-white">Organic Gardening</h3>
              </div>
            </Tilt>
          </div>
         
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            <Tilt className="w-full h-full">
              <img src={landscaping} alt="Landscaping" className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-gray-800 bg-opacity-75 rounded-lg hover:bg-opacity-0">
                <h3 className="text-xl font-semibold text-white">Landscaping</h3>
              </div>
            </Tilt>
          </div>
         
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            <Tilt className="w-full h-full">
              <img src={gardenMaintenance} alt="Garden Maintenance" className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-gray-800 bg-opacity-75 rounded-lg hover:bg-opacity-0">
                <h3 className="text-xl font-semibold text-white">Garden Maintenance</h3>
              </div>
            </Tilt>
          </div>
        
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            <Tilt className="w-full h-full">
              <img src={irrigationSystems} alt="Irrigation Systems" className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-gray-800 bg-opacity-75 rounded-lg hover:bg-opacity-0">
                <h3 className="text-xl font-semibold text-white">Irrigation Systems</h3>
              </div>
            </Tilt>
          </div>
         
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            <Tilt className="w-full h-full">
              <img src={treeCare} alt="Tree Care" className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-gray-800 bg-opacity-75 rounded-lg hover:bg-opacity-0">
                <h3 className="text-xl font-semibold text-white">Tree Care</h3>
              </div>
            </Tilt>
          </div>
         
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            <Tilt className="w-full h-full">
              <img src={gardenDesign} alt="Garden Design" className="object-cover w-full h-full" />
              <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-gray-800 bg-opacity-75 rounded-lg hover:bg-opacity-0">
                <h3 className="text-xl font-semibold text-white">Garden Design</h3>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
