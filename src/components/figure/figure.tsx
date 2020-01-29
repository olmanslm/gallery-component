import { Component, h, Prop, Element, Host } from "@stencil/core";

@Component({
  tag: "slm-figure",
  styleUrl: "./figure.css",
  shadow: true
})
export class Figure {
  @Element() el: HTMLElement; // Html Element object
  @Prop({ mutable: true, reflectToAttr: true }) figPath: string; //path from the prop attribute
  @Prop({ mutable: true, reflectToAttr: true }) figTitle: string; //title from the prop attribute
  @Prop({ mutable: true, reflectToAttr: true }) figPlaceHolder: string; //place holder text from the prop attribute
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
  `; //This is an html template just for demostration
  placeHolderTemplate = ` <div class="placeHolder">
    <img src="../../assets/Shape@3x.svg" alt="SVG camera image" />
    <p>${this.figPlaceHolder}</p>
  </div>
  `; //This is an html template just for demostration
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
