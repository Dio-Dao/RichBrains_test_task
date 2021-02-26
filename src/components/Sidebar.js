const Sidebar = () => {
    const handleClick = (e) => {
        e.target.classList.toggle('nav_active')
    }
    return (
        <div className='sidebar'>
            <div className='sidebar__title'>{('Careers').toUpperCase()} </div>
            <ul className='sidebar__nav'>
                <li onClick={handleClick}> Business & Management
                     <ul className='sidebar__item'>
                        <li>test</li>
                    </ul >
                </li>
                <li onClick={handleClick}> Computing & IT
                    <ul className='sidebar__item'>
                        <li>test</li>
                    </ul >
                </li>

                <li onClick={handleClick}>Fashion & Media
                     <ul className='sidebar__item'>
                        <li>test</li>
                    </ul >
                </li>
                <li onClick={handleClick}>Finance & Accounting
                    <ul className='sidebar__item'>
                        <li>test</li>
                    </ul >
                </li>
                <li onClick={handleClick} >Law & Criminology
                <ul className='sidebar__item'>
                        <li>test</li>
                    </ul >
                </li>
                <li onClick={handleClick} >Marketing & Communications
                <ul className='sidebar__item'>
                        <li>test</li>
                    </ul >
                </li>
                <li className='nav_active' onClick={handleClick}>Psychology & Social Sciences(CMI)
                <ul className='sidebar__item'>
                        <li>Market Research Executive</li>
                        <li>Child Psychologist</li>
                        <li>Guidance Counsellor</li>
                        <li>Behaviour Analyst</li>
                        <li>Recreational Therapist </li>
                    </ul>
                </li>
            </ul>
            <div className='sidebar__button-container'>
                <button className='main__button'>{('Show all programmes').toUpperCase()}</button>
            </div>


        </div>
    )
}
export default Sidebar