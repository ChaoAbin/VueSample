<template>
    <div id="todoList">
        <h1>My Todo App!</h1>
        <BaseInputText 
            v-model="singleFileComponentsSample.newTodoText"
            :keyUpFun="addTodoOnKeyUpFun"
            @keydown.enter="addTodo"
            @blur="onBlur"
            @remove="removeTodo"
        />
        <ul v-if="singleFileComponentsSample.todos.length">
            <TodoListItem
                v-for="todo in singleFileComponentsSample.todos"
                :key="todo.id"
                :todo="todo"
                @remove="removeTodo"
            />
        </ul>
        <p v-else>
            Nothing left in the list. Add a new todo in the input above.
        </p>
    </div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'

let nextTodoId = 1

export default {
    created() {
        window.TodoList = this;
    },
    components: {
        BaseInputText, TodoListItem
    },
    data () {
        return {
            singleFileComponentsSample: {
                newTodoText: '',
                todos: [
                    {
                        id: nextTodoId++,
                        text: 'Learn Vue'
                    },
                    {
                        id: nextTodoId++,
                        text: 'Learn about single-file components'
                    },
                    {
                        id: nextTodoId++,
                        text: 'Fall in love'
                    }
                ]
            }
        }
    },
    methods: {
        onBlur (event) {
            console.log('testBlur: ', event);
        },
        addTodo () {
            console.log('it addTodo function (trigger on enterKey event)');
            const trimmedText = this.singleFileComponentsSample.newTodoText.trim()
            if (trimmedText) {
                this.singleFileComponentsSample.todos.push({
                    id: nextTodoId++,
                    text: trimmedText
                })
                this.singleFileComponentsSample.newTodoText = ''
            }
        },
        addTodoOnKeyUpFun (val) {
            val = val.trim();
            if (val) {
                this.singleFileComponentsSample.todos.push({
                    id: nextTodoId++,
                    text: val
                })
                this.singleFileComponentsSample.newTodoText = ''
            }
        },
        removeTodo (idToRemove) {
            this.singleFileComponentsSample.todos = this.singleFileComponentsSample.todos.filter(todo => {
                return todo.id !== idToRemove
            })
        }
    }
};
</script>

<style>
    #todoList {
        max-width: 400px;
        margin: 0 auto;
        line-height: 1.4;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $vue-blue;
    }
</style>