import item__img from '../img/circle_button.png'
const item = (props) => {
    console.log(props.func)
    return (
        <>
            <div className='item__title'>MSc Data Analytics and Information Systems Management</div>
            <div className='circle__button' onClick={props.func}>
                <img src={item__img}></img>
            </div>
            <div className='item__subtitle'>Duration:<br /><span className="item__text"> Minimum: 18 month<br />Maximum: 36 months</span></div>
            <div className='item__subtitle'>Start Dates: <br /><span className="item__text" >Every 12 weeks</span></div>
            <div className='item__price'>£8,500</div>
            <div className='item__button-container'>
                <button className='main__button'>MORE INFO</button>
            </div>
        </>
    )
}
export default item