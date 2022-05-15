function inputcode(x) {
  let origin = document.getElementById("code").value;
  document.getElementById("code").value = origin + x;
}

function copy() {
  var content = `\u0024\\ce\u007B${
    document.getElementById("code").value
  }\u007D\u0024`;

  navigator.clipboard
    .writeText(content)
    .then(() => {
      console.log("內容已複製");
    })
    .catch((err) => {
      console.error(err);
    });
}

function clear() {
  document.getElementById("code").value = "";
}
