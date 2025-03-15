//interface that represents the structure of the animal data expected from the API

export interface Taxonomy {
    kingdom: string;
    class: string;
    family: string;
    scientific_name: string;
}

export interface Characteristics {
    prey: string;
    estimated_population_size: string;
    group: string;
    weight: string;
}

export interface AnimalDetails {
    name: string;
    locations: string[];
    taxonomy: Taxonomy;
    characteristics: Characteristics;
}