import React, {Component} from 'react';
import VSSM from '../assets/images/vssbannerhead.jpeg';
import VBann from '../assets/images/verles.jpg';
import BlackH from "../assets/images/black_hills-300X600.jpg"
import Data from '../assets/js/CategoryData';
import Data2 from '../assets/js/CategoryData2';
import Data3 from '../assets/js/CategoryData3';
import '../assets/css/CatSelect.css';

class Catselect extends Component {

    
  render(){

      return (
        <div className="CSBody">

            <header className="CSHead">
                <img className="vssmast" alt='VSS Masthead' src={VSSM}/>
                    <br/>
                <a href="https://www.verles.com/">
                    <img className="VBanner" alt='VerlesBanner' src={VBann}/>
                </a>
            </header>

            <section className='CSMain'>

                <section className='categoryTable'>
                    <table id="simple-board">
                        <tbody>
                            <tr id="row0">
                                {Data.map((post, index) => {
                                    return(
                                        <td id="cell0-0" className={index}>{post.title}</td>
                                    )
                                })}
                            </tr>
                            <tr id="row1">
                                {Data2.map((post, index) => {
                                    return(
                                        <td id="cell1-0" className={index + 4}>{post.title}</td>
                                    )
                                })}
                            </tr>
                            <tr id="row2">
                                {Data3.map((post, index) => {
                                    return(
                                        <td id="cell2-0" className={index + 8}>{post.title}</td>
                                    )
                                })}
                            </tr>
                        </tbody>                          
                    </table>
                </section>

                <aside className='sidebarAd'>
                    <a href="http://www.black-hills.com/">
                        <img className='BHills' src={BlackH} alt="blackhills"/>
                    </a>
                </aside>
                
            </section>
        </div>
      )
  }
}

export default Catselect;
