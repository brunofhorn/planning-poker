import { Game } from "../types/game";
import { Player } from "../types/player";
import "../assets/css/GameArea.css";
import { CardPickerTable } from "./CardPickerTable";
import { PlayersTable } from "./PlayersTable";
import "../assets/css/GameAreaTable.css";
import { Players } from "./Players";
import { CardPicker } from "./CardPicker";
import { GameController } from "./GameController";

interface GameAreaProps {
    game: Game;
    players: Player[];
    currentPlayerId: string;
}
export const GameAreaTable: React.FC<GameAreaProps> = ({
    game,
    players,
    currentPlayerId,
}) => {
    return (
        <>
            <div className='ContentArea'>
                <PlayersTable game={game} players={players} />
                {/* <GameController game={game} currentPlayerId={currentPlayerId} /> */}
            </div>
            <div className='Footer'>
                <CardPickerTable
                    game={game}
                    players={players}
                    currentPlayerId={currentPlayerId}
                />
            </div>
        </>
    );
};

export default GameAreaTable;