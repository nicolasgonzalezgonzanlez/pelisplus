<template>
<div>
    <v-layout column>
      <v-flex>
        <div>
          <v-img
            :src="'https://image.tmdb.org/t/p/w500' + pelis[0].imgBack"
            :aspect-ratio="1"
            class="imgMax"
          >
            <v-layout
              align-left
              column
              class="quicksand"
            >
              <div class="atras" />
              <div class="delante">
                <div class="white--text">
                  <v-breadcrumbs class="white--text" :items="bread" divider="-" />
                </div>
                <v-container class="adelante">
                  <v-layout fill-height row wrap hidden-sm-and-down>
                    <v-flex xs12 md5 text-xs-center class="mb-5">
                      <v-img
                        :src="'https://image.tmdb.org/t/p/w500' + pelis[0].img"
                        :aspect-ratio="1"
                        max-width="400px"
                      />
                    </v-flex>
                    <v-flex xs12 md7 text-xs-center class="mb-5 white--text">
                      <h1>{{ pelis[0].title }}</h1>
                      <div>
                      {{ pelis[0].date }}
                      </div>
                      <div class="my-5">
                        <v-divider dark/>
                        <p>{{ pelis[0].overview }}</p>
                        <div class="my-5">
                          <span>Duracion:  {{ pelis[0].runtime }} minutos</span>
                        </div>
                      </div>
                      <div>
                        <v-layout fill-height row wrap class="my-5">
                          <v-flex xs9 text-xs-center class="mb-5">
                            <div class="mx-5">
                              <div class="text-center">
                                <v-chip
                                  v-for="p in pelis[0].generes"
                                  :key="p.id"
                                  class="ma-2"
                                  color="success"
                                  outlined
                                >
                                  {{p.name}}
                                </v-chip>
                              </div>
                            </div>
                          </v-flex>
                          <v-flex xs3 text-xs-center class="mb-5">
                            <v-progress-circular
                              :size="100"
                              :width="15"
                              :value="pelis[0].vote * 10"
                              color="teal"
                            >
                              {{ pelis[0].vote }}
                            </v-progress-circular>
                          </v-flex>
                        </v-layout>
                      </div>
                    </v-flex>
                  </v-layout>
                  <v-layout fill-height row wrap hidden-md-and-up>
                    <v-flex xs12 md5 text-xs-center class="mb-5">
                      <v-img
                        :src="'https://image.tmdb.org/t/p/w500' + pelis[0].img"
                        :aspect-ratio="1"
                      />
                    </v-flex>
                    <v-flex xs12 text-xs-center class="mx-5 white--text">
                      <h1>{{ pelis[0].title }}</h1>
                      <div>
                      {{ pelis[0].date }}
                      </div>
                      <div class="my-5">
                        <v-divider dark/>
                        <p>{{ pelis[0].overview }}</p>
                        <div class="my-5">
                          <span>Duracion:  {{ pelis[0].runtime }} minutos</span>
                        </div>
                      </div>
                      <div>
                        <v-layout fill-height row wrap class="my-5">
                          <v-flex xs9 text-xs-center class="mb-5">
                            <div class="mx-5">
                              <div class="text-center">
                                <v-chip
                                  v-for="p in pelis[0].generes"
                                  :key="p.id"
                                  class="ma-2"
                                  color="success"
                                  outlined
                                >
                                  {{p.name}}
                                </v-chip>
                              </div>
                            </div>
                          </v-flex>
                          <v-flex xs3 text-xs-center class="mb-5">
                            <v-progress-circular
                              :size="100"
                              :width="15"
                              :value="pelis[0].vote * 10"
                              color="teal"
                            >
                              {{ pelis[0].vote }}
                            </v-progress-circular>
                          </v-flex>
                        </v-layout>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-container>
              </div>
            </v-layout>
          </v-img>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pelis: [],
      bread: [
        {
          text: 'Home',
          disabled: false,
          href: '/'
        }
      ]
    }
  },
  /* eslint-disable */
  created(){
    this.apiGet()
  },
  methods: {
    apiGet() {
      const key = 'd4be0a070609a82f261c06e7d2bd0600'
      fetch(`https://api.themoviedb.org/3/movie/${this.$store.state.id}?api_key=${key}`)
        .then(data => {
          return data.json();
        })
        .then(response => {
          console.log(response)
            this.pelis.push({
              img: response.poster_path,
              imgBack: response.backdrop_path,
              title: response.title,
              date: response.release_date,
              overview: response.overview,
              generes: response.genres,
              runtime: response.runtime,
              vote: response.vote_average
            })
          this.bread.push({
            text: response.title,
            disabled: false,
            href: '/'
          })
        })
    }
  }
}
/* eslint-enable */
</script>
<style scss>
  .atras {
    position: absolute;
    background-color: black;
    height: 100%;
    width: 100%;
    opacity: .6;
  }
  .delante {
    position: relative;
  }
    @media(max-width: 600px){
    .adelantes {
      margin-top: 50px;
    }
  }
  @media(min-width: 599px){
    .adelante {
      margin-top: 70px;
    }
    .imgMax {
      max-height: 800px;
    }
  }
</style>

