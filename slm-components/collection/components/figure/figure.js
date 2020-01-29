import { h, Host } from "@stencil/core";
export class Figure {
    constructor() {
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
        return (h(Host, null,
            h("div", { class: "container", onClick: this.attachFigure.bind(this) },
                h("div", { class: "placeHolder" },
                    h("img", { src: "../../assets/Shape@3x.svg", alt: "SVG camera image" }),
                    h("p", null, this.figPlaceHolder)))));
    }
    static get is() { return "slm-figure"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./figure.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["figure.css"]
    }; }
    static get properties() { return {
        "figPath": {
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
            "attribute": "fig-path",
            "reflect": true
        },
        "figTitle": {
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
            "attribute": "fig-title",
            "reflect": true
        },
        "figPlaceHolder": {
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
            "attribute": "fig-place-holder",
            "reflect": true
        }
    }; }
    static get elementRef() { return "el"; }
}
