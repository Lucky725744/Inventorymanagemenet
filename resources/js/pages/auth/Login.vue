<template>
    <div class="min-h-screen flex items-center justify-center 
                bg-gray-100 dark:bg-gray-900 px-4">


        <div class="w-full max-w-md 
                    bg-white dark:bg-gray-800 
                    rounded-2xl shadow-xl 
                    p-8">

            <!-- Header -->
            <div class="text-center mb-10">

                <div class="w-16 h-16 mx-auto mb-4
                            rounded-full bg-blue-600
                            flex items-center justify-center">

                    <span class="text-white text-2xl font-bold">
                        IM
                    </span>

                </div>


                <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Inventory Management</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-300">
                    Login to your account
                </p>

            </div>



            <form @submit.prevent="login">
                <!-- Email -->
                <div class="mb-8">
                    <FloatLabel>
                        <InputText
                            id="email"
                            v-model="email"
                            class="w-full dark:bg-gray-700 dark:text-white"
                        />
                        <label for="email">Email Address</label>
                    </FloatLabel>
                </div>

                <!-- Password -->
                <div class="mb-8">
                    <FloatLabel>
                        <InputText
                            id="password"
                            type="password"
                            v-model="password"
                            class="w-full dark:bg-gray-700 dark:text-white"
                        />
                        <label for="password">Password</label>
                    </FloatLabel>
                </div>

                <!-- Remember -->
                <div class="flex justify-between items-center mb-6">
                    <div class="flex items-center">
                        <input
                            type="checkbox"
                            class="w-4 h-4 mr-2"
                        >

                        <span class="text-sm 
                                     text-gray-600
                                     dark:text-gray-300">

                            Remember me

                        </span>

                    </div>


                    <a href="#"
                       class="text-sm text-blue-600 hover:underline">

                        Forgot password?

                    </a>

                </div>




                <!-- Buttons -->
                <div class="space-y-3">


                    <Button
                        label="Login"
                        severity="primary"
                        class="w-full"
                    />


                    <Button
                        label="Register"
                        severity="secondary"
                        outlined
                        class="w-full"
                    />


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