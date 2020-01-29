import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "slm-gallery",
  styleUrl: "gallery.css",
  shadow: true
})
export class Gallery {
  @Prop() JSON_results: { title: string; path: string }[] = []; //Future fetched values will be stored in this array.
  @Prop({ mutable: true, reflectToAttr: true }) galleryTitle: string; //gallery title from the prop attribute
  @Prop({ mutable: true, reflectToAttr: true }) galleryDescription: string; //gallery description from the prop attribute
  @Prop({ mutable: true, reflectToAttr: true }) galleryItemPlaceHolder: string; //gallery item place holder from the prop attribute

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
    let content = (
      <Host>
        <section class="gallery">
          <header>
            <h2 class="gallery-title">{this.galleryTitle || "Title"}</h2>
            <p class="gallery-description">
              {this.galleryDescription || "Description"}
            </p>
          </header>
          <div class="container">
            <div class="row">
              {this.JSON_results.map(result => (
                <div class="column">
                  <slm-figure
                    fig-title={result.title}
                    fig-path={result.path}
                    fig-place-holder={this.galleryItemPlaceHolder || "Lorem!"}
                  />
                </div>
              ))}
            </div>
          </div>
          <footer>
            <a
              href="https://www.linkedin.com/in/olmanslm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>&copy; Copyright 2020 @olmanslm.com</small>
            </a>
          </footer>
        </section>
      </Host>
    );
    return content;
  }
}
