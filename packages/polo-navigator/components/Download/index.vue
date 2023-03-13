<template>
  <div :class="s.download">
    <div :class="s.main">
      <div :class="s.list">
        <a :href="remoteConfig.ios" :class="[s.btn, s.appstore]" />
        <a :href="remoteConfig.googleplay" :class="[s.btn, s.googleplay]" />
        <a :href="remoteConfig.android" :class="[s.btn, s.android]" />
        <a :href="remoteConfig.downloadpage" :class="s.link">
          <span :class="s.text">{{ $t("viewall") }}</span>
        </a>
      </div>
      <div :class="s.qrcodeCont">
        <qrcode
          v-if="remoteConfig.downloadpage"
          :class="s.qrcode"
          :size="88"
          :value="remoteConfig.downloadpage"
        />
        <div :class="s.qrcode" v-else />
        <div :class="s.text">{{ $t("scan2download") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import qrcode from "qrcode.vue";
// import { GET_REMOTE_CONFIG } from "@nav/lib/constant/API_POLO";
// import poloApi from "@nav/lib/apiInstance/poloApi";
import { onMounted, reactive } from "vue";
export default {
  components: { qrcode },
  setup() {
    const remoteConfig = reactive({
      ios: "",
      android: "",
      googleplay: "",
      downloadpage: "",
    });
    onMounted(async () => {
      const { android, global, ios } = await poloApi(GET_REMOTE_CONFIG);
      remoteConfig.android = android.sideload.downloadUrl;
      remoteConfig.googleplay = android.appStoreUrl;
      remoteConfig.ios = ios.appStoreUrl;
      remoteConfig.downloadpage = global.urls.marginShare;
    });

    return {
      remoteConfig,
      s: require("./style.module.scss"),
    };
  },
};
</script>
