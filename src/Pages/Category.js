import React, {Component} from 'react';
import VSSM from '../assets/images/vssbannerhead.jpeg';
import VBann from '../assets/images/verles.jpg';
import BlackH from "../assets/images/black_hills-300X600.jpg"
import Card from '../Components/card'
import "../assets/css/Category.css";

class Category extends Component{
    render(){
        return(
            <div className='CBody'>

                <header className="CHead">
                    <img className="vssmast" alt='VSS Masthead' src={VSSM}/>
                        <br/>
                    <a href="https://www.verles.com/">
                        <img className="VBanner" alt='VerlesBanner' src={VBann}/>
                    </a>
                </header>
                <section className='CSMain'>

                    <Card/>

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
export default Category;