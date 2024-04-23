<template>
  <div class="space-y-4">
    <h1 class="text-2xl pb-6">Practice the Bocconi Online Test today</h1>

    <div>
      You will find here a solution to practice the <b class="text-semibold">Bocconi Online Test</b> with a large variety of questions.
    </div>

    <div class="text-center">
      <NuxtLink to="/test">
        <ButtonBase color="info">Practice the test!</ButtonBase>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({title: 'Practice the Bocconi Online Test'})
</script>
