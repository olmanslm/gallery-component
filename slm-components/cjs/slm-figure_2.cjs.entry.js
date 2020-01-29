'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-ddb9c0c7.js');

const Figure = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.figureTemplate = `
  <figure class="gallery-figure">
    <picture class="gallery-picture">
      <source
        media="(min-width: 650px)"
        srcset="${this.figPath}_640.jpg"
      />
      <source
        media="(min-width: 465px)"
        srcset="${this.figPath}_1280.jpg"
      />
      <img src="${this.figPath}_1920.jpg"} alt="${this.figTitle}" class="gallery-image" />
    </picture>
    <figcaption class="img-content">
      <span class="title">
        <strong>${this.figTitle}</strong>
      </span>
    </figcaption>
  </figure>
  `; //This is an html template just for demostration
        this.placeHolderTemplate = ` <div class="placeHolder">
    <img src="../../assets/Shape@3x.svg" alt="SVG camera image" />
    <p>${this.figPlaceHolder}</p>
  </div>
  `; //This is an html template just for demostration
    }
    /**
     * This method is responsible to add and remove the placeholder and images
     * This method is bounded to the onclick event
     */
    attachFigure() {
        let container = this.el.shadowRoot.querySelector(".container");
        let outputHtml = this.el.shadowRoot.querySelector("div.placeHolder")
            ? this.figureTemplate
            : this.placeHolderTemplate;
        container.innerHTML = outputHtml;
    }
    /**
     * Render the placeholder element and attach the onClick event to load the image.
     */
    render() {
        return (core.h(core.Host, null, core.h("div", { class: "container", onClick: this.attachFigure.bind(this) }, core.h("div", { class: "placeHolder" }, core.h("img", { src: "../../assets/Shape@3x.svg", alt: "SVG camera image" }), core.h("p", null, this.figPlaceHolder)))));
    }
    get el() { return core.getElement(this); }
    static get style() { return ":host{font-family:var(--font-family,\"sans-serif\");height:100%;display:-ms-flexbox;display:flex}:host,:host .container{width:100%}:host .placeHolder{background-color:var(--figure-background-color,#d3d3d3);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:distribute;align-content:space-around;-ms-flex-direction:column;flex-direction:column;border-radius:4px;font-weight:700;-webkit-transition:all 1s;transition:all 1s;color:var(--figure-svg-fill,#f5f5f5);padding:4rem 3.5rem;margin:0 auto}:host .placeHolder p{text-align:center;font-size:var(--figure-svg-text,.8rem);margin:.5rem auto 0}:host .gallery-figure{background-color:#f6f9fd;border-radius:4px;height:100%;min-width:12rem;margin:0}:host .gallery-image{width:100%}:host .title{text-align:left;color:var(--figure-title-color,#333);font-weight:var(--figure-title-weight,normal);width:100%;margin:1rem 0;padding:0 1rem;width:auto;display:block;font-size:.7rem}"; }
};

const Gallery = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        let content = (core.h(core.Host, null, core.h("section", { class: "gallery" }, core.h("header", null, core.h("h2", { class: "gallery-title" }, this.galleryTitle || "Title"), core.h("p", { class: "gallery-description" }, this.galleryDescription || "Description")), core.h("div", { class: "container" }, core.h("div", { class: "row" }, this.JSON_results.map(result => (core.h("div", { class: "column" }, core.h("slm-figure", { "fig-title": result.title, "fig-path": result.path, "fig-place-holder": this.galleryItemPlaceHolder || "Lorem!" })))))), core.h("footer", null, core.h("a", { href: "https://www.linkedin.com/in/olmanslm/", target: "_blank", rel: "noopener noreferrer" }, core.h("small", null, "\u00A9 Copyright 2020 @olmanslm.com"))))));
        return content;
    }
    static get style() { return ":host{display:block;background-color:var(--gallery-background-color,#f5f5f5);width:90%;padding:5rem 0;margin:0 auto;font-family:var(--font-family,\"sans-serif\");text-align:left}:host .gallery{width:100%;max-width:50rem;margin:0 auto}:host .gallery header{padding:2rem 0 0;margin-bottom:2rem;border-bottom:1px solid #2a6fdb}:host .gallery-title{color:var(--gallery-title-color,#333);font-size:var(--gallery-title-font-size,2rem);margin:0;padding:0}:host .gallery-description{color:var(--gallery-title-color,#666);margin:1.5rem auto;padding:0 0 1rem}:host .row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}:host .column{-ms-flex:1 1 0px;flex:1 1 0;margin:.5rem}:host footer{padding:2rem 0}:host footer a{display:block;font-size:.5rem;text-align:center;text-decoration:none;color:var(--gallery-footer-color,#666)}"; }
};

exports.slm_figure = Figure;
exports.slm_gallery = Gallery;
