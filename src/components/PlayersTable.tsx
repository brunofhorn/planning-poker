import { Grow } from "@material-ui/core";
import { Game } from "../types/game";
import { Player } from "../types/player";
import "../assets/css/PlayersTable.css";
import { PlayerCardTable } from "./PlayerCardTable";

interface PlayersProps {
    game: Game;
    players: Player[];
}
export const PlayersTable: React.FC<PlayersProps> = ({ game, players }) => {
    return (
        <Grow in={true} timeout={800}>
            <div className='PlayersContainer'>
                {players.map((player: Player) => (
                    <PlayerCardTable key={player.id} game={game} player={player} />
                ))}
            </div>
        </Grow>
    );
};
