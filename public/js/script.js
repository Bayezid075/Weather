
const weatherform = document.querySelector('#form_data')
const masOne = document.querySelector('#MassageOne')
const masTwo = document.querySelector('#MassageTwo')

weatherform.addEventListener('submit',()=>{
    const searchBox = document.querySelector('.search')
   const searchLoc = searchBox.value
   console.log(searchLoc);
    fetch('/weather?address='+searchLoc).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            masOne.textContent=data.error
        }else{
         console.log(data);
            
        }
    })
    console.log(searchLoc);
})




})





