<template>
  <v-app id="inspire">
    <v-app-bar app
    absolute
        
        color="white"
        dark
        shrink-on-scroll
        scroll-target="#scrolling-techniques-1"
        height="60px"
        
    >
    <template v-slot:img="">
      
    </template>
      <v-app-bar-nav-icon @click="drawer = !drawer" color="black"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
            <a class="nav-link" href="/Usuarios">Agregar Usuario</a>
          </v-btn>
          <a class="nav-link" href="/Home">Inicio</a>
          <a class="nav-link" href="/Tienda">Tienda</a>               
      </v-app-bar>
    <v-navigation-drawer
    v-model="drawer" 
    fixed temporary>
      <v-card class="mx-auto" width="300">
        <v-list>
          <v-list-item 
          to="Home">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon >

            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item 
          to="Login">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon >

            <v-list-item-title>Inicio de sesión</v-list-item-title>
          </v-list-item>

          <v-list-group :value="true" prepend-icon="mdi-account-circle">
            <template v-slot:activator>
              <v-list-item-title>Usuarios</v-list-item-title>
            </template>

            <v-list-group :value="true" no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="([title, icon, ruta], i) in admins" 
              :key="i" 
              :to=ruta
              link>
                <v-list-item-title v-text="title">Administracion</v-list-item-title>

                

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group no-action sub-group>
              
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Actions</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item 
              v-for="([title, icon, ruta], i) in cruds" 
              :key="i" 
              :to="ruta"
              link
              >

                <v-list-item-title v-text="title"></v-list-item-title>
                        
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            
            </v-list-group>
          </v-list-group>
          <v-list-item 
          @click="cerrarSesion"
          to="Login">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon >

          <v-list-item-title>Cerrar sesion</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    

    <v-main class="black">
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
      <v-container> </v-container>
    </v-main>
    <div>
</div>
  </v-app>
</template>

<script>


export default {
  name: "App",



  data: () => ({
    //

    methods: {
      cerrarSesion () {
        localStorage.removeItem("token")
        
      }
    },
    drawer: null,
    admins: [
      ["Usuarios", "mdi-account-multiple-outline", "Usuarios"],
      
    ],
    cruds: [
      ["Articulos", "mdi-cart", "Articulos"],
      ["Categorias", "mdi-view-list", "Categorias"],
  
    ],

    
  }),

}
</script>


<style scoped>
  .nav-link{
  color: black;
  font-size: 200;
}
.nav-link:hover{
  font-weight: 500;
  color: grey ;
  text-decoration: none ;
}

.subheading{
  font-size: 14px;
  color: white;
  text-align: left;
  margin-left: 200px;

}
.textr {
  font-size: 14px;
  color: white;
  text-align: right;
  margin-right: 200px;

}

    
</style>