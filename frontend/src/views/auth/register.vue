<template>
    <div class="container mt-50">
        <div class="column is-6 is-offset-3">
            <h3 class="title is-3">
                Create Account
            </h3>
            <hr>
            <div class="notification is-danger " v-if="error">
                {{error}}
            </div>
            <form action="#" @submit.prevent="register">
                <div class="field">
                <label class="label">Username</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Alex Smith" v-model="username">
                </div>
                </div>

                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email">
                </div>
                </div>
                <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" v-model="password">
                </div>
                </div>
                <button type="submit" class="button is-primary">Sign up</button>
            </form>

            <div class="mt-10 has-text-centered">
                <p>Already have an account?<router-link to="/login" class="is-primary"> Sign-in</router-link></p>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'Register',
    data (){
        return{
            username: '',
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        register(){
            console.log("presione")
            if (this.username && this.email && this.password){
                let data = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                }
                this.$http.post("http://localhost:3000/api/users/signUp",data)
                    .then((response)=>{
                        const token = (response.data.accessToken)
                        localStorage.setItem('token', token)
                        this.$router.push({name: 'home'})
                    }).catch(err =>{
                        this.error = err.message
                    })
                
            }else{
                this.error = 'Todos los campos son requeridos'
            }
        }
    }
}
</script>