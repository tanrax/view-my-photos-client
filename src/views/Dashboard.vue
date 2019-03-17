<template>
  <div class="dashboard">
    <div v-if="loading" class="lds-dual-ring"></div>
    <div class="grid-gallery">
        <a v-for="item in pagData" :key="item.name" :href="item.original" class="grid-gallery__item">
          <img :src="`${URL}thumbnails/${item.name}`" class="grid-gallery__image">
        </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

const MAX_ITEMS_PAG = 50;

export default {
    name: 'dashboard',
    components: {},
    data: function () {
        return {
            photos: [],
            pag: 1,
            loading: true
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
            let app = this;
            this.$axios.get('https://photos.programadorwebvalencia.com/data.json')
                .then(function (response) {
                    app.photos = response.data;
                    app.loading = false
              })
              .catch(function (error) {
                  console.log(error);
              });
      },
      handleScroll: function(e) {
          if(document.documentElement.getBoundingClientRect().height < e.pageY +  800) {
              this.pag += 1;
          }
      },
  }
}

</script>

<style scoped>

$color-theme: #4DBA87;
$size-loading: 100px;

body {
    min-height: 100vh;
}


.grid-gallery {
    display: grid;
    grid-auto-rows: 200px;
    grid-gap: 1rem;
    grid-auto-flow: row dense;
}

@media all and (min-width: 320px) {
    .grid-gallery {
        grid-template-columns: 1fr;
    }
}

@media all and (min-width: 768px) {
    .grid-gallery {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media all and (min-width: 1024px) {
    .grid-gallery {
        grid-template-columns: repeat(6, 1fr);
    }
}

.grid-gallery__item:nth-child(11n+1) {
    grid-column: span 1;
}

.grid-gallery__item:nth-child(11n+4) {
    grid-column: span 2;
    grid-row: span 1;
}

.grid-gallery__item:nth-child(11n+6) {
    grid-column: span 3;
    grid-row: span 1;
}

.grid-gallery__item:nth-child(11n+7) {
    grid-column: span 1;
    grid-row: span 2;
}

.grid-gallery__item:nth-child(11n+8) {
    grid-column: span 2;
    grid-row: span 2;
}

.grid-gallery__item:nth-child(11n+9) {
    grid-row: span 3;
}

@media all and (max-width: 320px) {
    .grid-gallery__item {
        grid-column: span 1 !important;
        grid-row: span 1 !important;
    }
}

.grid-gallery__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.lds-dual-ring {
    display: inline-block;
    width: $size-loading;
    height: $size-loading;
    position: fixed;
    top: calc((100vh / 2) - ($size-loading / 2));
    left: calc((100vw / 2) - ($size-loading / 2));
}
.lds-dual-ring:after {
    content: " ";
    display: block;
    width: $size-loading;
    height: $size-loading;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid $color-theme;
    border-color: $color-theme transparent $color-theme transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>

