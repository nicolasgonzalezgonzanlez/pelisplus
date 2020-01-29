<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white--text text-center flex"
      color="#081c25"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-3 white--text"
          icon
          :href="icon.href"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
       Proyecto creado con Vue.js <br />
El proyecto fue creado como parte de una prueba de Avalith, la idea era consumir una api y mostrar los resultados.  Para leer mas sobre el proyecto, visitar el repositorio en <a href="https://github.com/nicolasgonzalezgonzanlez/pelisplus" target="_blank"> GitHub</a>.
      </v-card-text>

      <v-divider></v-divider>
      <v-card-text class="white--text">
        2020 — <strong>Nicolas Gonzalez</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  components: {
  },
  data () {
    return {
      icons: [
        {
          icon: 'fab fa-github',
          href: 'https://github.com/nicolasgonzalezgonzanlez'
        },
        {
          icon: 'fab fa-linkedin',
          href: 'https://www.linkedin.com/in/nicol%C3%A1s-gonzalez-gonzalez/'
        }
      ]
    }
  }
}
</script>

<style>
    
</style>