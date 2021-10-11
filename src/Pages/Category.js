import React, {Component} from 'react';
import Card from '../Components/card'
import "../assets/css/Category.css";

class Category extends Component{
    render(){
        return(
            <div className='CBody'>
                <section className='CSMain'>

                    <Card/>

                </section>                
            </div>
        )
    }
}
export default Category;