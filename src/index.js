import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import localeEsMessages from "./locales/es";
import JobsList from "./components/jobslist";
import localeEnMessages from "./locales/en";

const userlanguaje = navigator.language || navigator.userlanguaje;

ReactDOM.render(
    <IntlProvider locale={userlanguaje} messages= {userlanguaje.includes('es') ? localeEsMessages:localeEnMessages}>
            <JobsList/>
    </IntlProvider>, document.getElementById("root")
);
