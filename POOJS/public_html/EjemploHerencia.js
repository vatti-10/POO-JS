function Animal(edad) {
	this.edad=edad;
}
Animal.prototype.crecer = function() {
	this.edad+=1;
	return this.edad;
};

function Gato(edad) {
	this.edad=edad;
}
Gato.prototype= new Animal();
Gato.prototype.constructor=Gato;
Gato.prototype.maullar=function () {
	console.info("Miaaaauw");
}