import { Card, CardContent, CardHeader, Divider, Grow, IconButton, Snackbar, Typography } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Game, GameType } from "../types/game";
import { Visibility, Refresh, ExitToApp, Link } from '@material-ui/icons';
import { finishGame, resetGame } from "../service/games";
import { blue, green, orange } from "@material-ui/core/colors";
import { Alert } from "@material-ui/lab";

interface GameControllerProps {
    game: Game;
    currentPlayerId: string;
}

export const GameController: React.FC<GameControllerProps> = ({ game, currentPlayerId }) => {
    const navigate = useNavigate();
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);
    const copyInviteLink = () => {
        const dummy = document.createElement('input');
        const url = `${window.location.origin}/join/${game.id}`;
        document.body.appendChild(dummy);
        dummy.value = url;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
        setShowCopiedMessage(true);
    };

    const leaveGame = () => navigate(`/`);

    const isModerator = (moderatorId: string, currentPlayerId: string) => {
        return moderatorId === currentPlayerId;
    };
    return (
        <Grow in={true} timeout={2000}>
            <div className='GameController'>
                <Card variant='outlined' className='GameControllerCard'>
                    <CardHeader
                        title={game.name}
                        titleTypographyProps={{ variant: 'h6' }}
                        action={
                            <div className='GameControllerCardHeaderAverageContainer'>
                                <Typography variant='subtitle1'>{game.gameStatus}</Typography>
                                {game.gameType !== GameType.TShirt && (
                                    <>
                                        <Divider className='GameControllerDivider' orientation='vertical' flexItem />
                                        <Typography variant='subtitle1'>Média:</Typography>
                                        <Typography variant='subtitle1' className='GameControllerCardHeaderAverageValue'>
                                            {game.average || 0}
                                        </Typography>
                                    </>
                                )}
                            </div>
                        }
                        className='GameControllerCardTitle'
                    ></CardHeader>
                    <CardContent className='GameControllerCardContentArea'>
                        {isModerator(game.createdById, currentPlayerId) && (
                            <>
                                <div className='GameControllerButtonContainer'>
                                    <div className='GameControllerButton'>
                                        <IconButton onClick={() => finishGame(game.id)} data-testid='reveal-button' color='primary'>
                                            <Visibility fontSize='large' style={{ color: green[500] }} />
                                        </IconButton>
                                    </div>
                                    <Typography variant='caption'>Revelar</Typography>
                                </div>

                                <div className='GameControllerButtonContainer'>
                                    <div className='GameControllerButton'>
                                        <IconButton data-testid={'restart-button'} onClick={() => resetGame(game.id)}>
                                            <Refresh fontSize='large' color='error' />
                                        </IconButton>
                                    </div>
                                    <Typography variant='caption'>Reiniciar</Typography>
                                </div>
                            </>
                        )}
                        <div className='GameControllerButtonContainer'>
                            <div className='GameControllerButton'>
                                <IconButton data-testid='exit-button' onClick={() => leaveGame()}>
                                    <ExitToApp fontSize='large' style={{ color: orange[500] }} />
                                </IconButton>
                            </div>
                            <Typography variant='caption'>Sair</Typography>
                        </div>
                        <div title='Copy invite link' className='GameControllerButtonContainer'>
                            <div className='GameControllerButton'>
                                <IconButton data-testid='invite-button' onClick={() => copyInviteLink()}>
                                    <Link fontSize='large' style={{ color: blue[500] }} />
                                </IconButton>
                            </div>
                            <Typography variant='caption'>Convidar</Typography>
                        </div>
                    </CardContent>
                </Card>
                <Snackbar
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                    open={showCopiedMessage}
                    autoHideDuration={5000}
                    onClose={() => setShowCopiedMessage(false)}
                >
                    <Alert severity='success'>Link do convite copiado para o clipboard!</Alert>
                </Snackbar>
            </div>
        </Grow>
    );
};
