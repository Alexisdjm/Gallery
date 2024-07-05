const BlockBox = ({bg, title, position = ""}) => {
    return(<>
        <div className={`parallax ${position}`} style={{ backgroundImage: bg }}>
            <h1>{title}</h1>
        </div>
    </>)
} 

export default BlockBox