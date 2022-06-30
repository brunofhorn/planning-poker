import { Game } from "../types/game";
import { Player } from "../types/player";
import { CardPicker } from "./CardPicker";
import { GameController } from "./GameController";
import { Players } from "./Players";
import "../assets/css/GameArea.css";

interface GameAreaProps {
    game: Game;
    players: Player[];
    currentPlayerId: string;
}
export const GameArea: React.FC<GameAreaProps> = ({
    game,
    players,
    currentPlayerId,
}) => {
    return (
        <>
            <div className='ContentArea'>
                <Players game={game} players={players} />
                <GameController game={game} currentPlayerId={currentPlayerId} />
            </div>
            <div className='Footer'>
                <CardPicker
                    game={game}
                    players={players}
                    currentPlayerId={currentPlayerId}
                />
            </div>
        </>
    );
};

export default GameArea;