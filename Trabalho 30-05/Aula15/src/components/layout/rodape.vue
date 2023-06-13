<template>
    <footer>
        <h2>Rodape</h2>
    </footer>
  </template>
<script>
export default{
    name:"Rodape"
}
</script>

<style scoped>
    footer{
        display: flex;
        height: 80px;
        width: 100%;
        justify-content: center;
        align-items: center;
        bottom: 0;
        position: absolute;
        background-color: #111;
    }
    h2{
        color: #fffccc;
        font-size: 15px;
    }
</style>