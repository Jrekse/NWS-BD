import React, {Component} from 'react';
import BlackH from "../assets/images/black_hills-300X600.jpg"
import '../assets/css/CatSelect.css';

class Catselect extends Component {

    
  render(){

      return (
        <div className="CSBody">

            <section className='CSMain'>

                <section className='categoryTable'>
                    <table id="simple-board">
                        <tbody>
                            <tr id="row0">
                                <td id="cell0-0"><a href='https://css-tricks.com/creating-the-perfect-commit-in-git/'>Auctioneers</a></td>
                            </tr>
                            <tr id="row1">
                                <td id="cell1-0" >Apparel / Accessories</td>
                             
                            </tr>
                            <tr id="row2">
                                <td id="cell2-0" >Boats</td>
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
