import "../assets/css/Category.css";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-37002324-2');

function Category(props){ 
    let Data = (props.data)
        return(
            <section className='categoryTable'>
                {Data.map((obj, index) => {
                    return(  
                        <div className='cards' key={index}>   
                            <div className='PostCard' id={obj.class}>

                                    <ReactGA.OutboundLink
                                        eventLabel={obj.adurl}
                                        to={obj.adurl}
                                        target="_blank"
                                    >
                                        <img src={obj.logo} id='logo' className={obj.imgclass} alt='logo'/>
                                    </ReactGA.OutboundLink>
                                    
                                <h2 className='title' >{obj.title}</h2>
                                <section id="myDropdown" className="dropdown-content">
                                    <p>{obj.address}</p>                                    
                                    <p>{obj.phone}</p>
                                    <p id='email'>{obj.email}</p>

                                    <ReactGA.OutboundLink
                                        eventLabel={obj.title}
                                        to={obj.url}
                                        target="_blank"
                                    >
                                        Visit Our Website
                                    </ReactGA.OutboundLink>

                                    <p className='description'>{obj.content}</p>
                                </section>
                            </div>
                        </div>   
                    )
                })}
                   
            </section>
        )
}
export default Category;