import { Button, Card, CardActions, CardContent, CardHeader, Grow, TextField } from "@material-ui/core";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../assets/css/style";
import { addNewGame } from "../service/games";
import { GameType, NewGame } from "../types/game";
import "../assets/css/CreateGame.css";

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
                <Card variant='outlined' className='CreateGameCard'>
                    <CardHeader
                        className='CreateGameCardHeader'
                        title='Criar uma Nova Sessão'
                        titleTypographyProps={{ variant: 'h4' }}
                    />
                    <CardContent className='CreateGameCardContent'>
                        <TextField
                            className='CreateGameTextField'
                            required
                            id='filled-required'
                            label='Nome da Sessão'
                            placeholder='Digite o nome da sessão'
                            defaultValue={gameName}
                            variant='outlined'
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setGameName(event.target.value)}
                        />
                        <TextField
                            className='CreateGameTextField'
                            required
                            id='filled-required'
                            label='Seu Nome'
                            placeholder='Digite o seu nome'
                            defaultValue={createdBy}
                            variant='outlined'
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setCreatedBy(event.target.value)}
                        />
                    </CardContent>
                    <CardActions className='CreateGameCardAction'>
                        <Button type='submit' variant='contained' color='primary' className='CreateGameButton'>
                            Criar Sessão
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </Grow>
    )
}

export default CreateGame;