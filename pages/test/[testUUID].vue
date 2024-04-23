<template>
  <div class="px-2 md:px-4 lg:px-8 py-10 space-y-6">
    <h1 class="text-2xl">Bocconi Online Test Practice</h1>

    <div class="flex flex-col gap-10">
      <div :key="question.uuid" v-for="(question, index) in questions">
        <h2 class="text-lg mb-5 text-center border-b border-slate-200">Question {{ index + 1 }}</h2>
        <FormQuestion :question="question" />
      </div>
    </div>

    <div class="text-center">
    <ButtonBase color="info">Envoyer</ButtonBase>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({title: 'Bocconi Online Test Practice'})

const route = useRoute()

const { data: questions, pending } = await useAsyncData<Question[]>(
    `test:${route.params.testUUID}`,
    async () => { return BOCCONI_QUESTIONS },
)
</script>
