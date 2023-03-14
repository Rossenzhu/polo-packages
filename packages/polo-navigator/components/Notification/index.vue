<template>
  <div :class="s.shadow" @click.self="close">
    <div :class="s.notification">
      <div
        href="/"
        :class="s.article"
        v-for="item in notification"
        :key="item.title"
      >
        <div :class="s.title" :date="item.date | dateText">
          {{ item.title }}
        </div>
        <div :class="s.context" v-html="item.message" />
      </div>
    </div>
  </div>
</template>

<script>
// import { GET_NOTICE } from "@nav/lib/constant/API_POLO";
// import poloApi from "@nav/lib/apiInstance/poloApi";
import { onMounted, ref } from "vue";
export default {
  filters: {
    dateText: (date) => {
      const day = Math.floor(
        (Date.now() - new Date(date).getTime()) / (24 * 60 * 60 * 1000)
      );
      return `${day} ${day > 1 ? "Days" : "Day"}`;
    },
  },
  setup(_, ctx) {
    const notification = ref([]);
    onMounted(async () => {
      // const { response } = await poloApi(GET_NOTICE, { limit: 100 });
      // notification.value = response;
    });

    return {
      notification,
      close() {
        ctx.emit("close");
      },
    };
  },
};
</script>

<style lang="scss" module="s">
@import "./style.module.scss";
</style>
