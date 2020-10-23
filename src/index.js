import React from 'react';
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./app";
import Theme from "./utils/theme";

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <App />
    </ThemeProvider>
, document.getElementById('root'));
