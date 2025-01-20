const Square = ({ value, onSquareClick }) => {
    return (
      <button
        className="w-20 h-20  border-2 border-gray-300 text-white text-2xl font-bold flex items-center justify-center hover:bg-gray-200"
        onClick={onSquareClick}
      >
        {value}
      </button>
    );
  };
  
  export default Square;
  