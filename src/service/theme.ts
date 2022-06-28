import {red} from '@material-ui/core/colors';
import { createTheme } from "@material-ui/core/styles";

export const customTheme = {
    palette: {
        primary: {
            main: "#75A1DE"
        },
        secondary: {
            main: "#D7D7D7"
        },
        error:{
            main: red.A400
        },
        background:{
            default: "#FFFFFF"
        }
    }
}

export const theme = createTheme(customTheme);