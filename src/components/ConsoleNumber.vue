<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>Do you want to book this schedule?</v-card-title>
            <v-card-subtitle>
              Enter the number of consoles according to the number of players who will play on one PC
            </v-card-subtitle>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Jumlah Console"
                  type="number"
                  v-model="jumlahConsole"
                  :rules="consoleRules"
                  min="1"
                  max="2"
                  required
                ></v-text-field>
                <div>Maximal 2</div>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outlined @click="cancelBooking">CANCEL</v-btn>
              <v-btn color="green" @click="bookNow">BOOK NOW</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jumlahConsole: 1,
        consoleRules: [
          v => !!v || 'Jumlah Console is required',
          v => (v >= 1 && v <= 2) || 'Jumlah Console must be between 1 and 2'
        ]
      };
    },
    methods: {
      cancelBooking() {
        this.jumlahConsole = 1;
      },
      bookNow() {
        this.$router.push({ name: 'Dashboard' });
      }
    }
  };
  </script>
  
  <style>
  .title {
    font-weight: bold;
  }
  </style>
  