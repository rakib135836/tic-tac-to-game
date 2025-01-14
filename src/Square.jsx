


const Square = ({value,onSquareClick}) => {

//     const [clicked,setClicked]=useState(null)
//    const handleClick = ()=>{
//     setClicked('X');
//    };
    return (
        <div>
            <button className="square" onClick={onSquareClick}>{value}</button>
        </div>
    );
};

export default Square;