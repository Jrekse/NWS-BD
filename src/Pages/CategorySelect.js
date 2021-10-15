import React, {Component} from 'react';
// import BlackH from "../assets/images/black_hills-300X600.jpg"
import '../assets/css/CatSelect.css';

class Catselect extends Component {

    
  render(){

      return (
        <div className="CSBody">

            <section className='CSMain'>

                <section className='categoryselectTable'>
                    <table>
                        <tbody>
                            <tr>
                                <td>Air Freight</td>
                                <td>Apparel</td>
                                <td>Boats</td>
                                <td>Fishing Resorts</td>
                                <td>Food</td>
                                <td>Furniture</td>
                                <td>Knives</td>
                                <td>Lodging</td>
                                <td>Power Equipment</td>
                                <td>Hunting Education</td>
                                <td>Sport Fishing</td>
                            </tr>
                            <tr>
                                <td>Construction</td>
                                <td>Charters</td>
                                <td>Education</td>
                                <td>Gear</td>
                                <td>Government Agencies</td>
                                <td>Hunting Guides</td>
                                <td>Marina</td>
                                <td>Meat Products</td>
                                <td>Resturaunts</td>
                                <td>Realty</td>
                                <td>Tourism</td>
                            </tr>
                            <tr>
                                <td>Firearms / Ammo</td>
                                <td>Firearm Cleaning</td>
                                <td>Fishing Equipment</td>
                                <td>Holsters</td>
                                <td>Hunting</td>
                                <td>Insurance</td>
                                <td>Motorcycles</td>
                                <td>Non-Profits</td>
                                <td>RV's</td>
                                <td>Safes</td>
                                <td>Trucks</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* <aside className='sidebarAd'>
                    <a href="http://www.black-hills.com/">
                        <img className='BHills' src={BlackH} alt="blackhills"/>
                    </a>
                </aside> */}
                
            </section>
        </div>
      )
  }
}

export default Catselect;
