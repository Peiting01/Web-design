// 在畫面元素(靜態元素 document)載入完成後，才執行主程式
// $() => jQuery Selector
// .ready(事件處理器) 載入完成事件
// $(document).ready(function () {
// 主程式開始執行...
// });

$(function () {
    // JavaScript基礎語法
    // 變數 Variables
    // 把5指定給number1
    // ES6 const
    // var number1 = 8;
    // console.log(number1); // => 8
    // number1 = 12;
    // console.log(number1); // => 12
    // var 
    // const 不會變動的數值 => 常數 
    // let 會變動的數值(預算)
    // let number1 = 10;
    // console.log(typeof number1); // => number 數字
    // console.log(number1); // => 10
    // number1 = number1 / 15;
    // console.log(number1); // => 25

    // let number2 = "10";
    // console.log(typeof number2); // => string 字串
    // 數字 + 字串 = 字串
    // console.log(number1 + number2);

    // 布林 Boolean (true false)
    // console.log(0 < 1);
    // 問是否相等 ===
    // console.log(10 === "10"); // => false
    // 問是否不相等 !==
    // console.log(20 !== 20); // => 

    // function decisionForLunch() {
    //     if (budget > 100) {
    //         console.log('午餐吃麥當勞');
    //     } else {
    //         console.log('買便利商店的便當');
    //     }
    // }
    // let budget = 80;
    // decisionForLunch();

    // budget = budget + 100; // => 180
    // decisionForLunch();

    // 物件 object
    // const student1 = {
    //     id: 1,
    //     name: "John",
    //     age: 18
    // };

    // const student2 = {
    //     id: 2,
    //     name: "Jack",
    //     age: 20
    // }

    // function introduce(student) {
    //     console.log(`你好,我的名字是${student.name}今年${student.age}歲`);
    // }
    // introduce(student1);
    // introduce(student2);

    // console.log(student1); // => object
    // console.log(student1.name); // => "John"
    // console.log(student1.age); // => 18
    // console.log("你好，我的名字是" + student1.name + "今年" + student1.age + "歲");
    // console.log(`你好，我的名字是${student1.name}今年${student1.age}歲`);
    // console.log(`你好，我的名字是${student2.name}今年${student2.age}歲`);

    // 主程式開始執行...
    console.log("[主程式開始執行]");
    // 啟用WOW.js
    new WOW().init();

    // 選擇在.navbar裡面的.nav-link
    // .click(事件處理器) 點擊事件
    $(".navbar .nav-link").click(function () {
        // console.log("導覽列的連結被點擊了");
        // $(this)被點擊的.navbar裡面的.nav-link
        // console.log($(this)[0]);
        // 取得點擊連結後移動的目標
        // .attr("屬性名稱") => 取得標籤屬性的值
        // 取得目標
        const target = $(this).attr("href");
        // 取得#navbar的高度
        const navbarHeight = $('#navbar').height();
        // 取得目標座標位置
        // .offset() 取得元素座標(left, top)
        const targetPosition = $(target).offset().top;
        // 設定動畫秒數
        const duration = 1500;
        // 設定速度曲線
        const timingFunction = "easeInOutCubic";

        // 執行滾動動畫
        // .animate({}, 1000, "timingFunction") => 製作動畫
        // .stop() => 停止動畫
        $('html, body').stop().animate({
            // 改變html,body滾動位置至targetPosition
            scrollTop: targetPosition - navbarHeight
        }, duration, timingFunction);
    });

     // 設定啟用GOOGLE MAP的FUNCTION
     function initMap() {
        // 地理位置要用物件表達
        const myLocation = {
            lat: 30.7734945,
            lng: 30.991116
        };
        // 選取html裡面要放地圖的元素
        // <div id="map"></div>
        const mapElement = $("#map")[0];

        // 建立地圖
        const map = new google.maps.Map(mapElement, {
            center: myLocation,
            zoom: 14,
            // 設定是否可以拖曳(Boolean)
            draggable: false,
            // styles 設定客製化色彩
            styles: [
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#e0efef"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "hue": "#1900ff"
                        },
                        {
                            "color": "#c0e8e8"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": 700
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#7dcdcd"
                        }
                    ]
                }
            ]
            
        });
        // 建立座標點
        const marker = new google.maps.Marker({
            // 設定座標點顯示在哪張地圖上
            map: map,
            // 設定座標點的位置
            position: myLocation
            // 換座標點的圖
            // icon: "./img/marker.png"
        });
    }
    // 執行initMap
    initMap();

});