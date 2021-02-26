const item = (props) => {
    const { title, subtitle, status, price, logo, date, button } = props.data
    return (
        <>
            <div className='item__logo'>
                <img src={logo} />
            </div>
            <div className='item__subtitle'>{subtitle.toUpperCase()} </div>
            <div className='item__title'>{title}</div>
            <div className='item__status'>{status}</div>
            <div className='item__date'>{date}</div>
            <div className='item__price'>{price}</div>
            <div className='item__button-container'>
                <button className='main__button'>{button.toUpperCase()}</button>
            </div>
        </>
    )
}
export default item