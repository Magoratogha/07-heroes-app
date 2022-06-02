import { heroes } from "../data/heroes"

export default function getHeroesByName(name = '') {
    if (name !== '') {
        return heroes.filter((heroe) => heroe.superhero.toLowerCase().includes(name.toLowerCase()));
    } else {
        return [];
    }
}