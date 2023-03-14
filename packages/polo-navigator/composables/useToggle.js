import { ref } from "vue";

const useToggle = (bool) => {
  const boolean = ref(bool);
  const toggle = (value) => {
    boolean.value = value === undefined ? !boolean.value : value;
  };
  return [boolean, toggle];
};

export default useToggle;
