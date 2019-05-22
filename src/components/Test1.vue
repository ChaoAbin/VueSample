<template>
  <div>
  		This is test 1
  		<Test2 />
  </div>
</template>

<script>
import Test2 from './Test2.vue'

export default {
  name: 'Test1',
  components: {
  	Test2
  },
  props: {
    msg: String
  }
}
</script>

<style>
</style>
