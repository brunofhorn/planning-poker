import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { getCards } from "../service/card";
import { Game, GameType } from "../types/game";
import { Player } from "../types/player";
import { Status } from "../types/status";
import "../assets/css/PlayerCardTable.css";

interface PlayerCardProps {
    game: Game;
    player: Player;
}

export const PlayerCardTable: React.FC<PlayerCardProps> = ({ game, player }) => {
    return (
        <div className="PlayerCardTable">
            <div className="PlayerCardTableContainer">{getCardValue(player, game)}</div>
            <div></div>
        </div>
        // <Card
        //     variant='outlined'
        //     className='PlayerCard'
        //     style={{
        //         backgroundColor: getCardColor(game, player.value),
        //     }}
        // >
        //     <CardHeader
        //         className='PlayerCardTitle'
        //         title={player.name}
        //         titleTypographyProps={{ variant: 'subtitle2', noWrap: true }}
        //     />
        //     <CardContent className='PlayerCardContent'>
        //         <Typography variant='h2' className='PlayerCardContentMiddle'>
        //             {getCardValue(player, game)}
        //         </Typography>
        //     </CardContent>
        // </Card>
    );
};

const getCardColor = (game: Game, value: number | undefined): string => {
    if (game.gameStatus !== Status.Finished) {
        return 'var(--color-background-secondary)';
    }
    const card = getCards(game.gameType).find((card) => card.value === value);
    return card ? card.color : 'var(--color-background-secondary)';
};

const getCardValue = (player: Player, game: Game) => {
    if (game.gameStatus !== Status.Finished) {
        return player.status === Status.Finished ? '👍' : '🤔';
    }

    if (game.gameStatus === Status.Finished) {
        if (player.status === Status.Finished) {
            if (player.value && player.value === -1) {
                return player.emoji || '☕'; // coffee emoji
            }
            return getCardDisplayValue(game.gameType, player.value);
        }
        return '🤔';
    }
};

const getCardDisplayValue = (
    gameType: GameType | undefined,
    cardValue: number | undefined
): string | number | undefined => {
    return getCards(gameType).find((card) => card.value === cardValue)?.displayValue || cardValue;
};