import store from "./store";

export default {
  getImgSrc: function(src) {
    console.log("get img src");
    console.log("base is:"+store.state.base);
    if (src.includes("http")) return src;
    else return store.state.base + src;
  }
};
