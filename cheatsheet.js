###CHEATSHEET###

##ADDING SCRIPT##
//body or header
	<script src="js/pagescripts.js"></script>
//scriptblock
	<script>alert('hello');</script>
//inline
	<input type="button" value="I'm a button" onclick="alert('auch')" />;

##Javascript Syntax##
//input and write
	//input
	->prompt
		var name = window.prompt('Enter your name');
		window.alert('Hello ' + name);
	->confirm
		var doHighfive = window.confirm('High five?');
		if (doHighfive) window.alert('High five!');
	//write
	document.write('<p>Hello Rogier</p>');
//veriables and functions
	var variable = function() {alert('text')};
	variable();
	var variable2 = variable;
	var variable3 = function(fn){};
//objects
	var forest = {firstName: 'Forest', lastName: 'Gump', sentence: 'Stupid is as stupid does', says: function() {return this.sentence;}};  
		->forrest.firstName
		->forrest.says()
//constructors
	->objects
		var num = new Number('3');
		var boo = new Boolean('true');
		var str = new String('hello');
		var fun = new Function('nm', "alert('hello' + nm)");
		var arr = new Array(1, 2, 3, 5, 8, 13);
	->litaral
		var num = 3;
		var boo = true;
		var str = 'hello';
		var fun = function(nm) { alert('hello' + nm) };
		var arr = [1, 2, 3, 5, 8, 13];
//tests
	->undefineds
		alert(typeof test1); // undefined
		alert(test1 === undefined); // true
	->Nan
		alert(typeof test1); // number
		alert(isNaN(test1)); // true
	->Infinitys
		alert(typeof test); // number
		alert(test === Infinity); // true
//types
	->check
		alert(typeof num1);			    //number(primitive)		
		alert(arr1 instanceof Array);   //true=object cause non-primitive
		alert(arr1 instanceof Object);  //all contructors dirive from Object();
	.//dynamically typed(don't change type) & weakly typed: change type
	->parse
		var myVar3 = 7 + '';			//string
		alert(myVar1 + true); 			//number
		alert(myVar1 * "8.32"); 		//Javastring can try to parse strings.
		parseInt(string);
		toString(integer);
	->identity operator
		alert(var1 == 0); // equal operator
		alert(var1 === 0); // identical operator
//functions
	->define
		var qoute = "SomethingSmart"
		var statement = new Function('quote', 'alert(quote)'); 	//through contructor
		function statement(quote) {alert(quote);};				//through statment
		var statement = funtion(quote) {alert(quote);};			//through expression
	->argument
		var reply = function() { alert('Yes'); };
		var conversation = function(question, reply){ alert(question); reply();};
		conversation('Are you having fun? ', reply);
	->anonymous functions
		var conversation = function(question, reply){ alert(question); reply();};
		conversation('Are you having fun? ', function() {alert('Yes');});
	->passing by reference
		var me = { name: "petar", numBeers: 0, reportBeers: function(){alert(this.name + ' had' + this.numBeers + ' beers');}};
		var giveBeer = function(person) { person.numBeers++;}
		giveBeer(me);
		me.reportBeers();
	->arguments
		var sum = function(a, b, c, d, e) {return a + b + c + d + e};
		var sum = function() { var totalSum = 0; for (var i=0; length = arguments.length; i<length; i++){ total += parseInt(arguments[i]);} return totalSum;};
	->object paramaters
		->single object parameters
			var getStoneWeight = function(stone) {  return stone.width * stone.height * stone.depth * stone.density;}
		->default parameters
			var getEventInfo = function(evt) { evt.country = evt.price || 'Belgium';
			evt.price = evt.price || 0;
			evt.categories = evt.categories || ['unknown'];
			return evt.name + ': ' + evt.price + '€, ' + evt.country + '; categories: ' + evt.categories.join(', ')};
	->anonymous objects
		alert(getWeight({kind: 'lapis lazuli', width: 3, height: 0.7, depth: 6, density: 0.5, color: 'darkblue'}));
		./
//objects
	->constructor
		var Car = function(make, year, started) {
		this.make = make;
		this.year = year;
		this.started = started;
		this.discribe = function(){alert("")}
		this.start = function(){this.started = true; this.describe();}
		}
		var myCar = new Car('Mercury Bobcat', 1978, false);
	->prototype property(extend constructor)
		Car.prototype.stop = function(){this.started = false;}
		Car.prototype.honk = function(){alert('tuut tuut');}
		myCar.stop;
		myCar.honk;
	->add properties to object
		var Person = function(nm){this.name = nm;}
		var person1 = new Person('Alice');
		var giveFood = function(person){person.isServed = tue;} 			//added new property
	->attach objects
		//no primitives
		->number
			var test2 = new Number(1);
			test2.someText = 'hello';
			alert(test2.someText);  // hello
		->function
			var test3 = [1, 3, 7];
			test3.count = function() {
  			alert(this.length);
			};
			test3.count(); // 3
		->number to an array to a function to an object
			test5.someFunction = function(){};
			test5.someFunction.someArray = [];
			test5.someFunction.someArray.someNumber = 100;
			alert(test5.someFunction.someArray.someNumber);  // 100
	->namespacing: zie dia.
//scope
	->self invoking anonymous functions
		(function() { 
		var number1 = 5; 
		var number2 = 7;
		alert('the sum of ' + number1 + ' and ' + number2 + ' is: ' + (number1 + number2));
		//dont forget the var
		})();
	//
//basic syntax recap
	->if-else
		if(1=1) {
			alert("true")
		} else {
			alert("false")
		}
	->switch-case
		var age = 10, lifeState;
		swtich (age)
			case 10: lifeState = 'Young'; break;
  			case 60: lifeState = 'Old'; break;
  			default: lifeState = 'unknown'; break;
  		}
  		alert(lifeState);
  	->for iterations
  		for(var i = i < max.length; i++){}
  		for(var properties in object)
  	->while
  		while(){}
  		do{} while();
  	->break
  	->label
  		MyForLoop:
  		while(){break MyForLoop;}
  	->continue //use to skip something
  	->try-catch
  		try {
  			forrest.functionDoesNotExist();
  		} catch (error) {
  			console.error('ERROR! ' + error.name + ' : ' + error.message);
  		} finally {
  			forrest.says();
  		}
//coding rules
	->header
		/**
		 * Customized agenda script
		 * Inspired on http://code.net//jquery-flat-timeline/
		 *
		 * @author Rogier van der Linde 
		 */
	->functions
		//line comment on top
		//use camelCase
	->comparison
		//use === ; check type
		//use !==; check values
	->use strict
		var function1 = function(){
			'use strict';
			//...
		}
	


//getting Elements
	document.getElementById;
	.addEventListener('click', function()){};


