/*
    1. HTMLで射的の的をdivタグを用いて作成し、「target」クラスを付ける。
        (配布素材を使用しない場合は、CSSでtargetのスタイルを設定する)
    2. Javascriptでtargetクラスを指定して要素を取得し、「Targets」変数に格納する。
        クラスを指定した要素の取得方法:document.getElementsByClassName(クラス名)
    3. Targetsの要素をfor文を用いて参照し、クリックイベントを作成する。
    4. targetがクリックされた時に、要素を見えなくする。
    5. 自分なりに拡張する。
*/
const dom_target = document.getElementsByClassName("target");

let s = new Date();
let second = s.getSeconds();
let i = 0;
let s2 = second % 2;
while (i < 20) {
switch (s2) {
  case 0:anime({
    targets: dom_target,
    translateX: 100
  })
  i += 1;
    break;
  default:anime({
    targets: dom_target,
    translateX: -100
  })
i += 1;
}


function p() {
  const dom_target = document.getElementsByClassName("target");

  for (let i = 0; i < dom_target.length; i++) {
  	dom_target[i].addEventListener('click', () => {
  		dom_target[i].style.display = "none";
  	}, false);

}
}
}
