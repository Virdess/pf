<template>
  <div class="form-group">
    <label :for="name" class="font-weight-bold">Сортировать по</label>
    <select
      class="form-control"
      :name="name"
      :id="name"
      v-model="selectedValue"
    >
      <option value="" disabled>Выберите</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label == `Name` ? 'Названию' : option.label == 'Price' ? 'Цене' : option.label == 'Rating' ? 'Рейтингу' : option.label}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  watch: {
    selectedValue(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.selectedValue = newValue;
    },
  },
};
</script>

<style scoped></style>
