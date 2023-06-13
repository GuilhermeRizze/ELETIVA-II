<template>
   
    <header>
      
        <nav>
          <RouterLink to="/">Principal</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <router-link to="/teste">Teste</router-link>
        </nav>
    </header>

  </template>

<script>
export default{
    name:"Menu"
}
</script>

<style scoped>
    header{
        background-color: rgb(211,124,19);
        display: flex;
        height: 100px;
        color: black;
        justify-content: flex-end;
        align-items: center;
        padding: 20px;

    }
    a{
        text-decoration: none;
        margin: 20px;
        font-size: 16px;
    }
    a:hover{
        font-size:20px
    }
</style>