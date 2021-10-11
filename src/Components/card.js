import React, {Component} from 'react';
// import CatData from '../assets/js/Auctioneers.js';
// import CatData from '../assets/js/ApparelAccessories.js';
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