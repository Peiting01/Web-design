// JavaScript的註解
// 程式要在畫面元素都[載入完成]後才進行
// $() => jQuery選擇器
// $(".ingredients>li") => 選擇.ingredients裡面的li

// 當畫面元素(靜態元素)載入完後，執行主程式
// 選擇畫面元素(靜態元素) => document
// .ready(事件處理器) => 載入完成
// 事件處理器 => function(){ 事件動作... }
$(document).ready(function () {
    console.log("[畫面元素已經載入完成]");
    // $(".dish-name").text("Hello");
    // .click() => 點擊事件
    // 當.ingredients>li被點擊後，執行...動作
    $(".ingredients>li").click(function () {
        console.log("li被點擊了");
        // 把這個被點擊的li加上一個class叫做done
        // .addClass() 加上class
        // .removeClass() 減去class
        // .toggleClass() 切換class(class的開關)
        // this 現在就是.ingredients裡面被點擊的li
        $(this).toggleClass("done");
    });
});