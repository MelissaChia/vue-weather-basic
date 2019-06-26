<template>
  <div class="home">
    <div class="col-8 offset-2">
      <nav class="navbar navbar-light bg-light navbar-expand-lg">
        <div class="container offset-2">
          <form class="form-inline">
            <input
              v-model="location"
              class="form-control mr-sm-4"
              style="width:25em"
              type="search"
              placeholder="Search"
            >
            <button
              @click="search()"
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >Search</button>
          </form>
        </div>
      </nav>
    </div>
    <div class="col-8 offset-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Today's Weather</h5>
          <!-- <h6 class="card-subtitle mb-2 text-muted">Location : {{forecast}}</h6> -->
          <p>Location : {{forecast.name}}</p>
          <p>Weather today : {{forecast.weather[0].main}}</p>
          <p>Weather description : {{forecast.weather[0].description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/lib/api";

export default {
  name: "home",
  data() {
    return {
      forecast: "",
      location: localStorage.location || ""
    };
  },
  mounted() {
    api.getForecast(this.location).then(result => {
      this.forecast = result;
    });
  },
  methods: {
    search() {
      localStorage.location = this.location;
      api.getForecast(this.location).then(result => {
        this.forecast = result;
      });
    }
  }
};
</script>
