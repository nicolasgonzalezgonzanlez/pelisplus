<template>
  <v-container>
    <v-layout fill-height row wrap>
      <v-flex xs12>
        <v-form
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
          v-on:submit.prevent="search"
        >
          <v-layout flex>
            <v-flex xs12>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Que te gustaria ver?"
                required
                class="mx-5"
              />
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
      <v-flex
        v-for="p in pelis"
        :key="p.id"
        xs12
        sm6
        md6
        lg4
        class="my-2"
      >
        <v-card
          class="mx-2"
        >
          <v-img
            :src="'https://image.tmdb.org/t/p/w500' + p.poster_path"
            height="200px"
            aspect-ratio="2"
          >
            <v-chip
              color="red"
              text-color="white"
            >
              {{ p.vote_count }}
            </v-chip>
          </v-img>
          <v-card-title primary-title class="d-flex mt-auto">
            <div>
              <div class="headline">
                {{ p.title }}
              </div>
              <span class="grey--text" v-html="p.descipcionCorta" />
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="deep-purple accent-4"
              text
              @click="ir(p.id)"
            >
              Detalles
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      name: '',
      nameRules: [
        v => !!v || 'La busqueda no puede estar vacia',
        v => (v && v.length >= 2) || 'Tan pocos caracteres?'
      ],
      valid: true,
      lazy: false,
      pelis: [],
    }
  },
  /* eslint-disable */
  watch: {
    name(newSearch, oldSearch){
      this.pelis = []
      this.apiGet()
    }
  },
  methods: {
    apiGet() {
      const key = 'd4be0a070609a82f261c06e7d2bd0600'
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.name}`)
        .then(data => {
          return data.json();
        })
        .then(response => {
          const res = response.results
          for (const key in res) {
              this.pelis.push({
                id: res[key].id,
                poster_path: res[key].poster_path,
                title: res[key].title,
                vote_count: res[key].vote_count,
              })
            }
        });
    },
    ir (key) {
      this.$store.commit('id', key)
      this.$router.push({ name: 'id', params: { key } })
    }
  }
}
/* eslint-enable */
</script>

<style>
</style>
