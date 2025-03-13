import React, { useState } from "react";
import axios from "axios";

const Explore = () => {
    const [animalName, setAnimalName] = useState('');
    const [animalDetails, setAnimalDetails] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async() => {
        if(!animalName) return;
        setError('');
        try{
            const response = await axios.get(`https://api.api-ninjas.com/v1/animals?name=${animalName}`, {
                headers: { 'X-Api-Key': 'FTh8qQUY5WOUHWhyXIZVMQ==XHnsJ3BxFKRqxqPf'}
            });
            setAnimalDetails(response.data[0]);
        }
        catch (err) {
            setError('Animal not found');
            setAnimalDetails(null);
        }
    };

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    };
    

    return(
        <section id="explore" className="explore">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <h1 className="mt-4 mb-4">Explore Animals</h1>
                    <div className="col-md-6">
                        <div className="input-group mt-3 mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={animalName}
                                onChange={(e) => {
                                    console.log(e.target.value); // Check the input value
                                    setAnimalName(e.target.value);
                                }}
                                onKeyPress={handleKeyPress}
                                placeholder="Search for an animal..."/>
                            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {animalDetails && (
                            <div className="card mt-4">
                                <div className="card-body">
                                    <h5 className="card-title">Name : {animalDetails.name}</h5>
                                    <p className="card-text"><strong>Location :</strong> {animalDetails.locations.join(', ')}</p>
                                    <p className="card-text"><strong>Characteristics</strong></p>
                                    <p className="card-text"><strong>Pray:</strong> {animalDetails.characteristics.prey}</p>
                                    <p className="card-text"><strong>Population:</strong> {animalDetails.characteristics.estimated_population_size}</p>
                                    <p className="card-text"><strong>Group:</strong> {animalDetails.characteristics.group}</p>
                                    <p className="card-text"><strong>Weight:</strong> {animalDetails.characteristics.weight}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;