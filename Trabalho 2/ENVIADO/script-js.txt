     
        function buscar() {
            var http = new XMLHttpRequest();
            var busca_cep = document.getElementById('cep')
            console.log(busca_cep.value)
            http.open("GET", `http://viacep.com.br/ws/`+busca_cep.value+`/json/`, true);
            http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            http.send();

            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {

                    var array = []

                    array.push(JSON.parse(this.responseText))

                    localStorage.setItem("Endereco", JSON.stringify(array));                    
                    dados = JSON.parse(localStorage.getItem("Endereco"))
                    
                    dados.forEach(item => {
                        console.log(item.cep)
                        console.log(item.logradouro)
                    })

                    var json = JSON.parse(this.responseText)
                    //console.log(json)
                    document.getElementById('rua').value=(json.logradouro);
                    document.getElementById('bairro').value=(json.bairro);
                    document.getElementById('cidade').value=(json.localidade);
                    document.getElementById('estado').value=(json.uf);

                    var CEP = busca_cep.value
                    var endereco = (json.logradouro);
                    var bairro = (json.bairro);
                    var cidade = (json.localidade);
                    var estado = (json.uf);

                    var save = {
                    CEP,
                    endereco, 
                    bairro,
                    cidade,
                    estado
                }
        
                
                let ceps = new Array();

                if(localStorage.hasOwnProperty("ceps")){
                    ceps = JSON.parse(localStorage.getItem("ceps"));
                }
                ceps.push({save});

                localStorage.setItem("ceps", JSON.stringify(ceps));

                document.getElementById("dados").insertAdjacentHTML('beforeend', "<tr><td>" + CEP + "</td><td>"+ endereco + "</td><td>" + bairro + "</td><td>" + cidade + "</td><td>" + estado + "</td></tr>");

        }}
    }