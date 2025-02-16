<template name="introduction">
  <div class="m-2">
    <!--Name-->
    <div>
      <p class="text-[4rem]">Edna Sim</p>
      <!--Subtitle-->
      <p class="text-md">Student Game Developer</p>
    </div>
    <hr class="mt-4 mb-4"/>
    <!--About me description-->
    <div class="p-5">
      <p class="font-bold mb-2">About me</p>
      <p class="w-[50%]">
        I'm a Singaporean studying game development. I started this journey because of games like League of Legends and Roblox,
        and now I have 3+ years of experience developing using a variety of tools, with my favourite being unity.
        <br><br>
        My main interest is in gameplay programming. 
        What I enjoy most about game development is not necessarily in seeing the final product but the journey to it; 
        figuring out how to structure and develop a codebase for a game is interesting, while
        learning and using new coding techniques and syntax is exciting.
      </p>
    </div>
    <hr class="mt-4 mb-4"/>
    <!--Qualifications overview-->
    <div class="grid grid-cols-2 divide-x">
      <!--Education-->
      <div class="space-y-4 px-4 w-full">
        <p class="font-bold text-lg">Education & Qualifications</p>
        
        <EducationTextBox title="Diploma in Game Development and Technology" subtitle="Nanyang Polytechnic, 2022-2025"
        link="https://www.nyp.edu.sg/student/study/schools/design-media/diploma-game-development-technology">
          <template #extra>
            <ul class="list-disc">
              <li>Director's list for Yr 2 (Sem 1 & 2) and Yr 3 Sem 1</li>
              <li>Awaiting graduation...</li>
            </ul>
          </template>
        </EducationTextBox>
        <EducationTextBox title="Unity Certified Associate: Programmer" subtitle="Unity Technologies, 2024"
        link="https://www.credly.com/badges/61115873-6e9a-4226-9ae0-e368881f7498/public_url"/>
        <EducationTextBox title="Google Project Management Certificate (v1)" subtitle="Coursera, 2023"
        link="https://www.credly.com/badges/b61555c5-bbb9-45f1-9e4e-583dd1d7b1df/public_url"/>
        <EducationTextBox title="AWS Academy Graduate - AWS Academy Cloud Foundations" subtitle="Amazon Web Services Training and Certification, 2023"
        link="https://www.credly.com/badges/e0a38b25-5b30-486b-928c-8eb05e405e46/public_url"/>
      </div>
      <!--Skills/Experience-->
      <div class="px-4">
        <p class="font-bold text-lg">Skills</p>
        <p>Unity C#, C++, Java/Android studio, HTML & CSS (Including Vue, Nuxt, Tailwind), version control (Eg. Github)</p>

        <div class="h-10"/> <!--Space between the 2 topics-->

        <p class="font-bold text-lg">Work experience</p>
        <UAccordion :items="workExpAccordion" class="px-3 mt-2">
          <template #itp1>
            <div class="accordionContainer">
              Role: <b>Unity developer intern</b><br>
              Duration: <b>26 Aug 2024 - 15 Nov 2024 (12 weeks)</b>
              <br><br>
              <u>Key responsibilies</u>
              <ul class="list-disc">
                <li>Implementing new features in Unity.</li>
                <li>Creating simple animations.</li>
                <li>Optimizing code for better readability and performance.</li>
                <li>Collaborating with the team to build a cohesive, high-quality app.</li>
              </ul>
              <br><br>
              <u>Key accomplishments</u>
              <ul class="list-disc">
                <li>Integrated Unity’s Addressable system into the existing project from scratch, allowing assets to be downloaded from a cloud only when needed.</li>
                <li>Contributed to the launch of a new app version, with a myriad of new features and systems to improve the overall usability and quality of the content presented to users.</li>
                <li>Implemented traditional Chinese localization in Unity.</li>
              </ul>
            </div>
          </template>
          <template #itp2>
            <div class="accordionContainer">
              Role: Intern<br>
              Duration: 17 Feb 2025 - TBA (Est. 6 months)
              <br><br>
              <i>
                While awaiting further studies, I decided to return to XCLR8 for another
                internship as I had a great time with them during my first internship programme.<br>
                This time, I will be gaining exposure to a broader range of industry-relevant duties,
                allowing me to deepen my knowledge and technical skills.
              </i> <br><br>
              <u>Planned tasks</u>
              <ul class="list-disc">
                <li>Unity development</li>
                <li>Web development</li>
                <li>Android app development</li>
                <li>Server/Backend development</li>
                <li>DevOps</li>
              </ul>
            </div>
          </template>
        </UAccordion>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import EducationTextBox from '~/components/EducationTextBox.vue';

const workExpAccordion = [{
  label: "Internship Programme (Coordinated by NYP) @ XCLR8 Technologies",
  slot:'itp1'
},{
  label: "Internship 2 @ XCLR8 Technologies",
  slot:'itp2'
}]
</script>