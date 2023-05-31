<template>
  <div class="container p-0">
        <div class="card px-4">
            <p class="h8 py-3">Payment Details</p>
            <div class="row gx-3">
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Имя держателя карты</p>
                        <input class="form-control mb-3" type="text" placeholder="John Doe">
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Номер карты</p>
                        <input class="form-control mb-3" type="text" placeholder="1234 5678 435678">
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Срок действия</p>
                        <input class="form-control mb-3" type="text" placeholder="MM/YYYY">
                    </div>
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">CVV/CVC</p>
                        <input class="form-control mb-3 pt-2 " type="password" placeholder="***">
                    </div>
                </div>
                <div class="col-12">
                    <div class="btn btn-primary mb-3">
                        <span class="ps-3">Оплатить {{ formatCurrency(cartTotal) }}</span>
                        <span class="fas fa-arrow-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import formatCurrency from "@/utils/formatCurrency";
export default {
  name: "CheckOutPage",
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
