<template>
  <div class="video-details">
    <div class="title">Video Name</div>
    <div class="stats">1,000,000 Views • Oct 19, 2021</div>
    <div class="channel-name">Channel Name</div>
    <div class="description">
      This video is very lit. Please like and subscribe!
    </div>
  </div>
</template>

<style lang="scss" scoped>
.video-details {
  margin: 10px;
  margin-top: 0;
  background: var(--card-color);
  border-radius: 8px;
  padding: 10px;
  border: solid 1px rgba(0, 0, 0, 0.5);
}
.title {
  font-weight: bold;
  margin-bottom: 5px;
}
.channel-name {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
.stats {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
.description {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 5px;
}
</style>
