function validation(){
    var user = document.getElementById('user').value
    var pass = document.getElementById('pass').value
    var confrom = document.getElementById('confrom').value
    var Email = document.getElementById('Email').value
    var number = document.getElementById('number').value
  
    

    if(user == "")
    {
        document.getElementById('userr').innerHTML="**please write user Name**"
       return false;
    }
    if(user.length<2)
    {
        document.getElementById('userr').innerHTML="**please write more thene 2 aliment**"
       return false;
    }
    if(!isNaN(user))
    {
        document.getElementById('userr').innerHTML="**please write a aliment**"
       return false;
    }
    else
    {
document.getElementById('userr').innerHTML="";
    }

    
 

    if(pass == "")
    {
        document.getElementById('passs').innerHTML="**please wrete password**"

    }
    if(confrom == "")
    {
        document.getElementById('confromm').innerHTML="**please confrom password**"

    }
    if(Email == "")
    {
        document.getElementById('Emaill').innerHTML="**please write Email**"

    }
    if(number == "")
    {
        document.getElementById('numberr').innerHTML="**please write numbar**"

    }

    if(isNaN(number))
    {
        document.getElementById('numberr').innerHTML="**please write numbar**"
     return false;
    }
    if(number.length<10 || number.length>10)
    {
        document.getElementById('numberr').innerHTML="**please write 10 numbar**"
     return false;
    }

    else
    {
        document.getElementById('numberr').innerHTML="";
    }

}