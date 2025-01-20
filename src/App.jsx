import Square from "./Square";

const App = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const status = winner
    // ? `winner: ${winner}`
    // : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className="text-black font-semibold mb-4 text-xl">{status}</div>

      {winner ? (
        // Added h1 tag to style the winner text
        <h1 className="text-4xl font-bold text-[#85d8c9]">Winner: {winner}</h1>
      ) : (
        <h1 className="text-2xl font-medium text-white">
          Next player: {xIsNext ? "X" : "O"}
        </h1>
      )}

      <div className="grid grid-cols-3 gap-2">
        {squares.map((square, i) => (
          <Square key={i} onSquareClick={() => handleClick(i)} value={square} />
        ))}
      </div>
    </>
  );
};

export default App;
