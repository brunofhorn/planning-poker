import { Button, Slide, Typography, useMediaQuery } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import AppToolbar from '@material-ui/core/Toolbar';
import logo from '../assets/img/gft_logo.jpg';
import { AddCircleOutline, MergeTypeOutlined, GitHub } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import { theme } from "../assets/css/style";

export const Toolbar = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down("xs"));

    return (
        <Slide direction='down' in={true} timeout={800}>
            <AppBar position='sticky' className='AppBar' style={{
                boxShadow: 'none',
                backgroundColor: theme.colors.backgroundPrimary,
                flexGrow: 1,
                whiteSpace: 'nowrap'
            }}>
                <AppToolbar>
                    <div className='HeaderContainer' style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <div
                            className='HeaderLeftContainer'
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                cursor: 'pointer'
                            }}
                            onClick={() => navigate("/")}
                        >
                            <img src={logo} style={{ width: 130, height: 24, marginRight: 10 }} />
                            <Typography variant={isSmallScreen ? 'subtitle1' : 'h6'} style={{ color: '#213F7F' }} noWrap>
                                PLANNING POKER
                            </Typography>
                        </div>
                        <div>
                            <Button title="Nova Sessão" startIcon={<AddCircleOutline />} color='inherit' onClick={() => navigate("/")}>
                                {!isSmallScreen ? 'Criar uma Nova Sessão' : null}
                            </Button>
                            <Button startIcon={<MergeTypeOutlined />} size={isSmallScreen ? "small" : "large"} color='inherit' onClick={() => navigate('/join')}>
                                {!isSmallScreen ? 'Entrar em uma Sessão' : null}
                            </Button>
                            <Button
                                id='github-button'
                                color='inherit'
                                onClick={() =>
                                (window.location.href =
                                    'https://github.com/brunofhorn/planning-poker')
                                }
                            >
                                <GitHub />
                            </Button>
                        </div>
                    </div>
                </AppToolbar>
            </AppBar>
        </Slide>
    )
}

export default Toolbar;