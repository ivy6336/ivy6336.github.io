console.log("I'm ready.");
//console.log常常用來驗證、debug

document.addEventListener("DOMContentLoaded", () => {
 
    console.log("Loaded Finish!");
//意思是等到文件都load完，才能抓到按鈕>所有東西都執行完成後回傳"Loaded Finish!"

    const button = document.getElementById("openMapButton");// 取得按鈕元素
    
    button.addEventListener("click", () => {
        console.log("Hit Hit Hit!");
    });// 為按鈕添加點擊事件

});
