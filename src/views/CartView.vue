<template>
  <div class="container mt-4">
    <h1 class="mb-4">Корзина</h1>
    <div v-if="cartItems.length === 0" class="alert alert-info">
      Корзина пуста
    </div>
    <div v-else>
      <div class="row">
        <CartItem
          v-for="(item, index) in cartItems"
          :key="index"
          :product="item.product"
          :quantity="item.quantity"
          @update-quantity="updateQuantity"
          @remove="handleRemoveFromCart"
        />
      </div>
      <div class="text-right">
        <h4>Всего: {{ formatCurrency(cartTotal) }}</h4>
        <IonButton color="success" href="/checkout">Завершить заказ</IonButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CartItem from "@/components/molecules/CartItem.vue";
import formatCurrency from "@/utils/formatCurrency";
import { IonButton } from "@ionic/vue";

export default {
  name: "CartView",
  components: {
    CartItem,
    IonButton
},
  computed: {
    ...mapGetters(["cartItems", "cartTotal"]),
  },
  methods: {
    formatCurrency,
    ...mapActions(["removeFromCart", "updateCartItemQuantity"]),
    updateQuantity({ product, quantity }) {
      if (quantity < 1) {
        quantity = 1;
      }
      this.updateCartItemQuantity({ product, quantity });
    },
    handleRemoveFromCart(product) {
      this.removeFromCart({ product });
    },
    checkout() {
      alert("There is no handler to do it");
    },
  },
};
</script>
