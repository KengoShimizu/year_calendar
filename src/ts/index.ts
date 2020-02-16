//$クエリの設定
const $ = (...s: string) => {
  return (document.querySelectorAll(...s).length == 1 ? document.querySelectorAll(...s)[0] : document.querySelectorAll(...s));
}

//イベント名（間違い防止）
enum EventName {
  LOAD = "load",
  CLICK = "click",
  MOUSE_MOVE = "mousemove"
}

//カレンダー格子クラス
class Cell {
  constructor(private month: number, private date: number, private day: string, private plans: Array<string>) {}
}

//カレンダー作成
const table_html: string = "";
for (let i=0; i<30; i++){
  if (i%7 == 0){
    table_html += "<tr>";
  }
  table_html += "<td>"+(i+1)+"</td>"
  if(i%7 == 6){
    table_html += "</tr>";
  }
}
$("tbody").insertAdjacentHTML('afterbegin', table_html);

//クラス用意
const days: string[] = ["月", "火", "水", "木", "金", "土", "日"];
const cells: Cell[] = [];
for(let i=0; i<$(".cells td").length; i++){
  cells.push(new Cell(1,i+1,days[i%days.length],[]));
}


//cells[0].plans.push("asdf");

//クリック時イベント関数（予定入力ウィンドウ表示）
const clickcell = (num: number) => {
  $("#panning_window").style = "display: block;";
  $("#panning_window").classList.add("anime_test");
  //$("#panning_window").style = "top: "++";";
  //$("#panning_window").style = "left: "++";";
};

//各格子にイベントハンドラの実装
(() => {
  for(let i=0; i<$(".cells td").length; i++){
    $(".cells td")[i].addEventListener(EventName.CLICK, () => clickcell(i));
  }
})();
