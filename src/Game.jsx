import { useState } from "react";
import App from "./App";
import gif from './assets/giphy.gif'

function Game() {

    const handleReload = () => {
        window.location.reload(); // Reloads the page
      };
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button
                    onClick={() => jumpTo(move)}
                    className="px-4 py-0.5 text-[#85d8c9] text-white rounded hover:bg-gray-300"
                >
                    {description}
                </button>
            </li>
        );
    });

    return (
        <div>
            
            
            <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="flex flex-row gap-3">
                <div>
                    <h1 className="text-2xl">TIC-<span className="text-[#02dcff]">TAC</span>-TO  </h1>
                </div>
                <div>
                    <span><img className="h-10 w-10" src={gif} alt="" /></span>
                </div>
            </div>
           
            <div className="mb-6">
                <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="text-white">
                <ol className="list-none flex flex-row gap-2 ">{moves}</ol>
            </div>

            <button onClick={handleReload} className="text-black bg-red-500 my-5 py-5 rounded-md px-6">restart</button>
        </div>
        </div>
    );
}

export default Game;
