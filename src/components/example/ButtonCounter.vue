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
    }
}
</script>

<style>
</style>
