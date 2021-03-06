/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* 画面遷移処理 */
import { useRouter } from "vue-router";

export const screenTransition = () => {
  //新規登録画面

  const router = useRouter();

  const toSignUp = (): void => {
    router.push({
      name: "SignUp",
    });
  };

  const toSignIn = (): void => {
    router.push({
      name: "SignIn",
    });
  };

  //
  const toTop = (): void => {
    router.push({
      name: "Top",
    });
  };

  const toDetail = (): void => {
    router.push({
      name: "Detail",
    });
  };

  return {
    toSignIn,
    toSignUp,
    toTop,
    toDetail,
  };
};
