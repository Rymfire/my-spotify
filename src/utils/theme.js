import { createMuiTheme } from "@material-ui/core/styles";
import { AppColor } from "../assets";

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: AppColor.green,
        },
        secondary: {
            main: AppColor.grey,
        },
    },
});

export default Theme;
