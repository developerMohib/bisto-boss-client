
const HeadingTItle = ({subHeading, heading}) => {
    return (
        <div className="w-3/12 mx-auto text-center">
            <p className='text-xl text-yellow-500' > ----{subHeading}---- </p>
            <h2 className="text-3xl border-b border-t my-5 py-5 border-slate-500 uppercase"> {heading} </h2>
        </div>
    );
};

export default HeadingTItle;