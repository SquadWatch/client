<template>
  <div class="chat">
    <div class="title">Chat</div>

    <div class="logs"></div>
    <div class="input-area">
      <input class="input" placeholder="Send Message" />
      <div class="button">Send</div>
    </div>
  </div>
</template>

<style lang="scss">
.chat {
  height: 100%;
  flex: 1;
  margin: 10px;
  width: 300px;
  flex-shrink: 0;
  margin-left: 0;
  background: var(--card-color);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: solid 1px rgba(0, 0, 0, 0.5);
  .title {
    padding: 10px;
  }
}
.logs {
  display: flex;
  height: 100%;
}
.input-area {
  display: flex;
  margin: 10px;
}
.button {
  margin: 10px;
}
.input {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  outline: none;
  border-radius: 4px;
  padding: 10px;
  border: none;
  width: 100%;
}
</style>
