// this is the board in documentation
import { useState } from "react"
import Square from "./Square"

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = () => {
    const nextSquares = squares.slice();
    nextSquares[0] = 'x';
    setSquares(nextSquares)
  }



  return (
    <>
      <div className="board-row">
        <Square onSquareClick={handleClick} value={squares[0]}></Square>
        <Square value={squares[1]}></Square>
        <Square value={squares[2]}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]}></Square>
        <Square value={squares[4]}></Square>
        <Square value={squares[5]}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]}></Square>
        <Square value={squares[7]}></Square>
        <Square value={squares[8]}></Square>
      </div>
    </>
  )
}

export default App
