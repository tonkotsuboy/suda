class SuperLikes {
  constructor() {
    this.likeList = [];
    this.timerList = [];

    this.init();
    this.isOn = false;
  }

  init() {
    Promise.all([
      this.fetchSource(),
      this.loadSe()
    ])
  }

  async fetchSource() {
    const response = await fetch("./svg/sudaButton.svg");
    const svgCode = await response.text();
    // LikeButton用ソースコードに変換
    const likeButtonCode = svgCode.replace("<svg", `<svg class="likeButton"`);

    // Likeボタンをレイアウト
    this.addLikeButtons(likeButtonCode);

    console.log("svg1");


    return svgCode;
  }

  async loadSe() {
    return new Promise(resolve => {
      createjs.Sound.alternateExtensions = ["mp3"];
      createjs.Sound.registerSound("mp3/people-people-shout-oo1.mp3", "sound");
      createjs.Sound.on("fileload", () => {
        console.log("svg2");
        resolve();
      }, this);
    });
  }

  addLikeButtons(likeButtonCode) {

    const container = document.getElementById("container");

    const likeContainerMaster = document.createElement("div");
    likeContainerMaster.classList.add("likeContainer");
    likeContainerMaster.innerHTML = likeButtonCode;

    const likeNum = 24;

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

    this.timerList.forEach((timer) => {
      clearTimeout(timer);
    });

    if (this.isOn) {
      this.likeList.forEach((likeContainer, i) => {
        likeContainer.classList.remove("clicked");
      });
    }
    else {

      this.timerList = [];
      createjs.Sound.play("sound");

      this.likeList.forEach((likeContainer, i) => {
        const timer = setTimeout(() => {
          likeContainer.classList.add("clicked");

          if (i % 2 === 0) {
            createjs.Sound.play("sound");
          }
        }, i * 100);
        this.timerList.push(timer);
      });
    }

    this.isOn = !this.isOn;
  }
}

new SuperLikes();
