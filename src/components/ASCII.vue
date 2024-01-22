<script setup lang="ts">
import {ref, Ref} from 'vue';

const dogArt: string = "^..^      /\n" +
    "/_/\\_____/\n" +
    "   /\\   /\\\n" +
    "  /  \\ /  \\";

const catArt: string = " _._     _,-'\"\"`-._\n" +
    "(,-.`._,'(       |\\`-/|\n" +
    "    `-.-' \\ )-`( , o o)\n" +
    "          `-    \\`_`\"'-";

let currentSelected: Ref<string> = ref("");
let currentArt: Ref<string | undefined> = ref(undefined);

const pickArt = (name: string): void => {
    switch (name?.toLowerCase()) {
        case "dog":
            currentArt.value = dogArt;
            break;
        case "cat":
            currentArt.value = catArt;
            break;
        default:
            currentArt.value = undefined;
    }
};

const setCustomArt = (art: string): void => {
    currentSelected.value = "";
    currentArt.value = art;
};

layerCore.actions.registerCallback(
    'PickArt',
    (args: {name: string}) => {
        pickArt(args.name);
        return 'success';
    }
);

layerCore.actions.registerCallback(
    'SetCustomArt',
    (args: {art: string}) => {
        setCustomArt(args.art);
        return 'success';
    }
);

</script>

<template>
    <div>
        <select v-model="currentSelected" @change="pickArt(currentSelected)" id="art-selector">
            <option disabled value="">Please select one</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
        </select>
        <div id="art">
            {{ currentArt }}
        </div>
    </div>
</template>

<style scoped>
#art {
    white-space: pre-wrap;
    font-family: monospace;
    margin-top: 20px;
}
</style>

