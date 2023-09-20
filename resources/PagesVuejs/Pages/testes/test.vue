<template>
    <appHead title="teste" />
    <div class="container mt-5 position-relative">
        <h1>Teste de email</h1> <br>
        <form>
        <div class="mb-3">
            <label for="emailUser" class="form-label">Email address</label>
            <input type="email" name="emailUser" class="form-control" id="emailUser" v-model="userCV.emailUser" placeholder="name@example.com emailUser">
            {{ errors.emailUser }}
        </div>
        <button @click="sendEmail" type="button" class="btn btn-success">enviar</button>      
        </form>
    </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useForm, router  } from "@inertiajs/vue3";

const userCV = useForm({
    emailUser: '',
});

defineProps({errors: Object});
// const resposta = ref('');

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
    else Toast.fire({ icon: 'info', title: 'Deve ser um email válido!' });
}

// Função assíncrona externa
const sendEmail = async  () => {
  try {

     router.post(route('sendEmail'), userCV);

  } catch (error) {
    console.log('errors aqui: ' + error);
  }
}
</script>

<!-- MAIL_MAILER=smtp
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=06becccfd0dec5
MAIL_PASSWORD=76ed525718e98b 
MAIL_ENCRYPTION=null
-->

<!-- 
    usando o goole

MAIL_MAILER=smtp
MAIL_HOST=smtp.googlemail.com
MAIL_PORT=465
MAIL_USERNAME=marcellosh12@gmail.com
MAIL_PASSWORD=hxix mrnw otvl avfk
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=marcellosh12@gmail.com
MAIL_FROM_NAME="${APP_NAME}"
-->

<!-- 
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
}); -->