<template>
    <div class="container mt-50">
        <div class="column is-6 is-offset-3">
            <h3 class="title is-3">
                Sign in to IoT WEB
            </h3>
            <hr>
            <div class="notification is-danger " v-if="error">
                {{error}}
            </div>
            <form action="#" @submit.prevent="login">
                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g. alexsmith@gmail.com" v-model="email">
                </div>
                </div>
                <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" v-model="password">
                </div>
                </div>
                <button type="submit" class="button is-primary">Sign in</button>
            </form>

            <div class="mt-10 has-text-centered">
                <p>New user? <router-link to="/register" class="is-primary">Create an account</router-link></p>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'Login',
    data (){
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login(){
            this.error = ''
            if (this.email && this.password){
                let data = {
                    email: this.email,
                    password: this.password
                }
                this.$http.post("http://localhost:3000/api/users/signIn",data)
                    .then((response)=>{
                        const token = response.data.accessToken
                        const userID = response.data.id
                        localStorage.setItem('token', token)
                        localStorage.setItem('user_id', userID)
                        this.$router.push({name: 'home'})
                    }).catch(err =>{
                        this.error = err.message
                    })
                    
            } else{
                this.error = 'Todos los campos son requeridos'
            }
            
        }
    }
}
</script>