class SuperLikes {
  constructor() {
    this.init();
    this.likeList = [];
  }
  async init() {
    // SVGコードのフェッチ
    const svgCode = await this.fetchSource();
    // LikeButton用ソースコードに変換
    const likeButtonCode = svgCode.replace("<svg", `<svg class="likeButton"`);

    // Likeボタンをレイアウト
    this.addLikeButtons(likeButtonCode);
  }

  async fetchSource() {
    const response = await fetch("./svg/likeButton.svg");
    const svgCode = await response.text();

    return svgCode;
  }

  addLikeButtons(likeButtonCode) {

    const container = document.getElementById("container");

    const likeContainerMaster = document.createElement("div");
    likeContainerMaster.classList.add("likeContainer");
    likeContainerMaster.innerHTML = likeButtonCode;

    const likeNum = 40;

    for (let i = 0; i < likeNum; i++) {
      const likeContainer = likeContainerMaster.cloneNode(true);
      container.appendChild(likeContainer);
      this.likeList.push(likeContainer);
    }

    this.addEvents();
  }

  addEvents() {
    // イベント設定
    window.addEventListener("click", () => this.onClick());
    window.addEventListener("touchstart", () => this.onClick());
  }

  onClick() {
    if (!this.likeList) {
      return;
    }

    this.likeList.forEach((likeContainer) => {
      likeContainer.classList.toggle("clicked");
    });
  }
}

new SuperLikes();
