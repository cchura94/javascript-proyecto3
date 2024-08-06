 // comentarios en javascript
        // funcion simple
        function suma(num1, num2){
            let resultado = num1 + num2;
            alert("Sumando... "+resultado)
        }
        // funcion anónima
        const resta = function(){
            var num1 = prompt("Ingrese Numero 1")
            var num2 = prompt("Ingrese Numero 2")
            let resultado = num1 - num2;
            document.getElementById("resu").innerHTML = "<p>" + resultado + "</p>";

        }
        // funcion flecha
        const multi = () => {
            var num1 = prompt("Ingrese Numero 1")
            var num2 = prompt("Ingrese Numero 2")
            let resultado = procesarMultiplicacion(num1, num2);
            
            document.getElementById("resu").innerHTML = "<p>" + resultado + "</p>";
            
        }
        
        function procesarMultiplicacion(n1, n2){
            return n1 * n2;
        }

        const saludo = mensaje => document.getElementById("resu").innerHTML = "<p>" + mensaje + "</p>";

