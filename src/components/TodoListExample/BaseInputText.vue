<template>
  <div>
    <input
      type="text"
      class="input"
      :value="value"
      placeholder="New todo (has v-model)"
      v-on="listeners"
      @keydown.enter="keyDownEnter"
    >
    <br><br>
    <input
      type="text"
      class="input"
      placeholder="New todo 2"
      @keyup="callKeyUpFun"
    >
  </div>
</template>

<script>
export default {
  props: {
    keyUpFun: {
      type: Function,
      default: function() {}
    },
    value: {
      type: String,
      default: '',
    }
  },
  methods: {
    keyDownEnter(event) {
      console.log('BaseInputText keyDown');
    },
    callKeyUpFun(event) {
      if (event.keyCode == 13) {
        //觸發vue註冊的event
        // this.$emit('input', event.target.value)
        // setTimeout(() => {
        //   this.$emit('keydown', event)
        // }, 1000);
        //使用props傳fun方式新增
        // this.keyUpFun(event.target.value);
      }
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => {
          this.$emit('input', event.target.value)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../variables.scss';

.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid $vue-blue;
}
</style>
