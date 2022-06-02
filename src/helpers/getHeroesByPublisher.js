import { heroes } from "../data/heroes"

export default function getHeroesByPublisher(publisher) {

    const validPublishers = ["DC Comics", "Marvel Comics"];

    if (validPublishers.includes(publisher)) {
        return heroes.filter((heroe) => heroe.publisher === publisher);
    } else {
        throw new Error(publisher + " is not a valid publisher");
    }
}