<script setup lang="ts">
import ToggleLightMode from './components/ToggleLightMode.vue';
import { WaitUntil } from './miscScripts/WaitUntil';

//Layout names
const ABOUTME_LAYOUT = "introduction";
const SHOWCASE_LAYOUT = "assignment-showcase";
//layout titles
const ABOUTME_TITLE = "About me";
const SHOWCASE_TITLE = "Showcase";

const layoutName = ref(ABOUTME_LAYOUT);
const showScrollUp = ref(false);
const navRef = useTemplateRef("navref");

const nav = ref([{
  label: ABOUTME_TITLE,
  click: ()=> layoutName.value = ABOUTME_LAYOUT,
},{
  label: SHOWCASE_TITLE,
  click:()=>layoutName.value = SHOWCASE_LAYOUT,
}]);

onMounted(async()=>{
  //If user scrolls down further than window height, show a btn to go back to top
  window.addEventListener('scroll', ()=>CheckScrollState());

  // await WaitUntil(()=>navRef.value != null);
  // console.log("adsasd",navRef.value?.$el.clientHeight);
});

onUnmounted(()=>window.removeEventListener('scroll', ()=>CheckScrollState()));

function IsTheActiveTab(label:string){
    switch (label){
        case ABOUTME_TITLE: return layoutName.value == ABOUTME_LAYOUT;
        case SHOWCASE_TITLE: return layoutName.value == SHOWCASE_LAYOUT;
    }
    return false;
}

function CheckScrollState(){
  showScrollUp.value = window.scrollY > window.innerHeight;
}

function ScrollToTop(){
  window.scrollTo(0,0);
}
</script>

<template>
  <head>
    <title>Edna Sim's Portfolio</title>
  </head>
  <div class="mb-[10rem]" ref="container">
    <div class="w-full flex"></div> <!--Prevent gap at the top-->
    <div class="sticky top-0">
      <div ref="navref">
        <UHorizontalNavigation :links="nav" :ui="{wrapper:'bg-mainteal',base:'dark:text-gray-600 text-gray-600', before:'hover:before:bg-white/10 before:inset-y-2'}"
        class="border-b border-secondary">
          <template #default="{link}">
            <!--If is the active tab, change colour and do an underline-->
              <span class='group-hover:text-primary relative' :class="IsTheActiveTab(link.label) ? 'border-b border-primary text-black dark:text-white' : ''">
                  {{ link.label }}
              </span>
          </template>
        </UHorizontalNavigation>
      </div>
    </div>

    <ToggleLightMode class="fixed top-0 right-0"/>

    <NuxtLayout :name="layoutName" :offsetY="navRef?.clientHeight"/>

    <!--Back to top btn-->
    <UButton icon="i-heroicons-arrow-up" variant="soft" color="teal" v-if="showScrollUp" @click="ScrollToTop()"
    class="right-2 bottom-2 fixed"/>
  </div>
</template>
