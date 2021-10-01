<template>
<div class="home">
  <v-carousel cycle height="600px" max-width="1200px">
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
  <v-card
  class="mx-auto black"
  max-width="1000px"
  height="auto">
  
    <v-card-text>
      <div class="img1">
        <img  src="https://vettastore.com/wp-content/uploads/2021/01/Logo-06-e1610025404424.png" alt="logo vetta" width="400" >
      </div><br><br>
          <div class="text--secondary"><h5 class="texto">
          <p style="text-align: center" >
            Productos de alta calidad, a tu medida.</p></h5><br><br>
            
          </div>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://cdn.shopify.com/s/files/1/0594/4760/7503/files/55E99D48-5B0F-43BE-94FB-1E16E3797B5E.jpg?v=1629422215',
        },
        {
          src: 'https://cdn.shopify.com/s/files/1/0594/4760/7503/files/43EE5C8C-B98B-420B-8CCA-2D3C46224D8B.jpg?v=1629422212',
        },
        {
          src: 'https://vettastore.com/wp-content/uploads/2021/04/8999DCBF-4325-4502-B374-B40F9A5F88A0-scaled.jpg',
        },
        {
          src: 'https://vettastore.com/wp-content/uploads/2021/04/43EE5C8C-B98B-420B-8CCA-2D3C46224D8B-scaled.jpg',
        },
      ],
    }
  },

}
</script>

<style scoped>
.img1{
  display: flex;
  justify-content: center;
  
}
.texto{
  color: white;
}

v-card{
  color: Black;
}
</style>



    