//now what?
	//api:  http://www.ist.rit.edu/api/
	$(document).ready(function(){
		//get the /about/
		

		
		
		$.ajax({
			type:'get',
			url:'proxy.php',
			data:{path:'/about/'},
			dataType:'json'
		}).done(function(json){
			
			
			$('.about-title').append(json.title);
			$('.about-desc').append(json.description);
			$('.about-quote').append(json.quote);
			
			$('.about-quoteAuthor').append(json.quoteAuthor);
			
		});
		
		//get undergraduate....
		$.ajax({ 
			type:'get',
			url:'proxy.php',
			data:{path:'/degrees/undergraduate/'},
			dataType:'json'
		}).done(function(json){
			//console.log(json.undergraduate[0].degreeName);
            var obj =  new Array();
			var font_icon = ['fas fa-globe fa-5x ','fas fa-laptop fa-5x ','fas fa-code fa-5x'];

            $.each(json.undergraduate,function(i,item){
                $("#under").append('<div class="ugradd col-lg-4 col-md-8 text-center" ; style="text-align:center; cursor:pointer"><i class="'+font_icon[i]+'"; id="icons"></i><h3 class="utitle";style:"font-size:1.6vw"></h3><p class="udesc"></div></p></div></div></div>');
                $('.utitle').eq(i).append(item.title).css({"font-size":"1.9vw","color":"black"});
                $('.udesc').eq(i).append(item.description).css({"font-size": "1.0vw","color":"black"});
				
				
				
				$(".ugradd").eq(i).hover(function(){
                   // $(this).css("color", "yellow");
				   $('#icons').eq(i).css("transform", "rotateY(150deg)");
					$('.utitle').eq(i).css("font-size", "2vw");
                 }, function(){
                    $('#icons').eq(i).css("transform", "rotateY(0deg)");
					$('.utitle').eq(i).css("font-size", "1.6vw");
					
                 });

				
				
			
			    $('.ugradd').eq(i).click(function(){
			
			       var x = '';
                    $.each(json.undergraduate[i].concentrations, function (j, item1) {
                        obj[j] = item1;
                        x += '<li>' + item1 + '</li>';
                    })
					
					$.dialog({
                   title: item.title,
                      content: x,
					  animationSpeed: 500,
					  animationBounce: 2.5,
					  theme: 'material',
					  
					  
                   });
					
				
					
			
			});
			
			
			
			
			
			})   
				
		});
		
		
		
		
		//get Grad course

        $.ajax({
            type:'get',
            url:'proxy.php',
            data:{path:'/degrees/'},
            dataType:'json'
        }).done(function(json){
            //console.log(json.undergraduate[0].degreeName);
			var font_icon = ['fas fa-tv fa-5x text-succes','fas fa-database fa-5x text-succes','far fa-hand-paper fa-5x text-succes'];
			
            var obj =  new Array();
            $.each(json.graduate,function(i,item){
				
				if(item.degreeName !="graduate advanced certificates"){
                $("#grad").append('<div class="ggradd col-lg-4 col-md-8 text-center" style="text-align:center; cursor:pointer"><div class="service-box mt-5 mx-auto"> <i class="'+font_icon[i]+'"></i><h3 class="gtitle"></h3><p class="gdesc"></p></div></div></div>');
                $('.gtitle').eq(i).append(item.title).css({"font-size": "1.9vw","color":"white"});
                $('.gdesc').eq(i).append(item.description).css({"font-size": "1.0vw","color":"white"});
				}
				
				
				$('.ggradd').eq(i).hover(function(){
                   
					$(".gtitle").eq(i).css( "font-size", "1vw");
                 }, function(){
                    
					$(".gtitle").eq(i).css( "font-size", "1.9vw");
					
                 });
				
				
				
                $('.ggradd').eq(i).click(function() {
					
                    var x = '';
                    $.each(json.graduate[i].concentrations, function (j, item1) {
                        
						if(item1.degreeName !="graduate advanced certificates"){
						
                        x += '<li>' + item1 + '</li>';
						}
                    })
					
					
					
					
                    $.dialog({
                        columnClass: 'col-md-6 col-md-offset-3',
                        title: '<h2>' + item.title + '</h2>',
                        content: '<ul>' + x + '</ul>',
                       animationSpeed: 2000,
					  animationBounce: 2.5,
					  theme: 'material',


                    })
					
                });
            })
        });

		$.ajax({
            type:'get',
            url:'proxy.php',
            data:{path:'/degrees/'},
            dataType:'json'
        }).done(function(json){
            //console.log(json.undergraduate[0].degreeName);
			var font_icon = ['fas fa-tv fa-5x text-succes','fas fa-cubes fa-5x text-succes','far fa-hand-paper fa-5x text-succes'];
			
            var obj =  new Array();
            $.each(json.graduate,function(i,item){
				
				if(item.degreeName =="graduate advanced certificates"){
                $("#gradc").append('<div class="ggraddc col-lg-4 col-md-8 text-center" style="text-align:center; cursor:pointer"><h3 class="gtitlec"></h3></div></div>');
				$('.gtitlec').append(item.degreeName);
				$.each(json.graduate[i].availableCertificates,function(i,item1){
                  $('.gtitlec').eq(i).append(item1).css({"font-size": "1.9vw","color":"white"});                      
                })
								               
				}
						
                
            })
        });
		
		// hover Co-op table
		$(".coop").hover(function(){
			
			
			$(".coop").css("font-size","1.3vw");
			$(".coop").css("height","12vw");
		}, function(){
                    
			$(".coop").css("font-size","1vw");
			$(".coop").css("height","10vw");
					
        });
		
		//hover employee table
		
		$(".emoop").hover(function(){
			
			
			$(".emoop").css("font-size","1.3vw");
			$(".emoop").css("height","12vw");
		}, function(){
                    
			$(".emoop").css("font-size","1vw");
			$(".emoop").css("height","10vw");
					
        });
		
		
		//Acadamic Excelence
		
		
		$.ajax({
            type:'get',
            url:'proxy.php',
            data:{path:'/employment/'},
            dataType:'json'
        }).done(function(json){
            //console.log(json.undergraduate[0].degreeName);
			
			 $('#Acad').append('<div class="actitle"><div class="act" style="font-size:3vw; left:1vw"></div><div class="acdctitle"><div class="acdes"></div></div></div>');
            $('.act').append(json.introduction.title);
						
			$.each(json.introduction.content,function(i,item1){
                  $('.acdctitle').eq(i).append( '<h5>'+item1.title+'<h5>');
                $('.acdes').eq(i).append(item1.description);
				
				})
				
				var colo = ['#D64541','#2C3E50','#68C3A3','#F4B350'];
			
			$.each(json.degreeStatistics.statistics,function(k,item12){
                $(".boxes").append('<div class="box456 col-lg-5 col-md-5 text-center" style=" position: relative;background-color: '+colo[k]+'; text-align: center;  margin: 15px "><h4 class="ctitle" style="color:white"></h4><p class="cdesc" style="color:white"></p></div>');
                $(".ctitle").eq(k).append(item12.value);   
                $(".cdesc").eq(k).append(item12.description);   
                 })
				   
				   
				   
				$.each(json.employers.employerNames,function(l,item13){
               $(".emp").append('<br><div class="n" style="text-align: center;color: white"></div>')
               $(".n").eq(l).append(item13);   
                  
                   })           
           $.each(json.careers.careerNames,function(l,item15){
                $(".carr").append('<p class="carrer" style="text-align: center;color: white"></p>')
               $(".carrer").eq(l).append(item15);   
                 
                   })
			
			 
                
			
        });
		
		
		// undergraduate minors
		
		$.ajax({
            type:'get',
            url:'proxy.php',
            data:{path:'/minors/UgMinors'},
            dataType:'json'
        }).done(function(json){
            //console.log(json.undergraduate[0].degreeName);
			
			 var colr = ['#F5D76E','#37aff0','#6d7a89','#f27936','#eb974f','#5ed1c9','#a9acae','#ccccff'];
    
	         var font_icon = ['fa fa-database fa-3x','fa fa-map-marker fa-3x','fa fa-mobile fa-3x','fa fa-code fa-3x','fa fa-mobile fa-3x','fa fa-sitemap fa-3x',
			 'far fa-hand-paper fa-3x','fa fa-database fa-3x'];
	
			$.each(json.UgMinors,function(i,item){
				var obj =  new Array();
            $("#Umin").append('<div class="Umtitle col-lg-5 col-md-8 text-center" style="width:18vw;  position: relative; background-color:'+colr[i]+'; right:0px;text-align: center; height: 18vw; margin: 1vw ;cursor:pointer"> <i class="'+font_icon[i]+'"></i><p class="Umtitle1" style="color: black; font-size:1.9vw">'+item.title+'</p></div>');
			
			var x = '<ul>' + item.description + '</ul>';
			
			$('.Umtitle').eq(i).hover(function(){
                   
					$(".Umtitle1").eq(i).css( "font-size", "1vw");
                 }, function(){
                    
					$(".Umtitle1").eq(i).css( "font-size", "1.9vw");
					
                 });
			
		   $('.Umtitle').eq(i).click(function() {
			    $.dialog({
				title: '<h2>' + item.title + '</h2>',
                content: x,	
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
					
					
				})
			   
		   })
			
			
			
			
			
			});
		});
      
	 	

        //get people - faculty
		$.ajax({
            type:'get',
            url:'proxy.php',
            data:{path:'/people/'},
            dataType:'json'
        }).done(function(json){
            
			$.each(json.faculty,function(i,item){
				var obj =  new Array();
            $("#people").append('<div class="PName col-lg-4 col-md-5 text-center" style="width:8vw;color:Aqua;position: relative; background-color:transparent;right:0px; ;border: 2px solid black; height: 8vw; margin: 0.2vw ;cursor:pointer; black:white"><div class="Ptitle" style="color:white"></div></div>');
			$(".PName").eq(i).append(item.name);
			$(".Ptitle").eq(i).append(item.title);
			 
			   var x='<div style="color: rgb(207, 0, 15);display: block;font-size: 20px;margin-top: 20px;margin-bottom: 10px">'+item.name+'<span style="font-size: 8px;color:back">'+item.title+'</span></div>';
			  
			  
			  var cont ='<div class="col-md-7 col-sm-7 col-xs-7"><img src="'+item.imagePath+'" height="90vw" width="90vw"></div>';
			  cont +='<div><div class="col-md-5 col-sm-5 col-xs-5">';
			  if(item.office != "")
			  {
				  
				  cont += '<div><i class="fa fa-map-marker"></i>'+item.office+'</div>';
			  }
			  if(item.phone != "")
			  {
			  cont += '<div><i class="fa fa-phone"></i>'+item.phone+'</div>';
			  
			  }
			  
			  if(item.email != ""){
				  
				  cont += '<div><i class="fas fa-envelope"></i>'+item.email+'</div>';
			  
            
			  }
			  if(item.facebook!="" ||item.facebook!="null")
			  {
				  cont += '<div>'+item.facebook+'</div>';
			  }
			  if(item.website!="" ||item.website!="null")
			  {
				  cont += '<div>'+item.website+'</div>';
			  }
			  if(item.twitter!="" ||item.twitter!="null")
			  {
				  cont += '<div>'+item.twitter+'</div>';
			  }
			  cont +='</div>';
			
			 $('.PName').eq(i).click(function() {
			    $.dialog({
				title: x,
                content:cont ,	
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
					
					
				})
			   
		   })
			
			
			});
		});
		//get staff
		
		$.ajax({
            type:'get',
            url:'proxy.php',
            data:{path:'/people/'},
            dataType:'json'
        }).done(function(json){
            //console.log(json.undergraduate[0].degreeName);
			
   
			$.each(json.staff,function(i,item){
				var obj =  new Array();
            $("#staff").append('<div class="SName col-lg-4 col-md-5 text-center" style="width:8vw;color:Aqua;position: relative; background-color:transparent;right:0px; text-align: center;border: 2px solid black; height: 8vw; margin: 0.2vw ;cursor:pointer; black:white"><div class="Stitle" style="color:white"></div></div>');
			$(".SName").eq(i).append(item.name);
			$(".Stitle").eq(i).append(item.title);
			
			
			 var x='<div style="color: rgb(207, 0, 15);display: block;font-size: 20px;margin-top: 20px;margin-bottom: 10px">'+item.name+'<span style="font-size: 8px;color:back">'+item.title+'</span></div>';
			  
			  
			  var cont ='<div class="col-md-7 col-sm-7 col-xs-7"><img src="'+item.imagePath+'" height="90vw" width="90vw"></div>';
			  cont +='<div><div class="col-md-5 col-sm-5 col-xs-5">';
			  if(item.office != "")
			  {
				  
				  cont += '<div><i class="fa fa-map-marker"></i>'+item.office+'</div>';
			  }
			  if(item.phone != "")
			  {
			  cont += '<div><i class="fa fa-phone"></i>'+item.phone+'</div>';
			  
			  }
			  
			  if(item.email != ""){
				  
				  cont += '<div><i class="fas fa-envelope"></i>'+item.email+'</div>';
			  
            
			  }
			  if(item.facebook!="" ||item.facebook!="null" ||item.facebook!=null)
			  {
				  cont += '<div>'+item.facebook+'</div>';
			  }
			  if(item.website!="" ||item.website!="null"||item.website!=null)
			  {
				  cont += '<div>'+item.website+'</div>';
			  }
			  if(item.twitter!="" ||item.twitter!="null"||item.twitter!=null)
			  {
				  cont += '<div>'+item.twitter+'</div>';
			  }
			  cont +='</div>';
			
			
			 $('.SName').eq(i).click(function() {
			    $.dialog({
				title: x,
                content: cont,	
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
					
					
				})
			   
		   })
			
			
			});
		});
		
		
		
		
		
		//get faculty image
		
		
		
		
		 $.ajax({
            type:'get',
            url:'proxy.php',
            data:{path:'/people/'},
            dataType:'json'
        }).done(function(json){
            //console.log(json.undergraduate[0].degreeName);
			
   
			$.each(json.faculty,function(i,item){
				var obj =  new Array();
            $("#fiNames").append('<div class="fiName col-lg-4 col-md-5 text-center" style="width:7vw;position: relative;text-align: center; height: 8vw; margin: 0.2vw ;cursor:pointer; black:white"></div>');
			var im = '<img src="'+item.imagePath+'" height="90" width="90">'
			$(".fiName").eq(i).append(im);
			
			});
		});
		
		//emp table
		
		$.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/employment/employmentTable/'},
			dataType : 'json'
     	    }).done(function(json){
				
			
				
		$('.emoop').click(function() {
			
			var tab = '';
			var record = json.employmentTable.professionalEmploymentInformation;
			
			$.each(json.employmentTable.professionalEmploymentInformation,function(i,item){

			 tab += '<tr><td>'+item.degree+'</td><td>'+item.employer+'</td><td>'+item.city+'</td><td>'+item.title+'</td><tr>' ;   
                    

			});
			
			
			   
		  $.dialog({
			  
			    title : json.employmentTable.title,
                content: '<table class="table"><thead class="thead-inverse" style="background-color:black; color:white"><tr><th>Degree</th><th>Employer</th><th>Location</th><th>Term</th><th>Title</th></tr></thead><tbody>'+tab+'</tbody></table>',
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
			  
		  
		  
			})
			
			
			   
		   });
			
		});
	
		
		// get resources co-op
		
		$.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
                
                $(".Coop-enroll").append("coop"); 

              $('.Coop-enroll').click(function() {
				  
				  $.dialog({
			  
			    title : "Co -OP",
                content: '<div>Please Refer out Co-op guide<a href="http://ist.rit.edu/assets/pdf/ISTCooperativeEmployment%20PolicyandProcedures.pdf"></a></div>',
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
			  
		  
		  
			})
				  
				  
				  
			  });				
                     
              });
			  
			  // get resources commencement
			   $.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
                
                $(".commence").append("<p>Commencement</p>"); 
				
				var x= "<p>The spring commencement ceremony typically happens during the third week of May. Every student that wants to graduate at that time must apply to graduate before April 15. Applying for graduation sets in motion a process that ensures you have met all requirements to graduate. To apply</p>.";
				 x += "<p> Once you have applied, you academic advisor will perform a degree audit and email you the results. The audit will let you know if you have any requirements remaining that will impede your graduation, and if you'll be able to graduate in the timeframe you expect.</p>";
				 x +="<p>Failure to apply before the April 15 deadline has lasting consequences; talk to your academic advisor if you miss this important deadline</p>"
                


              $('.commence').click(function() {
				  
				  $.dialog({
			  
			    title : "<p>Commencement</p>",
                content: x,
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
			  
		  
		  
			})
				  
				  
				  
			  });				
                     
              }); 
			  
			  
			     $.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
                
                $(".transfer").append("<p>Transfer Course Credit</p>"); 
				
				var x= "<p>Transferring Course Credit</p>.";
				 x += "<p> All course credit, whether it is from another college, AP, IB, or otherwise, must be submitted to the RIT Office of Admissions. More information about transferring credit can be found online.</p>";
				
              $('.transfer').click(function() {
				  
				  $.dialog({
			  
			    title : "<p>Transfer Course Credit</p>",
                content: x,
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
			  
		  
		  
			})
				  
				  
				  
			  });				
                     
              }); 
			  
			  
			  
			      $.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
                
                $(".Apply").append("<p>Apply</p>"); 
				
				var x= "<p>Interested?</p>.";
				 x += '<p>If you think one of our programs is right for you, apply via the <a href="https://www.rit.edu/emcs/admissions/">RIT Admissions website.</a></p>';
				
              $('.Apply').click(function() {
				  
				  $.dialog({
			  
			    title : "<p>Transfer Course Credit</p>",
                content: x,
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
			  
		  
		  
			})
				  
				  
				  
			  });				
                     
              });
			  
			  
			  // get resources Visit us
			      $.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
                
                $(".visit").append("<p>Visit</p>"); 
				
				var x= "<p>We are happy to accommodate you and your family, should you wish to visit our department. To make the most of your visit, we please ask that you first call ahead to the RIT Admissions Office (585-475-6736) and then to our office (585-475-2700). This will allow us to coordinate with the admissions office and prepare for your arrival. You can find more info about visiting RIT online.?</p>.";
				 x += "<p>During your visit to our department, you'll meet with one of our professional academic advisors, who will outline the curriculum and answer any questions you may have. You'll also have the opportunity to take a tour of our department facilities, led by one of our current student ambassadors.</p>";
				
              $('.visit').click(function() {
				  
				  $.dialog({
			  
			    title : "<p>Visit Us</p>",
                content: x,
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
			  
		  
		  
			})
				  
				  
				  
			  });				
                     
              });
			  
			  //get resources Suceess
			   $.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
                
                $(".Succt").append("<p>Success</p>"); 
				
				var x= "<p>Like most other university departments, students need to meet certain basic requirements to do well in IST: attend class, get to know your professors (visiting their office hours is a great way to do this) and meet your classmates. There are a few IST-specific topics however:</p>.";
				x+="<h3>Buying a Laptop</h3>"

				x += "<p>The majority of IST students bring their own computer with them to RIT. While it is entirely possible to excell in IST classes and eventually graduate without owning your own computer, we find that most students enjoy the convenience of being able to take their work outside the labs. We also allow the use of personal computers in our classes, if students wish to do so. In fact, many of our professors prefer using open source software to teach, and our students like the convenience of being able to download the software and continue their work at home</p>";
				x +="<p>That being said, there are certain scenarios (in-class exams, for example) that require use of IST lab computers. If you are thinking about purchasing a computer to bring to RIT, our campus Information Technology Services Office has recommended support and purchasing guidelines.</p>"
           
		   $('.Succ').click(function() {
				  
				  $.dialog({
			  
			    title : "<p>Visit Us</p>",
                content: x,
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
			  
		  
		  
			})
				  
				  
				  
			  });				
                     
              });
	
	
	
	         //get resources Liberal Arts Minors & Immersions
	
	
	        $.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
                
                $(".Minor").append("<p>Liberal Arts Minors & Immersions</p>"); 
				
				var x= "<p>Declaring a Minor in IST IST offers six minors for computing students. Descriptions and specific courses required can be found under the 'Minors' section of this website. Speak to your academic advisor if you wish to declare an IST minor.  Applying for a Minor in Another Department Adding a minor from another department requires a minor authorization form, which can be found in the IST office (GOL-2100) or on the Registrar's Website. Students must also get signatures and approval from the minor's advisor and from their home department head. A full list of minors available at RIT can be found online. IST also recommends meeting with your academic advisor to discuss how a minor will fit into your academic plan."



              $('.Minor').click(function() {
				  
				  $.dialog({
			  
			    title : "Liberal Arts Minors & Immersions",
                content: x,
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
			  
		  
		  
			})
				  
				  
				  
			  });				
                     
              });
	
	
	
	
	
	    // footer
	
	
	
	
	
             
        $.ajax({
		  type : 'get',
		  url  : 'proxy.php',
		  data : {path:"/footer/"},
         cache : false,
     	 async : true,  
		  dataType : 'json'
		  
		}).done(function(json){
            $('.Social').append('<div class="title">'+json.social.title+'</div><div class="twitter"></div><div class="by1"></div><div class="facebook"></div>');  
            $('.twitter').append(json.social.tweet); 
            $('.by1').append(json.social.by);	
            $('.facebook').append(json.social.facebook);
               
			   
            $.each(json.quickLinks,function(i,item){
				
				 $('.quicklink').append('<ul class="list-unstyled" style="text-align: center" <li><a style="color: white" href='+item.href+'  target="_blank">'+item.title+'</a></li></ul>');

			});	


          $('.copyr').append(json.copyright.title);
		  $('.copyr').append(json.copyright.html);
		  

        });
        
		
		
		
		
		
		
		
		//Co-op table
		
		$.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/employment/coopTable/'},
			dataType : 'json'
     	    }).done(function(json){
				
			
				
		$('.coop').click(function() {
			
			var tab = '';
			var record = json.coopTable.coopInformation;
			
			$.each(json.coopTable.coopInformation,function(i,item){

			 tab += '<tr><td>'+item.degree+'</td><td>'+item.employer+'</td><td>'+item.city+'</td><td>'+item.term+'</td><tr>' ;   
                    

			});
			
			
			   
		  $.dialog({
			  
			    title : json.coopTable.title,
                content: '<table class="table"><thead class="thead-inverse" style="background-color:black; color:white"><tr><th>Degree</th><th>Employer</th><th>Location</th><th>Term</th></tr></thead><tbody>'+tab+'</tbody></table>',
				animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material',
			  
		  
		  
			})
			
			
			   
		   });
				
		
							
	});
	
	
	
	
		
		 //Minor Advisor
		
		$.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
              
			  $(".Adver").append('<p>'+json.studentServices.istMinorAdvising.title+'</p>');                    
               var x= '';
               
               $.each(json.studentServices.istMinorAdvising.minorAdvisorInformation,function(i,item){
                   
                   x += '<h4>Title: '+item.title+'</h4><h6>Advisor: '+item.advisor+'</h6><p>Email: '+item.email+'</p>'
                   
               })				
				$('.Adver').click(function(){
					
					
                 $.dialog({
                                        
                    title: '<h2>'+json.studentServices.istMinorAdvising.title+'</h2>', 
                     content: x,                     
                 })
               })
             
        });
		
		 //coop enroll
		$.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
              
			  $('.Course_enroll').append('<p>'+json.coopEnrollment.title+'</p>');                    
               var x= '';
               
               $.each(json.coopEnrollment.enrollmentInformationContent,function(i,item){
                   
                   x += '<h4>Title: '+item.title+'</h4><h6>Description: '+item.description+'</h6>'
                   
               })				
				$('.Course_enroll').click(function(){
					
					
                 $.dialog({
                                        
                    title: '<h2>'+json.coopEnrollment.title+'</h2>', 
                     content: x,                     
                 })
               })
             
        });
		
		
		
		
		
		 //Student Ambassadors
		
		$.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
              
			  $(".Cur_amb").append('<p>'+json.studentAmbassadors.title+'</p>');  
                			  
               var x= '<img src='+json.studentAmbassadors.ambassadorsImageSource+'  width="150" height="150">';
               
               $.each(json.studentAmbassadors.subSectionContent,function(i,item){
                   
                   x += '<h4>Title: '+item.title+'</h4><h6>Description: '+item.description+'</h6>'
                   
               })
				
				
				$('.Cur_amb').click(function(){
					
					
                 $.dialog({
                                        
                    title: '<h2>'+json.studentAmbassadors.title+'</h2>', 
                     content: x,                     
                 })
               })
             
        });
		
		
		
		
		//Study Abroad
		
		$.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
		
              
			  $(".study_ab").append('<p>'+json.studyAbroad.title+'</p>');  
			  
                		var x='<h1>'+json.studyAbroad.description+'<h1>'	  
               
               $.each(json.studyAbroad.places,function(i,item){
                   
                   x += '<h4>Name of place: '+item.nameOfPlace+'</h4><h6>Description: '+item.description+'</h6>'
                   
               })
									
				$('.study_ab').click(function(){										
                 $.dialog({
                                        
                    title: '<h2>'+json.studyAbroad.title+'</h2>', 
                     content: x,                     
                 })
               })
             
        });
		
		
		
		$.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
                $(".Tut").append('<p>'+json.tutorsAndLabInformation.title+'</p>');                    
                $('.Tut').click(function(){
					
					
                 $.dialog({
                                        
                    title: '<h2>'+json.tutorsAndLabInformation.title+'</h2>', 
                     content: '<p>'+json.tutorsAndLabInformation.description+'</p><a href="'+json.tutorsAndLabInformation.tutoringLabHoursLink+'">'+'Lab Hours and TA Schedule'+'</a>',
                     
                 })
               })
             
        });
		
		
		
		
		
		// Faculty  Research    
        
           $.ajax({
            type:'get',
            url:'proxy.php',
            data:{path:'/research/'},
            dataType:'json'
        }).done(function(json){
			
			 var colr = ['#F5D76E','#37aff0','#6d7a89','#f27936','#eb974f','#5ed1c9','#a9acae','#ccccff','#F5D76E','#37aff0','#6d7a89','#f27936','#eb974f','#5ed1c9','#a9acae','#ccccff'];
    		
			
            $.each(json.byInterestArea,function(p,item){
             $("#reaera").append('<div class="circle col-lg-5 col-md-8 text-center" style="width: 12%; height: 150px ;cursor: pointer;border-radius:50%; margin: 1.5%;border: 2px solid black; padding-bottom: 1.5%;text-align: center;background-color:'+colr[p]+'"><p class="rname" style="font-size: 1.5vw; padding-top: 32%;"> </p></div>');                
                $('.rname').eq(p).append(item.areaName);    
                $('#reaera').eq(p).click(function(){
                var x = '';
                $.each(json.byInterestArea[p].citations,function(q,item2){
                    x += '<li>'+item2+'</li>';                            
                })
                 $.dialog({
                                         
                   title: '<h2>'+'Research By Domain Area: '+item.areaName+'</h2>', 
                     content: '<ul>'+x+'</ul>',
                    
					 animationSpeed: 2000,
				animationBounce: 2.5,
				theme: 'material'
                                          
             })});
            })});
		
		
		
		
		
		
		
		
		
		
		
		$.ajax({
		    type : 'get',
			asynch :  true,
			cache : false,
			url : 'proxy.php',
			data : {path:'/resources/'},
			dataType : 'json'
     	}).done(function(json){   
                $(".Forms").append('<p>Forms</p>');                
                
               var x= '</ul><h4>Graduate Forms</h4><ul>';
                
               $.each(json.forms.graduateForms,function(k,item){
                   
                   x += '<li><a href="http://ist.rit.edu/api'+item.href+'">'+item.formName+'</a></li>'
                   
               })
            
                x += '</ul><h4>Undergraduate Forms</h4><ul>';
            
             $.each(json.forms.undergraduateForms,function(k,item){
                   
                   x += '<li><a href="http://ist.rit.edu/api'+item.href+'">'+item.formName+'</a></li>'
                   
               })
            
                $('.Forms').click(function(){
                 $.dialog({
                                       
                    title: 'Forms', 
                     content: x,
                     
                     
                 })
               })
             
        });  
		
		       $.ajax({
          type : 'get',
		  url  : 'proxy.php',
		  data : {path:"/research/"},
         cache : false,
     	 async : true,
          
		  dataType : 'json'
		  
             
                    
		}).done(function(json){
           
             var image = [];   
                $.each(json.byFaculty,function(i,item1){
              
                    $('#fiNamess').append('<div class="fact  col-lg-4 col-md-5 text-center"  ></div>');       
            
                    
                    
           
            
                  
                            $.ajax({
										type : 'get',
										url  : 'proxy.php',
										data : {path:'/people/faculty/username='+item1.username},
										cache : false,
										async : true,
         								dataType : 'json'
		  
             
                    
	                            	}).done(function(json1){
            image[i]  = json1.imagePath;   
            $('.fact').eq(i).css({
                  
				  "background-image" : 'url('+image[i]+')',
                  'height' : '8vw',
                  'width' : '8vw',
				  'padding' : '2vw',
                  'position' : 'relative'
                  
                
            })
                   
            })
                
            $('.fact').eq(i).click(function(){
                
                  var x = '';
                $.each(json.byFaculty[i].citations,function(jk,item2){
                    x += '<li>'+item2+'</li>';    
                        
                })
                                    
                   $.dialog({
                                       
                   title: '<p>'+item1.facultyName+'</p>', 
                     content: '<ul>'+x+'</ul>',
                     
                         

                     
             })
              }) ;
             
                   
           })

        });
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	});
	
	

	
	////////////////////////////////
	// utilities....
	//		getOrPost - get or a post
	//		d - {path:'/about/'}
	//		pId - '#parentId' (optional)
	
	
	function xhr(getOrPost, d, pId){
		return $.ajax({
			type:getOrPost,
			url:'proxy.php',
			cache:false,
			async:true,
			dataType:'json',
			data:d,
			beforeSend:function(){
				//put out a spinner if pId is defined...
				$(pId).append('<img src="gears.gif" class="funkyThing"/>');
			}
		}).always(function(){
			//kill the spinner...
			$(pId).find('.funkyThing').fadeOut(500,function(){
				$(this).remove();
			});
		}).fail(function(err){
			console.log(err);
		}); //note - no done!
	}
	
	
	
	function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent1 = document.getElementById("people");
	tabcontent1.style.display = "none";
    
	tabcontent2 = document.getElementById("staff");
	tabcontent2.style.display = "none";

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
	