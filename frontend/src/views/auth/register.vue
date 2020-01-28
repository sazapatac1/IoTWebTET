<template>
    <div class="container">
        <div class="column is-6 is-offset-3">
            <h3 class="title is-3">
                Create Account
            </h3>
            <hr>
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
                <button type="submit" class="button is-link">Sign up</button>

            </form>
            <div class="notification is-danger " v-if="error">
                {{error}}
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
            if (this.username && this.email && this.password){
                //post user
            } else{
                this.error = 'Todos los campos son requeridos prro'
            }
        }
    }
}
</script>