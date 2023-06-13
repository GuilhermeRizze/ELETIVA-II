<template>
  <div class="about">
    <h1>ABOUT</h1>
    <div>
      <input type="text" placeholder="Digite o titulo" v-model="titulo"/>
      <br/>
      <p>{{ titulo }}</p>
    </div>
    <Propriedade 
      v-bind:titulo="titulo"
      v-bind:img="estados" />
  
</div>
</template>
<script>
import Propriedade from './Propriedade.vue'
export default{
    name:"About",
    components: {Propriedade},
    data() {
      return{
      titulo: "",
      estados: ['SP', 'RJ', 'MT', 'AM']
    }},
    setup(){

    }
}
</script>


