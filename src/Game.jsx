import App from "./App";


const Game = () => {
    return (
        <div className="game">
            <div className="game-board">
                <App />
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
};

export default Game;