var myCanvas = document.querySelector("#myCanvas");
var context2d = myCanvas.getContext("2d");
// webGL
// const webGLContenxt: WebGLRenderingContext = myCanvas.getContext("webgl");
context2d.fillStyle = "#ff0000";
context2d.fillRect(0, 0, 100, 100);
var imageData = context2d.getImageData(0, 0, 100, 100);
console.dir(imageData);
console.dir(imageData.data.length);
var imageDataArray = context2d.getImageData(0, 0, 100, 100).data;
imageDataArray.forEach(function (param) {
    if (param % 3 === 0) {
        param = 125;
    }
});
var hoge;
