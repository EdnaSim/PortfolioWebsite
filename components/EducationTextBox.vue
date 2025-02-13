<template>
  <!--Fade from l to r. Bg size doubled to accomodate the hover animation. Bg moves left to make it look like the color stretches-->
  <div class="px-2 py-1 rounded-lg 
  transition-all duration-500 bg-[linear-gradient(90deg,#b468df,#b468df_50%,transparent_75%)] bg-[length:200%_200%] bg-[100%_100%] hover:bg-[50%_0%]"
  @click="GotoLink()" :class="props.link? 'hover:cursor-pointer' : ''">
    <p class="font-bold">{{ title }}</p>
    <p><i>{{ subtitle }}</i></p>
    <div :class="extrasClass ?? ''">
      <slot name="extra">
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {type:String, required:true},
  subtitle: {type:String, required:false},
  link:{type:String, required:false},
  extrasClass: {type:String, required:false},
});

function GotoLink(){
  if (!props.link) return;
  //Navigate to the link on a new tab
  navigateTo(props.link, {
  open: {
    target: '_blank',
  }, 
  external:true,
})
}
</script>