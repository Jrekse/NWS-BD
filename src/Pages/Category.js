import "../assets/css/Category.css";



function Category(props){ 
    let Data = (props.data)
        return(
            <section className='categoryTable'>
                {Data.map((obj, index) => {
                    return(  
                        <div className='cards' key={index}>   
                            <div className='PostCard'>
                                <img src={obj.logo} alt='logo'/>
                                <h2 className='title' >{obj.title}</h2>
                                <section id="myDropdown" className="dropdown-content">
                                    <p>{obj.address}</p>                                    
                                    <p>{obj.phone}</p>
                                    <p id='email'>{obj.email}</p>
                                    <p><a href={obj.url}>Visit Our Website</a></p>
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