<template>
  <div class="header">
    <input class="search" type="text" placeholder="Search Videos" />
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  height: 50px;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
}
.search {
  background: var(--card-color);
  color: white;
  outline: none;
  border-radius: 4px;
  padding: 10px;
  border: none;
  max-width: 400px;
  width: 100%;
  border: solid 1px rgba(0, 0, 0, 0.5);
}
</style>
