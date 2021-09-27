import React, {Component} from 'react';
import CatData from '../assets/js/CategoryData';
// import Data2 from '../assets/js/CategoryData2';
// import Data3 from '../assets/js/CategoryData3';
import "../assets/css/Category.css";

class Card extends Component{
    render(){
        return(
            <section className='categoryTable'>
                {CatData.map((obj, index) => {
                    return(  
                        <div className='cards'>            
                            <h2>{obj.title}</h2>     
                            <br/>
                            <br/>
                            <div className='PostCard' id={index}>
                                <h2 className='title' >{obj.Posts[0].title}</h2>
                                <section className='Box'>
                                    <p className='description'>{obj.Posts[0].info}</p>
                                </section>
                            </div>
                            <div className='PostCard' id={index + 1}>
                                <h2 className='title' >{obj.Posts[1].title}</h2>
                                <section className='Box'>
                                    <p className='description'>{obj.Posts[1].info}</p>
                                </section>
                            </div>
                            <div className='PostCard' id={index + 2}>
                                <h2 className='title' >{obj.Posts[2].title}</h2>
                                <section className='Box'>
                                    <p className='description'>{obj.Posts[2].info}</p>
                                </section>
                            </div>
                            <br/>
                            <div className='PostCard' id={index + 3}>
                                <h2 className='title' >{obj.Posts[3].title}</h2>
                                <section className='Box'>
                                    <p className='description'>{obj.Posts[3].info}</p>
                                </section>
                            </div>
                            <div className='PostCard' id={index + 4}>
                                <h2 className='title' >{obj.Posts[4].title}</h2>
                                <section className='Box'>
                                    <p className='description'>{obj.Posts[4].info}</p>
                                </section>
                            </div>
                            <div className='PostCard' id={index + 5}>
                                <h2 className='title' >{obj.Posts[5].title}</h2>
                                <section className='Box'>
                                    <p className='description'>{obj.Posts[5].info}</p>
                                </section>
                            </div>
                        </div>   
                    )
                })}
                   
            </section>
        )
    }
}
export default Card;