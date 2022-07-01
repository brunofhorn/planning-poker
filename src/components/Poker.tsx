import { CircularProgress, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { streamGame, streamPlayers } from "../service/games";
import { getCurrentPlayerId } from "../service/players";
import { Game } from "../types/game";
import { Player } from "../types/player";
import GameArea from "./GameArea";
import "../assets/css/Poker.css";
import GameAreaTable from "./GameAreaTable";

export const Poker = () => {
    let { id } = useParams<{ id: any }>();
    const navigate = useNavigate();
    const [game, setGame] = useState<Game | undefined>(undefined);
    const [players, setPlayers] = useState<Player[] | undefined>(undefined);
    const [loading, setIsLoading] = useState(true);
    const [currentPlayerId, setCurrentPlayerId] = useState<string | undefined>(undefined);

    useEffect(() => {
        async function fetchData(id: string) {
            setIsLoading(true);
            streamGame(id).onSnapshot((snapshot) => {
                if (snapshot.exists) {
                    const data = snapshot.data();
                    if (data) {
                        setGame(data as Game);
                        setIsLoading(false);
                        return;
                    }
                }
                setIsLoading(false);
            });

            streamPlayers(id).onSnapshot((snapshot) => {
                const players: Player[] = [];
                snapshot.forEach((snapshot) => {
                    players.push(snapshot.data() as Player);
                });
                setPlayers(players);

                // let pl = [
                //     {
                //         "id": "01G6XA0JS1ENRT5FWNXTF8Z3B3",
                //         "status": "Não Iniciado",
                //         "name": "SuperHero"
                //     },
                //     {
                //         "id": "01G6XA0JS1ENRT5FWNXTF8Z3443",
                //         "status": "Não Iniciado",
                //         "name": "SuperHero 2"
                //     },
                //     {
                //         "id": "02G6XA0JS1ENRT5FWNXTF8Z3443",
                //         "status": "Não Iniciado",
                //         "name": "SuperHero 3"
                //     },
                //     {
                //         "id": "03G6XA0JS1ENRT5FWNXTF8Z3443",
                //         "status": "Não Iniciado",
                //         "name": "SuperHero 4"
                //     },
                //     {
                //         "id": "04G6XA0JS1ENRT5FWNXTF8Z3443",
                //         "status": "Não Iniciado",
                //         "name": "SuperHero 5"
                //     },
                //     {
                //         "id": "06G6XA0JS1ENRT5FWNXTF8Z3443",
                //         "status": "Não Iniciado",
                //         "name": "SuperHero 6"
                //     },
                //     {
                //         "id": "07G6XA0JS1ENRT5FWNXTF8Z3443",
                //         "status": "Não Iniciado",
                //         "name": "SuperHero 7"
                //     },
                //     {
                //         "id": "08G6XA0JS1ENRT5FWNXTF8Z3443",
                //         "status": "Não Iniciado",
                //         "name": "SuperHero 8"
                //     },
                //     {
                //         "id": "09G6XA0JS1ENRT5FWNXTF8Z3443",
                //         "status": "Não Iniciado",
                //         "name": "SuperHero 9"
                //     }
                // ] as Player[];

                // setPlayers(pl);
            });

            const currentPlayerId = getCurrentPlayerId(id);
            if (!currentPlayerId) {
                navigate(`/join/${id}`);
            }
            setCurrentPlayerId(currentPlayerId);
        }

        fetchData(id);
    }, [id, navigate]);

    if (loading) {
        return (
            <div className='PokerLoading'>
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            {game && players && currentPlayerId ? (
                <GameArea game={game} players={players} currentPlayerId={currentPlayerId} />
            ) : (
                <Typography>Sala não encontrada</Typography>
            )}
        </>
    );
};

export default Poker;