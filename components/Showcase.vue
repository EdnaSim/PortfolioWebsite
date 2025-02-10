<template>
  <div>
    <UCard :class="ui?.card ?? 'rounded-md m-2'">
      <template #header>
        <!--To put custom stuff in header, nest <template #header> in the Showcase attribute-->
        <slot name="header">
          <p :class="ui?.title ?? 'font-bold text-6xl'">{{ title }}</p>
        </slot>
        <slot name="subtitle">
          <p :class="ui?.subtitle ?? 'text-lg mt-2'">{{ subtitle }}</p>
        </slot>
      </template>

      <!--Body-->
      <div :class="ui?.bodyContainer ?? 'p-5'">
        <!--Body content, nest <template #body> in the Showcase attribute-->
        <slot name="body">

        </slot>
      </div>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
interface UIProp{
  card?: string,
  title?: string,
  subtitle?:string,
  bodyContainer?: string,
}

const props = defineProps<{
  title?: string,
  subtitle?:string,
  ui?: UIProp
}>();

</script>