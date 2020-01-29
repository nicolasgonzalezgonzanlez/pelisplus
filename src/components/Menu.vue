<template>
  <v-card
    flat
    tile
  >
    <v-toolbar 
      dense 
      color="#081c24"
      class="white--text"
      height="85px"
    >
      <v-img max-width="60px" :src="logo" />
      <v-toolbar-title class="pl-3">PelisPlus</v-toolbar-title>
    </v-toolbar>
  </v-card>
</template>
<script>
import logo from '@/assets/logo.png'
export default {
  data () {
    return {
      logo: logo,
      name: ''
    }
  }
}
</script>
