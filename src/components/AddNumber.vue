<script setup>
import { ref } from 'vue'

// Define reactive variables
const a = ref('')
const b = ref('')
const c = ref(null)

// Function to add a + b
const add = () => {
  const numA = parseFloat(a.value)
  const numB = parseFloat(b.value)

  // Check if inputs are valid numbers
  if (!isNaN(numA) && !isNaN(numB)) {
    c.value = numA + numB
  } else {
    c.value = 'Invalid input'
  }
}
</script>

<template>
  <input v-model="a" type="text" placeholder="Enter A" />
  <input v-model="b" type="text" placeholder="Enter B" />
  <button @click="add">Add</button>
  <h3>Result: {{ c }}</h3>
</template>
