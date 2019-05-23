<template>
    <div>
        <ol type="1" start="1">
            <h1>
                <li>Template Syntax: </li>
            </h1>
            <div class="example">
                <button v-bind:id="ex1.dynamicId" v-bind:disabled="ex1.isButtonDisabled">{{ ex1.message }}</button>
                <br><br>
                <div v-html="ex1.htmlStr"></div>
                <br>
                <div v-if="ex1.exIf">This is v-if</div>
                <div v-else>This is v-else</div>
                <br>
                <div v-on:click="exOnClick">This is v-on</div>
                <br>
                <div v-for="val in ex1.exFor" v-html="val"/>
            </div>
            <h1>
                <li>Class and Style Bindings:</li>
            </h1>
            <div class="static example"
             v-bind:class="{ active: ex2.isActive, 'text-danger': ex2.hasError }"
             v-bind:style="{ color: ex2.activeColor, fontSize: '24px' }">This is v-bind:class & style</div>
        </ol>
        <div style="height: 30px;"></div>
        <BaseInputText 
            v-model="singleFileComponentsSample.newTodoText"
            :keyUpFun="addTodoOnKeyUpFun"
            @keydown.enter="addTodo"
            @blur="testBlur"
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
            ex1: {
                htmlStr: "This is v-html",
                message: "#text",
                exIf: false,
                dynamicId: 'testButton',
                isButtonDisabled: false,
                exFor: [1, 2, 3, 4]
            },
            ex2: {
                isActive: true,
                hasError: false,
                activeColor: 'green'
            },
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
        exOnClick(event) {
            alert('v-on on click');
        },
        testBlur (event) {
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
    .example {
        width: 90%;
        padding: 20px;
        background-color: rgba(0,0,0,0.1);
        border-radius: 5px;
        border: 1px solid gray;
    }
</style>