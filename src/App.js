import React, {Component} from 'react';

// Pages
import CatSelect from './Pages/CategorySelect';
import Category from './Pages/Category';
import PageSpon from './Pages/Pagesponsor';

// Sponsors
import noCat from './assets/js/sponsors/noCat.js';

// Post Data
import ammo from './assets/js/ammo.js';
import boat from './assets/js/boat.js';
import constr from './assets/js/construction.js';
import charter from './assets/js/fishCharter.js';
import parts from './assets/js/firearm.js';
import food from './assets/js/food.js';
import gear from './assets/js/gear.js';
import care from './assets/js/gunCare.js';
import range from './assets/js/gunRange.js';
import holsters from './assets/js/holsters.js';
import hunting from './assets/js/hunting.js';
import knives from './assets/js/knives.js';
import lodges from './assets/js/lodges.js';
import meat from './assets/js/meat.js';
import optics from './assets/js/optics.js';
import rv from './assets/js/rv.js';
import reloading from './assets/js/reloading.js';
import suppressor from './assets/js/suppressors.js';
import tourism from './assets/js/tourism.js';
import sport from './assets/js/sportGoods.js';
import safes from './assets/js/safes.js';
import nsf from './assets/js/nsfTrust.js';


import './App.css';

class App extends Component {
  state = {
    currentPage: ""
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "") {
      return <PageSpon data={noCat}/>;
    } else if (this.state.currentPage === "Ammunition") {
      return <><Category data={ammo}/></>;
    } else if (this.state.currentPage === "Boat") {
      return <><Category data={boat}/></>;
    } else if (this.state.currentPage === "Construction") {
      return <><Category data={constr}/></>;
    } else if (this.state.currentPage === "Charters") {
      return <><Category data={charter}/></>;
    } else if (this.state.currentPage === "Parts") {
      return <><Category data={parts}/></>;
    } else if (this.state.currentPage === "Food") {
      return <><Category data={food}/></>;
    } else if (this.state.currentPage === "Gear") {
      return <><Category data={gear}/></>;
    } else if (this.state.currentPage === "Care") {
      return <><Category data={care}/></>;
    } else if (this.state.currentPage === "Range") {
      return <><Category data={range}/></>;
    } else if (this.state.currentPage === "Holsters") {
      return <><Category data={holsters}/></>;
    }  else if (this.state.currentPage === "Hunting") {
      return <><Category data={hunting}/></>;
    } else if (this.state.currentPage === "Knives") {
      return <><Category data={knives}/></>;
    } else if (this.state.currentPage === "Lodges") {
      return <><Category data={lodges}/></>;
    } else if (this.state.currentPage === "Meat") {
      return <><Category data={meat}/></>;
    } else if (this.state.currentPage === "Optics") {
      return <><Category data={optics}/></>;
    } else if (this.state.currentPage === "RV") {
      return <><Category data={rv}/></>;
    } else if (this.state.currentPage === "Reloading") {
      return <><Category data={reloading}/></>;
    } else if (this.state.currentPage === "Suppressors") {
      return <><Category data={suppressor}/></>;
    } else if (this.state.currentPage === "Tourism") {
      return <><Category data={tourism}/></>;
    } else if (this.state.currentPage === "SportGoods") {
      return <><Category data={sport}/></>;
    } else if (this.state.currentPage === "Safes") {
      return <><Category data={safes}/></>;
    } else if (this.state.currentPage === "Nsf") {
      return <><Category data={nsf}/></>;
    }
  };
  render(){
      return (
        <div className="App">
          <CatSelect currentPage={this.state.currentPage} handlePageChange={this.handlePageChange}/>
          <br/>
          <div className="page">
            {this.renderPage()}
          </div>
        </div>
      )
  }
}

export default App;
