import { heroes } from "../data/heroes"

export default function getHeroById(id = '') {
    return heroes.find((heroe) => heroe.id === id);
}