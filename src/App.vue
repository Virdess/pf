<template>
  <IonPage>
    <IonContent>
      <div id="app">
        <app-header v-if="$route.path != 'log'"></app-header>
        <router-view :key="$route.fullPath" />
      </div>
    </IonContent>
  </IonPage>
</template>

<script>
import AppHeader from "@/components/organisms/AppHeader.vue";
import { IonContent, IonPage } from "@ionic/vue";

export default {
  name: "App",
  components: {
    AppHeader,
    IonPage,
    IonContent
  },
};
</script>
<style></style>
