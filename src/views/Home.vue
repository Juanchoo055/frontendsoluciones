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
        <img  src="https://cdn.shopify.com/s/files/1/0594/4760/7503/files/logoblancoopt.png?v=1633106212" alt="logo vetta" width="400" >
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
          src: 'https://cdn.shopify.com/s/files/1/0594/4760/7503/files/8999DCBF-4325-4502-B374-B40F9A5F88A0_d6892c2d-c0da-43ca-b712-b64029fdc851.jpg?v=1629422040',
        },
        {
          src: 'https://cdn.shopify.com/s/files/1/0594/4760/7503/files/BANNER.png?v=1629213097',
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



    