async function main() {
  const response = await fetch("./svg/likeButton.svg");
  const svgCode = await response.text();
  const likeButtonCode = svgCode.replace("<svg", `<svg class="likeButton"`);

  const container = document.getElementById("container");

  const likeContainerMaster = document.createElement("div");
  likeContainerMaster.classList.add("likeContainer");
  likeContainerMaster.innerHTML = likeButtonCode;

  const likeList = [];

  const likeNum = 40;

  for (let i = 0; i < likeNum; i++) {
    const likeContainer = likeContainerMaster.cloneNode(true);
    container.appendChild(likeContainer);
    likeList.push(likeContainer);
  }

  // 全世界同時バージョン
  addEventListener("click", () => {
    likeList.forEach((likeContainer) => {
      likeContainer.classList.toggle("clicked");
    })
  });
}

main();
