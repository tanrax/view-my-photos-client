<template>
  <div class="dashboard">
    <div class="photos">
      <a v-for="item in pagData" :key="item.name" class="photos__item" :href="item.original">
          <img :src="`thumbnails/${item.name}`">
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

const MAX_ITEMS_PAG = 50;
let app = this;

export default {
  name: 'dashboard',
  components: {},
  data: function () {
    return {
      photos: [],
      pag: 1
    }
  },
  mounted: function() {
      // Get data
      this.getData();
      // Enable scroll infinity
      window.onscroll = this.handleScroll;
  },
  computed: {
      limitItems: function () {
          return this.pag * MAX_ITEMS_PAG;
      },
      pagData: function() {
          return this.photos.slice(0, this.limitItems);
      }
  },
  methods: {
      getData: function () {
          this.axios.get('https://photos.programadorwebvalencia.com/data.json')
              .then(function (response) {
                  app.photos = app._.sortBy(JSON.parse(response.data), ['date']);
              })
              .catch(function (error) {
                  console.log(error);
              });
      },
      handleScroll: function(e) {
          if(document.documentElement.getBoundingClientRect().height < e.pageY +  800) {
              app.pag += 1;
          }
      },
  }
}

</script>

<style scoped>

$num-columns: 6;
$image-size: 200px;
$gap-size: 1rem;

.photos {
  display: grid;
  width: calc(100% - ($gap-size * $num-columns) + $gap-size);
  grid-template-columns: repeat($num-columns, 100% / $num-columns);
  grid-auto-rows: $image-size;
  grid-gap: $gap-size;
  grid-auto-flow: row dense;
  &__item {
    font-size: 2em;
    background: yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    &:nth-child(11n+1) {
      grid-column: span 1;
    }
  }
}

</style>

