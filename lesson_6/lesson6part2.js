function Robot() {

	this.work = function() {
		console.log('Я Robot – я просто працюю');
	};
};

function CoffeRobot() {

}
CoffeRobot.prototype.work = function() {
	console.log('Я CoffeRobot – я варю каву');
}
function RobotDancer() {
}
RobotDancer.prototype.work = function() {
	console.log('Я RobotDancer – я просто танцюю');
};

function RobotCoocker() {
}

RobotCoocker.prototype.work = function() {
	console.log('Я RobotCoocker – я просто готую');
};


let robot = new Robot();
robot.work();
let cofeeRobot = new CoffeRobot();
cofeeRobot.work();
let robotCoocker = new RobotCoocker();
robotCoocker.work();
let robotDancer = new RobotDancer();
robotDancer.work();

console.log('------------');

let robotArray = [];
robotArray[0] = robot;
robotArray[1] = cofeeRobot;
robotArray[2] = robotDancer;
robotArray[3] = robotCoocker;

for (let i = 0; i < robotArray.length; i++) {
	robotArray[i].work();
};
