import PropTypes from 'prop-types'
import { useMemo } from 'react';
import getHeroesByPublisher from "../../helpers/getHeroesByPublisher";
import HeroCard from './HeroCard';

function HeroList({ publisher }) {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>            
            {
                heroes.map((heroe) => (
                    <HeroCard key={ heroe.id } { ...heroe }>
                        { heroe.superhero }
                    </HeroCard>
                ))
            }
        </div>
    );
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
};

export default HeroList;