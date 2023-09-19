<template>
    <appHead title="teste" />
    <div class="container mt-5 position-relative">
        <h1>Teste de email</h1> <br>
        <form>
        <div class="mb-3">
            <label for="emailUser" class="form-label">Email address</label>
            <input type="email" name="emailUser" class="form-control" id="emailUser" v-model="userCV.emailUser" placeholder="name@example.com emailUser">
        </div>
        <button @click="sendingMail" type="button" class="btn btn-success">enviar</button>      
        </form>
    </div>
</template>
<script setup>
import { computed } from "vue";
import { useForm, router } from "@inertiajs/vue3";

const userCV = useForm({
    emailUser: 'marcellosh_12@hotmail.com',
    // emailUser: '',
});

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

const ValidateEmail = computed(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (emailRegex.test(userCV.emailUser) && userCV.emailUser !== '');;
    
});

const sendingMail = () => {
    if(ValidateEmail.value) sendEmail();
    // if(ValidateEmail.value) console.log('email enviado: ' + ValidateEmail.value);
    else Toast.fire({ icon: 'info', title: 'Deve ser um email válido!' });
}

function sendEmail(){
    try {
        router.post(route('sendEmail'), userCV, {
            onBefore: (visit) => {},
            onStart: (visit) => {},
            onProgress: (progress) => {},
            onSuccess: (page) => { 
                if(page) Toast.fire({ icon: 'success', title: 'Enviado com successo!' });
             },
            onError: (errors) => { 
                if(errors) Toast.fire({ icon: 'Error', title: 'Erro ao Enviar o curriculo' });
             },
            onCancel: () => {},
            onFinish: visit => {  },
        });
    } catch (error) {
        console.log(error);
    }
}
</script>