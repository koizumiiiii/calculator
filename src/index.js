// option生成
const optionNums = document.getElementsByClassName("calc_num");
for (let i = 0; i < 11; i++) {
  for (let j = 0; j < optionNums.length; j++) {
    const newOption = document.createElement("option");
    newOption.innerHTML = i;
    newOption.value = i;
    if (i === 1) {
      newOption.setAttribute("selected", true);
    }
    optionNums[j].appendChild(newOption);
  }
}
// 計算記号生成
const addSymbo = document.querySelector("#add .symbol");
addSymbo.innerHTML = "+";
const subSymbo = document.querySelector("#sub .symbol");
subSymbo.innerHTML = "-";
const multiSymbo = document.querySelector("#multi .symbol");
multiSymbo.innerHTML = "×";
const diviSymbo = document.querySelector("#divi .symbol");
diviSymbo.innerHTML = "÷";

// 選択されてる数字を計算式にセット
const selectValSet = () => {
  const selectedVals = [];
  for (let i = 0; i < optionNums.length; i++) {
    const optionList = optionNums[i].children;
    for (var j = 0; j < optionList.length; j++) {
      if (optionList[j].selected) {
        selectedVals.push(optionList[j].value);
      }
    }
  }

  const selectNum1 = document.getElementsByClassName("select_num1");
  const selectNum2 = document.getElementsByClassName("select_num2");

  for (let k = 0; k < selectNum1.length; k++) {
    selectNum1[k].innerHTML = selectedVals[0];
    selectNum2[k].innerHTML = selectedVals[1];
  }
};

// 各計算式
const calculation = () => {
  const anserArea = document.getElementById("anser_area");
  for (let i = 0; i < anserArea.children.length; i++) {
    const elements = anserArea.children[i].children;
    const elemNum1 = parseInt(elements[0].innerText, 10);
    const elemNum2 = parseInt(elements[2].innerText, 10);

    switch (anserArea.children[i].id) {
      case "add":
        const addAnser = document.querySelector("#add .anser");
        const elemAnser1 = elemNum1 + elemNum2;
        addAnser.innerText = elemAnser1;
        break;
      case "sub":
        const subAnser = document.querySelector("#sub .anser");
        const elemAnser2 = elemNum1 - elemNum2;
        subAnser.innerText = elemAnser2;
        break;
      case "multi":
        const multiAnser = document.querySelector("#multi .anser");
        const elemAnser3 = elemNum1 * elemNum2;
        multiAnser.innerText = elemAnser3;
        break;
      case "divi":
        const diviAnser = document.querySelector("#divi .anser");
        const elemAnser4 = elemNum1 / elemNum2;
        diviAnser.innerText = elemAnser4;
        break;
      default:
    }
  }
};

selectValSet();
calculation();

// 計算ボタンイベント
const btnCalc = document.getElementById("btn_calc");
btnCalc.addEventListener("click", event => {
  selectValSet();
  calculation();
});
