<template>
    <div class="omnishop-main" :aria-roledescription="view">
        <div class="omnishop-main-icons">
            <i class="omni-icon--ligth"></i>
            <img src="../assets/hand-card.png" alt="hand-card--icon">
        </div>
        <div class="caption--container">
            <label class="caption-form">
                <span>Bienvenido &nbsp;</span>
                <span>a <br>Omnishop</span>
            </label>
        </div>
        <div class="container">
            <v-if ref="view ==='login'">
                <div class="form-field">
                    <label class="caption-label" for="user">Ingresa con tus datos</label>
                    <div class="field">
                        <input id="userusername" type="text" required autocomplete="off">
                        <label for="username" data-title="Email o nombre de usuario"
                            title="Email o nombre de usuario"></label>
                    </div>
                    <button class="btn-main--purple"> Ingresar</button>
                </div>
            </v-if>
            <v-else v-if="view === 'register'">
                <h1>Regitrarse</h1>
                <button class="btn-main--purple"> Registrarse</button>
            </v-else>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
    props: {
        view: String
    },
})
export default class MainForm extends Vue {
    view!: string
}
</script>