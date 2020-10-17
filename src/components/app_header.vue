<template>
  <app-header _ngcontent-c5="" _nghost-c2="">
    <header _ngcontent-c2="">
      <nav
        _ngcontent-c2=""
        class="navbar fixed-top navbar-light bg-light navbar-expand-md"
      >
        <button
          _ngcontent-c2=""
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-target="#navbarSupportedContent"
          data-toggle="collapse"
          type="button"
          class="navbar-toggler"
        >
          <span _ngcontent-c2="" class="navbar-toggler-icon"></span>
        </button>
        <a _ngcontent-c2="" routerlink="/" :href="this.$store.state.base" class="navbar-brand"
          ><img
            _ngcontent-c2=""
            alt=""
            :src="getImgSrc('/static/pts_logo_l.png')"
        /></a>
        <div
          _ngcontent-c2=""
          id="navbarSupportedContent"
          class="collapse navbar-collapse"
        >
          <form
            v-on:submit.prevent="onSearch"
            _ngcontent-c2=""
            novalidate="novalidate"
            class="form-inline col-md-3 ng-untouched ng-pristine ng-valid"
          >
            <input
              v-model="trySearch"
              _ngcontent-c2=""
              aria-label="Search"
              placeholder=""
              type="search"
              class="form-control col-md-12"
            />
            <button
              _ngcontent-c2=""
              type="submit"
              class="btn btn-outline-primary"
            >
              搜尋
            </button>
          </form>
          <ul _ngcontent-c2="" class="navbar-nav">
            <li _ngcontent-c2="" class="nav-item">
              <a _ngcontent-c2="" class="nav-link disabled_href">頻道</a>
            </li>
            <li _ngcontent-c2="" class="nav-item registered">
              <a _ngcontent-c2="" class="nav-link disabled_href">
                <div _ngcontent-c2="" class="member_info">
                  <div _ngcontent-c2="" class="profile_image">
                    <img
                      _ngcontent-c2=""
                      alt=""
                      :src="getImgSrc('/static/member_profile_image.png')"
                    />
                  </div>
                  <div _ngcontent-c2="" class="member_name">
                    {{ loginName }}
                  </div>
                </div>
              </a>
            </li>
            <li _ngcontent-c2="" class="nav-item btn_vip_plan">
              <router-link
                _ngcontent-c2=""
                to="/payment-step-1"
                class="nav-link"
                >方案介紹</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </app-header>
</template>

<script>
export default {
  name: "Header",
  props: ["loginName"],
  data: function() {
    return {
      trySearch: ""
    };
  },
  methods: {
    onSearch: function() {
      this.$bus.$emit("trySearch", this.trySearch);
      this.trySearch = "";
    },
    getImgSrc: function(src) {
      if (src.includes("http")) return src;
      else return this.$store.state.base + src;
    }
  }
};
</script>

<style scoped></style>
