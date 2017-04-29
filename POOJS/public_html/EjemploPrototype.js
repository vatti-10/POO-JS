function Persona() {
	this.nombre;
	this.edad;
	this.setInfo("Indefinido",0);
}
Persona.prototype.toString = function() {
	return "Nombre: "+this.nombre+
			" Edad: "+this.edad;
};
Persona.prototype.setEdad=function (pEdad) {
	this.edad=pEdad;
}
Persona.prototype.setNombre=function (pNombre) {
	this.nombre=pNombre;
}
Persona.prototype.setInfo=function (pNombre,pEdad) {
	this.setNombre(pNombre);
	this.setEdad(pEdad);
}
