<template>
  <div :class="s.loginCont">
    <span :class="s.link">
      {{ $t("wallet") }}
      <div :class="s.wallet">
        <div :class="s.overview">
          <div :class="s.title">
            {{ $t("assets.overview") }} <i :class="s.eye" />
          </div>
          <div :class="s.balance">1243.00 <span>USDT</span></div>
          <div :class="s.fait">≈ $2000.22</div>
        </div>
        <div :class="s.accountList">
          <a :class="s.item" href="/wallet/spot">
            <Icon :class="s.icon" />{{ $t("account.spot") }}
          </a>
          <a :class="s.item" href="/wallet/futures">
            <Icon :class="s.icon" />{{ $t("account.futures") }}
          </a>
          <a :class="s.item" href="/wallet/earn">
            <Icon :class="s.icon" />{{ $t("account.earn") }}
          </a>
        </div>
      </div>
    </span>
    <a href="/activity" :class="s.link">{{ $t("activity") }}</a>
  </div>
</template>
<script>
export default {
  components: { Icon: () => import("../Icon") },
  setup() {
    return {
      s: require("./style.module.scss"),
    };
  },
};
</script>
