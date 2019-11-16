window.onload=function(){
    document.getElementById("lookup").onclick=function(){    
    var xhr=new XMLHttpRequest();
    var query=document.getElementById("country").value;
    var url = "https://82b2d32234c14705a530e170820bfe8b.vfs.cloud9.us-east-1.amazonaws.com/world.php?country="+query;
    xhr.onreadystatechange = doSomething; 
    xhr.open('GET', url); 
    xhr.send();
    function doSomething() { 
        if (xhr.readyState === XMLHttpRequest.DONE) { 
            if (xhr.status === 200) { 
                var response = xhr.responseText; 
                 document.getElementById("result").innerHTML=response.trim(); 
            }  else{
                alert('There was a problem with the request.'); 
    
            }
        }
    }
    }
    document.getElementById("City").onclick=function(){    
    var x2=new XMLHttpRequest();
    var query=document.getElementById("country").value;
    var url = "https://82b2d32234c14705a530e170820bfe8b.vfs.cloud9.us-east-1.amazonaws.com/world.php?country="+query+"&context=cities";
    x2.onreadystatechange =Changing; 
    x2.open('GET', url); 
    x2.send();
    function Changing() { 
        if (x2.readyState === XMLHttpRequest.DONE) { 
            if (x2.status === 200) { 
                var response = x2.responseText; 
                 document.getElementById("result").innerHTML=response.trim(); 
            }  else{
                alert('There was a problem with the request.'); 
    
            }
        }
    }
    }
    }
    