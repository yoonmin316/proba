function main(){
    var e = document.getElementById('w').value;
    var p = 0;
    var n = 0;
    for(var i = 0;i < e;i++){
      a = Math.round(Math.random());
      if(a == 1){
          p += 1;
      }
      else if(a == 0){
          n += 1;
      }
    }
    document.querySelector('.days span').textContent = p;
    document.querySelector('.hours span').textContent = n;
    document.querySelector('.minutes span').textContent = p/e;
    document.querySelector('.seconds span').textContent = n/e;
  }