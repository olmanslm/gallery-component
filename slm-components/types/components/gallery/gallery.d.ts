export declare class Gallery {
    JSON_results: {
        title: string;
        path: string;
    }[];
    galleryTitle: string;
    galleryDescription: string;
    galleryItemPlaceHolder: string;
    /**
     * This function is responsible to load the data from the json file (as requested) and parce the results
     * to print them inside the gallery
     */
    componentDidLoad(): void;
    /**
     * This function render the gallery and create new instances of the figure web component
     * Each instance of the figure web componnent will be creaded with their needed attributes
     */
    render(): any;
}
