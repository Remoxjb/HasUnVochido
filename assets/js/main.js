const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    direccion: /^[a-zA-ZÀ-ÿ0-9.\s]{1,60}$/,
    ciudad: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
}

const formulario = document.querySelector('form');
//console.log(formulario);

const inputs = document.querySelectorAll('input');
//console.log(inputs);

const correoError = document.querySelector('#errorCorreo');
const telefonoError = document.querySelector('#errorTelefono');
const direccionError = document.querySelector('#errorDireccion');
const ciudadError = document.querySelector('#errorCiudad');

//retornar si los datos estan correctos
const estatusInf = {
	correo: false,
	telefono: false,
	direccion: false,
	ciudad:false,
}



inputs.forEach((inp)=>{
	//console.log(inp);
	inp.addEventListener("keyup",(e)=>{
		//console.log(e.target.name);

		switch (e.target.name){
			case "correo":
				//console.log(e.target.value);
				//utilizar espresiones regulares en javaScript
				if(expresiones.correo.test(e.target.value)){
					estatusInf.correo = true
					correoError.textContent = ""
				}
				else{
					estatusInf.correo = false
					correoError.textContent = "Correo no valido"
				}
				break

			case "telefono":
				if(expresiones.telefono.test(e.target.value)){
					estatusInf.telefono = true
					telefonoError.textContent = ""
				}
				else{
					estatusInf.telefono = false
					telefonoError.textContent = "Teléfono no valido"
				}
				break
			case "direccion":
				if(expresiones.direccion.test(e.target.value)){
					estatusInf.direccion = true
					direccionError.textContent = ""
				}
				else{
					estatusInf.direccion = false
					direccionError.textContent = "Dirección incorrecta"
				}
				break
			case "ciudad":
				if(expresiones.ciudad.test(e.target.value)){
					estatusInf.ciudad = true
					//console.log("Password correcto");
					ciudadError.textContent = ""
				}
				else{
					estatusInf.ciudad = false
					//console.log("Password incorrecto");
					ciudadError.textContent = "Ciudad invalido"
				}
				break
			
		}
			
	})
})

//para identificar que elemento es es que esta escribiendo
formulario.addEventListener("submit", (e) =>{
	e.preventDefault();

    const check = document.getElementById("terminos").checked

    if(!Object.values(estatusInf).includes(false) && check == true){
		//console.log("Enviado");
		//document.getElementById("alerta").style.display = "none";
		const datos = Object.fromEntries(
			new FormData(e.target)
		)
		console.log(datos)
		formulario.reset()

	}
	else{
		//console.log("No enviado");
		//document.getElementById("alerta").style.display = "block";
	}
})