import App from "./App";


function Game () {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
      
      }
    return (
        <div className="game">

            <div className="game-board">
            <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>

            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>

        </div>
    );
};

export default Game;