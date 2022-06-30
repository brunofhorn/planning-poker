import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RecentSessions = () => {
    const navigate = useNavigate();
    const [recentSessions, setRecentSessions] = useState<any[] | undefined>(undefined);

    const isEmptyRecentSessions = (): boolean => {
        if (!recentSessions) {
            return true;
        }
        if (recentSessions && recentSessions.length === 0) {
            return true;
        }
        return false;
    };

    return (
        <Card variant='outlined' className='RecentSessionsCard'>
            <CardHeader
                className='RecentSessionsCardTitle'
                title='Sessões Recentes'
                titleTypographyProps={{ variant: 'h6', noWrap: true }}
            />
            <CardContent className='RecentSessionsCardContent'>
                {isEmptyRecentSessions() && (
                    <Typography variant='body2'>Nenhuma sessão recente encontrada</Typography>
                )}
                {recentSessions && recentSessions.length > 0 && (
                    <TableContainer className='RecentSessionsTableContainer'>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>Criada por</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recentSessions.map((recentSession) => (
                                    <TableRow
                                        hover
                                        key={recentSession.id}
                                        className='RecentSessionsTableRow'
                                        onClick={() => navigate(`/game/${recentSession.id}`)}
                                    >
                                        <TableCell>{recentSession.name}</TableCell>
                                        <TableCell align='left'>{recentSession.createdBy}</TableCell>
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

export default RecentSessions;