<template>
  <div>
    <nb-navbar></nb-navbar>
    <div class="app">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import NbNavbar from "@/components/NbNavbar.vue";

export default {
  components: {NbNavbar}

}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: var(--background-primary-color);
  color: var(--text-primary-color);
}
</style>