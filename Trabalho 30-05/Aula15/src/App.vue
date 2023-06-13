<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from '../src/components/layout/menu.vue'
import Rodape from '../src/components/layout/rodape.vue'
</script>

<template>
  <div>
  <Menu />
  <RouterView />
  <Rodape />
</div>
</template>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>
