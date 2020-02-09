<template>
  <div class="container mt-50">
    <table class="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th>Temperature</th>
        <th>Humidity</th>
        <th>Latitude</th>
        <th>Altitude</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in dataIot" :key="data._id"> 
        <td>{{data.temperature}}</td>
        <td>{{data.humidity}}</td>
        <td>{{data.latitude}}</td>
        <td>{{data.altitude}}</td>
        <td>
          <a @click="removeItem(data._id)" class="button is-danger">X</a>
        </td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  },
  data (){
    return{
        dataIot: ''
    }
  },
  methods: {
    getData(){
      let data = {
        id_userF: localStorage.getItem('user_id')
      }
      const access_token = localStorage.getItem('token')
      this.$http.defaults.headers.common['Authorization'] = `Bearer ${access_token}` 
      this.$http
        .post('http://localhost:3000/api/databyuser',data)
        .then(response => (this.dataIot = response.data))
    },
    removeItem(product_id){
            console.log(product_id)
            this.$http.delete('http://localhost:3000/api/data/'+product_id)
            .then(response => {
              console.log(response.data);
            this.getData()
      });
        }
  },
  mounted() {
    this.getData()
  }
}
</script>
