<template>
<div  class="container">
  <h1 class="tittle text-center">Productos</h1>

    

        <div id="container3" class="row mt-md-5 mt-sm-5 mt-xs-5">
        
            <div class="col-lg-6 col-xs-12" v-for="(Productos, index) of news" :key="index">
                <div class="d-flex justify-content-center align-items-center">
    
                    <div class="p-3">
                        <img :src="Productos.imagen" alt="imagen news" width="150" height="150">
                    </div>
                    
                    <div class="p-2">
                        <h5>{{Productos.nombre}}</h5>
                        <p>
                            <br>
                          $ {{formatPrice(Productos.precio)}}
                        </p>
                    </div>
    
                </div>
                <div class="text-center">
    <v-btn
      rounded
      color="deep-purple darken-4"

      dark
    >
      Comprar
    </v-btn>
  </div>

            </div>
        
    </div>
    
</div>
    



</template>

<script>

import axios from 'axios';

export default {
    name: "SectionApi",
    data(){
        return{
            news: null
        }
    },
    mounted(){
        axios
        .get('http://localhost:3000/api/articulo/list')
        .then(response => {
            (this.news = response.data.slice(0,4))
            console.log(this.news)
        })
        
    },
    methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
}
    
}
</script>

<style scoped>

.container{
    background-color: black;
    color: white;
    width: 1200px;
    height: auto;
    margin-top: 0px;
}
#container3{
    background-color: black;
    color: white;
    margin-top: 20px;
    align-content: center;
}




</style>