<template>           
        <input 
            type="text"
            placeholder="Pesquise um personagem"
            v-model="consulta"
            @input="onSearchChange"
            id="caixa"
        >   
        <ul class="lista">
            <li v-for="(item, key) in itens" :key="key" class="persona">
                <div class="conteudo">
                    <a :href="item.imageUrl" target="_blank">
                        <img :src="item.imageUrl">
                    </a>
                    <h3>{{ item.name }}</h3>
                </div>
            </li>
        </ul>

</template>

<script>
    import api from '../services/api.js'

    export default {
        name: "CompDisney",
        components: {
            api
        },
        data() {
            return {
                consulta: "",
                itens: [],
                timeout: null
            }
        },
        mounted(){
            this.buscar()
        },
        methods: {
            buscar() {                
                let url = "&name=" + this.consulta
                api.get(url)
                    .then(retornar => {
                        if (Array.isArray(retornar.data.data)) {
                            this.itens = retornar.data.data;
                        } else {
                            this.itens = [retornar.data.data];
                        }
                    });
            },
            onSearchChange() {
                this.itens = [];
                clearTimeout(this.timeout);                
                this.timeout = setTimeout(() => {
                    this.buscar();
                }, 300);
            }
        }
    }
</script>
<style scoped>
    #caixa{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }
    .lista
    {
        display: flex;
        flex-wrap: wrap;
    }
    .lista .persona
    {
        margin: 5px;
        border-radius: 30px;
        background: #0044ff;
        overflow: hidden;
        display: flex;
        justify-content: center;
        text-align: center;
    }
    
    .lista .persona .conteudo a img
    {
        display: flex;
        position: relative;
        width: 100%;
        height: 75%;
        object-fit: contain;
    }
</style>
