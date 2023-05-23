<template>
    <div>
        <h1>Disney</h1>
    
    <ul>
        <li v-for="(pok, key) in pokemons" :key="key">
            <a :href="pok.url" target="_blank"></a>
        </li>
    </ul>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import api from '../services/api'
    export default{
        name:"DisneyComponente",
        components: {
            api
        },
        data(){
            return{
                pokemons:[]
            }
        },
        mounted(){
            this.buscar
        },
        methods:{
            buscar(){
                api.get("/pokemon?offset=0&limit=1281")
                    .then(ret=> {
                        this.pokemons = ret.data.results
                        console.log(this.pokemons)
                    })
            }

        }
    }

</script>