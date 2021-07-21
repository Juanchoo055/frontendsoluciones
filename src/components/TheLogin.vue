<template>
<div class="blue-grey lighten-5">
<v-spacer />
    <h3 class="tittle text-center">Inicio de sesión</h3><br>
<v-spacer />
    <img class="img1" src="https://vettastore.com/wp-content/uploads/2021/01/Logo-05-e1609969188638-140x59.png" alt="Logo vetta" width="150" align="right" background="Black">
        <div class = "container">
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label text dark">Email</label>
                <div class="col-sm-6">
                    <input v-model="login.email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label text dark">Password</label>
                <div class="col-sm-6">
                    <input v-model="login.password" type="password" class="form-control" id="inputPassword">
                </div>
            </div>
            <button v-on:click="iniciarSesion" type="button" class="btn btn-primary purple">Iniciar Sesión</button>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert';
export default {
    Name:"Login",
    data(){
        return{
            login: {
                email: '',
                password: '',
            }
        }
    },
    methods:{
        async iniciarSesion(){
            //Función de iniciar sesion            
            try{
                this.$axios.post( '/api/usuario/login', this.login )
                .then((response) => {
                let token = response.data.tokenReturn;
                let user = response.data.user;
                if(token){
                    localStorage.setItem('jwt', token)
                    localStorage.setItem('user',JSON.stringify(user))
                    swal("Éxito!", "Ha iniciado sesión correctamente!", "success");
                    this.$router.push('/home');
                }else{
                    swal("!", "Usuario o Contraseña incorrectas!", "error");
                }
                })
            .catch (error=>{
                return error
                })
                
                
            }catch(error){
                swal("Oops!", "Usuario o Contraseña incorrectas!!", "error");
            }
        }
    }
}
</script>

<style scoped>
.img1{
    margin-right: 300px;
    margin-bottom: 80px;
}
</style>