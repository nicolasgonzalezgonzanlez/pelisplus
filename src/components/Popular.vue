<template>
  <v-container>
    <v-layout fill-height row wrap>
      <v-flex xs12 text-xs-center class="mb-5">
        <p class="text-center display-1 font-weight-light light-green--text text--darken-4">
          Peliculas populares
        </p>
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
      pelis: []
    }
  },
  created() {
    this.apiGet();
  },
/* eslint-disable */
  methods: {
    apiGet() {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d4be0a070609a82f261c06e7d2bd0600&language=en-US&page=1`)
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
};
/* eslint-enable */
</script>
