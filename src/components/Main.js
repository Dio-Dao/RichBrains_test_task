import Item from './Item';
import ItemActive from './ItemActive';
import itemFirst_logo from '../img/itemFirst_logo.png'
import itemThird_logo from '../img/itemThird_logo.png'
import itemFifth_logo from '../img/itemFifth_logo.png'
import itemSixth_logo from '../img/itemSixth_logo.png'
import { useState } from 'react';

const Main = () => {

    const items = [
        {
            subtitle: 'Business & Management',
            title: 'Master of Business Administration (CMI)',
            status: 'Postgraduate',
            date: 'Every 12 weeks',
            price: '£12,650',
            logo: itemFirst_logo,
            button: 'More info'
        },
        {
            subtitle: 'Business & Management',
            title: 'Master of Business Administration (CMI)',
            status: 'Postgraduate',
            date: 'Every 12 weeks',
            price: '£12,650',
            button: 'More info'
        },
        {
            subtitle: 'Business & Management',
            title: 'Master of Business Administration (CMI)',
            status: 'Postgraduate',
            date: 'Every 12 weeks',
            price: '£12,650',
            logo: itemThird_logo,
            button: 'More info'
        },
        {
            subtitle: 'Business & Management',
            title: 'Master of Business Administration (CMI)',
            status: 'Postgraduate',
            date: 'Every 12 weeks',
            price: '£12,650',
            button: 'More info'
        },
        {
            subtitle: 'Business & Management',
            title: 'Master of Business Administration (CMI)',
            status: 'Postgraduate',
            date: 'Every 12 weeks',
            price: '£12,650',
            logo: itemFifth_logo,
            button: 'More info'
        },
        {
            subtitle: 'Business & Management',
            title: 'Master of Business Administration (CMI)',
            status: 'Postgraduate',
            date: 'Every 12 weeks',
            price: '£12,650',
            logo: itemSixth_logo,
            button: 'More info'
        },
    ]
    const instant = {
        0: { hover: false, disabled: false },
        1: { hover: false, disabled: false },
        2: { hover: false, disabled: false },
        3: { hover: false, disabled: false },
        4: { hover: false, disabled: false },
        5: { hover: false, disabled: false },
    }
    const [flag, setCount] = useState(instant)
    const handleMouseOver = (event) => {
        let i = event.target.closest('div.item').attributes[1].value;
        flag[i].disabled || setCount(prevState => ({
            ...prevState,
            [i]: {
                hover: !prevState[i].hover,
                disabled: false
            }
        }))
    }
    const handleMouseOut = (e) => {
        let i = e.target.closest('div.item').attributes[1].value;
        flag[i].disabled || setCount(prevState => ({
            ...prevState,
            [i]: {
                hover: false,
                disabled: false
            }
        }))
    }
    const handleClick = (e) => {
        let i = e.target.closest('div.item').attributes[1].value;
        e.target.closest('div.item').classList.toggle('disabled')
        setCount(prevState => ({
            ...prevState,
            [i]: {
                hover: true,
                disabled: !prevState[i].disabled
            }
        }))
        console.log(flag)
    }
    return (
        <div className='main'>
            {
                items.map((x, i) => {
                    return <div
                        key={i}
                        onMouseEnter={handleMouseOver}
                        onMouseLeave={handleMouseOut}
                    >
                        {!flag[i].hover ?
                            <div className='item' i={i} >
                                <Item data={x} />
                            </div>
                            :
                            <div className='item active' i={i}>
                                <ItemActive func={handleClick} />
                            </div>
                        }
                    </div >
                })
            }

        </div >
    )
}
export default Main