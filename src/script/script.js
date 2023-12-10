function createNumber(){
    var numero = Math.floor(Math.random() * 10);
    return numero;
}

function setNumbers(){
    var numbers = document.querySelectorAll("#number")

    numbers[0].textContent = createNumber()
    numbers[1].textContent = createNumber()
    numbers[2].textContent = createNumber()
}

function verify(resposta){
    var numberElements = document.querySelectorAll("#number");
    
    var numberValues = Array.from(numberElements).map(element => Number(element.textContent));

    var resultado = numberValues.reduce((acc, value) => acc + value, 0);

    document.getElementById('input-resposta').value = '';

    if(resposta == resultado){
        var container = document.getElementById('container')
        var header = document.getElementById("header");

        document.body.removeChild(container);
        document.body.removeChild(header);

        var divCorreto = document.createElement('div');
        divCorreto.innerHTML = 'Correto'; //jogar pro css
        divCorreto.style.fontSize = '90px';
        divCorreto.style.color = 'white'; 
        divCorreto.style.fontWeight = 'bold';
        divCorreto.style.textAlign = 'center';
        divCorreto.style.marginTop = '200px';
        divCorreto.style.marginBottom = '200px'
        divCorreto.style.textAlign = 'center';
        divCorreto.style.fontFamily = 'Arial, sans-serif';

        document.body.style.backgroundColor = '#2ECC71'
        document.body.appendChild(divCorreto);

        setTimeout(function () {
            document.body.appendChild(header);
            document.body.appendChild(container);            
            document.body.style.backgroundColor = '#D8D9D7';
            document.body.removeChild(divCorreto);
        }, 2000);
    }
    else{
        var container = document.getElementById('container')
        var header = document.getElementById("header");

        document.body.removeChild(container);
        document.body.removeChild(header);

        var divCorreto = document.createElement('div');
        divCorreto.innerHTML = 'Errado'; //jogar pro css
        divCorreto.style.fontSize = '90px';
        divCorreto.style.color = 'white'; 
        divCorreto.style.fontWeight = 'bold';
        divCorreto.style.textAlign = 'center';
        divCorreto.style.marginTop = '200px';
        divCorreto.style.marginBottom = '200px'
        divCorreto.style.textAlign = 'center';
        divCorreto.style.fontFamily = 'Arial, sans-serif';

        document.body.style.backgroundColor = 'red'
        document.body.appendChild(divCorreto);

        setTimeout(function () {
            document.body.appendChild(header);
            document.body.appendChild(container);            
            document.body.style.backgroundColor = '#D8D9D7';
            document.body.removeChild(divCorreto);
        }, 2000);
    }
    
    setNumbers();
}


document.getElementById("btn-resposta").addEventListener("click", function() {
    verify(document.getElementById('input-resposta').value);
});

document.getElementById('input-resposta').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verify(document.getElementById('input-resposta').value);
    }
});