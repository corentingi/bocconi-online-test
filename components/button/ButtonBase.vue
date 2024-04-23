<template>
  <button class="group">
    <div :class="[roundedClass, sideColorClass, sideGroupActiveClass]">
      <div :class="[roundedClass, faceColorClass, faceSizeClass]">
        <slot />
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {type: String, default: 'white'},
  size: {type: String, default: 'md'},
})

const roundedClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'rounded-sm'
    case 'md':
    default:
      return 'rounded-md'
    case 'lg':
      return 'rounded-lg'
    case 'xl':
      return 'rounded-xl'
  }
})

const sideGroupActiveClass = computed(() => {
  return 'pb-1 group-active:pb-0 mt-0 group-active:mt-1'
})

const faceSizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-2 py-0'
    case 'md':
    case 'lg':
    case 'xl':
    default:
      return 'px-3 py-1'
  }
})

const faceColorClass = computed(() => {
  switch (props.color) {
    case 'info':
      return 'text-white bg-blue-600 group-hover:bg-blue-700'
  
    case 'white':
    default:
      return 'bg-white border-2 border-slate-300 group-hover:bg-slate-50 group-hover:border-slate-400'
  }
})

const sideColorClass = computed(() => {
  switch (props.color) {
    case 'info':
      return 'bg-blue-800 group-hover:bg-blue-900'
  
    case 'white':
    default:
      return 'bg-slate-300 group-hover:bg-slate-400'
  }
})
</script>
