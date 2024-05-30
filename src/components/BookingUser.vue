<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12" sm="6" md="4">
        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :nudge-right="40"
          transition="scale-transition" offset-y min-width="290px">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="date" label="Date" prepend-icon="mdi-calendar" readonly v-bind="attrs"
              v-on="on"></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu = false"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-btn color="success" @click="search">Search</v-btn>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="12" md="4" v-for="(console, index) in _schedules" :key="index">
        <v-card>
          <v-card-title>{{ `${console.name} - Konsol nomor ${console.console_available_id}` }}</v-card-title>
          <v-list>
            <v-list-item v-for="(slot, slotIndex) in console.schedules" :key="slotIndex"
              class="d-flex justify-space-between align-center">
              <v-chip class="ma-2" color="blue lighten-4">
                {{ `${slot.start}-${slot.end}` }}
              </v-chip>
              <v-chip class="ma-2" :color="slot.available ? 'green lighten-4' : 'grey lighten-4'">
                {{ slot.status }}
              </v-chip>

              <v-btn v-if="slot.status === 'AVAILABLE'" color="success" @click="book(slot)">
                Book
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "../axios";
export default {
  data() {

    return {
      menu: false,
      date: null,
      schedules: [
        [
          { time: '09:30 - 10:30', available: false },
          { time: '10:30 - 11:30', available: true },
          { time: '11:30 - 12:30', available: true },
        ],
        [
          { time: '12:30 - 13:30', available: true },
          { time: '13:30 - 14:30', available: true },
          { time: '14:30 - 15:30', available: true },
        ],
        [
          { time: '15:30 - 16:30', available: true },
          { time: '16:30 - 17:30', available: true },
        ],
      ],
      _schedules: []
    };
  },
  created() {
    this.fetchSchedules()
  },
  methods: {
    search() {
      // Handle search logic, e.g., fetch schedule for the selected date
      console.log('Selected date:', this.date);
    },
    book(slot) {
      // Handle booking logic, e.g., navigate to console selection page
      console.log('Booking slot:', slot.time);
      this.$router.push(`/booking/${slot.id}`);
    },
    async fetchSchedules() {
      const { data } = await axios.get("/schedule")

      const schedules = Object.keys(data).map((i) => data[i])

      this._schedules = schedules;
    }
  },
};
</script>

<style scoped>
.v-list-item {
  border-bottom: 1px solid #e0e0e0;
}
</style>
