<template>
    <MainForm :view="location"></MainForm>
</template>

<script lang="ts">
import auth from "@/services/auth";
import MainForm from "@/components/MainForm.vue";
export default {
    name: "ViewHome",
    components: {
        MainForm: MainForm
    },
    onMounted: () => {
        if (auth.getUserLogged()) {
            location.href = '/shop';
        } else {
            location.href = '/home';
        }
    },
    computed: {
        userLogged() {
            return auth.getUserLogged();
        },
        location() {
            const dir = location.href.split('/').pop()!;
            return dir == 'login' ? 'Login' : dir == 'register' ? 'Signin' : 'Login';
        }
    }
};
</script>
<style lang="less">
.setView('Login');
@import url('../app.less');
</style>