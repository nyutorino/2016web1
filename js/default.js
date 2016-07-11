var thmubs = document.querySelectorAll('.thumb');
for(idx in thmubs){
    thmubs[idx].onclick = function(){
        document.getElementById("bigimg").src = 'img/' + this.dataset.image + '.jpg';
    }
}


// クッキーの値を取得 (クッキー名)
function getCookie(c_name){
    var st="";
    var ed="";
    if(0 < document.cookie.length){
        // クッキーの値を取り出す
        st=document.cookie.indexOf(c_name + "=");
        if(st!=-1){
            st=st+c_name.length+1;
            ed=document.cookie.indexOf(";",st);
            if(ed==-1) ed=document.cookie.length;
            // 値をデコードして返す
            return unescape(document.cookie.substring(st,ed));
        }
    }
    return "";
}

// Cookieを読み込んで、表示する文章を変える
var last_date = getCookie('lastDate');
if(last_date){
    document.getElementById('cookie').textContent = '前回訪れた時間：' + last_date;
}else{
    document.getElementById('cookie').textContent = 'はじめまして';
}

// 新しい値の保存
var current_time = new Date();
setCookie('lastDate', current_time.toString(), 7);

// クッキーの削除
document.getElementById('remove_cookie').onsubmit = function(){
    setCookie('lastDate', "", 0);
};


function getFileName() {
    // ホスト以下のパスを取得し、それをsplit('/')で「/」区切りで配列に入れ、pop()で配列の最後の値を取得
    return window.location.href.split('/').pop();
}
var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt = document.querySelector('option[value="other.html"]');
}else{
  opt = document.querySelector('option[value="index.html"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}
