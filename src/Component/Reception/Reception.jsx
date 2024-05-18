
const Reception = ({bgImage, children}) => {
    const divStyle = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '20px', 
        boxSizing: 'border-box',
    };
    return (
        <div style={divStyle} >
            {children}
        </div>
    );
};

export default Reception;