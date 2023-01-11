(function(){
    var timer;
    window.startLoading =  function(){
        var body = '<div id="loader" style="width:100%; margin:10px; color:#333">loading . . . </div>'
        document.body.innerHTML = body
        var loader = document.getElementById("loader")
        if(timer) {clearInterval(timer)}
        timer = setInterval(function(){
            loader.innerHTML = loader.innerHTML+ " ."
        },50)
    }
    
    window.stopLoading  = function(){
        clearInterval(timer)
    }
})()