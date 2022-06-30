import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/RecentGames.css";

export const RecentGames = () => {
    const navigate = useNavigate();
    const [recentGames, setRecentGames] = useState<any[] | undefined>(undefined);

    const isEmptyRecentGames = (): boolean => {
        if (!recentGames) {
            return true;
        }
        if (recentGames && recentGames.length === 0) {
            return true;
        }
        return false;
    };

    return (
        <Card variant='outlined' className='RecentGamesCard'>
            <CardHeader
                className='RecentGamesCardTitle'
                title='Sessões Recentes'
                titleTypographyProps={{ variant: 'h6', noWrap: true }}
            />
            <CardContent className='RecentGamesCardContent'>
                {isEmptyRecentGames() && (
                    <Typography variant='body2'>Nenhuma sessão recente encontrada</Typography>
                )}
                {recentGames && recentGames.length > 0 && (
                    <TableContainer className='RecentGamesTableContainer'>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>Criada por</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recentGames.map((recentGame) => (
                                    <TableRow
                                        hover
                                        key={recentGame.id}
                                        className='RecentGamesTableRow'
                                        onClick={() => navigate(`/game/${recentGame.id}`)}
                                    >
                                        <TableCell>{recentGame.name}</TableCell>
                                        <TableCell align='left'>{recentGame.createdBy}</TableCell>
                                        <TableCell align='left'></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </CardContent>
        </Card>
    )
}

export default RecentGames;