
$(document).on("pagecreate","#pagetwo",function(){

//variables
            
            var mdown = false;
            var mup = true;
            var mmove = true;
            var btn1 = $("#num1");
            var btn2 = $("#num2");
            var btn3 = $("#num3");
            var btn4 = $("#num4");
            var btn5 = $("#num5");
            var btn6 = $("#num6");
            
            var elems = $('.ui-btn');
            
            // hide buttons and show btn1
            
                for(var i = 0; i != elems.length; ++i)
            {   
                elems[i].css("visibility" , "hidden"); // hidden has to be a string
            }
            document.getElementById('num1').style.visibility = 'visible';
            
            // play video  function   
           /* $(document).on('taphold', '.ui-btn', function(){ 
                $("#myVideo")[0].play();
            });*/

           function () {
                $(document ).on ( "vmousemove", ".ui-btn",function() {
                mdown = true;
                 if(mdown){
                $('#myVideo')[0].play();
                 }else{
                  $('#myVideo')[0].pause();   
                 }
                })}
             function () {
                $( document ).on ( "vmouseup", ".ui-btn", function() {
               mup = true;
                 if(mup){
                $('#myVideo')[0].pause();
                 }
                })}
             $( function () {
                $( document ).on ( "vmouseout", ".ui-btn", function() {
                $("#myVideo")[0].pause();
                         });
                });
             
           
           
                                   
            //Button Pattern Displays     
            
            var dis1= $(function(){
                $(document).on("vmousedown", btn1, function(){
                btn1to4FiveSecs();
                });
                $(document).on("vmousedown", btn4, function(){
                    btn4to2TenSecs();
                });
                $(document).on("vmousedown", btn2, function(){
                    btn2to6FiveSecs();
                });
                $(document).on("vmousedown", btn6, function(){
                    btn6to3TenSecs();
                });
                $(document).on("vmousedown", btn3,function(){
                    btn3to5TenSecs();
                });
            });
            var dis2= function(){
                $(btn1).on("vmousedown",function(){
                btn1to6TenSecs();
                });
                $(btn6).on("vmousedown",function(){
                    btn6to3TenSecs();
                });
                $(btn3).on("vmousedown",function(){
                    btn3to5FiveSecs();
                });
                $(btn5).on("vmousedown",function(){
                    btn5to2TenSecs();
                });
                $(btn2).on("vmousedown",function(){
                    btn2to4FiveSecs();
                });
            
                var dis3= $(function(){
                $(btn1).on("vmousedown",function(){
                btn1to5FiveSecs();
                });
                $(btn5).on("vmousedown",function(){
                    btn5to1FiveSecs();
                });
                $(btn2).on("vmousedown",function(){
                    btn2to6FiveSecs();
                });
                $(btn6).on("vmousedown",function(){
                    btn6to3TenSecs();
                });
                $(btn3).on("vmousedown",function(){
                    btn3to5TenSecs();
                });
            
            //Find button display pattern
            var findDisplayPattern =function(){
                var i = Math.floor((Math.random() * 3) + 1);
                
                if(i===1){
                    return dis1();
                }else if(i===2){
                    return dis2();
                
                }else{
                    return dis3();
                }
            });
            
              
            //*****************button route mapping************************* 
            //**************************************************************
            //**************************************************************
            // button display funtion for btn1 to btn4
           
            function btn1to4FiveSecs(){
                setTimeout(function(){
                    btn1.style.visibility="hidden";
                    btn4.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000 );
                
               }
            function btn1to4TenSecs(){
                setTimeout(function(){
                    btn1.style.visibility="hidden";
                    btn4.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn1 to btn5
            function btn1to5FiveSecs(){
                setTimeout(function(){
                    btn1.style.visibility="hidden";
                    btn5.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn1to5TenSecs(){
                setTimeout(function(){
                    btn1.style.visibility="hidden";
                    btn5.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn1 to btn6
            function btn1to6FiveSecs(){
                setTimeout(function(){
                    btn1.style.visibility="hidden";
                    btn6.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn1to6TenSecs(){
                setTimeout(function(){
                    btn1.style.visibility="hidden";
                    btn6.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn2 to btn4
            function btn2to4FiveSecs(){
                setTimeout(function(){
                    btn2.style.visibility="hidden";
                    btn4.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn2to4TenSecs(){
                setTimeout(function(){
                    btn2.style.visibility="hidden";
                    btn4.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn2 to btn5
            function btn2to5FiveSecs(){
                setTimeout(function(){
                    btn2.style.visibility="hidden";
                    btn5.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn2to5TenSecs(){
                setTimeout(function(){
                    btn2.style.visibility="hidden";
                    btn5.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn2 to btn6
            function btn2to6FiveSecs(){
                setTimeout(function(){
                    btn2.style.visibility="hidden";
                    btn6.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn2to6TenSecs(){
                setTimeout(function(){
                    btn2.style.visibility="hidden";
                    btn6.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn3 to btn4
            function btn3to4FiveSecs(){
                setTimeout(function(){
                    btn3.style.visibility="hidden";
                    btn4.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn3to4TenSecs(){
                setTimeout(function(){
                    btn3.style.visibility="hidden";
                    btn4.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn3 to btn5
            function btn3to5FiveSecs(){
                setTimeout(function(){
                    btn3.style.visibility="hidden";
                    btn5.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn3to5TenSecs(){
                setTimeout(function(){
                    btn3.style.visibility="hidden";
                    btn5.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn3 to btn6
            function btn3to6FiveSecs(){
                setTimeout(function(){
                    btn2.style.visibility="hidden";
                    btn6.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn2to6TenSecs(){
                setTimeout(function(){
                    btn2.style.visibility="hidden";
                    btn6.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn4 to btn1
            function btn4to1FiveSecs(){
                setTimeout(function(){
                    btn4.style.visibility="hidden";
                    btn1.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000 );
               }
            function btn4to1TenSecs(){
                setTimeout(function(){
                    btn4.style.visibility="hidden";
                    btn1.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn4 to btn2
            function btn4to2FiveSecs(){
                setTimeout(function(){
                    btn4.style.visibility="hidden";
                    btn2.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn4to2TenSecs(){
                setTimeout(function(){
                    btn4.style.visibility="hidden";
                    btn2.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn4 to btn3
            function btn4to3FiveSecs(){
                setTimeout(function(){
                    btn4.style.visibility="hidden";
                    btn3.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn4to3TenSecs(){
                setTimeout(function(){
                    btn4.style.visibility="hidden";
                    btn3.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn5 to btn1
            function btn5to1FiveSecs(){
                setTimeout(function(){
                    btn5.style.visibility="hidden";
                    btn1.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn5to1TenSecs(){
                setTimeout(function(){
                    btn5.style.visibility="hidden";
                    btn1.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn5 to btn2
            function btn5to2FiveSecs(){
                setTimeout(function(){
                    btn5.style.visibility="hidden";
                    btn2.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn5to2TenSecs(){
                setTimeout(function(){
                    btn5.style.visibility="hidden";
                    btn2.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn5 to btn3
            function btn5to3FiveSecs(){
                setTimeout(function(){
                    btn5.style.visibility="hidden";
                    btn3.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn5to3TenSecs(){
                setTimeout(function(){
                    btn5.style.visibility="hidden";
                    btn3.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn6 to btn1
            function btn6to1FiveSecs(){
                setTimeout(function(){
                    btn6.style.visibility="hidden";
                    btn1.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn6to1TenSecs(){
                setTimeout(function(){
                    btn6.style.visibility="hidden";
                    btn1.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn6 to btn2
            function btn6to2FiveSecs(){
                setTimeout(function(){
                    btn6.style.visibility="hidden";
                    btn2.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn6to2TenSecs(){
                setTimeout(function(){
                    btn6.style.visibility="hidden";
                    btn2.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
            // button display funtion for btn6 to btn3
            function btn6to3FiveSecs(){
                setTimeout(function(){
                    btn6.style.visibility="hidden";
                    btn3.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 5000  );
               }
            function btn6to3TenSecs(){
                setTimeout(function(){
                    btn6.style.visibility="hidden";
                    btn3.style.visibility="visible";
                    $("#myVideo")[0].pause();
                    kill();
                }, 10000  );
               }
                })
            