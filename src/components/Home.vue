<template>
  <div class="mx-auto h-full flex justify-center items-center w-full max-w-xs">
    <form
      v-on:submit.prevent="submitForm"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
          Título
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Título"
          v-model="title"
        />
        <div
          v-if="errors.title"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          {{ errors.title[0] }}
        </div>
        <div
          v-if="!$v.title.minLength"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          El título debe tener más de {{$v.title.$params.minLength.min}}
        </div>
      </div>
      <div class="mb-6">
        <DateTimePicker v-model="date" @update="date = $event;"></DateTimePicker>
        <div
          v-if="errors.date"
          class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          {{ errors.date[0] }}
        </div>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          ¡Crear Countdown!
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import ClientCountdown from "@/client";
import DateTimePicker from "@/components/DateTimePicker"
import { minLength } from 'vuelidate/lib/validators'


export default {
  name: "Home",
  components: {
    DateTimePicker
  },
  data() {
    return {
      title: "",
      date: null,
      errors: []
    };
  },
  validations: {
    title: {
      minLength: minLength(3)
    }
  },
  methods: {
    submitForm() {

      /* eslint-disable */
      console.log("enviado");

      new ClientCountdown()
        .sendCountdown({
          title: this.title,
          date: this.date
        })
        .then(response => {
          /* eslint-disable */
          console.log(response);
          //alert(`El contador creado es ${response.data.id}`)
          this.$router.push({
            path: `/countdown/${response.data.id}`
          })
        })
        .catch(error => {
          /* eslint-disable */
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
