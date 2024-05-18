import { useEffect, useState } from 'react';
import HeadingTItle from '../HeadingTitle/HeadingTItle';
import MenuItem from '../MenuItem/MenuItem';

const PopularMenu = () => {
    const [popularData, setPopularData] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setPopularData(data.filter(item => item.category === 'popular'))
        })
    },[])
    // console.log(popularData)
    return (
        <div>
            <HeadingTItle subHeading={'Popular Items'} heading={'Popular Menu'} > </HeadingTItle>
            <div className='md:grid grid-cols-2 gap-5 my-10'>
                {
                    popularData.map(item=> <MenuItem key={item._id} item={item}> 
                    </MenuItem> )
                }
            </div>
        </div>
    );
};

export default PopularMenu;