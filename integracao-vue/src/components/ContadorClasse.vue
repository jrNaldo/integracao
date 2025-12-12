<template>
    <div>
        <h1>Contador(Classe)</h1>
        <h2>{{ valor }}</h2>
        <button @click="setValor(1)">+</button>
        <button @click="setValor(-1)">-</button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class ContadorClasse extends Vue{
        private valor: number = 0

        public setValor(d: number){
            this.valor += d
        }
    }
</script>

<style>
    
</style>