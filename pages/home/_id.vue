<template>
  <div>
    <div class="display:flex;">
      <img
        v-for="image in home.images"
        :key="image"
        :src="image"
        width="200"
        height="150"
      />
    </div>
    {{ home.title }}<br />
    ${{ home.pricePerNight }} / night<br />
    <img src="/images/marker.svg" width="20" height="20" alt="" />{{
      home.location.address
    }}
    {{ home.location.state }} {{ home.location.country }}<br />
    <img src="/images/star.svg" width="20" height="20" alt="" />{{
      home.reviewValue
    }}<br />
    {{ home.guests }} guests, {{ home.bedroom }} rooms, {{ home.beds }} beds,
    {{ home.bathrooms }} bath<br />
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.home.title,
    };
  },
  async asyncData({ params, $dataApi }) {
    const home = await $dataApi.getHome(params.id);
    return {
      home,
    };
  },
};
</script>
