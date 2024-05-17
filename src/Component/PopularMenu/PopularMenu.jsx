import { useEffect, useState } from 'react';
import HeadingTItle from '../HeadingTitle/HeadingTItle';

const PopularMenu = () => {
    const [popularData, setPopularData] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPopularData(data.filter(item => item.category === 'salad'))
        })
    },[])
    console.log(popularData)
    return (
        <div>
            <HeadingTItle subHeading={'Popular Items'} heading={'Popular Menu'} > </HeadingTItle>
        </div>
    );
};

export default PopularMenu;