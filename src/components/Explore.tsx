import React, { useState } from "react";
import axios from "axios";
import { AnimalDetails } from '../types/Animal';

const Explore: React.FC = () => {
    const [animalName, setAnimalName] = useState<string>('');
    const [animalDetails, setAnimalDetails] = useState<AnimalDetails | null>(null);
    const [error, setError] = useState<string>('');

    const handleSearch = async() => {
        if(!animalName) return; // if empty input, do nothing
        setError('');  // Clear any existing errors
        try{
            const response = await axios.get<AnimalDetails[]>(`https://api.api-ninjas.com/v1/animals?name=${animalName}`, {
                headers: { 'X-Api-Key': 'FTh8qQUY5WOUHWhyXIZVMQ==XHnsJ3BxFKRqxqPf'}
            });

            // Check if response data is empty
            if(response.data.length === 0){
                setError('No animal found. Please try another name.')
                setAnimalDetails(null);
            }
            else {
                setAnimalDetails(response.data[0]); // Set the first animal details
            }
            
        }
        catch (err) {
            setError('An error occurred while searching for the animal.');
            setAnimalDetails(null);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleSearch();
        }
    };
    

    return(
        <section id="explore" className="explore">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <h1 className="mt-4 mb-4">Explore Animals</h1>
                    <div className="input-group search m-5">
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
                        <button className="btn" onClick={handleSearch}>Search</button>
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {animalDetails && (
                    <div className="container">
                        <h2>{animalDetails.name}</h2>
                        <h4 className="location pt-4">Location : {animalDetails.locations.join(', ') }</h4>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <p className="card-title"><strong>Taxonomy</strong></p>
                                        <p className="card-text"><span className="sub-title">Kingdom: </span>{animalDetails.taxonomy.kingdom || "Data not available"}</p>
                                        <p className="card-text"><span className="sub-title">Class: </span>{animalDetails.taxonomy.class || "Data not available"}</p>
                                        <p className="card-text"><span className="sub-title">Family: </span>{animalDetails.taxonomy.family || "Data not available"}</p>
                                        <p className="card-text"><span className="sub-title">Scientific Name: </span>{animalDetails.taxonomy.scientific_name || "Data not available"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card mt-4">
                                    <div className="card-body">
                                        <p className="card-title"><strong>Characteristics</strong></p>
                                        <p className="card-text"><span className="sub-title">Pray :</span> {animalDetails.characteristics.prey || "Data not available"}</p>
                                        <p className="card-text"><span className="sub-title">Population : </span> {animalDetails.characteristics.estimated_population_size || "Data not available"}</p>
                                        <p className="card-text"><span className="sub-title">Group : </span> {animalDetails.characteristics.group || "Data not available"}</p>
                                        <p className="card-text"><span className="sub-title">Weight: </span> {animalDetails.characteristics.weight || "Data not available"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Explore;