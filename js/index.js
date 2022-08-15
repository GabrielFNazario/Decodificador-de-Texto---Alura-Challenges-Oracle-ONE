let textoInicial = document.querySelector('.input-principal');
let textoFinal = document.querySelector('.texto-resultado');

let botaoCriptografia = document.querySelector('#criptografia');
let botaoDescriptografia = document.querySelector('#descriptografia');
let botaoCopiar = document.querySelector('#copiar')

let conteudoOriginal = document.querySelector('.bloco-resultante-conteudo-original');
let conteudoFinal = document.querySelector('.bloco-resultante-conteudo-resultado');



function criptografar (texto) {


	let resultado = texto
		.replaceAll('e', 'enter')
		.replaceAll('i', 'imes')
		.replaceAll('a', 'ai')
		.replaceAll('o', 'ober')
		.replaceAll('u', 'ufat')

		return resultado;
	

}

function descriptografar (texto) {

	let resultado = texto
		.replaceAll('enter', 'e')
		.replaceAll('imes', 'i')
		.replaceAll('ai', 'a')
		.replaceAll('ober', 'o')
		.replaceAll('ufat', 'u')

		return resultado
}

function copiar() {

	let textoCopiado = textoFinal;
	textoCopiado.select();
	textoCopiado.setSelectionRange(0, 99999);
	document.execCommand("copy");

}



function alteraDisplay(classe, display) {
	
	classe.style.display = display;
	
}


function limpar() {
	
	textoInicial.value = "";

}


botaoCriptografia.addEventListener('click', () => {
	alteraDisplay(conteudoOriginal, 'none');
	alteraDisplay(conteudoFinal, 'block');

	
	textoFinal.innerHTML = criptografar(textoInicial.value);
	limpar();

})

botaoDescriptografia.addEventListener('click', () => {

	alteraDisplay(conteudoOriginal, 'none');
	alteraDisplay(conteudoFinal, 'block');
	
	textoFinal.innerHTML = descriptografar(textoInicial.value);
	limpar();

})

botaoCopiar.onclick = copiar;