<template>
  <div>
    {{ home.title }}
  </div>
</template>
<script>
import homes from "~/data/homes";
export default {
  created() {
    const home = homes.find((home) => home.objectID == this.$route.params.id);
    this.home = home;
  },
};
</script>
