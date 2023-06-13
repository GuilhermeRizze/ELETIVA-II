<template>
    <div >
        <div >            
            <input 
                type="text"
                placeholder="Buscar personagem"
                v-model="caixa_busca"
                @input="onSearchChange"
            >
        </div>
        <ul class="container">
            <li v-for="(character, key) in characters" :key="key" class="card">
                <div class="content">
                    <a :href="character.imageUrl" target="_blank">
                        <img :src="character.imageUrl">
                    </a>
                    <h2>{{ character.name }}</h2>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import api from '../services/api.js'

    export default {
        name: "ComponenteDisney",
        components: {
            api
        },
        data() {
            return {
                caixa_busca: "",
                characters: [],
                timeout: null
            }
        },
        mounted(){
            this.buscar()
        },
        methods: {
            buscar() {                
                let url = "&name=" + this.caixa_busca
                api.get(url)
                    .then(ret => {
                        if (Array.isArray(ret.data.data)) {
                            this.characters = ret.data.data;
                        } else {
                            this.characters = [ret.data.data];
                        }
                        console.log(this.characters);
                    });
            },
            onSearchChange() {
                this.characters = [];
                clearTimeout(this.timeout);                
                this.timeout = setTimeout(() => {
                    this.buscar();
                }, 300);
            }
        }
    }
</script>


