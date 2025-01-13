var infoDiv = document.getElementById('info');

let map = L.map('map').setView([35.09751768198803, 129.01060312883567],5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([35.26729822856028, 139.01319008465745]).addTo(map);
marker1.bindPopup('這裡是小王子博物館');//.openPopup()

var marker2 = L.marker([37.715053256488, 127.49037721763875]).addTo(map);
marker2.bindPopup('這裡是小王子村!');//.openPopup()

var marker3 = L.marker([35.09751768198803, 129.01060312883567]).addTo(map);
marker3.bindPopup('這裡是甘川洞文化村!');//.openPopup()

marker1.on('click', function () {
    console.log('你點擊了: 小王子博物館');
    infoDiv.textContent="世界唯一的小王子博物館。展示廳裡面還有以照片、信和愛用品來介紹聖-修伯里的生涯。建築物外面再現了作者的時代20世紀初的法國街景，2023年閉館。";
    map.panTo([35.26729822856028, 139.01319008465745]); 
});


marker2.on('click', function () {
    console.log('你點擊了: 小王子村');
    infoDiv.textContent="也可以叫小法國村由16棟法國建築物構成，主題以小王子、星星、花為結構，是一個超好拍照景點！";
    map.panTo([37.715053256488, 127.49037721763875]); 

});


marker3.on('click', function () {
    console.log('你點擊了: 甘川洞文化村');
    infoDiv.textContent="甘川洞文化村地標是「小王子和沙漠狐狸」，旁邊時時刻刻都是超狂排隊人潮，這裡也可以蒐集印章喔！";
    map.panTo([35.09751768198803, 129.01060312883567]); 
});

function goPage(){
    window.location.href = "https://mira-ar.n010.app/show/t7oKmt";
    
}