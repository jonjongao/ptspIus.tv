import store from "./store";

export default {
  getImgSrc: function(src) {
    var fix;
    if (src.includes("http")) fix = src;
    else fix = store.state.base + src;
    console.log("fix src from:" + src + " to:" + fix);
    return fix;
  }
};
