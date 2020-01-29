import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "gallery-component",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [{ src: "assets" }]
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
      copy: [{ src: "assets" }]
    }
  ]
};
