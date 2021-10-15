import React, {Component} from 'react';
// import CatData from '../assets/js/Auctioneers.js';
// import CatData from '../assets/js/ApparelAccessories.js';
// import CatData from '../assets/js/construction.js';
// import CatData from '../assets/js/charters-guides.js';
// import CatData from '../assets/js/education.js';
// import CatData from '../assets/js/fishing-resort.js';
// import CatData from '../assets/js/food.js';
// import CatData from '../assets/js/furniture.js';
// import CatData from '../assets/js/gear.js';
// import CatData from '../assets/js/gov-agency.js';
// import CatData from '../assets/js/holsters.js';
// import CatData from '../assets/js/hunter-education.js';
// import CatData from '../assets/js/hunting.js';
// import CatData from '../assets/js/insurance.js';
// import CatData from '../assets/js/knives.js';
// import CatData from '../assets/js/lodging.js';
// import CatData from '../assets/js/marina.js';
// import CatData from '../assets/js/meat.js';
// import CatData from '../assets/js/motorcycles.js';
// import CatData from '../assets/js/power-equip.js';
// import CatData from '../assets/js/resturaunts.js';
// import CatData from '../assets/js/realty.js';
// import CatData from '../assets/js/rvs.js';
// import CatData from '../assets/js/safes.js';
// import CatData from '../assets/js/sport-fish-program.js';
// import CatData from '../assets/js/sporting-goods.js';
// import CatData from '../assets/js/tourism.js';
// import CatData from '../assets/js/truck-parts.js';
// import CatData from '../assets/js/airfreight.js';
// import CatData from '../assets/js/non-profit.js';
// import CatData from '../assets/js/fishing-equip.js';
// import CatData from '../assets/js/firearm-cleaning.js';
// import CatData from '../assets/js/Firearms-accessories-ammo.js';
import CatData from '../assets/js/Boats:repair:outboards.js';
import "../assets/css/Category.css";



class Card extends Component{ 
    render(){
        return(
            <section className='categoryTable'>
                {CatData.map((obj, index) => {
                    return(  
                        <div className='cards' key={index}>   
                            <div className='PostCard'>
                                <img src={obj.logo} alt='logo'/>
                                <h2 className='title' >{obj.title}</h2>
                                <section id="myDropdown" className="dropdown-content">
                                    <p>{obj.address}</p>                                    
                                    <p>{obj.phone}</p>
                                    <p id='email'>{obj.email}</p>
                                    <p><a href={obj.url}>Visit Our Website</a></p>
                                    <p className='description'>{obj.content}</p>
                                </section>
                            </div>
                        </div>   
                    )
                })}
                   
            </section>
        )
    }
}
export default Card;