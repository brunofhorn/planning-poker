import { Button, Card, CardActions, CardContent, CardHeader, Grow, TextField } from "@material-ui/core";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGame } from "../service/games";
import { addPlayerToGame, isCurrentPlayerInGame } from "../service/players";
import "../assets/css/JoinGame.css";

export const JoinGame = () => {
    const navigate = useNavigate();
    let { id } = useParams<{ id: string }>();

    const [joinGameId, setJoinGameId] = useState(id);
    const [playerName, setPlayerName] = useState('');
    const [gameFound, setIsGameFound] = useState(true);

    useEffect(() => {
        async function fetchData() {
            if (joinGameId) {
                if (await getGame(joinGameId)) {
                    setIsGameFound(true);
                    if (isCurrentPlayerInGame(joinGameId)) {
                        navigate(`/game/${joinGameId}`);
                    }
                }
            }
        }
        fetchData();
    }, [joinGameId, navigate]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (joinGameId) {
            const res = await addPlayerToGame(joinGameId, playerName);

            setIsGameFound(res);
            if (res) {
                navigate(`/game/${joinGameId}`);
            }
        }
    };

    return (
        <Grow in={true} timeout={500}>
            <div>
                <form onSubmit={handleSubmit}>
                    <Card variant='outlined' className='JoinGameCard'>
                        <CardHeader
                            className='JoinGameCardHeader'
                            title='Entrar em uma Sala'
                            titleTypographyProps={{ variant: 'h4' }}
                        />
                        <CardContent className='JoinGameCardContent'>
                            <TextField
                                error={!gameFound}
                                helperText={!gameFound && 'Sala não encontrada, verifique o ID'}
                                className='JoinGameTextField'
                                required
                                id='filled-required'
                                label='ID da Sala'
                                placeholder='xyz...'
                                defaultValue={joinGameId}
                                variant='outlined'
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setJoinGameId(event.target.value)
                                }
                            />
                            <TextField
                                className='JoinGameTextField'
                                required
                                id='filled-required'
                                label='Seu Nome'
                                placeholder='Digite o seu nome'
                                defaultValue={playerName}
                                variant='outlined'
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setPlayerName(event.target.value)
                                }
                            />
                        </CardContent>
                        <CardActions className='JoinGameCardAction'>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                className='JoinGameButton'
                            >
                                Entrar na Sala
                            </Button>
                        </CardActions>
                    </Card>
                </form>
            </div>
        </Grow>
    )
}

export default JoinGame;