import { Fragment } from "react";
import HeroList from "../hero/HeroList";

function MarvelScreen() {
    return (
        <Fragment>
            <h1>Marvel Screen</h1>
            <hr></hr>
            <HeroList publisher="Marvel Comics" />
        </Fragment>
    );
}

export default MarvelScreen;