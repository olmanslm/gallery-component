import { a as patchEsm, b as bootstrapLazy } from './core-23268728.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["slm-figure_2", [[1, "slm-gallery", { "JSON_results": [16], "galleryTitle": [1537, "gallery-title"], "galleryDescription": [1537, "gallery-description"], "galleryItemPlaceHolder": [1537, "gallery-item-place-holder"] }], [1, "slm-figure", { "figPath": [1537, "fig-path"], "figTitle": [1537, "fig-title"], "figPlaceHolder": [1537, "fig-place-holder"] }]]]], options);
    });
};
export { defineCustomElements };
