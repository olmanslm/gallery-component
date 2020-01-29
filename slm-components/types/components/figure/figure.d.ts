export declare class Figure {
    el: HTMLElement;
    figPath: string;
    figTitle: string;
    figPlaceHolder: string;
    figureTemplate: string;
    placeHolderTemplate: string;
    /**
     * This method is responsible to add and remove the placeholder and images
     * This method is bounded to the onclick event
     */
    attachFigure(): void;
    /**
     * Render the placeholder element and attach the onClick event to load the image.
     */
    render(): any;
}
