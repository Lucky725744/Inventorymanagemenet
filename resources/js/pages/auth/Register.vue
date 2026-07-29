<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">

        <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5">

            <div class="text-center mb-5">
                <div class="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-600 flex items-center justify-center">
                    <span class="text-white text-lg font-bold">IM</span>
                </div>

                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
                    Create Account
                </h1>

                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Start managing your inventory
                </p>
            </div>

            <form @submit.prevent="register">

                <div class="mb-4">
                    <FloatLabel>
                        <InputText id="company" v-model="company" class="w-full" />
                        <label for="company">Company Name</label>
                    </FloatLabel>
                </div>

                <div class="mb-4">
                    <FloatLabel>
                        <InputText id="name" v-model="name" class="w-full" />
                        <label for="name">Full Name</label>
                    </FloatLabel>
                </div>

                <div class="mb-4">
                    <FloatLabel>
                        <InputText id="email" type="email" v-model="email" class="w-full" />
                        <label for="email">Work Email</label>
                    </FloatLabel>
                </div>

                <div class="mb-4">
                    <FloatLabel>
                        <InputText id="password" type="password" v-model="password" class="w-full" />
                        <label for="password">Password</label>
                    </FloatLabel>
                </div>

                <div class="mb-4">
                    <FloatLabel>
                        <InputText id="confirmPassword" type="password" v-model="confirmPassword" class="w-full" />
                        <label for="confirmPassword">Confirm Password</label>
                    </FloatLabel>
                </div>

                <div class="flex items-center mb-4">
                    <input type="checkbox" class="w-4 h-4 mr-2">
                    <span class="text-sm text-gray-600 dark:text-gray-300">
                        I agree to terms & conditions
                    </span>
                </div>

                <Button label="Create Account" severity="primary" class="w-full" />

            </form>

            <div class="text-center mt-4">
                <span class="text-sm text-gray-500 dark:text-gray-400">
                    Already have an account?
                </span>

                <a href="/login" class="text-sm text-blue-600 hover:underline ml-1">
                    Login
                </a>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const company = ref('');
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const register = () => {
    console.log({
        company: company.value,
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    });
};
</script>