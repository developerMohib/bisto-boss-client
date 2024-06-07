
const MenuItem = ({item}) => {
    const {image , name , price, recipe} = item ;
    return (
        <div className="md:flex  space-x-5 shadow-2xl bg-amber-50 p-5 rounded-lg" >
            <img className="w-[80px] rounded-r-full rounded-b-full" src={image} alt="" />
            <div>
                <h1 className="font-semibold text-xl" > {name} </h1>
                <p> {recipe} </p>
            </div>
            <p className="text-yellow-500" > ${price} </p>
        </div>
    );
};

export default MenuItem;