function inputcode(x) {
  let origin = document.getElementById("code").value;
  document.getElementById("code").value = origin + x;

  fix_double_blank();
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

  fix_double_blank();
}

function fix_double_blank() {
  var str = document.getElementById("code").value;

  while (str.indexOf("  ") != -1) {
    str = str.replace("  ", " ");
  }
  document.getElementById("code").value = str;
}
