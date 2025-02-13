<template>
  <div>
    <UModal v-model="model">
      <UCard>
        <template #header>
          Send me a message!
        </template>
        <!--Body-->
        <UForm :state="formState" @submit="OnSubmit()" class="space-y-2">
          <UFormGroup label="Name" name="name"  hint="Optional">
            <UInput v-model="formState.name" placeholder="How should I address you? (Optional)" :disabled="isLoading"/>
          </UFormGroup>
          <UFormGroup label="Contact" name="contact"  hint="Optional">
            <UInput v-model="formState.contact" placeholder="How may I contact you if needed? (Email, phone, etc)" :disabled="isLoading"/>
          </UFormGroup>
          <UFormGroup label="Message" name="message" required>
            <UTextarea v-model="formState.message" placeholder="What would you like to tell me?" :disabled="isLoading"
            :rows="3" resize/>
          </UFormGroup>

          <UButton type="submit" :loading="isLoading" :disabled="formState.message.trim().length <= 0">Send</UButton>
        </UForm>
      </UCard>
    </UModal>
  </div>
</template>

<script lang="ts" setup>
import { UModal } from '#components';

const model = defineModel();
const toast = useToast();
const formState = reactive({
  name: "",
  contact: "",
  message: "",
});
const isLoading = ref(false);

async function OnSubmit(){
  isLoading.value = true;
  //Not working on github pages
  const res :any = await $fetch('api/sheet', {
    method:"POST",
    body: {
      name: formState.name,
      contact: formState.contact,
      message: formState.message.trim()
    }
  });
  if (res.statusText == 'OK'){
    toast.add({title:"Successfully sent message!", description:"Thanks, I'll read it soon!", color:'green'});
  }
  else toast.add({title:"Failed to send message", description:"Oops", color:'red'});
  //reset modal
  formState.contact = '';
  formState.name = '';
  formState.message = '';
  isLoading.value = false;
  model.value = false; //close
}

</script>