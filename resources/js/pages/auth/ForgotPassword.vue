<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">
        <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5">

            <div class="text-center mb-5">
                <div class="w-12 h-12 mx-auto mb-3 rounded-lg bg-blue-600 flex items-center justify-center">
                    <span class="text-white text-lg font-bold">IM</span>
                </div>

                <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
                    Forgot Password?
                </h1>

                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Enter your email to reset your password
                </p>
            </div>

            <form @submit.prevent="forgotPassword">
                <FloatLabel>
                    <InputText id="email" type="email" v-model="email" class="w-full" />
                    <label for="email">Email Address</label>
                </FloatLabel>

                <Button label="Send Reset Link" severity="primary" class="w-full mt-5" />
            </form>

            <div class="text-center mt-4">
                <a href="/login" class="text-sm text-blue-600 hover:underline">
                    Back to Login
                </a>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const forgotPassword = () => {
    console.log({ email: email.value });
};
</script>