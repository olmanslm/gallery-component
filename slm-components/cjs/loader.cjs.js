'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-ddb9c0c7.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["slm-figure_2.cjs",[[1,"slm-gallery",{"JSON_results":[16],"galleryTitle":[1537,"gallery-title"],"galleryDescription":[1537,"gallery-description"],"galleryItemPlaceHolder":[1537,"gallery-item-place-holder"]}],[1,"slm-figure",{"figPath":[1537,"fig-path"],"figTitle":[1537,"fig-title"],"figPlaceHolder":[1537,"fig-place-holder"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
