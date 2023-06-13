<template>
    <div>
      <h3>{{titulo}}</h3>
      <p>{{ img }}</p>
    </div>
  </template>
  
  <script>
  export default{
      name:"Propriedade",
      props: [
        'titulo',
        'img'
      ]
  }
  </script>