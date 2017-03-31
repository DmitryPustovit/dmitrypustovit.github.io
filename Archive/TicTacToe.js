var sqaures = [".c1", ".c2", ".c3", ".c4", ".c5", ".c6", ".c7", ".c8", ".c9", ".c10", ".c11", ".c12", ".c13", ".c14", ".c15", ".c16", ".c17", ".c18", ".c19", ".c20", ".c21", ".c22", ".c23", ".c24"];
var players = ["p1", "p2"];
var player1 = true, check = false, winningLine = 0, aiEnabled = false, turn = 0, pause = false, selectedDiv, Ai = 1;

    $('td').click(function (event){
        console.log(player1);
        
        if(!$(this).hasClass( "marked" ))
        {
            if(player1)
            {
                selectedDiv = $(this);
                placeMarker(selectedDiv, 1);
                turn++;
                player1 = !player1;   
            }
            else
            {
                if(!aiEnabled)
                {
					selectedDiv = $(this);
                    placeMarker(selectedDiv, 2);
                    player1 = !player1;
                }
                else
                {
                    //placeMarker(selectedDiv, 1);
                    turn++; 
                }
            }
			
			checkIfWon();
        }
   
    });

    function placeMarker(div, player)
    {
        switch(player)
        {
            case 1:
					div.html("X");
					div.css("color" , "#e74c3c");
					div.addClass("marked");
					div.addClass("p1");
                break;
            case 2:
					div.html("O");
					div.css("color" , "#3498db");
					div.addClass("marked");
					div.addClass("p2");
                break;
        }
    } 

    //TODO: Clean Code
    function checkIfWon()
    {
		
		if(aiEnabled)
        {
			if(Ai == 1)
            	randomAI();
			
			if(Ai == 2)
            	unbeatableAI();
			
			if(Ai == 3)
            	showAlert("Learning AI Not Yet Opperational!"); 
            //checkIfWon();
        }
		
		
        var line = 0; 

        for(i =0; i <= sqaures.length - 1; i+=3)
        {
            line++;

            for(k = 0; k <= 1; k++)
            {
                if(checkForWinner(sqaures[i], sqaures[i+1], sqaures[i+2], players[k]))
                {
                    check = true;
                    winningLine = line;
                    console.log(winningLine);
                }
            }
        }

        if(check)
            hasWon();

        //checkIfWon();    


    }

    function checkForWinner(first, second, third, className)
    {              
        var gameWon = false; 

        if($(first).hasClass(className) && $(second).hasClass(className) && $(third).hasClass(className))
            gameWon = true; 

        return gameWon; 
    }

    function hasWon()
    { 
        
        var lineDiv = $(".win"), lineH = $(".lineH"), lineV = $(".lineV"), lineL = $(".lineL"), lineR = $(".lineR"), line = $("line"), player; 
        $("table *").addClass("marked");
              
            if(player1)
            {
                player = 2;
                line.css("stroke" , "#3498db");
            }
            else
            {
                player = 1;
                line.css("stroke" , "#e74c3c");
            }
        
            switch(winningLine)
            {
                case 1:
                        lineDiv.css("padding" , "0");
                        lineDiv.show();
                        lineDiv.css("padding-bottom" , "158px");
                        lineH.show();
                    break;
                case 2:
                        lineDiv.css("padding" , "0");
                        lineDiv.show();
                        lineDiv.css("padding" , "0");
                        lineH.show();
                    break;
                case 3:
                        lineDiv.css("padding" , "0");
                        lineDiv.show();
                        lineDiv.css("padding-top" , "158px");
                        lineH.show();
                    break;
                case 4:
                        lineDiv.show();
                        lineDiv.css("padding" , "0");
                        lineL.show();
                    break;
                case 5:
                        lineDiv.show();
                        lineDiv.css("padding" , "0");
                        lineR.show();
                    break;
                case 6:
                        lineDiv.css("padding" , "0");
                        lineDiv.show();
                        lineDiv.css("padding-right" , "182px");
                        lineV.show();
                    break; 
                case 7:
                        lineDiv.show();
                        lineDiv.css("padding" , "0");
                        lineV.show();
                    break; 
                case 8:
                        lineDiv.css("padding" , "0");
                        lineDiv.show();
                        lineDiv.css("padding-left" , "182px");
                        lineV.show();
                    break; 
            }       
    }
         
// UI Elements

    function reset() {
        $("table *").removeClass("marked");
        $("table *").removeClass("p1");
        $("table *").removeClass("p2");
        $("table *").css("color", "white");
        $(".lineH").hide();
        $(".lineV").hide();
        $(".lineL").hide();
        $(".lineR").hide();
        $(".win").hide();
        player1 = true; 
        check = false;
        winningLine = 0; 
        turn = 0;
    }

    function aiToggle()
    {
        if(pause == false)
        {
            pause = true;
            
            if($(".checkBox").is(":checked"))
                aiEnabled = false;
            else 
                aiEnabled = true;
                //aiEnabled = !aiEnabled;
            
            var text;
            
            if(aiEnabled)
			{
				if(Ai == 1)
					text = "AI is Enabled : Random AI";

				if(Ai == 2)
					text = "AI is Enabled : Mapped AI";

				if(Ai == 3)
					text = "AI is Enabled : Learning AI";
            //checkIfWon();
                
			}
            else
                text = " AI is Disabled";
            
            showAlert(text);   
            
            reset();
        }
    }
          
    $('.settings').click(function (){
        $(".menu").show();
    });
          
    function closeMenu(){
        $(".menu").hide();     
    }
          
    function showAlert(text)
    {
        var box = $(".alert");  
        box.html(text);
        box.show();
        
        setTimeout(
            function() 
            {
                box.fadeOut( "slow", function() {pause = false;});
            }, 1500);
    }


    function menuCheckBox(number)
    {
        switch(number)
        {
            case 1:
                $("#s1").prop("checked", true);
                $("#s2").prop("checked", false);
                $("#s3").prop("checked", false);
                Ai = 1;
                break; 

            case 2:
                $("#s1").prop("checked", false);
                $("#s2").prop("checked", true);
                $("#s3").prop("checked", false);
                Ai = 2;
                break; 

            case 3:
                $("#s1").prop("checked", false);
                $("#s2").prop("checked", false);
                $("#s3").prop("checked", true);
                Ai = 3;
                break; 
        }
    }


    function question(number)
    {
        var text;
        switch(number)
        {
            case 1:
                text = "Random AI: This AI places a circle in a random spot as long as that spot is not already occupid.";
                break; 

            case 2:
                text = "Mapped AI: This AI places a circle according to a set of preprogrammed rules. Not very fun. Can not set or defeat forks yet.";
                break; 

            case 3:
                text = "Learning AI: This AI places a circle according to the players past games. It is used player data rather then any set of rules.";
                break; 
        }
        $(".QuestionMenu p").html(text);
        $(".QuestionMenu").show(); 
    }

    function closeMenuQuestion()
    {
        $(".QuestionMenu").hide(); 
    }
          
//AIs

    //Super Basic Ai that just plots its move into a random point if the point is not already marked.
    function randomAI()
    {
        var randomPosisiton;
        
        if(turn < 8 && check == false)
        {
            do
            {
                randomPosisiton = Math.floor(Math.random() * sqaures.length);
            }
            while($(sqaures[randomPosisiton]).hasClass("marked"));

            placeMarker( $(sqaures[randomPosisiton]), 2);
            turn++;
            player1 = !player1;
        }          
    }

    //Every moved mapped, just avoid player winning
    function unbeatableAI()
    {
		player1 = !player1; 
		              var corners = [".c1" , ".c9" , ".c3" , ".c7"];
		var movePerformed = false;
    //Wins or Blocks Opponet from Winning (Doesn't fully work...
       for(k = 0; k <= 1; k++)
        {
            var className = players[k];
            for(i =0; i <= sqaures.length - 1; i+=3)
            {
                if($(sqaures[i]).hasClass(className) && $(sqaures[i + 1]).hasClass(className) && !$(sqaures[i + 2]).hasClass("marked") && movePerformed == false)
                {
                    placeMarker( $(sqaures[i + 2]), 2);
					console.log("1");
					console.log("1");
					movePerformed = true;
                    //turn++;
                    //player1 = !player1;
                }              
               else if(!$(sqaures[i]).hasClass("marked") && $(sqaures[i+1]).hasClass(className) && $(sqaures[i+2]).hasClass(className) && movePerformed == false)
               {
                	placeMarker( $(sqaures[i]), 2);
				   console.log("2" + sqaures[i]);
				   movePerformed = true;
                	//turn++;
                    //player1 = !player1;
                }          
               else if($(sqaures[i]).hasClass(className) && !$(sqaures[i+1]).hasClass("marked") && $(sqaures[i+2]).hasClass(className) && movePerformed == false)
               {
                   placeMarker( $(sqaures[i+1]), 2);
				   console.log("3" + sqaures[i + 1]);
				   movePerformed = true;
                //    turn++;
                    //player1 = !player1;
                }
            }
          }

         //Creates Fork
                 /*   if($(".c1").hasClass("p2") && !$(".c9").hasClass("marked"))
                    {
                            $(sqaures[".c9"]).html("O");
                            $(sqaures[".c9"]).css("color" , "#3498db");
                            $(sqaures[".c9"]).addClass("marked");
                            $(sqaures[".c9"]).addClass("p2");
                            turn++;
                            player1 = !player1;
                    }
              
                    if($(".c3").hasClass("p2") && !$(".c7").hasClass("marked"))
                    {
                            $(sqaures[".c9"]).html("O");
                            $(sqaures[".c9"]).css("color" , "#3498db");
                            $(sqaures[".c9"]).addClass("marked");
                            $(sqaures[".c9"]).addClass("p2");
                            turn++;
                            player1 = !player1;
                    }
                    if($(".c1").hasClass("p2") && $(".c9").hasClass("p2") && !$(".c3").hasClass("marked"))
                    {
                            $(sqaures[".c3"]).html("O");
                            $(sqaures[".c3"]).css("color" , "#3498db");
                            $(sqaures[".c3"]).addClass("marked");
                            $(sqaures[".c3"]).addClass("p2");
                            turn++;
                            player1 = !player1;
                    }
              
                    if($(".c1").hasClass("p2") && $(".c9").hasClass("p2") && !$(".c7").hasClass("marked"))
                    {
                            $(sqaures[".c7"]).html("O");
                            $(sqaures[".c7"]).css("color" , "#3498db");
                            $(sqaures[".c7"]).addClass("marked");
                            $(sqaures[".c7"]).addClass("p2");
                            turn++;
                            player1 = !player1;
                    }
              
                    if($(".c3").hasClass("p2") && $(".c7").hasClass("p2") && !$(".c9").hasClass("marked"))
                    {
                            $(sqaures[".c9"]).html("O");
                            $(sqaures[".c9"]).css("color" , "#3498db");
                            $(sqaures[".c9"]).addClass("marked");
                            $(sqaures[".c9"]).addClass("p2");
                            turn++;
                            player1 = !player1;
                    }
                    if($(".c7").hasClass("p2") && $(".c3").hasClass("p2") && !$(".c1").hasClass("marked"))
                    {
                            $(sqaures[".c1"]).html("O");
                            $(sqaures[".c1"]).css("color" , "#3498db");
                            $(sqaures[".c1"]).addClass("marked");
                            $(sqaures[".c1"]).addClass("p2");
                            turn++;
                            player1 = !player1;
                    }

                //Blocks Fork
                    if($(".c1").hasClass("p1") && $(".c9").hasClass("p1") && !$(".c3").hasClass("marked"))
                    {
                            $(sqaures[".c3"]).html("O");
                            $(sqaures[".c3"]).css("color" , "#3498db");
                            $(sqaures[".c3"]).addClass("marked");
                            $(sqaures[".c3"]).addClass("p2");
                            turn++;
                            player1 = !player1;
                    }
              
                    if($(".c1").hasClass("p1") && $(".c9").hasClass("p1") && !$(".c7").hasClass("marked"))
                    {
                            $(sqaures[".c7"]).html("O");
                            $(sqaures[".c7"]).css("color" , "#3498db");
                            $(sqaures[".c7"]).addClass("marked");
                            $(sqaures[".c7"]).addClass("p2");
                            turn++;
                            player1 = !player1;
                    }
              
                    if($(".c3").hasClass("p1") && $(".c7").hasClass("p1") && !$(".c9").hasClass("marked"))
                    {
                            $(sqaures[".c9"]).html("O");
                            $(sqaures[".c9"]).css("color" , "#3498db");
                            $(sqaures[".c9"]).addClass("marked");
                            $(sqaures[".c9"]).addClass("p2");
                            turn++;
                            player1 = !player1;
                    }
                    if($(".c7").hasClass("p1") && $(".c3").hasClass("p1") && !$(".c1").hasClass("marked"))
                    {
                            $(sqaures[".c1"]).html("O");
                            $(sqaures[".c1"]).css("color" , "#3498db");
                            $(sqaures[".c1"]).addClass("marked");
                            $(sqaures[".c1"]).addClass("p2");
                            turn++;
                            player1 = !player1;
                    }
					*/
                // Center
                  if(!($(".c5").hasClass("marked")) && movePerformed == false)
                     {
					 	placeMarker($(".c5"), 2);
						 movePerformed = true;
                            //turn++;
                            //player1 = !player1;
                   }
             //Opposite corner
                else if($(".c1").hasClass("p1") && !$(".c9").hasClass("marked")  && movePerformed == false) 
                {
					placeMarker($(".c9"), 2);
					movePerformed = true;
                    //turn++;
                    //player1 = !player1;
                }
				else if($(".c9").hasClass("p1") && !$(".c1").hasClass("marked")  && movePerformed == false) 
                {
					placeMarker($(".c1"), 2);
					movePerformed = true;
                    //turn++;
                   // player1 = !player1;
                }
				else if($(".c3").hasClass("p1") && !$(".c7").hasClass("marked")  && movePerformed == false) 
                {
					placeMarker($(".c7"), 2);
					movePerformed = true;
                    //turn++;
                    //player1 = !player1;
                } 
                else if($(".c7").hasClass("p1") && !$(".c3").hasClass("marked")  && movePerformed == false) 
                {
					placeMarker($(".c3"), 2);
					movePerformed = true;
                    //turn++;
                    //player1 = !player1;
                } 
              	else
				{

					  //Empty Corner

					  var randomCorner = Math.floor(Math.random() * 4), emptyA = true, count = 0;
					
					 do
					 {
						 console.log("test 123");
						 
						 if(!$(corners[randomCorner]).hasClass("marked"))
							 emptyA = false;
						 else
							 randomCorner = Math.floor(Math.random() * 4);
						 
						 count++;
					 }while(emptyA && count <= 4);
					
					  if(!emptyA && movePerformed == false)
					  {
						  placeMarker($(corners[randomCorner]), 2);
						  movePerformed = true;
						//turn++;
						//player1 = !player1;
					  }
					  else
					  {

					  //Empty middle side
					  var middleSides = [".c2" , ".c4" , ".c6" , ".c8"];
					  randomCorner = Math.floor(Math.random() * 4);
					  var emptyB = true;  
					 	do
					 {
						 if(!$(middleSides[randomCorner]).hasClass("marked"))
							 emptyB = false;
						 else
							 randomCorner = Math.floor(Math.random() * 4);
						 count++;
					 	}while(emptyA && count <= 4);
						  
						  if(!emptyB && movePerformed == false)
						  {
							  placeMarker($(middleSides[randomCorner]), 2);
							  movePerformed = true;
							//turn++;
							//player1 = !player1;
						  }
					  }
				}
				movePerformed = false;
    }