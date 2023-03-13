<template>
  <nav :class="s.navi">
    <a :class="[s.logo, s.navItem]" href="/" />
    <template v-if="bodyWidth > 768">
      <a :class="[s.navItem]" href="/cards/buy">{{ $t("buyCrypto") }}</a>
      <a :class="[s.navItem]" href="/markets">{{ $t("markets") }}</a>
      <a :class="[s.navItem]" href="/spot"
        >{{ $t("spot") }} <i :class="[s.badge, s.hot]"
      /></a>
      <div :class="[s.navItem, s.more]">
        <div :class="s.text">{{ $t("futuresText") }}</div>
        <div :class="s.subNavi">
          <a href="/futures" :class="s.subNaviItem">
            <Icon name="spot" />
            <div :class="s.ctx">
              <div :class="s.name">{{ $t("futuresText") }}</div>
            </div>
          </a>
          <a href="/futures/contract/detail/BTCUSDTPERP" :class="s.subNaviItem">
            <Icon name="futures-info" />
            <div :class="s.ctx">
              <div :class="s.name">{{ $t("futures.info") }}</div>
            </div>
          </a>
          <a href="/futures/contract/history-fund" :class="s.subNaviItem">
            <Icon name="insurance-fund" />
            <div :class="s.ctx">
              <div :class="s.name">
                {{ $t("futures.insuranceFund") }}
              </div>
            </div>
          </a>
          <a
            href="https://futures-docs.poloniex.com/#general"
            target="_blank"
            :class="s.subNaviItem"
          >
            <Icon name="futures-api" />
            <div :class="s.ctx">
              <div :class="s.name">{{ $t("futures.api") }}</div>
            </div>
          </a>
          <a href="/learn/futures" :class="s.subNaviItem">
            <Icon name="futures101" />
            <div :class="s.ctx">
              <div :class="s.name">{{ $t("futures.101") }}</div>
            </div>
          </a>
          <a
            href="https://support.poloniex.com/hc/zh-cn/requests/new"
            :class="s.subNaviItem"
            target="_blank"
          >
            <Icon name="futures-help" />
            <div :class="s.ctx">
              <div :class="s.name">{{ $t("futures.help") }}</div>
            </div>
          </a>
          <a
            href="https://support.poloniex.com/hc/zh-cn/sections/360008745934"
            :class="s.subNaviItem"
            target="_blank"
          >
            <Icon name="futures-guide" />
            <div :class="s.ctx">
              <div :class="s.name">{{ $t("futures.guide") }}</div>
            </div>
          </a>
        </div>
      </div>

      <div :class="[s.navItem, s.more]">
        <div :class="s.text">
          {{ $t("explore") }}
        </div>
        <div :class="s.subNavi">
          <a href="/leaderboard" :class="s.subNaviItem">
            <Icon name="leaderboard" />
            <div :class="s.ctx">
              <div :class="s.name">{{ $t("leaderboard.name") }}</div>
              <div :class="s.desc">{{ $t("leaderboard.desc") }}</div>
            </div>
          </a>
          <a href="/referral" :class="s.subNaviItem">
            <Icon name="referral" />
            <div :class="s.ctx">
              <div :class="s.name">{{ $t("referral.name") }}</div>
              <div :class="s.desc">{{ $t("referral.desc") }}</div>
            </div>
          </a>
          <a href="/launchbase" :class="s.subNaviItem">
            <Icon name="launchbase" />
            <div :class="s.ctx">
              <div :class="s.name">{{ $t("launchbase.name") }}</div>
              <div :class="s.desc">{{ $t("launchbase.desc") }}</div>
            </div>
          </a>
          <a href="/futures/rewards-center/index" :class="s.subNaviItem">
            <Icon name="reward-center" />
            <div :class="s.ctx">
              <div :class="s.name">{{ $t("rewardcenter.name") }}</div>
              <div :class="s.desc">{{ $t("rewardcenter.desc") }}</div>
            </div>
          </a>
          <a href="https://sunswap.com/" target="_blank" :class="s.subNaviItem">
            <Icon name="sunswap" />
            <div :class="s.ctx">
              <div :class="s.name">
                {{ $t("sunswap.name") }} <i :class="[s.badge, s.new]" />
              </div>
              <div :class="s.desc">{{ $t("sunswap.desc") }}</div>
            </div>
          </a>
        </div>
      </div>
      <a :class="[s.navItem]" href="https://apenft.io" target="_blank">
        <i :class="s.nftLogo" /> {{ $t("NFT") }}
      </a>
    </template>
  </nav>
</template>
<script>
export default {
  props: { bodyWidth: Number },
  components: {
    Icon: () => import("../Icon"),
  },
  setup() {},
};
</script>
<style lang="scss" module="s">
@import "./index.module.scss";
</style>
