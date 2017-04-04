async function helloWorld():Promise<void> {
  await delay(300);
  const xJump = document.getElementById("xJump");

  let jump:boolean = true;

  for (let i = 0; i < 500000; i++) {
    await delay(500);

    const jumpCode:string = getJumpCode(jump);

    xJump.innerHTML = jumpCode;
    jump = !jump;
  }

  await delay(400);

}

const mens:string = "🙅🙅🙅🙅🙅🙅🙅🙅🙅🙅🙅🙅🙅";

const effect:string = "｜｜｜｜｜｜｜｜｜｜｜｜｜";

var jumpNum:number = 7;

function getJumpCode(jump:boolean):string {
  let jumpCode:string = "";

  if (jump) {
    jumpCode = `${mens}`;
    for (var i = 0; i < jumpNum; i++) {
      var obj = jumpCode[i];
      jumpCode += `<br>${effect}`;
    }

  } else {
    jumpCode = `<br><br>${mens}`;
  }

  return jumpCode;
}

function delay(milliseconds:number):Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

helloWorld();
