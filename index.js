document.getElementById("submit").addEventListener('click', function(){
    console.log('button');
   const Username = "admin";
   const Password = 'admin123' ; 



   const UsernameValue = document.getElementById('username').value;
   const PasswordValue = document.getElementById('password').value;
  

   if(UsernameValue === Username && PasswordValue === Password){
    window.location.href = "./home.html"
   }
   else {
    alert ('invalid information');
   }
})