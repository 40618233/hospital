    //紀錄頁籤ID 作為預設
    var currentLayer="tab1"
    //紀錄頁面ID 作為預設
    var currentDiv="lef1"
    //判斷要換頁
    function showLayer(obj,div) {
      //頁籤ID!=當前ID
      if(currentLayer!=obj.id){
        showIt(currentLayer,currentDiv,false);
        //重製頁籤 頁面ID
        currentLayer=obj.id;
        currentDiv=div;
        showIt(currentLayer,currentDiv,true);
      }
    }

    //是否要顯示
    function showIt(o,d,mode) {
      //取得ID
      var obj=document.getElementById(o);
      var div=document.getElementById(d);
      //改變display
      div.style.display=mode?"block":"none";
      //改變class樣式
      obj.className=mode?"tab-open":"tab-close"
    }