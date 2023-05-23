<template>
  <DisneyComponente/>
</template>

<script>
  import primeirocomponente from './component/primeirocomponente.vue'
  import DisneyComponente from './component/disneycomponente.vue'
export default {
  name:"App",
  components:{
    primeirocomponente,
    DisneyComponente,
  }
  
}
</script>