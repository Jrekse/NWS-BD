import React, {Component} from 'react';

// Pages
import CatSelect from './Pages/CategorySelect';
import Category from './Pages/Category';
import PageSpon from './Pages/Pagesponsor';

// Sponsors
import noCat from './assets/js/sponsors/noCat.js';
import rvSpon from './assets/js/sponsors/rvSpon.js';
import boatspon from './assets/js/sponsors/boatSpon.js';
import gunspon from './assets/js/sponsors/gunSpon.js';
import fishequipspon from './assets/js/sponsors/fishEquipSpon.js';
import powerEquipSpon from './assets/js/sponsors/powerSpon';
import tourspon from './assets/js/sponsors/tourspon';
import charter from './assets/js/sponsors/charterspon';

// Post Data
import auction from './assets/js/Auctioneers.js';
import apparel from './assets/js/ApparelAccessories.js';
import automotive from './assets/js/Automotive.js';
import construction from './assets/js/construction.js';
import Charters from './assets/js/ChartersGuides';
import education from './assets/js/education.js';
import FishingResorts from './assets/js/fishResort.js';
import Food from './assets/js/food.js';
import Furniture from './assets/js/furniture.js';
import gear from './assets/js/gear.js';
import govAgency from './assets/js/govAgency.js';
import Holsters from './assets/js/Holsters.js';
import hunterEd from './assets/js/huntersEd';
import insurance from './assets/js/insurance.js';
import Knives from './assets/js/knives.js';
import lodging from './assets/js/lodges.js';
import marina from './assets/js/marina.js';
import meat from './assets/js/meat.js';
import motorcycles from './assets/js/motorcycles.js';
import powerEquip from './assets/js/powerEquip.js';
import resturant from './assets/js/resturaunts.js';
import realty from './assets/js/realty.js';
import hunting from './assets/js/hunting.js'
import rvs from './assets/js/rv.js';
import safes from './assets/js/safes.js';
import sportFish from './assets/js/fishReward';
import sportingGoods from './assets/js/sportGoods.js';
import huntingGuide from './assets/js/huntingGuide'
import tourism from './assets/js/tourism.js';
import trucks from './assets/js/truckParts.js';
import air from './assets/js/airFreight.js';
import nonProfit from './assets/js/nprofit.js';
import FishEquip from './assets/js/fishEquip.js';
import FirearmCleaning from './assets/js/firearmCleaning.js';
import firearmAmmo from './assets/js/firearmAcces.js';
import boat from './assets/js/Boats.js';

//CSS
import './App.css';

//GA
import ReactGA from 'react-ga';
ReactGA.initialize('UA-37002324-2');


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
    } else if (this.state.currentPage === "Air") {
      ReactGA.pageview('/BD/air');
      return <Category data={air}/>;
    } else if (this.state.currentPage === "Apparel") {
      ReactGA.pageview('/BD/apparel');
      return <Category data={apparel}/>;
    } else if (this.state.currentPage === "Automotive") {
      ReactGA.pageview('/BD/automotive');
      return <Category data={automotive}/>;
    } else if (this.state.currentPage === "Boats") {
      ReactGA.pageview('/BD/boats');
      return <><PageSpon data={boatspon}/><Category data={boat}/></>;
    } else if (this.state.currentPage === "FishingResorts") {
      ReactGA.pageview('/BD/fishResorts');
      return <Category data={FishingResorts}/>;
    } else if (this.state.currentPage === "Food") {
      ReactGA.pageview('/BD/food');
      return <Category data={Food}/>;
    } else if (this.state.currentPage === "Furniture") {
      ReactGA.pageview('/BD/furniture');
      return <Category data={Furniture}/>;
    } else if (this.state.currentPage === "Knives") {
      ReactGA.pageview('/BD/knives');
      return <Category data={Knives}/>;
    } else if (this.state.currentPage === "Lodging") {
      ReactGA.pageview('/BD/lodges');
      return <Category data={lodging}/>;
    } else if (this.state.currentPage === "Power Equipment") {
      ReactGA.pageview('/BD/powerEquipment');
      return <><PageSpon data={powerEquipSpon}/><Category data={powerEquip}/></>;
    } else if (this.state.currentPage === "Hunting Education") {
      ReactGA.pageview('/BD/huntingEducation');
      return <Category data={hunterEd}/>;
    } else if (this.state.currentPage === "Sport Fishing") {
      ReactGA.pageview('/BD/sportFishing');
      return <Category data={sportFish}/>;
    } else if (this.state.currentPage === "Construction") {
      ReactGA.pageview('/BD/Construction');
      return <Category data={construction}/>;
    } else if (this.state.currentPage === "Charters") {
      ReactGA.pageview('/BD/charters');
      return <><PageSpon data={charter}/><Category data={Charters}/></>;
    } else if (this.state.currentPage === "Education") {
      ReactGA.pageview('/BD/education');
      return <Category data={education}/>;
    } else if (this.state.currentPage === "Gear") {
      ReactGA.pageview('/BD/gear');
      return <Category data={gear}/>;
    } else if (this.state.currentPage === "Government Agencies") {
      ReactGA.pageview('/BD/gov');
      return <Category data={govAgency}/>;
    } else if (this.state.currentPage === "Hunting Guides") {
      ReactGA.pageview('/BD/huntGuides');
      return <Category data={huntingGuide}/>;
    } else if (this.state.currentPage === 'Hunting') {
      ReactGA.pageview('/BD/hunting');
      return <><PageSpon data={gunspon}/><Category data={hunting}/></>
    }else if (this.state.currentPage === "Sporting Goods") {
      ReactGA.pageview('/BD/sportingGoods');
      return <Category data={sportingGoods}/>;
    } else if (this.state.currentPage === "Auction") {
      ReactGA.pageview('/BD/auction');
      return <Category data={auction}/>;
    } else if (this.state.currentPage === "Marina") {
      ReactGA.pageview('/BD/marina');
      return <><PageSpon data={boatspon}/><Category data={marina}/></>;
    } else if (this.state.currentPage === "Meat Products") {
      ReactGA.pageview('/BD/meat');
      return <Category data={meat}/>;
    } else if (this.state.currentPage === "Resturaunts") {
      ReactGA.pageview('/BD/restaurants');
      return <Category data={resturant}/>;
    } else if (this.state.currentPage === "Realty") {
      ReactGA.pageview('/BD/realty');
      return <Category data={realty}/>;
    } else if (this.state.currentPage === "Tourism") {
      ReactGA.pageview('/BD/tourism');
      return <><PageSpon data={tourspon}/><Category data={tourism}/></>;
    } else if (this.state.currentPage === "FirearmsAmmo") {
      ReactGA.pageview('/BD/firearmsAmmo');
      return <><PageSpon data={gunspon}/><Category data={firearmAmmo}/></>;
    } else if (this.state.currentPage === "Firearm Cleaning") {
      ReactGA.pageview('/BD/firearmCleaning');
      return <Category data={FirearmCleaning}/>;
    } else if (this.state.currentPage === "Fishing Equipment") {
      ReactGA.pageview('/BD/fishingEquipment');
      return <><PageSpon data={fishequipspon}/><Category data={FishEquip}/></>;
    } else if (this.state.currentPage === "Holsters") {
      ReactGA.pageview('/BD/holsters');
      return <Category data={Holsters}/>;
    } else if (this.state.currentPage === "Insurance") {
      ReactGA.pageview('/BD/insurance');
      return <Category data={insurance}/>;
    } else if (this.state.currentPage === "Motorcycles") {
      ReactGA.pageview('/BD/motorcycles');
      return <Category data={motorcycles}/>;
    } else if (this.state.currentPage === "NonProfit") {
      ReactGA.pageview('/BD/nonProfit');
      return <Category data={nonProfit}/>;
    } else if (this.state.currentPage === "RV's") {
      ReactGA.pageview('/BD/RV');
      return <><PageSpon data={rvSpon}/><Category data={rvs}/></>;
    } else if (this.state.currentPage === "Safes") {
      ReactGA.pageview('/BD/safes');
      return <Category data={safes}/>;
    } else if (this.state.currentPage === "Trucks") {
      ReactGA.pageview('/BD/trucks');
      return <Category data={trucks}/>;
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