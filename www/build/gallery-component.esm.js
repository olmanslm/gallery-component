import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-72fd76ec.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["slm-figure",[[1,"slm-figure",{"figPath":[1537,"fig-path"],"figTitle":[1537,"fig-title"],"figPlaceHolder":[1537,"fig-place-holder"]}]]],["slm-gallery",[[1,"slm-gallery",{"JSON_results":[16],"galleryTitle":[1537,"gallery-title"],"galleryDescription":[1537,"gallery-description"],"galleryItemPlaceHolder":[1537,"gallery-item-place-holder"]}]]]], options);
});
