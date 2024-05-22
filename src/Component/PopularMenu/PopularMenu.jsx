import { useEffect, useState } from 'react';
import HeadingTItle from '../HeadingTitle/HeadingTItle';
import MenuItem from '../MenuItem/MenuItem';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const [popularData, setPopularData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setPopularData(data.filter(item => item.category === 'popular'))
        })
    },[])
    // console.log(popularData)
    return (
        <div>
            <HeadingTItle subHeading={'Popular Items'} heading={'FROM OUR MENU'} > </HeadingTItle>
            <div className='md:grid grid-cols-2 gap-5 my-10'>
                {
                    popularData.map(item=> <MenuItem key={item._id} item={item}> 
                    </MenuItem> )
                }
            </div>
            <div className='text-center' >
                <Link> <button> View all menu </button> </Link>
            </div>
        </div>
    );
};

export default PopularMenu;