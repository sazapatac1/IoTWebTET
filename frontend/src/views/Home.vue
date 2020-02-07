<template>
  <div class="container mt-50">
    <table class="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th>Temperature</th>
        <th>Humidity</th>
        <th>Latitude</th>
        <th>Altitude</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in dataIot" :key="data._id"> 
        <td>{{data.temperature}}</td>
        <td>{{data.humidity}}</td>
        <td>{{data.latitude}}</td>
        <td>{{data.altitude}}</td>
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
  mounted() {
    let data = {
      id_userF: localStorage.getItem('user_id')
    }
    this.$http
      .post('http://localhost:3000/api/databyuser',data)
      .then(response => (this.dataIot = response.data))
  },
}
</script>
