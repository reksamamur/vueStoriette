<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="bg_nav" sticky>
      <div class="container custom_container">
        <b-navbar-brand href="#">
          <img src="../assets/logo1.png" class="img_nav">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-modal ref="modal" hide-footer title="Categories" header-border-variant="0">
              <Categories v-bind:categori="category"/>
            </b-modal>
            <b-button class="btn_categories" @click="openModal">Categories</b-button>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div class="sign_div">
              <b-button class="btn_yellow btn_m">Sign in</b-button>
              <b-button class="btn_outline_yellow btn_m">Sign up</b-button>
            </div>
            <div class="profile_div">
              <b-nav-item-dropdown text="Username" right>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign out</b-dropdown-item>
              </b-nav-item-dropdown>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
.custom_drop {
  display: block;
  width: 100%;
}
.navbar-nav > li > .dropdown-menu {
  width: yourwidth;
}
</style>

<script>
import Categories from "./Categories.vue";
export default {
  components: {
    Categories
  },
  methods: {
    openModal() {
      this.$refs.modal.show();
    }
  },
  data() {
    return {
      category: [
        {
          id: 1,
          name: "Action",
          icon: "snowboarding",
          color: "#0075f6"
        },
        {
          id: 2,
          name: "Drama",
          icon: "theater-masks",
          color: "#b824a4"
        },
        {
          id: 3,
          name: "Comedy",
          icon: "grin-squint-tears",
          color: "#fdd043"
        },
        {
          id: 4,
          name: "Romance",
          icon: "heart",
          color: "#ff0b55"
        },
        {
          id: 5,
          name: "Tragedy",
          icon: "car-crash",
          color: "#014441"
        },
        {
          id: 6,
          name: "Horror",
          icon: "ghost",
          color: "#01252a"
        }
      ]
    };
  }
};
</script>
