import { Button, Card, CardActions, CardContent, CardHeader, Grow, TextField } from "@material-ui/core";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { theme } from "../assets/css/style";
import { getGame } from "../service/games";
import { addPlayerToGame, isCurrentPlayerInGame } from "../service/players";

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
                    <Card variant='outlined' style={{
                        background: "transparent",
                        border: 0
                    }}>
                        <CardHeader
                            style={{ textAlign: "center" }}
                            title='Entrar em uma Sala'
                            titleTypographyProps={{ variant: 'h4' }}
                        />
                        <CardContent style={{ textAlign: "center" }}>
                            <TextField
                                error={!gameFound}
                                helperText={!gameFound && 'Sala não encontrada, verifique o ID'}
                                required
                                id='filled-required'
                                label='ID da Sala'
                                placeholder='1234...'
                                defaultValue={joinGameId}
                                variant='outlined'
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setJoinGameId(event.target.value)
                                }
                                style={{ width: "70%", paddingBottom: 30 }}
                            />
                            <TextField
                                required
                                id='filled-required'
                                label='Seu Nome'
                                placeholder='Digite o seu nome'
                                defaultValue={playerName}
                                variant='outlined'
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setPlayerName(event.target.value)
                                }
                                style={{ width: "70%", paddingBottom: 30 }}
                            />
                        </CardContent>
                        <CardActions style={{ justifyContent: "center" }}>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                style={{
                                    color: theme.colors.backgroundPrimary,
                                    width: "70%",
                                    borderRadius: 40
                                }}
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