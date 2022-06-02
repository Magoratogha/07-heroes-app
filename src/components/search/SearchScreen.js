import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
import getHeroesByName from "../../helpers/getHeroesByName";
import useForm from "../../hooks/useForm";
import HeroCard from "../hero/HeroCard";
import { useMemo } from "react";

function SearchScreen() {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [ formValue, handleValueChange ] = useForm({
        search: q,
    });

    const { search } = formValue;
    const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${search}`);
    }

    return (
        <div className="row">
            <div className="col-5">
                <h4>Search</h4>
                <hr></hr>
                <form onSubmit={ handleSubmit }>
                    <input
                        onChange={ handleValueChange }
                        value={ search }
                        type="text"
                        className="form-control"
                        placeholder="Type something..."
                        name="search"
                        autoComplete="off"></input>
                    <button
                        className="btn btn-outline-dark mt-2">
                            Submit
                    </button>
                </form>
            </div>
            <div className="col-7">
                <h4>Results</h4>
                <hr></hr>
                {
                    q === '' ?
                        <div className="alert alert-primary">
                            Type something in the search box to search for a hero.
                        </div>
                    :
                        filteredHeroes.length > 0 ?
                            filteredHeroes.map(hero => (
                                <HeroCard key={ hero.id } { ...hero } />
                            ))
                        :
                            <div className="alert alert-danger">
                                No results found.
                            </div>
                }
            </div>
        </div>
    );
}

export default SearchScreen;