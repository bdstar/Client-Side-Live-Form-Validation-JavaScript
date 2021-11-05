$(document).ready(function(){

var author_basic_txt = "What should we can call u ?";
var author_blank_txt = "Name conn't be blank !";
var author_error_txt = "Name only contains alphanumeric character !";
var author_format = /^[0-9a-zA-Z]+$/;

var address_basic_txt = "Where should we can meet with u?";
var address_blank_txt = "Address is Blank!";
var address_error_txt = "Address Should be right!";
var address_format = /[^~]/;

var email_basic_txt = "Where should we can contact u ?";
var email_blank_txt = "E-mail address cann't be blank !";
var email_error_txt = "Email address is not valid !";
var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var password_basic_txt = "Enter Security Code for your Account";
var password_blank_txt = "Security Code cann't be blank !";
var password_error_txt = "Security Code Should be right";
var password_format = /[^~]/;

var url_basic_txt = "Where should we can connect with u ?";
var url_blank_txt = "You don't entry URL address";
var url_error_txt = "URL is not valid !";
var url_format = /http:\/\/[A-Za-z0-9\.-]{3,}\.[A-Za-z]{3}/;

var comment_basic_txt = "What's on in u'r mind ?";
var comment_blank_txt = "Your comment area is blank !";
var comment_error_txt = "Comment should be right !";
var comment_format = /[^~]/;

var add_basic_txt = "Please adding this two value.";
var add_blank_txt = "You should be answer it !";
var add_error_txt = "Answer has only digits !";
var add_wrong_ans = "This addition is not right !";
var add_format = /^[0-9]+$/;

// ----------------------Check the form in LIVE-----------------------
FieldFocus("author","#author","#author-footer-ex","#author-arrow-box",385,author_basic_txt,author_blank_txt,author_error_txt,author_format);
FieldFocus("address","#address","#address-footer-ex","#address-arrow-box",385,address_basic_txt,address_blank_txt,address_error_txt,address_format);
FieldFocus("email","#email","#email-footer-ex","#email-arrow-box",385,email_basic_txt,email_blank_txt,email_error_txt,email_format);
FieldFocus("password","#password","#password-footer-ex","#password-arrow-box",385,password_basic_txt,password_blank_txt,password_error_txt,password_format);
FieldFocus("url","#url","#url-footer-ex","#url-arrow-box",385,url_basic_txt,url_blank_txt,url_error_txt,url_format);
FieldFocus("comment","#comment","#comment-footer-ex","#comment-arrow-box",500,comment_basic_txt,comment_blank_txt,comment_error_txt,comment_format);
FieldFocus("add","#add","#add-footer-ex","#add-arrow-box",165,add_basic_txt,add_blank_txt,add_error_txt,add_format);


// ----------- Check the form after click "Post Comment" button-------------
$("#submit").click(function(){
    var Author_Check = Submit_Check("author","#author","#author-arrow-box",author_blank_txt,385,"#FDD","#F00",add_format);
	var Address_Check = Submit_Check("address","#address","#address-arrow-box",address_blank_txt,385,"#FFF","#FFC",add_format);     
	var Email_Check = Submit_Check("email","#email","#email-arrow-box",email_blank_txt,385,"#FDD","#F00",add_format);
  var Password_Check = Submit_Check("password","#password","#password-arrow-box",password_blank_txt,385,"#FDD","#F00",add_format);	 
	var url_Check = Submit_Check("url","#url","#url-arrow-box",url_blank_txt,385,"#FFF","#FFC",add_format);
	var Comment_Check = Submit_Check("comment","#comment","#comment-arrow-box",comment_blank_txt,500,"#FFF","#FFC",add_format);
	var Add_Check = Submit_Check_add("add","#add","#add-arrow-box",add_blank_txt,add_wrong_ans,165,"#FDD","#F00",add_format,add_error_txt);
	
	//If Each Mendatory Field fill-up properly then return true
	if(Author_Check==true && Email_Check==true && Password_Check==true && Add_Check==true){
		return true;
	}
	else{
		return false;
	}
	
  });
});
// End of document


function FieldFocus(name,area,foot_area,right_area,right_pos,right_txt,right_txt_blank,right_txt_er,field_format){

  $(area).focus(function(){						 
	$(this).css("background-color","#FFE");
	$(foot_area).animate({ opacity:'1'});
	
	$(right_area).css("color","#FFC");
	$(right_area).animate({ opacity:'0',left:'250px',top:'25px'});
	$(right_area).text(right_txt);
    $(right_area).animate({ opacity:'1',left:right_pos,top:'25px'});	
  });
  
  $(area).blur(function(){			
	$(this).css("background-color","#fff");
	$(foot_area).animate({ opacity:'0'});
    $(right_area).animate({ opacity:'0',left:'250px',top:'25px'});
	
	// Live Check the field that is focus-out(blur)
	live_check(name,area,right_area,right_pos,right_txt_blank,right_txt_er,field_format);
  });
}//End of function FieldFocus



function live_check(name,area,right_area,right_pos,right_txt_blank,right_txt_er,field_format){
	var field_value=document.forms["ContactUs"][name].value;

        if (field_value==null || field_value=="") // If field is blank
		{
			if(name=="author"||name=="email"||name=="add"||name=="password") // required field check
			{
			   field_output(area,right_area,right_txt_blank,right_pos,"#FDD","#F00");
			}
			else
			{
			   field_output(area,right_area,right_txt_blank,right_pos,"#FFF","#FFC");
			}
		}
		
		else //If, Field is not blank
		{
			if(field_value.match(field_format))
			{
				return true;
			}
			else
			{
				field_output(area,right_area,right_txt_er,right_pos,"#FDD","#F00");
			}
        }// End of else [i.e, field is not blank]

} // End of function Check



function Submit_Check(field_name,field_id,box,box_msg,box_pos,field_bgcolor,box_color,field_pattern)
{ 
 var field_value=document.forms["ContactUs"][field_name].value;

 	if (field_value==null || field_value=="") // If field is blank
 	{
		field_output(field_id,box,box_msg,box_pos,field_bgcolor,box_color);
		return false;
 	}
	else //If, Field is not blank
	{
		if(field_value.match(field_pattern))
		{
			//alert('Field in not Blank - Matched');
			return true;
		}
		else
		{
			//alert('Field in not Blank - Not Matched');
			field_output(field_id,box,box_msg,box_pos,field_bgcolor,box_color);
			return false;
		}
    }// End of else [i.e, field is not blank] 
}


function Submit_Check_add(field_name,field_id,box,blank_msg,wrong_ans,box_pos,field_bgcolor,box_color,field_format,err_txt)
{
	var field_value=document.forms["ContactUs"][field_name].value;
	var sum=value1+value2;
	
	if(field_value==null || field_value=="")
	{
		field_output(field_id,box,blank_msg,box_pos,field_bgcolor,box_color);
		return false;
	}
	else
	{
		if(field_value.match(field_format))
			{
				if(field_value==sum)
		        {
				   return true;
	            }
	            else
		        {
		           field_output(field_id,box,wrong_ans,box_pos,field_bgcolor,box_color);
		           return false;
	            }
			}
			else
			{
				field_output(field_id,box,err_txt,box_pos,field_bgcolor,box_color);
				return false;
			}
        
	}
}


function field_output(field,box,txt,pos,bgcolor,color)
{
	     var div=$(field);
		 div.css("background-color",bgcolor);
		 
         div.animate({opacity:'0.4'},"slow");
         div.animate({opacity:'0.8'},"slow");
         div.animate({opacity:'0.4'},"slow");
         div.animate({opacity:'0.8'},"slow");
         div.animate({opacity:'0.4'},"slow");
         div.animate({opacity:'0.8'},"slow");
		 
		 $(box).css("color",color);
		 $(box).text(txt);
		 $(box).animate({ opacity:'1',left:pos,top:'25px'});
}