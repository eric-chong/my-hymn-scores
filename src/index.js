import React from "react";
import ReactDOM from "react-dom";

import Score from "./components/score.component";

const title = "神大愛";

ReactDOM.render(<Score title={title} />, document.getElementById("app"));

module.hot.accept();
