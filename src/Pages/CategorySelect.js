import React, {Component} from 'react';
import VSSM from '../assets/images/vssbannerhead.jpeg';
import VBann from '../assets/images/verles.jpg';
import BlackH from "../assets/images/black_hills-300X600.jpg"
import '../assets/css/CatSelect.css';

class App extends Component {
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
            <section className='categoryTable'>

            </section>
            <aside className='sidebarAd'>
                <a href="http://www.black-hills.com/">
                    <img src={BlackH} alt="blackhills"/>
                </a>
            </aside>
        </div>
      )
  }
}

export default App;
