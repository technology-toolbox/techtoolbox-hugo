import * as params from "@params";

// Global site tag (gtag.js) - Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", params.trackingCode);
