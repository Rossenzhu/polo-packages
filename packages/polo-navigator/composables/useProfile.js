import { ref, onMounted } from "vue";
// import { GET_PROFILE } from "@nav/lib/constant/API_POLO";
// import poloApi from "@nav/lib/apiInstance/poloApi";

const useProfile = () => {
  const profile = ref({});
  const isLogin = ref(false);
  const fetchingProfile = ref(true);

  onMounted(async () => {
    // const { error, ...data } = await poloApi(GET_PROFILE);
    const error = null;
    const data = { a: 1 };
    profile.value = {
      ...data,
    };
    isLogin.value = !error;
    fetchingProfile.value = false;
  });

  return { profile, isLogin, fetchingProfile };
};

export default useProfile;
