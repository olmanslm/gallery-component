import { Host, h } from "@stencil/core";
export class Gallery {
    constructor() {
        this.JSON_results = []; //Future fetched values will be stored in this array.
    }
    /**
     * This function is responsible to load the data from the json file (as requested) and parce the results
     * to print them inside the gallery
     */
    componentDidLoad() {
        fetch("../../assets/data/data.json")
            .then(res => res.json())
            .then(parsedRes => {
            this.JSON_results = parsedRes.map(match => {
                return { title: match.title, path: match.path };
            });
        })
            .catch(err => {
            console.log(err);
        });
    }
    /**
     * This function render the gallery and create new instances of the figure web component
     * Each instance of the figure web componnent will be creaded with their needed attributes
     */
    render() {
        let content = (h(Host, null,
            h("section", { class: "gallery" },
                h("header", null,
                    h("h2", { class: "gallery-title" }, this.galleryTitle || "Title"),
                    h("p", { class: "gallery-description" }, this.galleryDescription || "Description")),
                h("div", { class: "container" },
                    h("div", { class: "row" }, this.JSON_results.map(result => (h("div", { class: "column" },
                        h("slm-figure", { "fig-title": result.title, "fig-path": result.path, "fig-place-holder": this.galleryItemPlaceHolder || "Lorem!" })))))),
                h("footer", null,
                    h("a", { href: "https://www.linkedin.com/in/olmanslm/", target: "_blank", rel: "noopener noreferrer" },
                        h("small", null, "\u00A9 Copyright 2020 @olmanslm.com"))))));
        return content;
    }
    static get is() { return "slm-gallery"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["gallery.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["gallery.css"]
    }; }
    static get properties() { return {
        "JSON_results": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "{ title: string; path: string }[]",
                "resolved": "{ title: string; path: string; }[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        },
        "galleryTitle": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "gallery-title",
            "reflect": true
        },
        "galleryDescription": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "gallery-description",
            "reflect": true
        },
        "galleryItemPlaceHolder": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "gallery-item-place-holder",
            "reflect": true
        }
    }; }
}
