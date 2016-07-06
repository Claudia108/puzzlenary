import $ from "jquery";

class View {
  constructor(containerId) {
    this.$containerEl = $(`#${containerId}`);
  }

  render() {
    return true;
  }

  createGameDivElement(content) {
    const gameDivEl = document.createElement("div");
    gameDivEl.className = "game";
    gameDivEl.innerHTML = content;
    return gameDivEl;
  }
}

export default View;
