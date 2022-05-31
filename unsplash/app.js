

const home_unlist = document.querySelectorAll('.first_ul ul li');
 home_unlist[1].style.borderRight ='1px solid rgb(218 218 218)';
 const icon = document.querySelectorAll('.icon_wrapper ');
 const allimage= document.querySelectorAll('.image_slider_list_wrapper');
 const disable =document.querySelector('.disable');

 const allmainimage=document.querySelectorAll('.imm');
 const setimage=document.querySelector('.popup_image_middle img');
const popup_slider =document.querySelector('.popup_slider');
   const fail =document.querySelector('.fail');
   const side_menu_url =document.querySelector('.side_menu_url');
     
   fail.addEventListener('click',(x)=>{
      side_menu_url.classList.toggle('classes')
     fail.querySelector('i').classList.toggle('fa-times');
     
       
   })
     

     allmainimage.forEach( (image,k) =>{
        image.addEventListener('click',(e)=>{
           setimage.setAttribute('src',e.target.src);
           disable.classList.remove('close')
           popup_slider.classList.remove('boom')
             
        })
     })

     disable.addEventListener('click',(x)=>{
        disable.classList.add('close')
        popup_slider.classList.add('boom')
     })
     
     
   
         
   
 

   
     
     
     
     
     
     
     
     
     
         







		
	

  


  



		    
			 
		  
	



	
	
        



       





	









 



 



 