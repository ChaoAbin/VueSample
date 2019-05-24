<template>
    <button v-on:click="count++" style="margin: 0px 10px">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
    name: 'ButtonCounter',
    data() {
        return {
            count: 0
        }
    },
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    }
}
</script>

<style>
</style>
