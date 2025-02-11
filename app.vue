<script setup lang="ts">
import ToggleLightMode from './components/ToggleLightMode.vue';

//Layout names
const ABOUTME_LAYOUT = "introduction";
const SHOWCASE_LAYOUT = "assignment-showcase";
//layout titles
const ABOUTME_TITLE = "About me";
const SHOWCASE_TITLE = "Showcase";

const layoutName = ref(ABOUTME_LAYOUT);

const nav = ref([{
  label: ABOUTME_TITLE,
  click: ()=> layoutName.value = ABOUTME_LAYOUT,
},{
  label: SHOWCASE_TITLE,
  click:()=>layoutName.value = SHOWCASE_LAYOUT,
}]);

function IsTheActiveTab(label:string){
    switch (label){
        case ABOUTME_TITLE: return layoutName.value == ABOUTME_LAYOUT;
        case SHOWCASE_TITLE: return layoutName.value == SHOWCASE_LAYOUT;
    }
    return false;
}
</script>

<template>
  <head>
    <title>Edna Sim's Portfolio</title>
  </head>
  <div class="mb-[10rem]">
    <div class="w-full flex"></div> <!--Prevent gap at the top-->
    <div class="sticky top-0">
      <UHorizontalNavigation :links="nav" :ui="{wrapper:'bg-mainteal/30', before:'hover:before:bg-mainteal/30 before:inset-y-2'}"
      class="border-b border-secondary">
        <template #default="{link}">
          <!--If is the active tab, change colour and do an underline-->
            <span class='group-hover:text-primary relative' :class="IsTheActiveTab(link.label) ? 'border-b border-primary text-black dark:text-white' : ''">
                {{ link.label }}
            </span>
        </template>
      </UHorizontalNavigation>
    </div>

    <ToggleLightMode class="fixed top-0 right-0"/>

    <NuxtLayout :name="layoutName"/>

    <!--TODO: Back to top btn-->
  </div>
</template>
