import '../assets/css/CatSelect.css';

function Catselect(props){

      return (
        <div className="CSBody">

            <section className='CSMain'>

                <div className='categoryselectTable'>
                    <h2><strong>American Shooting Journal's Business Directory</strong></h2>
                    <h4>Your online resource for products and services for the  fishing, hunting and outdoor sports communities.</h4>
                    <hr/>
                    <br/>
                    <div className='untable'>
                        <div className='Box'>Select A Category</div>
                        <table className="selection">
                            <tbody className='tbody'>
                                <tr>
                                    <td className="home"><a href='https://nwsportsmanmag.com/'>Home</a></td> 
                                    <td><a href='#Ammunition' onClick={() => props.handlePageChange("Ammunition")}>Ammunition</a></td> 
                                    <td><a href='#Boat' onClick={() => props.handlePageChange("Boat")}>Boat Yard</a></td>
                                    <td><a href='#Construction' onClick={() => props.handlePageChange("Construction")}>Construction</a></td>
                                    <td><a href='#Charters' className='centered' onClick={() => props.handlePageChange("Charters")}>Fishing Charters</a></td>
                                    <td><a href='#Parts' onClick={() => props.handlePageChange("Parts")}>Firearm Parts</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#Food' onClick={() => props.handlePageChange("Food")}>Food/Beverages</a></td>
                                    <td><a href='#Gear' onClick={() => props.handlePageChange("Gear")}>Gear</a></td>
                                    <td><a href='#Care' onClick={() => props.handlePageChange("Care")}>Gun Care</a></td>
                                    <td><a href='#Range' onClick={() => props.handlePageChange("Range")}>Firearm Resources</a></td>
                                    <td><a href='#Holsters' onClick={() => props.handlePageChange("Holsters")}>Holsters/Concealed Carry</a></td>
                                    <td><a href='#Hunting' onClick={() => props.handlePageChange("Hunting")}>Hunting</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#Knives' onClick={() => props.handlePageChange("Knives")}>Knives</a></td>
                                    <td><a href='#Lodges' onClick={() => props.handlePageChange("Lodges")}>Lodges</a></td>
                                    <td><a href='#Meat' onClick={() => props.handlePageChange("Meat")}>Meat Processing</a></td>
                                    <td><a href='#Nsf' onClick={() => props.handlePageChange("Nsf")}>NSF</a></td>
                                    <td><a href='#Optics' onClick={() => props.handlePageChange("Optics")}>Optics</a></td>
                                    <td><a href='#RV' onClick={() => props.handlePageChange("RV")}>RV's</a></td>
                                </tr>
                                <tr>
                                    <td><a href='#Reloading' onClick={() => props.handlePageChange("Reloading")}>Reloading</a></td>
                                    <td><a href='#Safes' onClick={() => props.handlePageChange("Safes")}>Safes</a></td>
                                    <td><a href='#SportGoods' onClick={() => props.handlePageChange("SportGoods")}>Sporting Goods</a></td>
                                    <td><a href='#Suppressors' onClick={() => props.handlePageChange("Suppressors")}>Suppressors</a></td>
                                    <td><a href='#Tourism' onClick={() => props.handlePageChange("Tourism")}>Tourism</a></td>
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
