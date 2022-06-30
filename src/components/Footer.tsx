import { Divider, Link, Slide, Typography } from "@material-ui/core";
import { Copyright } from '@material-ui/icons';

export const Footer = () => {
    return (
        <footer>
            <Slide in={true} direction='up' timeout={3000}>
                <div style={{ marginTop: 30 }}>
                    <Divider variant='middle'></Divider>
                    <div style={{
                        padding: 20,
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        textAlign: "center"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            paddingRight: 10
                        }}>
                            <Copyright color='secondary' fontSize='small' />
                            <Typography color='textSecondary' variant='body2'>
                                brunofhorn
                            </Typography>
                        </div>

                        <Divider orientation='vertical' flexItem></Divider>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            paddingRight: 10
                        }}>
                            <Typography color='textSecondary' variant='body2'>
                                GFT Planning Poker
                            </Typography>
                        </div>

                        <Divider orientation='vertical' flexItem></Divider>
                        <Link href='https://github.com/brunofhorn/planning-poker/issues'>
                            Sinalizar um Erro
                        </Link>
                    </div>
                </div>
            </Slide>
        </footer>
    );
};
