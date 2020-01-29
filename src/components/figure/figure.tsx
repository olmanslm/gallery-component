import { Component, h, Prop, Element, Host } from "@stencil/core";

@Component({
  tag: "slm-figure",
  styleUrl: "./figure.css",
  shadow: true
})
export class Figure {
  @Element() el: HTMLElement;
  @Prop({ mutable: true, reflectToAttr: true }) figPath: string;
  @Prop({ mutable: true, reflectToAttr: true }) figTitle: string;
  @Prop({ mutable: true, reflectToAttr: true }) figPlaceHolder: string;
  figureTemplate = `
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
  placeHolderTemplate = ` <div class="placeHolder">
    <img src="../../assets/Shape@3x.svg" alt="SVG camera image" />
    <p>${this.figPlaceHolder}</p>
  </div>
  `;
  attachFigure() {
    let container = this.el.shadowRoot.querySelector(".container");
    let outputHtml = this.el.shadowRoot.querySelector("div.placeHolder")
      ? this.figureTemplate
      : this.placeHolderTemplate;
    container.innerHTML = outputHtml;
  }
  render() {
    return (
      <Host>
        <div class="container" onClick={this.attachFigure.bind(this)}>
          <div class="placeHolder">
            <img src="../../assets/Shape@3x.svg" alt="SVG camera image" />
            <p>{this.figPlaceHolder}</p>
          </div>
        </div>
      </Host>
    );
  }
}
