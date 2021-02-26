const Header = () => {
    return (
        <div className='header'>
            <div className='header__title'>Find Your Course </div>
            <div className='header__button-container'>
                <button className='main__button'><span>{('Choose your career').toUpperCase()}</span></button>
            </div>
        </div>
    )
}
export default Header