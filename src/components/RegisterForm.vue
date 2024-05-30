<template>
    <v-container class="d-flex flex-column align-center justify-center" style="height: 100vh;">
        <v-card class="elevation-12" style="width: 400px; padding: 20px;">
            <v-img src="@/assets/logo.png" contain height="150" class="mb-5"></v-img>
            <v-form>
                <v-text-field label="Name" v-model="name" :rules="[rules.required]" required></v-text-field>
                <v-text-field label="Email" v-model="email" :rules="[rules.required, rules.email]"
                    required></v-text-field>
                <v-text-field label="Password" v-model="password" :type="'password'" :rules="[rules.required]"
                    required></v-text-field>
                <v-text-field label="Confirm Password" v-model="confirmPassword" :type="'password'"
                    :rules="[rules.required, passwordMatch]" required></v-text-field>
                <v-checkbox label="Remember me" v-model="rememberMe"></v-checkbox>
                <v-btn color="primary" @click="register" class="mt-4">Register</v-btn>
                <v-btn text @click="login" class="mt-2">Already have an account</v-btn>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
import axios from "../axios"

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            rememberMe: false,
            rules: {
                required: value => !!value || 'Required.',
                email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
            }
        }
    },
    methods: {
        async register() {
            if (this.password !== this.confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            // Perform registration logic here
            console.log('Register:', this.name, this.email, this.password, this.rememberMe);

            await axios.post("/register", { name: this.name, email: this.email, password: this.password })

            this.$router.push("/dashboard");
        },
        login() {
            // Redirect to login page
            console.log('Redirect to login');
            this.$router.push("/login");
        },
        passwordMatch(value) {
            return value === this.password || 'Passwords do not match';
        }
    }
}
</script>

<style scoped>
.v-card {
    background-color: #2c3e50;
    color: white;
}

.v-text-field label {
    color: white !important;
}

.v-text-field input {
    color: white !important;
}
</style>