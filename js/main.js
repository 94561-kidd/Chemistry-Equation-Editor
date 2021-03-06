function inputcode(x) {
  document.getElementById("code").value += x;

  fix_double_blank();
}

function copy() {
  fix_double_blank();

  var x = document.getElementById("code");
  var str = x.value;
  if (str.slice(-1) == " ") {
    x.value = str.substring(0, str.length - 1);
  }

  var content = `\u0024\\ce\u007B${x.value}\u007D\u0024`;

  navigator.clipboard
    .writeText(content)
    .then(() => {
      console.log("內容已複製");
    })
    .catch((err) => {
      console.error(err);
    });
}

function backspace() {
  var x = document.getElementById("code");
  var str = x.value;
  x.value = str.substring(0, str.length - 1);
}

function fix_double_blank() {
  var x = document.getElementById("code");
  var str = x.value;

  while (str.indexOf("  ") != -1) {
    str = str.replace("  ", " ");
  }
  x.value = str;
}

var code_onfocus = 0;

document.onkeydown = keyDown;
function keyDown() {
  if (code_onfocus == 1) {
    return 0;
  }

  var event = event || window.event; // 標準化事件物件
  var keynum = event.keyCode;
  var keystr = "";

  if (keynum == 17) {
    copy();
    return 1;
  }

  if (event.shiftKey == 1) {
    if (keynum >= 65 && keynum <= 90) {
      keystr = String.fromCodePoint(keynum);
    } else {
      switch (keynum) {
        case 48:
          keystr = ")";
          break;
        case 56:
          keystr = "*";
          break;
        case 57:
          keystr = "(";
          break;
        case 187:
          keystr = "+";
          break;
        case 188:
          keystr = "<";
          break;
        case 190:
          keystr = ">";
          break;
        case 192:
          keystr = "~";
          break;
      }
    }
  } else {
    if (keynum >= 48 && keynum <= 57) {
      keystr = String.fromCodePoint(keynum);
    } else if (keynum >= 65 && keynum <= 90) {
      keystr = String.fromCodePoint(keynum + 32);
    } else if (keynum >= 96 && keynum <= 105) {
      keystr = String.fromCodePoint(keynum - 48);
    } else {
      switch (keynum) {
        case 106:
          keystr = "*";
          break;
        case 107:
          keystr = "+";
          break;
        case 109:
          keystr = "-";
          break;
        case 111:
          keystr = "/";
          break;
        case 187:
          keystr = "=";
          break;
        case 189:
          keystr = "-";
          break;
        case 191:
          keystr = "/";
          break;
      }
    }
  }
  document.getElementById("code").value += keystr;
  if (keynum == 8) {
    backspace();
  }
}
