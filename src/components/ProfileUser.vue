<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="8" class="mx-auto">
          <!-- Profile Information Section -->
          <v-card class="pa-4 mb-4">
            <v-card-title>
              <h2>Profile Information</h2>
            </v-card-title>
            <v-card-subtitle>
              Update your account's profile information and email address
            </v-card-subtitle>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="profile.name"
                  label="Name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="profile.email"
                  label="Email"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="profile.studentId"
                  label="Student ID"
                  required
                ></v-text-field>
                <v-btn color="success" @click="saveProfile">Save</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
          <!-- Update Password Section -->
          <v-card class="pa-4">
            <v-card-title>
              <h2>Update Password</h2>
            </v-card-title>
            <v-card-subtitle>
              Ensure your account is using a long, random password to stay secure.
            </v-card-subtitle>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="password.current"
                  label="Current Password"
                  type="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password.new"
                  label="New Password"
                  type="password"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password.confirm"
                  label="Confirm Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn color="success" @click="updatePassword">Save</v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          name: 'Mahasiswa FILKOM',
          email: 'mahasiswafilkom@student.ub.ac.id',
          studentId: '215150400111901',
        },
        password: {
          current: '',
          new: '',
          confirm: '',
        },
      };
    },
    methods: {
      saveProfile() {
        // Handle profile save logic here
        console.log('Profile saved', this.profile);
      },
      updatePassword() {
        // Handle password update logic here
        if (this.password.new === this.password.confirm) {
          console.log('Password updated', this.password);
        } else {
          console.error('Passwords do not match');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .v-card-title h2 {
    margin: 0;
  }
  </style>
  