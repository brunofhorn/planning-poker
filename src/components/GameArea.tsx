import { Game } from "../types/game";
import { Player } from "../types/player";
import { CardPicker } from "./CardPicker";
import { GameController } from "./GameController";
import { Players } from "./Players";

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
            <div style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "60%",
                borderWidth: 1,
                borderColor: "white",
                borderStyle: "solid",
                overflow: "auto",
                padding: 2,
                justifyContent: "center"
            }}>
                <Players game={game} players={players} />
                <GameController game={game} currentPlayerId={currentPlayerId} />
            </div>
            <div style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center"
            }}>
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