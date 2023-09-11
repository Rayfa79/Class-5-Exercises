
//index html code
const question = [
    {
      question: '___ scope defines how variables are defined in nested functions',
      answer: 'Lexical'
    },
    {
      question: '_____ functions have access to the scope of their parent functions',
      answer: 'nested/child'
    }, 
     {
      question: 'A ______ is a function having access to the parent scope(lexical scope), AFTER the parent function has closed(returned)',
      answer: 'closure'
    },
     {
      question: '______ is often confused with ______Scope. ______ Scope is an important part of   _____, but it is not _____ by itself',
      answer: 'closure and lexical'
    },
   
     {
      question: 'What is the difference between lexical scope and closure?',
      answer: 'Lexical scope is an important part of closure but it is not closure by itself. Closure occurs After the parent function closes(returns).'
                    
    },
     {
      question: '___ scope defines how variables are defined in nested funtions',
      answer: 'Lexical'
    },
    
  ];

  function createForm(questions) {
    const container = document.querySelector('.container')
    questions.forEach(question => {
        //create a form group and add bootstrap class
        const formGroup = document.createElement('div');
        formGroup.classList.add(".formGroup");

        //create label and add class
        const label = document.createElement('label');
        label.textContent = question.question;

        //create input and give it a class
        const input = document.createElement('input');
        input.classList.add('form-control')
        input.type = "text";
        input.id = "question";

        //create button and button classes
        const button = document.createElement('button');
        button.classList.add("btn","btn-primary");
        button.type = button;
        button.textContent = "SUBMIT";

        //create collapsing div
        const collapse = document.createElement('div');
        collapse.classList.add('collapse');
        collapse.textContent = `The correct answer is: ${question.answer}`;

        button.addEventListener('click', () => {
            collapse.classList.toggle('collapse');
            collapse.classList.toggle('show');
          });

        //append elements to form;
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        formGroup.appendChild(button);
        formGroup.appendChild(collapse);

        // Add class to keep collapsed initially
        collapse.classList.add("mt-2");
        collapse.classList.add("alert"); 
        collapse.classList.add("alert-success");


        //add whole form group to the container;
        container.appendChild(formGroup)
    });
  }

  createForm(question)
  
//end of index html code


//Scope Exercises

/*
1. Create three variables in the global scope called: firstName, lastName, age, and a function that logs them to the console in the following format: 'John Smith is 25 years old'
*/
let name = "John";
let lastName = "Smith";
let age = 25;

function getStringData() {
    console.log(`${fname} ${lname} is ${age} years old.`)
}
getStringData();


/*
2. Move the variables into the local scope of the function and add another variable this time called country, and this to our statement...'...and lives in England.'
*/
function getStringData() {
    let firstName = "John";
    let lastName = "Smith";
    let age = 25;
    let country = "England"
    console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}`)
}
getStringData();

/*
3. Outside of the function change the firstName to 'James'.
*/

function getStringData() {
    let firstName = "John";
    let lastName = "Smith";
    let age = 25;
    let country = "England"
    console.log(`${firstName} ${lastName} is ${age} years old and lives in ${country}`)
}
let firstName = "James";
getStringData();

/*
4. What will the following return?
let game = 'Sonic';

if(true) {
    let game = 'Mario';
    console.log(game);
}
console.log(game)
*/
"Mario";
"Sonic"



//Hoisting Exercises
/*
 1. What is the expected outcome of the following:
    book('The Magicians Nephew');
    function book(title) {
        console.log(`The book called ${title}`);
    }
*/
'The book is called The Magicians Nephew'

/*
 2. What is the expected outcome of the following? How could you 
    fix this?

  console.log(book);
  let book = 'The Silver Chair';
*/
"reference error book is not initialized"
"you could fix it by adding the variable declaration first!"

//CLOSURE EXERCISES

/*
    1. What will the function below display  on the console?
*/
//Immediately Invoked Function Expression
const privateCounter = (()=>{
    let count = 0;
    console.log(`initial value: ${count}`);
    return ()=> {console.log(count)}
})();
privateCounter();
privateCounter();
privateCounter();


/*
  #2: Create a function that that shows a child function having closure over the parent function (lexical scope)?  
*/

/*
  #3: For the above function change it so it directly gives an example of closure based on W3Schools definition of closure (A closure is a function having access to the parent scope, even after the parent function has closed.) ?  
*/

// #4 What will be displayed to the console?
const credits = ((num)=> {
    let credits = num;
    console.log(`initial credits value: ${credits}`);
    return()=> {
        credits -= 1;
        if(credits > 0) {
            console.log(`playing game, ${credits} credits remaining`)
        }else if (credits <= 0){
            console.log(`not enough credits`)
        }
    }
})(3);

//#5: What will be displayed to the console?

let x = 1;

    const parentFunction = ()=> {
        //local scope
        let myValue = 2;
        console.log(x);
        console.log(myValue);

        const childFunction = ()=> {
            console.log(x += 5);
            console.log(myValue += 1);
        }
        childFunction()
        return childFunction
    }
   parentFunction();
   parentFunction();
    
    
   

//ANSWERS
//CLOSURES
/* 
   #1 : intial value: 0, 1,2,3
*/
/* 
   #2 : intial credits value: 3;
        In order for the second function to work it must be invoked! The inital function is immediately invoked and will run ONCE. The second function is returned so you must call the credit function!

     const credits = ((num)=> {
    let credits = num;
    console.log(`initial credits value: ${credits}`);
    return()=> {
        credits -= 1;
        if(credits > 0) {
            console.log(`playing game, ${credits} credits remaining`)
        }else if (credits <= 0){
            console.log(`not enough credits`)
        }
    }
})(3);  

credits()

*/

/*
    #3: EXAMPLE!
    let x = 1;

    const parentFunction = ()=> {
        //local scope
        let myValue = 2;
        console.log(x);
        console.log(myValue);

        const childFuntion = ()=> {
            console.log(x += 5);
            console.log(myValue += 1);
        }
        childFunction()
    }
    parentFunction()

    
*/

/*
    #4:
    let x = 1;

    const parentFunction = ()=> {
        //local scope
        let myValue = 2;
        console.log(x);
        console.log(myValue);

        const childFuntion = ()=> {
            console.log(x += 5);
            console.log(myValue += 1);
        }
        return childFunction
    }
    parentFunction()
*/

/*
    #5: only the parent functions console.logs will display.
        In for for the child functions console logs to display the child function must be CALLED within the parent function.
*/


