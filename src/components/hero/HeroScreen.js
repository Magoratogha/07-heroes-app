import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import getHeroById from "../../helpers/getHeroById";

function HeroScreen() {

    const { id: heroId } = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    
    if (!hero) {
        return <Navigate to="/" />;
    } 

    const { id, alter_ego, publisher, superhero, first_appearance, characters } = hero;

    const handleReturn = () => {
        navigate(-1);
    };

    return (
        <div className="row ">
            <div className="col-4">
                <img
                    src={ `/assets/images/${id}.jpg` }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={ superhero } />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"><b>First appearance: </b>{ first_appearance }</li>
                </ul>
                <h5 className="mt-4">Characters</h5>
                <p>{ characters }</p>
                <button 
                    className="btn btn-outline-dark mt-3"
                    onClick={ handleReturn }>
                        Go back
                </button>
            </div>
        </div>
    );
}

export default HeroScreen;