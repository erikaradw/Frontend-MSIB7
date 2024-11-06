<template>
  <input
    :id="id"
    :name="name"
    :type="type"
    :value="modelValue"
    :disabled="disabled"
    :placeholder="placeholder"
    @input="updateInput"
    class="form-control"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },

    modelValue: {
      type: [String, Number],
      default: "",
    },

    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
