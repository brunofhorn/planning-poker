import { Button, Card, CardActions, CardContent, CardHeader, Grow, TextField } from "@material-ui/core";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../assets/css/style";
import { addNewGame } from "../service/games";
import { GameType, NewGame } from "../types/game";

export const CreateGame = () => {
    const navigate = useNavigate();
    const [gameName, setGameName] = useState('Avengers');
    const [createdBy, setCreatedBy] = useState('SuperHero');
    const [gameType, setGameType] = useState(GameType.Fibonacci);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const game: NewGame = {
            name: gameName,
            createdBy: createdBy,
            gameType: gameType,
            createdAt: new Date(),
        };
        const newGameId = await addNewGame(game);
        navigate(`/game/${newGameId}`);
    };

    return (
        <Grow in={true} timeout={1000}>
            <form onSubmit={handleSubmit}>
                <Card variant='outlined' style={{
                    background: "transparent",
                    border: 0,
                    padding: 50
                }}>
                    <CardHeader
                        title='Criar uma Nova Sala'
                        titleTypographyProps={{ variant: 'h4' }}
                        style={{ textAlign: "center" }}
                    />
                    <CardContent style={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center"
                    }}>
                        <TextField
                            required
                            id='filled-required'
                            label='Nome da Sala'
                            placeholder='Digite o nome da sala'
                            defaultValue={gameName}
                            variant='outlined'
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setGameName(event.target.value)}
                            style={{ paddingBottom: 30 }}
                        />
                        <TextField
                            required
                            id='filled-required'
                            label='Seu Nome'
                            placeholder='Digite o seu nome'
                            defaultValue={createdBy}
                            variant='outlined'
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setCreatedBy(event.target.value)}
                            style={{ paddingBottom: 30 }}
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
                            }}>
                            Criar Sala
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </Grow>
    )
}

export default CreateGame;