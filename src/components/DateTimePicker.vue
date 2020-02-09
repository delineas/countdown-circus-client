<template>
  <div>
      <VueCtkDateTimePicker v-model="calendarData" format="YYYY-MM-DD HH:mm" formatted="YYYY-MM-DD HH:mm"  label="Elige fecha y hora" :min-date="minDate()" @input="$emit('update', calendarData)" />
  </div>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

export default {
    name: "DateTimePicker",
    components: {
        VueCtkDateTimePicker
    },
    data() {
        return {
            calendarData: null
        }
    },
    methods: {
        getDate(date) {
            return (date.getDate().toString().length < 2) ? `0${date.getDate()}` : date.getDate();
        },
        getMonth(date) {
            const month = 1 +  date.getMonth();
            return (month.toString().length < 2) ? `0${month}` : month;
        },
        minDate() {
            const now = new Date;
            /* eslint-disable */
            console.log(`${now.getFullYear()}-${this.getMonth(now)}-${this.getDate(now)} 00:00 a`);
            return `${now.getFullYear()}-${this.getMonth(now)}-${this.getDate(now)} 00:00 a`;
        }
    }
}
</script>

<style>

</style>