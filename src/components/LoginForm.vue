<template>
    <v-container class="d-flex flex-column align-center justify-center" style="height: 100vh;">
        <v-card class="elevation-12" style="width: 400px; padding: 20px; background-color: #2c3e50;">
            <v-img src="@/assets/logo.png" contain height="150" class="mb-5"></v-img>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field label="Email" v-model="email" :rules="[rules.required, rules.email]"
                    required></v-text-field>
                <v-text-field label="Password" v-model="password" :type="'password'" :rules="[rules.required]"
                    required></v-text-field>
                <v-checkbox label="Remember me" v-model="rememberMe"></v-checkbox>
                <v-btn color="primary" @click="login" class="mt-4">Login</v-btn>
                <v-btn text @click="register" class="mt-2">Don't have an account? Register</v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import axios from '../axios';

export default {
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            rememberMe: false,
            rules: {
                required: value => !!value || 'Required.',
                email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
            }
        }
    },
    methods: {
        async login() {
            if (this.$refs.form.validate()) {
                const user = {
                    email: this.email,
                    password: this.password,
                    rememberMe: this.rememberMe,
                };

                try {
                    // Replace with your API endpoint
                    const response = await axios.post('/login', user);
                    console.log('Login successful:', response.data);

                    // Redirect to home or another page if needed4

                    this.$router.push("/dashboard");
                } catch (error) {
                    console.error('Login failed:', error);
                    alert('Login failed. Please try again.');
                }
            }
        },
        register() {
            // Redirect to register page
            console.log('Redirect to register');
            this.$router.push("/register");
        }
    }
}
</script>

<style scoped>
.v-card {
    color: white;
}

.v-text-field input {
    color: white !important;
}
</style>