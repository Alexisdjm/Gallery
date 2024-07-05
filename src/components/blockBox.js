const BlockBox = ({bg, title, position}) => {
    return(<>
        <div className="parallax" style={{ backgroundImage: bg, backgroundPositionY: position }}>
            <h1>{title}</h1>
        </div>
    </>)
} 

export default BlockBox