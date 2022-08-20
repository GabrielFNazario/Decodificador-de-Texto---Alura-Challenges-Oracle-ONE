let textoInicial = document.querySelector('.input-principal');
let textoFinal = document.querySelector('.texto-resultado');

let botaoCriptografia = document.querySelector('#criptografia');
let botaoDescriptografia = document.querySelector('#descriptografia');
let botaoCopiar = document.querySelector('#copiar')

let conteudoOriginal = document.querySelector('.bloco-resultante-conteudo-original');
let conteudoFinal = document.querySelector('.bloco-resultante-conteudo-resultado');



function criptografar (texto) {

	const matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
	texto = texto.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if(texto.includes(matrizCodigo[i][0])) {

			texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

		}

	}
	
	return texto;
}

function descriptografar (texto) {

	const matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];

	texto = texto.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++) {

		if(texto.includes(matrizCodigo[i][1])) {

			texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

		}

	}

		return texto
		
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
