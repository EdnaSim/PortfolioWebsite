export default defineAppConfig({
    ui: { //Overriding NuxtUI config
      primary: 'purple',
      button:{
        variant:{
          link:"m-0 p-0 text-[#2611B0] hover:text-[#150485] disabled:text-[#4C3CB6] dark:text-[#03C4A1] dark:hover:text-[#0AA48A] dark:disabled:text-[#32CAB1]"
        }
      },
      card:{
        background:"dark:bg-[#150485]/30 bg-[#150485]/10"
      },
      accordion:{
        item:{
          base:"bg-primary/30 rounded-md",
          color:'text-gray-700 dark:text-gray-400'
        }
      }
    }
  })
  