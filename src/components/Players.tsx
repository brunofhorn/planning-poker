import { Grow } from "@material-ui/core";
import { Game } from "../types/game";
import { Player } from "../types/player";
import { PlayerCard } from "./PlayerCard";

interface PlayersProps {
    game: Game;
    players: Player[];
}
export const Players: React.FC<PlayersProps> = ({ game, players }) => {
    return (
        <Grow in={true} timeout={800}>
            <div style={{
                padding: 20,
                display: "flex",
                flexDirection: "row",
                overflow: "auto",
                justifyContent: "center",
                margin: "auto"
            }}>
                {players.map((player: Player) => (
                    <PlayerCard key={player.id} game={game} player={player} />
                ))}
            </div>
        </Grow>
    );
};
