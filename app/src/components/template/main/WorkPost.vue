<template>
  <div class="rounded-lg bg-white shadow-lg p-16">
    <div class="flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-indigo-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
        />
      </svg>
    </div>
    <div class="text-center mt-2">
      <h1 class="text-purple-900 font-bold text-2xl">Modal Card Example</h1>
      <p class="text-gray-500 mt-3">
        You could also insert centered tabs to make this modal even more
        versatile.
      </p>
      <div class="mt-6">
        <ul
          class="flex justify-center space-x-6 text-indigo-800 border-b border-purple-50"
        >
          <li class="border-b-2 pb-3 border-indigo-600">One</li>
          <li>Two</li>
          <li>Forty Six</li>
        </ul>
      </div>
      <div class="py-8 border-b border-indigo-50">Content</div>
    </div>
    <div class="flex justify-center mt-8">
      <button
        class="text-white py-2 px-4 rounded-lg bg-purple-700 hover:bg-purple-600 shadow-md font-medium transition-colors"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export interface PostData {
  post_contents: string;
  main_image: string;
  sub_image_1: string;
  sub_image_2: string;
  sub_image_3: string;
}

export default defineComponent({
  setup() {
    const postData = reactive<PostData>({
      post_contents: "",
      main_image: "",
      sub_image_1: "",
      sub_image_2: "",
      sub_image_3: "",
    });

    // イベントハンドルする関数なので、イベントの変更を検知できる
    // このイベントにてファイル情報を取得している
    const previewImage = (e: Event) => {
      e.preventDefault();
      if (e.target instanceof HTMLInputElement && e.target.files) {
        if (!postData.main_image) {
          postData.main_image = URL.createObjectURL(e.target.files[0]);
        } else if (!postData.sub_image_1) {
          postData.sub_image_1 = URL.createObjectURL(e.target.files[0]);
        } else if (!postData.sub_image_2) {
          postData.sub_image_2 = URL.createObjectURL(e.target.files[0]);
        } else if (!postData.sub_image_3) {
          postData.sub_image_3 = URL.createObjectURL(e.target.files[0]);
        }
      }
    };
    return {
      postData,
      previewImage,
    };
  },
});
</script>
