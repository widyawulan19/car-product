import React, { useState } from 'react'
import '../style/ProductStyle.css'
import { FaArrowRight } from "react-icons/fa";
import { DATA } from '../data/data';
import { MdArrowBackIosNew , MdArrowForwardIos} from "react-icons/md";

function ProductPrev() {
    const [selectedMenu, setSelectedMenu] = useState('performance') //pilihan advantage
    const [carIndex, setCarIndex] = useState(0); // untuk navigasi pilihan 
    const car = DATA[carIndex];

    //navigasi pilihan
    const handleNextCar = () => {
        setCarIndex((prevIndex) => {
            if (prevIndex === DATA.length - 1) {
                return 0; // Kembali ke awal jika mencapai batas array
            } else {
                return prevIndex + 1;
            }
        });
    };
    
    const handlePrevCar = () => {
        setCarIndex((prevIndex) => {
            if (prevIndex === 0) {
                return DATA.length - 1; // Kembali ke akhir jika mencapai awal array
            } else {
                return prevIndex - 1;
            }
        });
    };

    const renderDescription = () => {
        if (!car) return null;

        switch (selectedMenu) {
          case 'performance':
            return car.performance.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.desc}<strong> Read More.</strong></p>
              </div>
            ));
          case 'safety':
            return car.safety.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.desc}<strong> Read More.</strong></p>
              </div>
            ));
          case 'design':
            return car.design.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.desc}<strong> Read More.</strong></p>
              </div>
            ));
          case 'range':
            return car.range.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.desc}<strong> Read More.</strong></p>
              </div>
            ));
          case 'feature':
            return car.feature.map((item, index) => (
              <div key={index}>
                <h2>{item.title}</h2>
                <p>{item.desc}<strong> Read More.</strong></p>
              </div>
            ));
          default:
            return null;
        }
      };

      const specification = () =>{
        if (!car || !car.spesification || car.spesification.length === 0) return null; // Add this check

        return (
                  <ul className='specification1'>
                    <li><strong>Motor:</strong> {car.spesification[0].motor}</li>
                    <li><strong>Battery:</strong> {car.spesification[0].batery}</li>
                    <li><strong>Range:</strong> {car.spesification[0].range}</li>
                    <li><strong>Acceleration:</strong> {car.spesification[0].acceleration}</li>
                    <li><strong>Top Speed:</strong> {car.spesification[0].speed}</li>
                    <li><strong>Features:</strong> {car.spesification[0].features}</li>
                  </ul>
                );
      }
    
      return (
        <div className="product">
            <div className="product-image">
                <div className="text">
                    <h3>{car.name}</h3>
                    <h1>{car.model}</h1>
                    <h4>PERFORMANCE</h4>
                </div>
                <div className="image">
                    <img src={car.img} alt={car.name}/>
                    <div className="arrow">
                        <MdArrowBackIosNew onClick={handlePrevCar} size={30}/>
                        <MdArrowForwardIos onClick={handleNextCar} size={30}/>
                    </div>
                </div>
                <h3>{car.year}</h3>
            </div>

            {/* product detail */}
            <div className="product-detail">
                <div className="performace">
                    <ul className='advantages'>
                        <li className={selectedMenu === 'performance' ? 'active' : ''} onClick={()=> setSelectedMenu('performance')}>PERFORMANCE</li>
                        <li className={selectedMenu === 'safety' ? 'active' : ''} onClick={()=> setSelectedMenu('safety')}>SAFETY</li>
                        <li className={selectedMenu === 'design' ? 'active' : ''} onClick={()=> setSelectedMenu('design')}>DESIGN</li>
                        <li className={selectedMenu === 'range' ? 'active' : ''} onClick={()=> setSelectedMenu('range')}>RANGE</li>
                        <li className={selectedMenu === 'feature' ? 'active' : ''} onClick={()=> setSelectedMenu('feature')}>FEATURE</li>
                    </ul>
                </div>
                <div className="desc-performance">
                    {renderDescription()}
                    <button className='discover'>DISCOVER</button>
                    <button>FIND A DEALER <FaArrowRight size={9}/></button>
                </div>
                <div className="specification">
                    <h3>SPECIFICATION</h3>
                    {specification()}
                </div>
            </div>
        </div>
      );
    }

export default ProductPrev
