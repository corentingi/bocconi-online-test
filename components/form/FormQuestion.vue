<template>
  <div class="space-y-3">
    <template v-if="question.figure && 'image_src' in question.figure">
      <div>
        <img class="max-h-48 max-w-full mx-auto" :src="question.figure.image_src">
      </div>
    </template>
    <template v-else-if="question.figure && 'data' in question.figure">
      <div>
        <h4 class="text-base text-center font-semibold mb-2">Reply to the next question referring also to the table below</h4>
        <div class="overflow-x-auto">
          <table class="w-full *:*:border *:*:px-1">
            <tr :key="i" v-for="(line, i) in question.figure.data">
              <template :key="`${i}-${j}`" v-for="(cell, j) in line">
                <th class="text-left" v-if="i === 0">{{ cell }}</th>
                <td v-else>{{ cell }}</td>
              </template>
            </tr>
          </table>
        </div>
        <h5 class="text-sm  text-center font-semibold" v-if="question.figure.legend">{{ question.figure.legend }}</h5>
      </div>
    </template>
    <template v-else-if="question.figure && 'text' in question.figure">
      <div>
        <h4 class="text-base text-center font-semibold mb-2">Read the passage below and use the information to answer the next question</h4>
        <h5 class="text-base mb-1" v-if="question.figure.legend">{{ question.figure.legend }}</h5>
        <p class="text-justify">{{ question.figure.text }}</p>
      </div>
    </template>

    
    <div>
      <h3 class="text-base font-semibold">{{ question.text }}</h3>
      <template v-for="answer in question.answers" :key="answer.uuid">
        <label :for="`answer-${answer.uuid}`" class="flex gap-4 items-center rounded-md hover:bg-blue-50 !cursor-pointer px-4 py-2">
          <input type="radio" :name="`question-${question.uuid}`" :id="`answer-${answer.uuid}`"/>
          <div class="flex-grow">{{ answer.text }}</div>
        </label>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ question: Question }>()
</script>
