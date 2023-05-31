
import { IonButton } from '@ionic/vue';

<template>
  <ion-list style="width: 95%; margin: 0 auto; text-align: center;">
    <ion-item style="width: 100%;">
      <ion-input type="email" fill="solid" label="Email" labelPlacement="floating" helperText="Enter a valid email"
        errorText="Invalid email" ngModel email></ion-input>
    </ion-item>
    <ion-item style="width: 100%;">
      <ion-input type="password" fill="solid" label="Password" labelPlacement="floating" helperText="Enter a valid password"
        errorText="Invalid email" ngModel email></ion-input>
    </ion-item>

    <IonButton href="/home">
      Login
    </IonButton>
  </ion-list>
</template>
  
<script>
import { IonButton, IonInput, IonItem, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonInput, IonItem, IonList, IonButton },
});
</script>