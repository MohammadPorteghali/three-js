<template>
  <nav class="main-nav">
    <button class="link" @click.stop="sidebar = true">
      <svg
        height="25pt"
        viewBox="0 -53 384 384"
        width="25pt"
        xmlns="http://www.w3.org/2000/svg"
        fill="#002040"
      >
        <path
          d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
        />
        <path
          d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
        />
        <path
          d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
        />
      </svg>
    </button>
    <div id="side-menu" v-click-outside="hideSidebar">
      <ul>
        <li>
          <a href="/">Animation</a>
        </li>
        <li>
          <a href="/geometries">Geometries</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const sidebar = ref(false);

    watchEffect(() => {
      if (sidebar.value) showSidebar();
    });

    const showSidebar = () => {
      const menu = document.getElementById("side-menu");
      menu.style.transform = "translateX(0)";
    };

    const hideSidebar = () => {
      sidebar.value = false;
      const menu = document.getElementById("side-menu");
      menu.style.transform = "translateX(-400px)";
    };

    return {
      sidebar,
      hideSidebar,
    };
  },
};
</script>
