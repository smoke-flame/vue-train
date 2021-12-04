<template>
  <nav class="nav">
  <div class="nav__title">

  <router-link to="/" class="nav__link">
    <ui-button>Home page</ui-button>
  </router-link>

  </div>
    <div class="nav__links">
        <router-link
            v-for="route in routes"
            :key="route"
            :to="route"
            class="nav__link"
        >
          <ui-button class="nav__btn">
            {{ route[0].toUpperCase()+ route.substr(1) }}
          </ui-button>
         </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    routes: ['photos', 'todos']
  })

}
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  background-color: #fff;

}
.nav__link {
  text-decoration: none;
  color: inherit;
}

.nav__btn {
  margin-left: 10px;
}

</style>