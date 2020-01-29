import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "slm-gallery",
  styleUrl: "gallery.css",
  shadow: true
})
export class Gallery {
  @Prop() JSON_results: { title: string; path: string }[] = [];
  @Prop({ mutable: true, reflectToAttr: true }) galleryTitle: string;
  @Prop({ mutable: true, reflectToAttr: true }) galleryDescription: string;
  @Prop({ mutable: true, reflectToAttr: true }) galleryItemPlaceHolder: string;
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
