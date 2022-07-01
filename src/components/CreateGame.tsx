import { Button, Card, CardActions, CardContent, CardHeader, FormControl, Grow, InputLabel, Select, TextField } from "@material-ui/core";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
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
                        title='Criar uma Nova Sala'
                        titleTypographyProps={{ variant: 'h4' }}
                    />
                    <CardContent className='CreateGameCardContent'>
                        <TextField
                            className='CreateGameTextField'
                            required
                            id='filled-required'
                            label='Nome da Sala'
                            placeholder='Digite o nome da sala'
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
                        <FormControl variant="outlined" >
                            <InputLabel htmlFor="filled-age-native-simple">Tipo de Votação</InputLabel>
                            <Select
                                native
                                value={gameType}
                                onChange={(
                                    event: ChangeEvent<{
                                        name?: string | undefined;
                                        value: any;
                                    }>
                                ) => setGameType(event.target.value)}
                                inputProps={{
                                    name: 'age',
                                    id: 'filled-age-native-simple',
                                }}
                            >
                                <option value={GameType.Fibonacci}>Fibonacci</option>
                                <option value={GameType.ShortFibonacci}>ShortFibonacci</option>
                                <option value={GameType.TShirt}>TShirt</option>
                            </Select>
                        </FormControl>
                    </CardContent>
                    <CardActions className='CreateGameCardAction'>
                        <Button type='submit' variant='contained' color='primary' className='CreateGameButton'>
                            Criar Sala
                        </Button>
                    </CardActions>
                </Card>
            </form>
        </Grow>
    )
}

export default CreateGame;