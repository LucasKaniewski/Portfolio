function validateForm(){
    var user = document.forms["formulaire"]["user"];               
    var mail = document.forms["formulaire"]["mail"];    
    if (mail.value == ""){ 
        document.getElementById('errormail').innerHTML="Veuillez resaisir"; 
        mail.focus(); 
        return false; 
    }
    else{
        document.getElementById('errormail').innerHTML="";  
    }
    if (mail.value.indexOf("@", 0) < 0){ 
        document.getElementById('errormail').innerHTML="Veuillez resaisir"; 
        mail.focus(); 
        return false; 
    } 
    if (mail.value.indexOf(".", 0) < 0){ 
        document.getElementById('errormail').innerHTML="Veuillez resaisir"; 
        mail.focus(); 
        return false; 
    } 
    return true; 
}