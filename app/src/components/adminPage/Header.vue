<template>
  <div class="header container shadow d-flex align-items-center">
    <div class="me-auto ms-5">管理者画面</div>
    <div>
      <a href="#" @click="transitionUserList">ユーザー一覧</a>
    </div>
    <div>
      <a href="#" @click="transitionPostList">投稿一覧</a>
    </div>
    <div>
      <img src="" alt="ユーザーアイコン" class="image-fluid" />
    </div>
    <div class="user-name">
      <label>ユーザー名</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    //ユーザー一覧画面に遷移
    const transitionUserList = () => {
      router.push({
        name: "UserList",
      });
    };

    //投稿一覧画面に遷移
    const transitionPostList = () => {
      router.push({
        name: "PostList",
      });
    };

    return {
      transitionUserList,
      transitionPostList,
    };
  },
});
</script>

<style scoped>
div .header {
  background-color: #ffffff;
  max-width: none;
  padding: 0;
  margin: 0;
  width: 100vw;
}

img {
  width: 40px;
  border-radius: 50%;
  margin-right: 30px;
  border: 1px solid;
  border-color: #636363;
}

.header {
  height: 7vh;
}

.user-name {
  margin-right: 30px;
}
</style>
