import { Divider, Link, Slide, Typography } from "@material-ui/core";
import { Copyright } from '@material-ui/icons';
import "../assets/css/Footer.css";

export const Footer = () => {
    return (
        <footer>
            <Slide in={true} direction='up' timeout={3000}>
                <div className='FooterSection'>
                    <Divider variant='middle'></Divider>
                    <div className='FooterContainer'>
                        <div className='FooterItemContainer'>
                            <Copyright color='secondary' fontSize='small' />
                            <Typography color='textSecondary' variant='body2'>
                                brunofhorn
                            </Typography>
                        </div>

                        <Divider orientation='vertical' flexItem></Divider>
                        <div className='FooterItemContainer'>
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
