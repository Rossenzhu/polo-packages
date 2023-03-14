<template>
  <header :class="[s.header]" id="polo-navigator">
    <Nav :class="s.nav" :bodyWidth="bodyWidth" />
    <NotLogin v-if="bodyWidth > 1024 && !fetchingProfile && !isLogin" />
    <Login v-if="bodyWidth > 920 && isLogin" />

    <div :class="s.optionCont" v-if="bodyWidth > 1280">
      <a href="/profile" :class="s.option" v-if="isLogin">
        <Icon name="profile" />
      </a>
      <span :class="s.option" @click="toggleTheme"><Icon name="theme" /></span>
      <span :class="s.option" @click="toggleNotification">
        <Icon name="notification" />
      </span>
      <a href="https://support.poloniex.com/" :class="s.option">
        <Icon name="customer-server" />
      </a>
      <span
        :class="s.option"
        @mousemove="toggleDownload(true)"
        @mouseleave="toggleDownload(false)"
      >
        <Icon name="download" />
        <Download v-show="downloadShow" />
      </span>
      <span :class="[s.locale]" @click="toggleModalLocale">
        {{ currentLanguage }}/{{ currency }}
        <i :class="s.afterArrow" />
      </span>
    </div>

    <template v-else>
      <div :class="s.optionCont" v-if="isLogin">
        <a href="/profile" :class="s.option">
          <Icon name="profile" />
        </a>
      </div>
      <div
        :class="[s.optionCont, s.optionDropdown]"
        @click.self="() => toggleMoreOption(true)"
        id="headerMoreOptions"
      >
        <span
          :style="{ display: 'flex', alignItems: 'center' }"
          @click.stop="() => toggleMoreOption()"
        >
          <Icon name="more" />
        </span>
        <div
          :class="s.shadow"
          @click.self="toggleMoreOption(false)"
          v-show="moreOptionShow"
        >
          <div :class="s.moreOpts">
            <NotLogin
              block
              v-if="bodyWidth <= 1024 && !fetchingProfile && !isLogin"
            />
            <template v-if="widthClassname === 'w375'">
              <a :class="s.item" href="/cards/buy">
                <Icon name="buy-crypto" />{{ $t("buyCrypto") }}
              </a>

              <a :class="s.item" href="/markets">
                <Icon name="markets" />{{ $t("markets") }}
              </a>

              <a :class="s.item" href="/spot">
                <Icon name="spot" />{{ $t("spot") }}
              </a>
            </template>

            <MobileMore v-if="widthClassname === 'w375'" :class="[s.more]">
              <template v-slot:name>
                <span :class="[s.item]">
                  <Icon name="futures" />{{ $t("futuresText") }}
                  <b :class="s.afterArrow" />
                </span>
              </template>
              <template v-slot:item>
                <a href="/futures/contract/detail/BTCUSDTPERP" :class="s.item">
                  <Icon name="blank" />
                  {{ $t("futures.info") }}
                </a>
                <a href="/futures/contract/history-fund" :class="s.item">
                  <Icon name="blank" />
                  {{ $t("futures.insuranceFund") }}
                </a>
                <a
                  href="https://futures-docs.poloniex.com/#general"
                  target="_blank"
                  :class="s.item"
                >
                  <Icon name="blank" />
                  {{ $t("futures.api") }}
                </a>
                <a href="/learn/futures" :class="s.item">
                  <Icon name="blank" />
                  {{ $t("futures.101") }}
                </a>
                <a
                  href="https://support.poloniex.com/hc/zh-cn/requests/new"
                  :class="s.item"
                  target="_blank"
                >
                  <Icon name="blank" />
                  {{ $t("futures.help") }}
                </a>
                <a
                  href="https://support.poloniex.com/hc/zh-cn/sections/360008745934"
                  :class="s.item"
                  target="_blank"
                >
                  <Icon name="blank" />
                  {{ $t("futures.guide") }}
                </a>
              </template>
            </MobileMore>

            <MobileMore v-if="widthClassname === 'w375'" :class="[s.more]">
              <template v-slot:name>
                <span :class="[s.item]">
                  <Icon name="explore" />{{ $t("explore") }}
                  <b :class="s.afterArrow" />
                </span>
              </template>
              <template v-slot:item>
                <a href="/leaderboard" :class="s.item">
                  <Icon name="blank" />
                  {{ $t("leaderboard.name") }}
                </a>
                <a href="/referral" :class="s.item">
                  <Icon name="blank" />
                  {{ $t("referral.name") }}
                </a>
                <a href="/launchbase" :class="s.item">
                  <Icon name="blank" />
                  {{ $t("launchbase.name") }}
                </a>
                <a href="/futures/rewards-center/index" :class="s.item">
                  <Icon name="blank" />
                  {{ $t("rewardcenter.name") }}
                </a>
                <a href="https://sunswap.com/" target="_blank" :class="s.item">
                  <Icon name="blank" />
                  {{ $t("sunswap.name") }}
                  <i :class="[s.badge, s.new]" />
                </a>
              </template>
            </MobileMore>

            <span :class="s.item" @click="toggleModalLocale">
              <Icon name="download" />{{ currentLanguage }}/{{ currency }}
            </span>
            <a :class="s.item" href="/app-download">
              <Icon name="download" />{{ $t("download") }}
            </a>
            <span :class="s.item" @click="() => toggleNotification()">
              <Icon name="notification" />{{ $t("notification") }}
            </span>
            <a
              :class="s.item"
              href="https://support.poloniex.com/hc/zh-cn/requests/new"
              target="_blank"
            >
              <Icon name="customer-server" />{{ $t("support") }}
            </a>
            <span :class="s.item">
              <Icon name="theme" />
              {{ $t(`theme.${isDark ? "dark" : "light"}`) }}
              <!-- <PoloSwitcher
                size="large"
                :value="isDark"
                @change="toggleTheme"
                :style="{ marginLeft: 'auto' }"
              /> -->
            </span>
            <a :class="s.btnLogout" href="/logout">{{ $t("logout") }}</a>
          </div>
        </div>
      </div>
    </template>

    <Notification
      @close="toggleNotification(false)"
      v-show="notificationShow"
      id="headerNotification"
    />

    <ModalLocales
      :setCurrency="setCurrency"
      @close="toggleModalLocale(false)"
      v-if="modalLocalesShow"
    />
  </header>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import { useI18n } from "vue-i18n";
import {
  useScreenFix,
  useTheme,
  useProfile,
  useToggle,
  useCurrency,
  useOverideI18n,
} from "./composables";

const [isDark, toggleTheme] = useTheme();
const { profile, isLogin, fetchingProfile } = useProfile();
const [notificationShow, toggleNotification] = useToggle(false);
const [downloadShow, toggleDownload] = useToggle(false);
const [currency, setCurrency] = useCurrency();
const [modalLocalesShow, toggleModalLocale] = useToggle(false);
const [moreOptionShow, toggleMoreOption] = useToggle(false);
const { currentLanguage } = useOverideI18n();

const { widthClassname, bodyWidth } = useScreenFix();

const { t } = useI18n();

const Nav = defineAsyncComponent(() => import("./components/Nav/index.vue"));
const NotLogin = defineAsyncComponent(() =>
  import("./components/NotLogin/index.vue")
);
const Login = defineAsyncComponent(() =>
  import("./components/Login/index.vue")
);
const Notification = defineAsyncComponent(() =>
  import("./components/Notification/index.vue")
);
const ModalLocales = defineAsyncComponent(() =>
  import("./components/ModalLocales/index.vue")
);
</script>

<style lang="scss" module="s">
@import "./index.modules.scss";
</style>
