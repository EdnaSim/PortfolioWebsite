<template>
    <div class="w-[60%] m-auto space-y-5">
        <Showcase title="CMT Sensei" subtitle="Group project - Final Year Project (Yr 3)">
            <template #body>
                <div class="flex gap-5">
                    <!--Overview-->
                    <div class="flex-1">
                        <p>CMT Sensei is a web-based AI tutor with management tools for lecturers.</p>
                        <b>Key features</b>
                        <ul class="list-disc">
                            <li>Uses <UButton to="https://github.com/ggerganov/llama.cpp" target="_blank" variant="link">LLaMA.cpp</UButton> for its Large Language Model (LLM)</li>
                            <li>AI art generation via <UButton to="https://github.com/comfyanonymous/ComfyUI" target="_blank" variant="link">ComfyUI</UButton></li>
                            <li>Retrieval Augmented Generation (RAG): </li>
                        </ul>
                    </div>
                    <!--Personal contributions-->
                    <div class="flex-1">

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
</script>