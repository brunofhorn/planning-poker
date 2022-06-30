import { CircularProgress, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { streamGame, streamPlayers } from "../service/games";
import { getCurrentPlayerId } from "../service/players";
import { Game } from "../types/game";
import { Player } from "../types/player";
import GameArea from "./GameArea";

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