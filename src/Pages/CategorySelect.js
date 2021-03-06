import '../assets/css/CatSelect.css';

const header = 'https://nwsportsmanmag.com/wp-content/uploads/2021/11/cropped-NWSPORTSMANMAG-Top-Header-6-1-scaled-1.jpg';
function Catselect(props){
      return (
        <div className="CSBody">
            <section className='CSMain'>

                <div className='categoryselectTable'>
                    
                    <a href='https://nwsportsmanmag.com/'><img className='headerlogo' src={header} alt='header'></img></a>
                    <h2><strong>Northwest Sportsman's Business Directory</strong></h2>
                    <h4>Your online resource for products and services for the  fishing, hunting and outdoor sports communities.</h4>
                    <hr/>
                    <br/>
                    <div className='untable'>
                        <div className='Box'>Select A Category</div>
                        <table className="selection">
                            <tbody className='tbody'>
                                <tr>
                                    <td className="home"><a href='https://nwsportsmanmag.com/'>Home</a></td> 
                                    <td><a href='#Air' onClick={() => props.handlePageChange("Air")}>Air Freight</a></td> 
                                    <td><a href='#Apparel' onClick={() => props.handlePageChange("Apparel")}>Apparel</a></td>
                                    <td><a href='#Auction' onClick={() => props.handlePageChange("Auction")}>Auctioneers</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#Automotive' onClick={() => props.handlePageChange("Automotive")}>Automotive</a></td>
                                    <td><a href='#Boats' className='centered' onClick={() => props.handlePageChange("Boats")}>Boats</a></td>
                                    <td><a href='#Construction' onClick={() => props.handlePageChange("Construction")}>Construction</a></td>
                                    <td><a href='#Charters' onClick={() => props.handlePageChange("Charters")}>Charters</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#Education' onClick={() => props.handlePageChange("Education")}>Education</a></td>
                                    <td><a href='#FishingResorts' onClick={() => props.handlePageChange("FishingResorts")}>Fishing Resorts</a></td>
                                    <td><a href='#Food' onClick={() => props.handlePageChange("Food")}>Food</a></td>
                                    <td><a href='#Furniture' onClick={() => props.handlePageChange("Furniture")}>Furniture</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#FirearmsAmmo' onClick={() => props.handlePageChange("FirearmsAmmo")}>Firearms</a></td>
                                    <td><a href='#Firearm Cleaning' onClick={() => props.handlePageChange("Firearm Cleaning")}>Firearm Cleaning</a></td>
                                    <td><a href='#Fishing Equipment' onClick={() => props.handlePageChange("Fishing Equipment")}>Marine, Fishing Equipment</a></td>
                                    <td><a href='#Gear' onClick={() => props.handlePageChange("Gear")}>Gear</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#Government Agencies' onClick={() => props.handlePageChange("Government Agencies")}>Government Agencies</a></td>
                                    <td><a href='#Holsters' onClick={() => props.handlePageChange("Holsters")}>Holsters</a></td>
                                    <td><a href='#Hunting' onClick={() => props.handlePageChange("Hunting")}>Hunting</a></td>
                                    <td><a href='#Hunting Guides' onClick={() => props.handlePageChange("Hunting Guides")}>Hunting Guides</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#HuntingEducation' onClick={() => props.handlePageChange("Hunting Education")}>Hunting Education</a></td>
                                    <td><a href='#Insurance' onClick={() => props.handlePageChange("Insurance")}>Insurance</a></td>
                                    <td><a href='#Knives' onClick={() => props.handlePageChange("Knives")}>Knives</a></td>
                                    <td><a href='#Lodging' onClick={() => props.handlePageChange("Lodging")}>Lodging</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#Marina' onClick={() => props.handlePageChange("Marina")}>Marina</a></td>
                                    <td><a href='#Meat Products' onClick={() => props.handlePageChange("Meat Products")}>Meat Products</a></td>
                                    <td><a href='#Motorcycles' onClick={() => props.handlePageChange("Motorcycles")}>Motorcycles</a></td>
                                    <td><a href='#NonProfits' onClick={() => props.handlePageChange("NonProfit")}>NonProfits</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#PowerEquip' onClick={() => props.handlePageChange("Power Equipment")}>Power Equipment</a></td>
                                    <td><a href='#Resturaunts' onClick={() => props.handlePageChange("Resturaunts")}>Restaurants</a></td>
                                    <td><a href='#Realty' onClick={() => props.handlePageChange("Realty")}>Realty</a></td>
                                    <td><a href='#RVs' onClick={() => props.handlePageChange("RV's")}>RV's</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#Safes' onClick={() => props.handlePageChange("Safes")}>Safes</a></td>
                                    <td><a href='#SportFishing' onClick={() => props.handlePageChange("Sport Fishing")}>Sport Fishing</a></td>
                                    <td><a href='#SportingGoods' onClick={() => props.handlePageChange("Sporting Goods")}>Sporting Goods</a></td>
                                    <td><a href='#Tourism' onClick={() => props.handlePageChange("Tourism")}>Tourism</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#Trucks' onClick={() => props.handlePageChange("Trucks")}>Trucks</a></td>
                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
      )
  }
export default Catselect;