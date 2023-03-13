import enquire from "enquire.js";
import { onBeforeMount, onUnmounted, ref } from "vue";
import { throttle } from "lodash-es";

const breakPoints = [
  {
    width: 375,
    classname: "w375",
  },
  {
    width: 768,
    classname: "w768",
  },
  {
    width: 1024,
    classname: "w1024",
  },
  {
    width: 1280,
    classname: "w1280",
  },
];

export default function useScreenFix() {
  let initClassname = "";
  for (let i = 0; i < breakPoints.length - 1; i++) {
    if (
      window.innerWidth > breakPoints[i].width &&
      window.innerWidth < breakPoints[i + 1].width
    ) {
      initClassname = breakPoints[i].classname;
      break;
    } else {
      continue;
    }
  }
  const widthClassname = ref(initClassname);
  const bodyWidth = ref(1024);

  const resizeListener = throttle(() => {
    bodyWidth.value = window.innerWidth;

    breakPoints.forEach((item, i) => {
      const text =
        i === 0
          ? `screen and (max-width: ${breakPoints[i + 1].width}px)`
          : i === breakPoints.length - 1
          ? `screen and (min-width: ${item.width + 1}px)`
          : `screen and (min-width: ${item.width + 1}px) and (max-width: ${
              breakPoints[i + 1].width
            }px)`;

      enquire.register(text, () => {
        console.log(text);
        widthClassname.value = item.classname;
      });
    });
  }, 100);

  onBeforeMount(() => {
    resizeListener();
    window.addEventListener("resize", resizeListener);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resizeListener);
  });

  return {
    widthClassname,
    bodyWidth,
  };
}
