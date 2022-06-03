import { Link } from "react-router-dom";
import heroesImages from "../../helpers/heroesImages";

function HeroCard({ id, superhero, alter_ego, first_appearance, characters }) {

    return (
        <div className="col mb-2 animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-5 py-3 ps-4 pe-0">
                        <img src={ heroesImages(`./${id}.jpg`) } className="card-img" alt={ superhero } />
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>
                            {
                                (alter_ego !== characters) &&
                                    <p className="text-muted">{ characters }</p>
                            }
                            <p className="card-text">
                                <small>{ first_appearance }</small>
                            </p>
                            <Link to={ `/hero/${id}` } className="btn btn-outline-dark btn-sm">View more...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;
