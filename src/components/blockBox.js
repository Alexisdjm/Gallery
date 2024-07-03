const BlockBox = ({bg, title}) => {
    return(<>
        <div className="parallax" style={{ backgroundImage: bg }}>
            <h1>{title}</h1>
        </div>
    </>)
} 

export default BlockBox