import { r as registerInstance, h, H as Host } from './core-72fd76ec.js';

const Gallery = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.JSON_results = [];
    }
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
    render() {
        let content = (h(Host, null, h("section", { class: "gallery" }, h("header", null, h("h2", { class: "gallery-title" }, this.galleryTitle || "Title"), h("p", { class: "gallery-description" }, this.galleryDescription || "Description")), h("div", { class: "container" }, h("div", { class: "row" }, this.JSON_results.map(result => (h("div", { class: "column" }, h("slm-figure", { "fig-title": result.title, "fig-path": result.path, "fig-place-holder": this.galleryItemPlaceHolder || "Lorem!" })))))), h("footer", null, h("a", { href: "https://www.linkedin.com/in/olmanslm/", target: "_blank", rel: "noopener noreferrer" }, h("small", null, "\u00A9 Copyright 2020 @olmanslm.com"))))));
        return content;
    }
    static get style() { return ":host {\n  display: block;\n  background-color: var(--gallery-background-color, whitesmoke);\n  width: 90%;\n  padding: 5rem 0;\n  margin: 0 auto;\n  font-family: var(--font-family, \"sans-serif\");\n  text-align: left;\n}\n\n.gallery {\n  width: 100%;\n  max-width: 50rem;\n  margin: 0 auto;\n}\n\n.gallery header {\n  padding: 2rem 0 0;\n  margin-bottom: 2rem;\n  border-bottom: 1px solid #2a6fdb;\n}\n\n.gallery-title {\n  color: var(--gallery-title-color, #333);\n  font-size: var(--gallery-title-font-size, 2rem);\n  margin: 0;\n  padding: 0;\n}\n\n.gallery-description {\n  color: var(--gallery-description-color, #666);\n  margin: 1.5rem auto;\n  padding: 0 0 1rem;\n}\n\n.row {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n.column {\n  -ms-flex: 1 1 0px;\n  flex: 1 1 0;\n  margin: 0.5rem;\n}\n\nfooter {\n  padding: 2rem 0;\n}\n\nfooter a {\n  display: block;\n  font-size: 0.5rem;\n  text-align: center;\n  text-decoration: none;\n  color: var(--gallery-footer-color, #666);\n}"; }
};

export { Gallery as slm_gallery };
