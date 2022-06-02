import { Fragment } from "react";
import HeroList from "../hero/HeroList";

function DcScreen() {
    return (
        <Fragment>
            <h1>DC Screen</h1>
            <hr></hr>
            <HeroList publisher="DC Comics" />
        </Fragment>
    );
}

export default DcScreen;