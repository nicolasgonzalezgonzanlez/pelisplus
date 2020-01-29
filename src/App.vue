<template>
  <v-app>
    <div>  
      <Menu />
      <router-view />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
export default {
  name: "App",

  components: {
    Menu,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
  .body {
    background: #020509;
  }
</style>
