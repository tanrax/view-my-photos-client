<template>
  <div class="dashboard">
    <img alt="Vue logo" src="../assets/logo.png">
    <p class="text-red">testeando el mundo</p>
    <p class="text-green2">testeando el mundo</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'dashboard',
  components: {}
}
</script>

<style scoped>

$num-columns: 6;
$image-size: 200px;
$gap-size: 1rem;

.photos {
  display: grid;
  width: calc(100% - (#{$gap-size} * #{$num-columns}) + #{$gap-size});
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

$uncolor: orange;

.text-green2 {
  color: $uncolor;
}
</style>

