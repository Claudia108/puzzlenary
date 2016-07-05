import $ from "jquery";

class View {
  constructor(containerId) {
    this.$containerEl = $(`#${containerId}`);
  }

  render() {
    const gameDiv = this.createGameDivElement("Hi from game canvas!");
    this.$containerEl.append(gameDiv);
  }

  createGameDivElement(content) {
    const gameDivEl = document.createElement("div");
    gameDivEl.className = "game";
    gameDivEl.innerHTML = content;
    return gameDivEl;
  }
}

export default View;
