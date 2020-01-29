import { r as registerInstance, h, H as Host, c as getElement } from './core-72fd76ec.js';

const Figure = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
  `;
        this.placeHolderTemplate = ` <div class="placeHolder">
    <img src="../../assets/Shape@3x.svg" alt="SVG camera image" />
    <p>${this.figPlaceHolder}</p>
  </div>
  `;
    }
    attachFigure() {
        let container = this.el.shadowRoot.querySelector(".container");
        let outputHtml = this.el.shadowRoot.querySelector("div.placeHolder")
            ? this.figureTemplate
            : this.placeHolderTemplate;
        container.innerHTML = outputHtml;
    }
    render() {
        return (h(Host, null, h("div", { class: "container", onClick: this.attachFigure.bind(this) }, h("div", { class: "placeHolder" }, h("img", { src: "../../assets/Shape@3x.svg", alt: "SVG camera image" }), h("p", null, this.figPlaceHolder)))));
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  font-family: var(--font-family, \"sans-serif\");\n  width: 100%;\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n:host .container {\n  width: 100%;\n}\n\n:host .placeHolder {\n  background-color: var(--figure-background-color, lightgray);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-line-pack: distribute;\n  align-content: space-around;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  border-radius: 4px;\n  border-radius: 4px;\n  font-weight: bold;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  color: var(--figure-svg-fill, whitesmoke);\n  padding: 4rem 3.5rem;\n  margin: 0 auto;\n\n}\n\n:host .gallery-figure {\n  background-color: #F6F9FD;\n  border-radius: 4px;\n  border-radius: 4px;\n  height: 100%;\n  min-width: 12rem;\n}\n\n\n:host .placeHolder p {\n  text-align: center;\n  font-size: var(--figure-svg-text, 0.8rem);\n  margin: 0.5rem auto 0;\n}\n\n:host .gallery-figure {\n  margin: 0;\n}\n\n:host .gallery-image {\n  width: 100%;\n}\n\n:host .title {\n  text-align: left;\n  color: var(--figure-title-color, #333);\n  font-weight: var(--figure-title-weight, normal);\n  width: 100%;\n  margin: 1rem 0;\n  padding: 0 1rem;\n  width: auto;\n  display: block;\n  font-size: 0.7rem;\n}"; }
};

export { Figure as slm_figure };
