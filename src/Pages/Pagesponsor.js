import "../assets/css/Category.css";

function Sponsor(props){ 
    let Data = (props.data)
    return(
        <section className='spons'>
            {Data.map((obj, index) => {
                return(  
                    <div className='sponsor' key={index}>   
                        Sponsored By:<br/>
                        <a href={obj.adurl} target='_blank' rel='noreferrer'><img src={obj.src} id='logo' className={obj.sponclass} alt='logo'/></a>
                    </div>   
                )
            })}
        </section>
    )
}
export default Sponsor;