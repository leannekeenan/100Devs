console.log("Hello World");

/*Objects*/

//object literal syntax
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function() {
        console.log('draw')
    }
};

console.log(circle.radius)//returns radius value 1
console.log(circle.location) //returns location array {x:1, y: 2} 
console.log(circle.draw());//returns function action of logging 'draw' to concole



/*Factories*/

//factory function
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw!');
        }
    };
}
const circle2 = createCircle(5);
console.log(circle2)



/*Constructors*/
function Circle(radius) {
    console.log('this', this)
    this.radius = radius;
    this.draw = function() {
        console.log('draw!!')
    }
}

const circle3 = new Circle(10);
console.log(circle3);


/*Add / Remove properties*/
//use dot notation

circle3.location = {x: 1};//adds location property to circle3 object 
//can also be wrieein as circle['location'] = {x: 1} (use when keys have special chracters / spaces)

delete circle3.location;//deletes location property



/*Constructor Property*/
let x = {};
//let x = new Object()





let number = 20;

function increase(number) {
    number++;
}
increase(number)
console.log(number);//prints 20



let obj = {value: 15};
function increase(obj) {
    obj.value++;
}
increase(obj);
console.log(obj)//prints 16 




/*Add / Remove properties*/
//use dot notation

/*enumerating Properties */
let circle4 = new Circle(10);
for(let key in circle4) {
    if (typeof circle4[key] !== 'function')
    console.log(key, circle4[key])
};

const keys = Object.keys(circle4);
console.log(keys);

if('radius' in circle)//check for existance of a property
console.log("Circle has a radius."); 

//abstraction


//designa  stopwatch object
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if(running) {
            throw new Error("Stopwatch has already started.");
        }

        running = true;
        startTime = new Date(); 
    };


    this.stop = function() {
        if(!running) { 
            throw new Error("Stopwatch has not started.");
        }

        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

        duration += seconds;
    };


    this.reset = function() {
        startTime = null;
        endTime = null;
        duration = 0;
        running = false;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    });
} 