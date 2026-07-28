<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">

        <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

            <h1 class="text-3xl font-bold text-center text-gray-800 mb-2">
                Inventory Management
            </h1>

            <p class="text-center text-gray-500 mb-8">
                Login to your account
            </p>


            <form @submit.prevent="login">

                <!-- Email -->
                <FloatLabel>
                    <InputText class="w-full border bg-gray-100 mb-2" v-model="email" />
                    <label for="email">Email</label>
                </FloatLabel>

                <!-- Password -->
                <FloatLabel>
                    <InputText  class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" v-model="password" type="password" />
                    <label for="password">Password</label>
                </FloatLabel>

                


                <!-- Remember -->
                <div class="flex items-center mb-6">

                    <input
                        type="checkbox"
                        class="mr-2"
                    >

                    <span class="text-gray-600">
                        Remember me
                    </span>

                </div>

            </form>

        </div>

    </div>
</template>


<script setup>

import { ref } from 'vue';


const email = ref('');
const password = ref('');


const login = () => {

    console.log({
        email: email.value,
        password: password.value
    });

};

</script>