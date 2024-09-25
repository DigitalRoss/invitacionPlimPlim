const imagenes = [
	{ name: "1.png", width: "350px", top: "-45px", left: "-30px" },
	{ name: "4.png", width: "400px", top: "-100px", left: "-30px" },
	{ name: "3.png", width: "370px", top: "-45px", left: "-30px" },
	{ name: "2.png", width: "280px", top: "-75px", left: "10px" },
];

let posicion_imagen = 0;
const elemento_img = document.getElementById("imagenes");
function cambiarImagenes() {
	elemento_img.hidden = true;
	elemento_img.style.top = imagenes[posicion_imagen].top;
	elemento_img.style.left = imagenes[posicion_imagen].left;
	elemento_img.style.width = imagenes[posicion_imagen].width;
	elemento_img.src = "./img/" + imagenes[posicion_imagen].name;

	setTimeout(() => {
		elemento_img.hidden = false;
	}, 50);
	posicion_imagen < imagenes.length - 1 ? posicion_imagen++ : (posicion_imagen = 0);
}

const fotos = ["https://media1.giphy.com/media/C2TcUtEGtMtz0fxHQK/giphy.gif?cid=6c09b95200c6185f11eebba62dbf3ffdf8456d5ba8106ffd&rid=giphy.gif&ct=s"];
let posicion_foto = 0;
const elemento_foto = document.getElementById("foto");
function cambiarFoto() {
	// elemento_foto.hidden = true;
	elemento_foto.src = fotos[posicion_foto];

	setTimeout(() => {
		// elemento_img.hidden = false;
	}, 50);
	posicion_foto < fotos.length - 1 ? posicion_foto++ : (posicion_foto = 0);
}

cambiarImagenes();
cambiarFoto();

function remove_loader() {
	let loader = document.getElementById("loader");
	// remove loader element
	loader.parentNode.removeChild(loader);
	audio.play();
}

window.onload = () => {
	if (imagenes.length > 1) setInterval(cambiarImagenes, 6000);
	if (fotos.length > 1) setInterval(cambiarFoto, 2000);
};
