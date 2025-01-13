
var infoDiv = document.getElementById('info');

let map = L.map('map').setView([25.03418011733245, 121.56459253956363], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([25.03418011733245, 121.56459253956363]).addTo(map);
marker1.bindPopup('這裡是台北 101!');//.openPopup()

var marker2 = L.marker([25.026252987107902, 121.52748399673779]).addTo(map);
marker2.bindPopup('這裡是師大!');//.openPopup()

var marker3 = L.marker([25.04218884309535, 121.50681628004327]).addTo(map);
marker3.bindPopup('這裡是西門紅樓!');//.openPopup()

marker1.on('click', function () {
    console.log('你點擊了: 台北 101');
    infoDiv.textContent="台北101介紹";
    map.panTo([25.03418011733245, 121.56459253956363]); 
});
// 平移到台北 101


marker2.on('click', function () {
    console.log('你點擊了: 師大');
    infoDiv.textContent="師大介紹";
    map.panTo([25.026252987107902, 121.52748399673779]); 

});


marker3.on('click', function () {
    console.log('你點擊了: 西門紅樓');
    infoDiv.textContent="西門紅樓介紹";
    map.panTo([25.04218884309535, 121.50681628004327]); 
});

function goPage(){
    window.location.href = "https://mira-ar.n010.app/show/t7oKmt";
    
}