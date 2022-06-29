import { Grid, Slide } from '@material-ui/core';
import { useMatch } from 'react-router-dom';

export const Home = () => {
    const isJoin = useMatch('/join');

    return (
        <>
            <Grid container direction='column' justify='center' alignItems='center' spacing={2}>
                <Grid container item sm={12} lg={11} justify='center' alignItems='center' spacing={3}>
                    <Grid item sm={12} lg={6}>
                        <Slide in={true} direction='up' timeout={1500}>
                            <div className='HomePageContainer'>
                                Jogos RECENTES
                            </div>
                        </Slide>
                    </Grid>
                    <Grid item sm={12} lg={6}>
                        <div className='HomePageContainer'>{isJoin ? "JUNTAR" : 'CRIAR'}</div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;