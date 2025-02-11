<template>
    <div class="w-[60%] m-auto space-y-5">
        <Showcase title="CMT Sensei" subtitle="Group project - Final Year Project (Yr 3)">
            <template #body>
                <video class="m-auto pb-10" width="560" height="315" controls><source src="../public/videos/fyp_trailer.mp4" type="video/mp4"></video>
                <div class="flex gap-5">
                    <!--Overview-->
                    <div class="flex-1">
                        <p>CMT Sensei is a web-based AI tutor with management tools for lecturers. It is aimed at NYP's Creative Media and Technology (CMT) modules</p>
                        <br><b>Key features</b>
                        <ul class="list-disc">
                            <li>
                                Uses <UButton to="https://github.com/ggerganov/llama.cpp" target="_blank" variant="link">LLaMA.cpp</UButton> for its Large Language Model (LLM)
                                <ul>
                                    <li>Uses Socratic method to teach students, instead of directly giving them the answers</li>
                                    <li>Guardrails to keep the conversation on topic and appropriate</li>
                                    <li>Chats with personality (Can be configured by the lecturer!)</li>
                                </ul>
                            </li>
                            <li>AI art generation via <UButton to="https://github.com/comfyanonymous/ComfyUI" target="_blank" variant="link">ComfyUI</UButton></li>
                            <li>LoRA finetuning: Image generation is fine-tuned to mimic lecturer's art style</li>
                            <li>Retrieval Augmented Generation (RAG): Provides the AI context that it otherwise was not trained on, and therefore would not be able to accurately answer. Used to enable the chatbot to answer module-specific questions (Eg. When is the assignment due?).</li>
                            <li><UButton to="https://www.postgresql.org/" target="_blank" variant="link">PostgreSQL</UButton> database: Stores chat history and other data</li>
                            <li>Admin management features (Frontend)</li>
                        </ul>
                    </div>
                    <!--Personal contributions-->
                    <div class="flex-1">
                        <div> <!--Docker-->
                            <h2><b>Personal contributions</b></h2><br>
                            <UButton to="https://www.docker.com/" target="_blank" variant="link"><b>Docker</b></UButton><br>
                            Production build. Contains containers for the website, database (done by teammate), and ComfyUI, creating a standalone
                            application that only has the LLaMA instance running externally.
                            <br><br>
                            ComfyUI container features
                            <ul class="list-disc">
                                <li>GPU access</li>
                                <li>Bind mount LoRAs and models (helped by teammate): Once the container is built, there is no extra setup (model installation) needed as the chosen models are automatically downloaded into the container.</li>
                                <li>ComfyUI Manager</li>
                            </ul>
                        </div>
                        
                        <hr class="w-[99%] m-auto my-2">
                        <h2><b>Frontend</b></h2>
                        I developed a great majority of the frontend (display, functionality, server API calls and handling).
                        Developed using Nuxtjs (Vue) <i>Just like this website</i>
                        <UAccordion :items="fypFrontendAccordion" class="mt-2">
                            <template #login>
                                <div class="accordionContainer">
                                    In both login pages, the user will be rejected with a notice if they are suspended.
                                    <hr class="my-2 w-[99%] m-auto">
                                    <b>Microsoft OAuth login</b><br>
                                    <img src="../public/images/nyplogin.png" class="w-[50%] m-auto"/>
                                    Allows only NYP staff and students to log into CMT Sensei via their NYP-issued Microsoft emails. <br><br>
                                    Uses Microsoft Entra and the msal-browser package. Redirects to the Microsoft login page. <br>
                                    On successful login, it redirects back to the website.<br>
                                    Login is cached and read to allow the user into the main page.
                                    <hr class="my-2 w-[99%] m-auto">
                                    <b>Temporary login page</b><br>
                                    <img src="../public/images/altlogin.png" class="w-[50%] m-auto">
                                    Currently, CMT Sensei is not yet registered with NYP's Microsoft Entra tenant.<br>
                                    During FYP, I used a trial tenant to enable the login to work. Since the trial tenant lasts 30 days, I developed this alternate login page
                                    so that CMT Sensei can still be used until CMT Sensei is officially registered with NYP.
                                    <br><br>
                                    The user logs in with credentials that have been set for them by an admin/lecturer.<br>
                                    The credentials are stored in a database.<br><br>
                                    Login email is saved with a cookie so that refreshing the page will not return to the login page due to the nature of layouts.
                                </div>
                            </template>
                            <template #sidebar>
                                <div class="accordionContainer flex flex-row gap-2">
                                    <img src="../public/images/sidebar.png" class="w-[50%] flex-none">
                                    <p>
                                        Create chat sessions, and choose a module to base the session off of. Available modules are the ones that the student has been added to through the user management dashboard. Lecturers/admins can choose between every module.
                                        <br><br>Close chat sessions. Hides the session from the user, but does not delete the session and its chat history from the database.
                                        <br><br>Select a session to display and chat in. Sessions in the sidebar display the module name in the button and when hovered. Currently-displayed session has its text in a different colour.
                                        <br><br>Can be resized by dragging the edge. Has a minimum width, and will not exceed the window’s width + a padding
                                    </p>
                                </div>
                            </template>
                            <template #chat>
                                <div class="accordionContainer">
                                    <img src="../public/images/chatbox.png" class="w-[50%] m-auto">
                                    <ul class="list-disc">
                                        <li>Displays the session chosen in the sidebar</li>
                                        <li>Input field auto-focuses when the AI is done with its message and when navigating from another page back to the chat page.</li>
                                        <li>The AI is given the personality prompt, module notes and other relevant info. It is also given the entire session chat history for context.</li>
                                        <li>When the AI finishes its message, the user can thumbs-up or thumbs-down the message, which is saved in the database and shown in the chat history.</li>
                                        <li>Hidden with an alert if no connection to the LLM can be established. Connection is checked every few seconds</li>
                                        <li>Chatbot’s emotion: An image to depict the chatbot’s current emotion (Emotion selection done by teammate)</li>
                                        <li>
                                            Lives system: lose a life whenever the AI detects that the user has given up. Regenerates every few minutes.
                                            <ul>
                                                <li>Tracks available lives and timers using a cookie. Cookie is parsed as an Interface with the necessary data. When the user enters the chat page, the time since the last life check is retrieved from the cookie and lives are added if the difference exceeds the regen-time.</li>
                                                <li>While the chat page is mounted, the lives are checked every second after the lives are reduced (through recursive setTimeout). This function will set the last-checked-time to the current time.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Inbox scrolling behaviour: When the user scrolls all the way down, auto-scroll enables and the inbox will automatically scroll down while the chatbot is sending its message. Scrolling up will disengage the auto scroll.
                                            <ul>
                                                <li>Button to scroll all the way down, hidden if auto-scroll is enabled.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </template>
                            <template #usermng>
                                <div class="accordionContainer">
                                    <b>3 tabs: Modules, Students, Lecturers.</b>
                                    <br><br>
                                    <b>Modules tab</b>
                                    <img src="../public/images/modulestab.png" class="w-[75%] m-auto">
                                    Shows all modules and which lecturer is in-charge of them. If the logged-in user is the lecturer-in-charge, they can edit the module’s information (Name, personality prompt, etc). 
                                    <ul class="list-disc">
                                        <li>Admins can add and edit any module.</li>
                                        <li>Able to add a student to a particular module. Opens a modal to fill in new-student details, with the module already selected for the student.</li>
                                    </ul>

                                    <hr class="w-[99%] my-2">

                                    <b>Students tab</b>
                                    <img src="../public/images/studentstab.png" class="w-[75%] m-auto">
                                    Shows all students and related information
                                    <ul class="list-disc">
                                        <li>Admin only: Delete student</li>
                                        <li>Single student actions: Edit, change password, suspend/unsuspend, view chat history.</li>
                                        <li>Add student: Add individually, or add by CSV.
                                            <img src="../public/images/addbycsv.png" class="w-[50%] flex-none">
                                            <ul>
                                                <li>Enter student details (same as when adding an individual) in rows in the CSV with the correct headers.</li>
                                                <li>Downloadable template with the headers set</li>
                                                <li>Detected duplicates will prompt to open a bulk-edit-modal, while new entries will still be added</li>
                                            </ul>
                                        </li>
                                        <li>Bulk-edit students: Select multiple students. Shows a list of selected students in concise rows for fast and easy editing.
                                            <img src="../public/images/bulkedit.png" class="w-[75%]">
                                        </li>
                                        <li>(Click box in column 1 row 1) Select all suspended/unsuspended, and suspend/unsuspend all selected students, select all/unselect all. Double click box to select all/unselect all</li>
                                        <li>Alert for students with no modules: Through the alert, select and/or select all affected students.</li>
                                        <li>Filters: Search by name, PEM group, admin number. Filter by module. Option to show only students that are in modules that the logged-in user is in-charge of.</li>
                                    </ul>

                                    <hr class="w-[99%] my-2">

                                    <b>Lecturers tab (Admin only)</b>
                                    <img src="../public/images/lecturerstab.png" class="w-[75%] m-auto">
                                    <ul class="list-disc">
                                        <li>Individual actions: Edit, change password, delete</li>
                                        <li>Option to only show Lecturers and hide admins.</li>
                                    </ul>
                                </div>
                            </template>
                            <template #contentmng>
                                <div class="accordionContainer space-y-2">
                                    <b>Add module notes to the selected module</b><br>
                                    Text uploaded here can be retrieved by the chatbot through RAG.<br>
                                    In the backend (Done by teammate, but I worked on an earlier version that is unused), the text is converted to vector embeddings and stored in a vector database (pgvector, PostgreSQL extension).<br>
                                    To find related context to the user prompt, the prompt is also embedded into vectors. Then, semantic search is conducted, comparing the vectors during dot product similarity (closer = similar meaning).<br>
                                    The most similar results (up to a certain difference) are returned to be used by the chatbot as additional context.
                                    <br>
                                    <img src="../public/images/addnotes.png" class="w-[75%] m-auto">
                                    <ul class="list-disc">
                                        <li>Text or pdf files.</li>
                                        <li>Pdf files are parsed to extract text. Then the user can edit the parsed text before uploading to the database.</li>
                                    </ul>
                                    <br>
                                    <b>Viewing module notes</b><br>
                                    <img src="../public/images/viewnotes.png" class="w-[75%] m-auto">
                                    <ul class="list-disc">
                                        <li>Expand the row to view contents (Buttons to expand/fold all).</li>
                                        <li>Delete a note, or delete selected notes</li>
                                        <li>Edit individual note’s contents</li>
                                        <li>Filter to only show notes of modules that the user is in-charge of</li>
                                    </ul>
                                </div>
                            </template>
                            <template #chathist>
                                <div class="accordionContainer">
                                    <b>Chat history modal</b><br>
                                    <img src="../public/images/chathist.png" class="w-[80%] m-auto">
                                    <ul class="list-disc">
                                        <li>Shows all sessions, with colour coding for closed sessions</li>
                                        <li>Both the student’s and the AI’s messages are shown, along with the dates and module name.</li>
                                        <li>The user can bookmark students’ messages.</li>
                                    </ul>
                                    
                                    <br><b>Bookmarks page</b><br>
                                    <img src="../public/images/bookmark.png" class="w-[90%] m-auto">
                                    Shows all bookmarked messages.<br>
                                    For example, if the lecturer sees a really good question asked by a student, and they want to answer it in class,
                                    the lecturer can bookmark the message to find it easier later.
                                    <ul class="list-disc">
                                        <li>Expand message to view contents (Buttons to expand/fold all).</li>
                                        <li>Row shows the student’s name, module, date marked, and actions</li>
                                        <li>Actions: Unmark, mark as ‘resolved’ (Remains bookmarked but can be hidden. Lecturer won't have to remember what messages they have previously addressed), go to session.</li>
                                        <li>Resolved messages can be filtered out but are still marked</li>
                                        <li>Go to session: Opens a chat history modal with the student’s entire chat history, but automatically navigates to the session where the message is from. Allows the lecturer to read the full context of the conversation.</li>
                                    </ul>
                                </div>
                            </template>
                        </UAccordion>

                    </div>
                </div>
            </template>
        </Showcase>

        <Showcase title="Spherium Sentinels" subtitle="Solo assignment - Specialization project (Yr 3)">
            <template #body>
                <div class="mb-10">
                    <iframe class="m-auto" width="560" height="315" src="https://www.youtube.com/embed/ZRNGnJA1MY4?si=GBUXd845TliBdFGr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <!--Text content-->
                <div class="flex gap-5">
                    <div class="flex-1">
                        <b>Game Overview</b>
                        <ul class="list-disc">
                            <li>Developed in Unity</li>
                            <li>Photon PUN multiplayer</li>
                            <li>PC only</li>
                        </ul><br>
                        Team up with other players to defend the Core using
                        the power contained within Orbs (and a stick).
                        <br><br>
                        <b>Game objective</b>: Survive for as many waves as possible.
                    </div>
                    <div class="flex-1">
                        <b>Core mechanics</b>
                        <ul class="list-disc">
                            <li>
                                <b>Orbs</b>: Passive / Skill / Upgrade Orbs
                                <ul>
                                    <li>Pick up and drop Orbs to mix-and-match, allowing players to create their own play-style.</li>
                                    <li>Passive Orbs grant an effect that does not need to be actively casted.</li>
                                    <li>Skill Orbs contain a "spell" that can be casted.</li>
                                    <li>Upgrade Orbs grant the holder some stat increases.</li>
                                    <li>12 unique Skill Orbs.</li>
                                    <li>6 unique Passive Orbs.</li>
                                </ul>
                            </li>
                            <li>
                                <b>Waves of enemies</b>
                                <ul><li>Enemies spawn at the start of a wave. They will try to destroy the Core and kill players.</li></ul>
                            </li>
                            <li>
                                <b>Multiplayer</b>
                                <ul>
                                    <li>Create/join rooms: play solo or with friends and strangers.</li>
                                    <li>All Orbs can be shared.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </template>
        </Showcase>
    </div>
</template>

<script setup lang="ts">
import { UAccordion } from '#components';

const fypFrontendAccordion = [{
    label: "Login",
    slot:"login",
},{
    label: "Sidebar",
    slot:"sidebar",
},{
    label: "Chat page",
    slot:"chat",
},{
    label: "User management dashboard (Lecturer/Admin only)",
    slot:"usermng",
},{
    label: "Content management dashboard (Lecturer/Admin only)",
    slot:"contentmng",
},{
    label: "Chat history & Bookmarks page (Lecturer/Admin only)",
    slot:"chathist",
}]
</script>