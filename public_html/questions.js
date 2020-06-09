 //Name : Ansh
 //Javascript functions are created 
  var i = 1;
    num_Of_Question = 7;
   // arrays are created for displaying questions and there options
    questions = new Array()
    questions[1] = "What is the 5 digit Greatest No";
    questions[2] = "What is the 3 Digit Smallest No";
    questions[3] = "How many Alphabets in A-Z";
    questions[4] = "What is National fruit of India";
    questions[5] = "What is the National sport Of India";
    questions[6] = "Most Population country in World ";
    questions[7] = "How many sticks in Tiranga (Tricolor) wheel";
        answerA = new Array()
    answerA[1] = "A) 60000";
    answerA[2] = "A) 548";
    answerA[3] = "A) 21";
    answerA[4] = "A) Apple";
    answerA[5] = "A) Basketball";
    answerA[6] = "A) Pakistan";
    answerA[7] = "A) 24";
    answerB = new Array()
    answerB[1] = "B) 66666";
    answerB[2] = "B) 100";
    answerB[3] = "B) 20";
    answerB[4] = "B) Orange";
    answerB[5] = "B) Football";
    answerB[6] = "B) India";
    answerB[7] = "B) 22";
        answerC = new Array()
    answerC[1] = "C) 99999";
    answerC[2] = "C) 111";
    answerC[3] = "C) 26";
    answerC[4] = "C) Mango";
    answerC[5] = "C) Hockey";
    answerC[6] = "C) China";
    answerC[7] = "C) 25";
	answerD = new Array()
	answerD[1] = "D) 77877";
	answerD[2] = "D) 630";
	answerD[3] = "D) 29";
	answerD[4] = "D) Banana";
	answerD[5] = "D) Cricket";
	answerD[6] = "D) Canada";
	answerD[7] = "D) 28";
         rightAnswer = new Array()
    rightAnswer[1] = 3;
    rightAnswer[2] = 2;
    rightAnswer[3] = 3;
    rightAnswer[4] = 3;
    rightAnswer[5] = 3;
    rightAnswer[6] = 3;
    rightAnswer[7] = 1;
    var score = 0;
    //functions are created for the buttons to work and to show score
    	function preQuestion() 
	{
		 
		window.location.href = "\index.html";
	}
	
	function nextQuestion() 
	{
	      var radios = document.getElementsByName("quiz");
	      var option;
		for (var j = 0; j < radios.length; j++) 
		{
		        if (radios[j].checked) 
			{
		          option = radios[j].value;
		          if(i<=num_Of_Question)
			  	  radios[j].checked = false;
		          break;
		        }
		}
	        if (option == rightAnswer[i]) 
		{
		        score = score + 1;
	        }
	        i++;
		if (i > num_Of_Question) 
		{
	
		     showScore();
			i=1;
		}
	        var x = document.getElementById('myTable').rows
		var y = x[0].cells
		y[0].innerHTML = i + ".\t";
		y[1].innerHTML = questions[i];
		
		getOptionA();
	}

	function getOptionA() 
	{
		var x = document.getElementById('myTable').rows
	     	var y = x[1].cells
		y[1].innerHTML = answerA[i];
	        getOptionB();
	}
        	function getOptionB() 
	{
	      var x = document.getElementById('myTable').rows
	      var y = x[2].cells
	      y[1].innerHTML = answerB[i];
	      getOptionC();
	}

	function getOptionC() 
	{
	      var x = document.getElementById('myTable').rows
	      var y = x[3].cells
	      y[1].innerHTML = answerC[i];
		  getOptionD();
	}
	function getOptionD() 
	{
	      var x = document.getElementById('myTable').rows
	      var y = x[4].cells
	      y[1].innerHTML = answerD[i];
	}
//score is updated only after clicking next or previous button not by clicking the answer and checking in order to know whether your answer is correct or not.
function showScore() 
	{
		document.getElementById("myTable").style.fontSize = "25px"; 
		document.getElementById("myTable").style.color = "red";
		document.getElementById("myTable").style.backgroundColor = "yellow";        
		document.getElementById('myTable').innerHTML="Your Score =" + score     	
	}
	
	//function checkAnswer() 
	//{
	  //    var radios = document.getElementsByName("quiz");
	    //  var option;
		//for (var j = 0; j < radios.length; j++) 
		//{//
		  //      if (radios[j].checked) 
		//	{
		  //        option = radios[j].value;
		    //      if(i<=num_Of_Question)
			//  	  radios[j].checked = false;
		         // break;
		       // }
	//	}
		
	        if (option == rightAnswer[i]) 
		{
			document.getElementById("myTable").style.fontSize = "15px"; 
			document.getElementById("myTable").style.color = "red";
			document.getElementById("myTable").style.backgroundColor = "yellow";      
			document.getElementById('myTable').innerHTML="Congratulation! Your Answer is Correct"
		        score = score + 1;
				
	        }
			else
			{
				document.getElementById("myTable").style.fontSize = "15px"; 
			document.getElementById("myTable").style.color = "red";
			document.getElementById("myTable").style.backgroundColor = "yellow";      
			document.getElementById('myTable').innerHTML="Bad Luck! Your Answer is Wrong"
			}
	}