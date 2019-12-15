<template>
  <div class="container mx-auto text-center bg-gray-200 p-4 text-xl">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>
    <div class="days inline-block ">{{ days }} d</div>
    <div class="hours inline-block ">{{ hours }} h</div>
    <div class="minutes inline-block ">{{ minutes }} m</div>
    <div class="seconds inline-block ">{{ seconds }} s</div>
  </div>
</template>

<script>
import ClientCountdown from '@/client';

export default {
  name: "CounterClock",
  data() {
    return {
      date: Date.parse("2019-12-31"),
      now: new Date().getTime(),
      title: ""
    };
  },
  computed: {
    seconds: function() {
      return Math.trunc(((this.date - this.now) / 1000) % 60);
    },
    minutes: function() {
      return Math.trunc(((this.date - this.now) / 1000 / 60) % 60);
    },
    hours: function() {
      return Math.trunc(((this.date - this.now) / 1000 / 60 / 60) % 24);
    },
    days: function() {
      return Math.trunc((this.date - this.now) / 1000 / 60 / 60 / 24);
    }
  },
  mounted() {
      const client = new ClientCountdown();
      client.getCountdown(this.$route.params.id)
      .then(response => {
        //console.log(response);
        return response.data;
      })
      .then(data => {
        /* eslint-disable */
        console.log(data);
        /* eslint-disable */
        console.log(data[0].date);
        this.date = Date.parse(data[0].date);
        this.title = data[0].title;
      });
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }
};
</script>

<style></style>
