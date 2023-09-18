<template>
    <appHead title="teste" />
    <div class="container mt-5 position-relative">
        <h1>Teste de email</h1> <br>
        <form @submit.prevent="sendEmail">
        <div class="mb-3">
            <label for="emailInput" class="form-label">Email address</label>
            <input type="email" name="emailInput" class="form-control" id="emailInput" v-model="userCV.emailInput" placeholder="name@example.com">
        </div>
        <button type="submit" class="btn btn-success">enviar</button>
        </form>
    </div>
</template>
<script setup>
import { useForm, router } from "@inertiajs/vue3";

const userCV = useForm({
    emailInput: 'marcellosh_12@hotmail.com',
    descriptionInput: 'Teste de conteudo de email',
});

function sendEmail(){
    try {
        router.post(route('sendEmail'), userCV, {
            onBefore: (visit) => {},
            onStart: (visit) => {},
            onProgress: (progress) => {},
            onSuccess: (page) => { alert('Sucesso'); },
            onError: (errors) => { alert('Error'); },
            onCancel: () => {},
            onFinish: visit => {  },
        });
    } catch (error) {
        console.log(error);
    }
}
</script>