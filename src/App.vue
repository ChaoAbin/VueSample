<template>
    <div>
        <Ch1 v-show="ch1Show" />
        <TodoList />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Ch1 from './components/example/Ch1.vue'
import TodoList from './components/TodoListExample/TodoList.vue'

export default {
    name: 'app',
    data() {
        return {
            ch1Show: true
        }
    },
    components: {
        HelloWorld,
        Ch1,
        TodoList
    }
}
</script>

<style>
</style>