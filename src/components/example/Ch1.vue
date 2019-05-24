<template>
    <ol type="1" start="1">
        <h1>
            <li>Template Syntax: </li>
        </h1>
        <ul>
            <h3>
                <li>#text:</li>
            </h3>
            <div class="example">
                <div>{{ ex1.text }}</div>
            </div>
            <h3>
                <li>v-text:</li>
            </h3>
            <div class="example">
                <div v-text="ex1.text" />
            </div>
            <h3>
                <li>v-html:</li>
            </h3>
            <div class="example">
                <div v-html="ex1.html" />
            </div>
        </ul>
        <h1>
            <li>Computed Properties: </li>
        </h1>
        <div class="example">
            <div>{{ ex2.text }}</div>
            <br>
            <div>{{ reversedMessage }}</div>
        </div>
        <h1>
            <li>Class and Style Bindings:</li>
        </h1>
        <div class="example">
            <div class="static"
             v-bind:class="{ active: ex3.isActive, 'text-danger': ex3.hasError }"
             v-bind:style="{ color: ex3.activeColor, fontSize: '24px' }">This is v-bind:class & style</div>
        </div>
        <h1>
            <li>Conditional Rendering: </li>
        </h1>
        <div class="example">
            <div v-if="ex4">This is v-if</div>
            <div v-else>This is v-else</div>
        </div>
        <h1>
            <li>List Rendering: </li>
        </h1>
        <div class="example">
            <div v-for="val in ex5" v-html="val"/>
        </div>
        <h1>
            <li>Event Handling: </li>
        </h1>
        <div class="example">
            <div v-on:click="exOnClick">This is v-on</div>
        </div>
        <h1>
            <li>Form Input Bindings: </li>
        </h1>
        <ul>
            <h3>
                <li>v-model:</li>
            </h3>
            <div class="example">
                <input v-model="ex7.vModel" placeholder="edit me">
                <p>v-model output str: {{ ex7.vModel }}</p>
            </div>
            <h3>
                <li>v-bind:</li>
            </h3>
            <div class="example">
                <button v-bind:id="ex7.dynamicId" v-bind:disabled="ex7.isButtonDisabled" @click="ex7onClick">ex v-bind</button>
            </div>
        </ul>
        <h1>
            <li>Components Basics: </li>
        </h1>
        <ul>
            <h3>
                <li>global components:</li>
            </h3>
            <div class="example">
                <global-button-counter />
                <global-button-counter />
            </div>
            <h3>
                <li>Single File Components:</li>
            </h3>
            <div class="example">
                <ButtonCounter />
                <ButtonCounter />
            </div>
        </ul>
  </ol>
</template>

<script>

import Vue from 'vue'
import ButtonCounter from './ButtonCounter'

Vue.component('global-button-counter', {
    data() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++" style="margin: 0px 10px">You clicked me {{ count }} times.</button>'
});

export default {
    name: 'Ch1',
    components: {
        ButtonCounter
    },
    data() {
        return {
            ex1: {
                text: '#text msg',
                html: "This is v-html"
            },
            ex2: {
                text: "hello"
            },
            ex3: {
                isActive: true,
                hasError: false,
                activeColor: "green"
            },
            ex4: true,
            ex5: [1, 2, 3, 4],
            ex6: "",
            ex7: {
                vModel: "v-model",
                dynamicId: "testButton",
                isButtonDisabled: false
            }
        }
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.ex2.text.split('').reverse().join('')
        }
    },
    methods: {
        exOnClick(event) {
            alert('v-on on click');
        },
        ex7onClick(event) {
            alert('v-bind on click');
        }
    },
    created() {
        window.Ch1 = this;
    }
}
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
