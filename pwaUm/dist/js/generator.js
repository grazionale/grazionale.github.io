
// $(function () {
//     var api_url = "https://elika.com.br/dados.json";
//     var dados = [];


//     // Implementação 1: Retorna Array dados

//     $.ajax({
//         url: api_url,
//         type: "get",
//         data: dados, // N sei pra que que serve... parece ser atoa.
//         dataType: 'json',
//         success: function (data) {
//             dados = data;
            
//             let arr = $.map(data, function (el) {
//                 //
//                 return el;
//             })

//             //console.log(data);
//         },
//         error: function () {
//             msg.text("Erro ao fazer requisição");
//         }

        
//     });



//     // Implementação 2: Retorna Objeto
//     /*
//     $.getJSON(api_url, {
//         format: "json"
//     })
//     .done(function(data){
//         console.log(data);
//     }) 
//     */



// });



// function buscaRegiao(){
//     var api_url = "https://elika.com.br/dados.json";
//     var dados = [];

//     var norte = []; var nt = 0;
//     var noroeste = []; var ne = 0;
//     var sul = []; var sl = 0;
//     var sudoeste = []; so = 0;
//     var oeste = []; oe = 0;

//     $.ajax({
//         url: api_url,
//         type: "get",
//         data: dados, // N sei pra que que serve... parece ser atoa.
//         dataType: 'json',
//         success: function (data) {
//             $.each(data, function(i, item) {
//                 //alert(item.surveyField.field.city.region.macroRegion.name);
//                 if(item.surveyField.field.city.region.macroRegion.name == "Texas"){
//                     texas[i] = item;
//                     i++;
//                 } 

//                 if(item.surveyField.field.city.region.macroRegion.name == "Norte"){
//                     norte[nt] = item;
//                     nt++;
//                 } 

//                 if(item.surveyField.field.city.region.macroRegion.name == "Noroeste"){
//                     noroeste[ne] = item;
//                     ne++;
//                 } 
                
//                 if(item.surveyField.field.city.region.macroRegion.name == "Sul"){
//                     sul[sl] = item;
//                     sl++;
//                 } 

//                 if(item.surveyField.field.city.region.macroRegion.name == "Sudoeste"){
//                     sudoeste[so] = item;
//                     so++;
//                 } 

//                 if(item.surveyField.field.city.region.macroRegion.name == "Oeste"){
//                     oeste[oe] = item;
//                     oe++;
//                 }
//             });
//             return data;
//         },
//         error: function () {
//             msg.text("Erro ao fazer requisição");
//         }

        
//     });

// }



function buscarTipoSoja(){
    
    var sojaBt = []; var bt = 0;
    var sojaNBt = []; var nbt = 0;
    var data = JSON.parse(localStorage.getItem("dados"));
    
    $.each(data, function(i, item) {
        //alert(item.surveyField.field.city.region.macroRegion.name);

        if(item.surveyField.questionData.bt == true){
            sojaBt[bt] = item;
            bt++;
        } else {
            sojaNBt[nbt] = item;
            nbt++;
        }
    });
    console.log("Soja Bt:");
    console.log(sojaBt);

    console.log("Soja não Bt:");
    console.log(sojaNBt);
        
}




function buscarSojaBt(data){
    var sojaBt = []; var bt = 0;

    $.each(data, function(i, item) {
        if(item.surveyField.questionData.bt == true){
            sojaBt[bt] = item;
            bt++;
        } 
    });
    //console.log("Soja Bt:");
    //console.log(sojaBt);

    return sojaBt;

}

function buscarSojaNBt(data){
    var sojaNBt = []; var nbt = 0;

    $.each(data, function(i, item) {
        if(item.surveyField.questionData.bt == false){
            sojaNBt[nbt] = item;
            nbt++;
        } 
    });
    //console.log("Soja Bt:");
    //console.log(sojaBt);

    return sojaNBt;

}

function buscarLagartas(data){
    var anticarsia = []; var a = 0;
    var chrysodeixis = []; var c = 0;
    var spodoptera = []; var s = 0;
    var heliothinae = []; var h = 0;
    var lagartas = [];

    $.each(data, function(i, item) {
        //console.log(item.samplePestSet);
        $.each(item.samplePestSet, function(p, pest){
            //console.log(pest.pest.scientificName);
            if(pest.pest.scientificName == "Anticarsia gemmatalis"){
                anticarsia[a] = pest;  
                a++;
                //console.log("Achou Anticarsia");
            } 
            if (pest.pest.scientificName == "Chrysodeixis includens") {
                chrysodeixis[c] = pest;
                c++;
                //console.log("Achou Chrysodeixis");
            } 
            if (pest.pest.scientificName == "Spodoptera spp") {
                spodoptera[s] = pest;
                s++;
                //console.log("Achou Spodoptera");
            } 
            if (pest.pest.scientificName == "Grupo Heliothinae") {
                heliothinae[h] = pest;
                h++;
                //console.log("Achou heliothinae");
            }
        });

        lagartas[0] = anticarsia;
        lagartas[1] = chrysodeixis;
        lagartas[2] = spodoptera;
        lagartas[3] = heliothinae;

        //console.log(lagartas);

    });
    // console.log(anticarsia);
    // console.log(chrysodeixis);
    // console.log(spodoptera);
    // console.log(heliothinae);

    return lagartas;

}

function buscarPercevejos(data){
    var nazera = []; var a = 0;
    var piezodorus = []; var c = 0;
    var euschistus = []; var s = 0;
    var dichelops = []; var h = 0;
    var outros = []; var o = 0;
    var percevejos = [];
    
    $.each(data, function(i, item) {
        //console.log(item.samplePestSet); 
        $.each(item.samplePestSet, function(p, pest){
            //console.log(pest.pest.scientificName); 
            if(pest.pest.scientificName == "Nazera viridula"){
                nazera[a] = pest;  
                a++;
                //console.log("Achou Nazera");
            } 
            if (pest.pest.scientificName == "Piezodorus guildinii") {
                piezodorus[c] = pest;
                c++;
                //console.log("Achou Piezodorus");
            } 
            if (pest.pest.scientificName == "Euschistus heros") {
                euschistus[s] = pest;
                s++;
                //console.log("Achou Euschistus");
            } 
            if (pest.pest.scientificName == "Dichelops melacanthus") {
                dichelops[h] = pest;
                h++;
                //console.log("Achou Dichelops");
            }
            if (pest.pest.scientificName == "Outros") {
                outros[o] = pest;
                o++;
                //console.log("Achou Dichelops");
            }
        });

        percevejos[0] = nazera;
        percevejos[1] = piezodorus;
        percevejos[2] = euschistus;
        percevejos[3] = dichelops;
        percevejos[4] = outros;

        //console.log(percevejos);

    });
    //  console.log(nazera);
    //  console.log(piezodorus);
    //  console.log(euschistus);
    //  console.log(dichelops);

    return percevejos;

}


function buscarPorRegiao(data){
    var norte = []; var n = 0;
    var noroeste = []; var no = 0;
    var sul = []; var s = 0;
    var sudoeste = []; var se = 0;
    var oeste = []; var oe = 0;
    var regioes = [];

    $.each(data, function(i, item) {
        //console.log(item.samplePestSet);

        if(item.surveyField.field.city.region.macroRegion.name == "NORTE"){
            norte[n] = item;
            n++;
        } else if (item.surveyField.field.city.region.macroRegion.name == "NOROESTE"){
            noroeste[no] = item;
            no++;
        } else if (item.surveyField.field.city.region.macroRegion.name == "SUL"){
            sul[s] = item;
            s++;
        } else if (item.surveyField.field.city.region.macroRegion.name == "SUDOESTE"){
            sudoeste[se] = item;
            se++;
        } else if (item.surveyField.field.city.region.macroRegion.name == "OESTE"){
            oeste[oe] = item;
            oe++;
        } else {}

        regioes[0] = norte;
        regioes[1] = noroeste;
        regioes[2] = sul;
        regioes[3] = sudoeste;
        regioes[4] = oeste;

    });

    return regioes;

}

function gerarGraficoPizzaDistribuicaoPercentual(regiao, sojabt){
   
    var valor_anticarsia = 0;
    var valor_chrysodeixis = 0;
    var valor_spodoptera = 0;
    var valor_heliothinae = 0;
    
    var num_anticarsia = 0;
    var num_chrysodeixis = 0;
    var num_spodoptera = 0;
    var num_heliothinae = 0;

    var media_anticarsia = 0;
    var media_chrysodeixis = 0;
    var media_spodoptera = 0;
    var media_heliothinae = 0;
    
    if(regiao == "Paraná" || regiao == "PR"){
        if(sojabt){
            var sojabt_data = buscarSojaBt(JSON.parse(localStorage.getItem("dados")));
            var lagartas = buscarLagartas(sojabt_data);
            var cont = 0;

            $.each(lagartas, function(lagarta, tipo){
                $.each(tipo, function(items, i){
                    if(cont == 0){
                        valor_anticarsia = valor_anticarsia + i.value;
                        num_anticarsia++;
                    } else if (cont == 1){
                        valor_chrysodeixis = valor_chrysodeixis + i.value;
                        num_chrysodeixis++;
                    } else if (cont == 2){
                        valor_spodoptera = valor_spodoptera + i.value;
                        num_spodoptera++;
                    } else {
                        valor_heliothinae = valor_heliothinae + i.value;
                        num_heliothinae++;
                    }
                });
                cont++;
            });

            media_anticarsia = (valor_anticarsia/num_anticarsia);
            media_chrysodeixis = (valor_chrysodeixis/num_chrysodeixis);
            media_spodoptera = (valor_spodoptera/num_spodoptera);
            media_heliothinae = (valor_heliothinae/num_heliothinae);
            
            var total_media = media_anticarsia + media_chrysodeixis + media_spodoptera + media_heliothinae;
            
            var porcentagem_anticarsia = parseFloat((media_anticarsia * 100) / total_media).toFixed(2);
            var porcentagem_chrysodeixis = parseFloat((media_chrysodeixis * 100) / total_media).toFixed(2);
            var porcentagem_spodoptera = parseFloat((media_spodoptera * 100) / total_media).toFixed(2);
            var porcentagem_heliothinae = parseFloat((media_heliothinae * 100) / total_media).toFixed(2);


            var porcentagem_total = porcentagem_anticarsia + porcentagem_chrysodeixis + porcentagem_spodoptera + porcentagem_heliothinae;

            // console.log(valor_anticarsia + " Num: " + num_anticarsia + " Media: " + media_anticarsia + " Porcentagem: " + porcentagem_anticarsia);
            // console.log(valor_chrysodeixis+ " Num: " + num_chrysodeixis + " Media: " + media_chrysodeixis + " Porcentagem: " + porcentagem_chrysodeixis);
            // console.log(valor_spodoptera+ " Num: " + num_spodoptera + " Media: " + media_spodoptera + " Porcentagem: " + porcentagem_spodoptera);
            // console.log(valor_heliothinae+ " Num: " + num_heliothinae + " Media: " + media_heliothinae + " Porcentagem: " + porcentagem_heliothinae);
            // console.log("Media total: " + total_media);
            // console.log("Porcentagem total: " + porcentagem_total);


            var ctx = document.getElementById("bar-chart-sojabt-pr-total").getContext('2d');
            var myChart = new Chart(document.getElementById("bar-chart-sojabt-pr-total"), {
                type: 'doughnut',
                data: {
                labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
                datasets: [{
                    label: "Paraná",
                    backgroundColor: ["#F63061", "#42478B", "#1EBD94", "#F5B400"],
                    data: [porcentagem_anticarsia, porcentagem_chrysodeixis, porcentagem_spodoptera, porcentagem_heliothinae]
                }]
                },
                options: {
                title: {
                    display: false,
                    text: 'Titulo',
                    fontSize: 15
                },
                legend:{
                    position: 'left',
                    labels:{
                    fontSize: 14,
                    }
                }
                }
            });
        } else {
            var sojanbt_data = buscarSojaNBt(JSON.parse(localStorage.getItem("dados")));
            var lagartas = buscarLagartas(sojanbt_data);
            var cont = 0;

            $.each(lagartas, function(lagarta, tipo){
                $.each(tipo, function(items, i){
                    if(cont == 0){
                        valor_anticarsia = valor_anticarsia + i.value;
                        num_anticarsia++;
                    } else if (cont == 1){
                        valor_chrysodeixis = valor_chrysodeixis + i.value;
                        num_chrysodeixis++;
                    } else if (cont == 2){
                        valor_spodoptera = valor_spodoptera + i.value;
                        num_spodoptera++;
                    } else {
                        valor_heliothinae = valor_heliothinae + i.value;
                        num_heliothinae++;
                    }
                });
                cont++;
            });

            media_anticarsia = (valor_anticarsia/num_anticarsia);
            media_chrysodeixis = (valor_chrysodeixis/num_chrysodeixis);
            media_spodoptera = (valor_spodoptera/num_spodoptera);
            media_heliothinae = (valor_heliothinae/num_heliothinae);
            
            var total_media = media_anticarsia + media_chrysodeixis + media_spodoptera + media_heliothinae;
            
            var porcentagem_anticarsia = parseFloat((media_anticarsia * 100) / total_media).toFixed(2);
            var porcentagem_chrysodeixis = parseFloat((media_chrysodeixis * 100) / total_media).toFixed(2);
            var porcentagem_spodoptera = parseFloat((media_spodoptera * 100) / total_media).toFixed(2);
            var porcentagem_heliothinae = parseFloat((media_heliothinae * 100) / total_media).toFixed(2);


            var porcentagem_total = porcentagem_anticarsia + porcentagem_chrysodeixis + porcentagem_spodoptera + porcentagem_heliothinae;

            // console.log(valor_anticarsia + " Num: " + num_anticarsia + " Media: " + media_anticarsia + " Porcentagem: " + porcentagem_anticarsia);
            // console.log(valor_chrysodeixis+ " Num: " + num_chrysodeixis + " Media: " + media_chrysodeixis + " Porcentagem: " + porcentagem_chrysodeixis);
            // console.log(valor_spodoptera+ " Num: " + num_spodoptera + " Media: " + media_spodoptera + " Porcentagem: " + porcentagem_spodoptera);
            // console.log(valor_heliothinae+ " Num: " + num_heliothinae + " Media: " + media_heliothinae + " Porcentagem: " + porcentagem_heliothinae);
            // console.log("Media total: " + total_media);
            // console.log("Porcentagem total: " + porcentagem_total);


            var ctx = document.getElementById("bar-chart-sojanbt-pr-total").getContext('2d');
            var myChart = new Chart(document.getElementById("bar-chart-sojanbt-pr-total"), {
                type: 'doughnut',
                data: {
                labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
                datasets: [{
                    label: "Paraná",
                    backgroundColor: ["#41C6F3", "#017EC1", "#FDB225", "#EF3D31"],
                    data: [porcentagem_anticarsia, porcentagem_chrysodeixis, porcentagem_spodoptera, porcentagem_heliothinae]
                }]
                },
                options: {
                title: {
                    display: false,
                    text: 'Titulo',
                    fontSize: 15
                },
                legend:{
                    position: 'left',
                    labels:{
                    fontSize: 14,
                    }
                }
                }
            });
        }
    } else if (regiao == "Norte"){
        if(sojabt){

        } else {
            var sojanbt_data = buscarSojaNBt(JSON.parse(localStorage.getItem("dados")));
            var lagartas_regioes = buscarPorRegiao(sojanbt_data);
            var lagartas = buscarLagartas(lagartas_regioes[0]);
            var cont = 0;

            $.each(lagartas, function(lagarta, tipo){
                $.each(tipo, function(items, i){
                    if(cont == 0){
                        valor_anticarsia = valor_anticarsia + i.value;
                        num_anticarsia++;
                    } else if (cont == 1){
                        valor_chrysodeixis = valor_chrysodeixis + i.value;
                        num_chrysodeixis++;
                    } else if (cont == 2){
                        valor_spodoptera = valor_spodoptera + i.value;
                        num_spodoptera++;
                    } else {
                        valor_heliothinae = valor_heliothinae + i.value;
                        num_heliothinae++;
                    }
                });
                cont++;
            });

            media_anticarsia = (valor_anticarsia/num_anticarsia);
            media_chrysodeixis = (valor_chrysodeixis/num_chrysodeixis);
            media_spodoptera = (valor_spodoptera/num_spodoptera);
            media_heliothinae = (valor_heliothinae/num_heliothinae);
            
            var total_media = media_anticarsia + media_chrysodeixis + media_spodoptera + media_heliothinae;
            
            var porcentagem_anticarsia = parseFloat((media_anticarsia * 100) / total_media).toFixed(2);
            var porcentagem_chrysodeixis = parseFloat((media_chrysodeixis * 100) / total_media).toFixed(2);
            var porcentagem_spodoptera = parseFloat((media_spodoptera * 100) / total_media).toFixed(2);
            var porcentagem_heliothinae = parseFloat((media_heliothinae * 100) / total_media).toFixed(2);


            var porcentagem_total = porcentagem_anticarsia + porcentagem_chrysodeixis + porcentagem_spodoptera + porcentagem_heliothinae;

            // console.log(valor_anticarsia + " Num: " + num_anticarsia + " Media: " + media_anticarsia + " Porcentagem: " + porcentagem_anticarsia);
            // console.log(valor_chrysodeixis+ " Num: " + num_chrysodeixis + " Media: " + media_chrysodeixis + " Porcentagem: " + porcentagem_chrysodeixis);
            // console.log(valor_spodoptera+ " Num: " + num_spodoptera + " Media: " + media_spodoptera + " Porcentagem: " + porcentagem_spodoptera);
            // console.log(valor_heliothinae+ " Num: " + num_heliothinae + " Media: " + media_heliothinae + " Porcentagem: " + porcentagem_heliothinae);
            // console.log("Media total: " + total_media);
            // console.log("Porcentagem total: " + porcentagem_total);


            var ctx = document.getElementById("norte-grafico-pizza-lagartas").getContext('2d');
            var myChart = new Chart(document.getElementById("norte-grafico-pizza-lagartas"), {
                type: 'pie',
                data: {
                labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
                datasets: [{
                    label: "Paraná",
                    backgroundColor: ["#1048A9", "#A6120A", "#00B74A", "#FFCB1E"],
                    data: [porcentagem_anticarsia, porcentagem_chrysodeixis, porcentagem_spodoptera, porcentagem_heliothinae]
                }]
                },
                options: {
                title: {
                    display: false,
                    text: 'Titulo',
                    fontSize: 15
                },
                legend:{
                    position: 'left',
                    labels:{
                    fontSize: 14,
                    }
                }
                }
            });
        }
    } else if(regiao == "Noroeste"){
        if(sojabt){

        } else {
            
        }
    } else if(regiao == "Sul"){
        if(sojabt){

        } else {
            
        }
    } else if(regiao == "Sudoeste"){
        if(sojabt){

        } else {
            var sojanbt_data = buscarSojaNBt(JSON.parse(localStorage.getItem("dados")));
            var lagartas_regioes = buscarPorRegiao(sojanbt_data);
            var lagartas = buscarLagartas(lagartas_regioes[3]);
            var cont = 0;

            $.each(lagartas, function(lagarta, tipo){
                $.each(tipo, function(items, i){
                    if(cont == 0){
                        valor_anticarsia = valor_anticarsia + i.value;
                        num_anticarsia++;
                    } else if (cont == 1){
                        valor_chrysodeixis = valor_chrysodeixis + i.value;
                        num_chrysodeixis++;
                    } else if (cont == 2){
                        valor_spodoptera = valor_spodoptera + i.value;
                        num_spodoptera++;
                    } else {
                        valor_heliothinae = valor_heliothinae + i.value;
                        num_heliothinae++;
                    }
                });
                cont++;
            });

            media_anticarsia = (valor_anticarsia/num_anticarsia);
            media_chrysodeixis = (valor_chrysodeixis/num_chrysodeixis);
            media_spodoptera = (valor_spodoptera/num_spodoptera);
            media_heliothinae = (valor_heliothinae/num_heliothinae);
            
            var total_media = media_anticarsia + media_chrysodeixis + media_spodoptera + media_heliothinae;
            
            var porcentagem_anticarsia = parseFloat((media_anticarsia * 100) / total_media).toFixed(2);
            var porcentagem_chrysodeixis = parseFloat((media_chrysodeixis * 100) / total_media).toFixed(2);
            var porcentagem_spodoptera = parseFloat((media_spodoptera * 100) / total_media).toFixed(2);
            var porcentagem_heliothinae = parseFloat((media_heliothinae * 100) / total_media).toFixed(2);


            var porcentagem_total = porcentagem_anticarsia + porcentagem_chrysodeixis + porcentagem_spodoptera + porcentagem_heliothinae;

            // console.log(valor_anticarsia + " Num: " + num_anticarsia + " Media: " + media_anticarsia + " Porcentagem: " + porcentagem_anticarsia);
            // console.log(valor_chrysodeixis+ " Num: " + num_chrysodeixis + " Media: " + media_chrysodeixis + " Porcentagem: " + porcentagem_chrysodeixis);
            // console.log(valor_spodoptera+ " Num: " + num_spodoptera + " Media: " + media_spodoptera + " Porcentagem: " + porcentagem_spodoptera);
            // console.log(valor_heliothinae+ " Num: " + num_heliothinae + " Media: " + media_heliothinae + " Porcentagem: " + porcentagem_heliothinae);
            // console.log("Media total: " + total_media);
            // console.log("Porcentagem total: " + porcentagem_total);


            var ctx = document.getElementById("pie-chart").getContext('2d');
            var myChart = new Chart(document.getElementById("pie-chart"), {
                type: 'pie',
                data: {
                labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
                datasets: [{
                    label: "Paraná",
                    backgroundColor: ["#1048A9", "#A6120A", "#00B74A", "#FFCB1E"],
                    data: [porcentagem_anticarsia, porcentagem_chrysodeixis, porcentagem_spodoptera, porcentagem_heliothinae]
                }]
                },
                options: {
                title: {
                    display: false,
                    text: 'Titulo',
                    fontSize: 15
                },
                legend:{
                    position: 'left',
                    labels:{
                    fontSize: 14,
                    }
                }
                }
            });
        }
    } else {
        if(sojabt){

        } else {
            
        }
    }
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}


//Dividir o Json em Datas 0-30 dias 31-60 dias 61-150 dias independente do tipo de soja
function gerarDadosPorFaseERegiao(fase, regiao) {

    if(regiao == "Paraná" || regiao == "PR"){
        var dados = JSON.parse(localStorage.getItem("dados"));
        var dados_primeira_fase = []; d1 = 0;
        var dados_segunda_fase = []; d2 = 0;
        var dados_terceira_fase = []; d3 = 0;

        //var aux_data = dados[0].samplePestSet[0].sampleDate;
        //aux_data = aux_data.split("/");
        //var data_inicial = new Date(aux_data[1] + "-" + aux_data[0] + "-" + aux_data[2]);
        var data_final_primeira_fase = new Date();
        var data_final_segunda_fase = new Date();

        //data_final_primeira_fase = addDays(data_inicial, 30);
        //data_final_segunda_fase = addDays(data_final_primeira_fase, 30);

        // console.log("Date Inicio: " + data_inicial);
        // console.log("Date final 1: " + data_final_primeira_fase);
        // console.log("Date final 2: " + data_final_segunda_fase);

        $.each(dados, function (analises, analise) {
            //console.log(analise);
            var aux_data = analise.samplePestSet[0].sampleDate;
            aux_data = aux_data.split("/");
            var data_inicial = new Date(aux_data[1] + "-" + aux_data[0] + "-" + aux_data[2]);
            data_final_primeira_fase = addDays(data_inicial, 30);
            data_final_segunda_fase = addDays(data_final_primeira_fase, 30);

            $.each(analise.samplePestSet, function (samplePestSet, samplePest) {
                //console.log(samplePest.sampleDate);
                var aux = samplePest.sampleDate;
                aux = aux.split("/");
                var data = new Date(aux[1] + "-" + aux[0] + "-" + aux[2]);

                if (data < data_final_primeira_fase) {
                    //console.log(data + " - 1 Fase");
                    dados_primeira_fase[d1] = samplePest;
                    d1++;
                } else if (data > data_final_primeira_fase && data <= data_final_segunda_fase) {
                    //console.log(data + " - 2 Fase");
                    dados_segunda_fase[d2] = samplePest;
                    d2++;
                } else {
                    //console.log(data + " - 3 Fase");
                    dados_terceira_fase[d3] = samplePest;
                    d3++;
                }

            });
        });
    } else if (regiao == "Norte"){
        var dados = buscarPorRegiao(JSON.parse(localStorage.getItem("dados")));
        dados = dados[0];
        //console.log(dados);
        var dados_primeira_fase = []; d1 = 0;
        var dados_segunda_fase = []; d2 = 0;
        var dados_terceira_fase = []; d3 = 0;

        var aux_data = dados[0].samplePestSet[0].sampleDate;
        //console.log(aux_data);
        aux_data = aux_data.split("/");
        var data_inicial = new Date(aux_data[1] + "-" + aux_data[0] + "-" + aux_data[2]);
        var data_final_primeira_fase = new Date();
        var data_final_segunda_fase = new Date();

        data_final_primeira_fase = addDays(data_inicial, 30);
        data_final_segunda_fase = addDays(data_final_primeira_fase, 30);

        // console.log("Date Inicio: " + data_inicial);
        // console.log("Date final 1: " + data_final_primeira_fase);
        // console.log("Date final 2: " + data_final_segunda_fase);

        $.each(dados, function (analises, analise) {
            //console.log(analise);
            $.each(analise.samplePestSet, function (samplePestSet, samplePest) {
                //console.log('teste');
                //console.log(samplePest.sampleDate);
                var aux = samplePest.sampleDate;
                //console.log(aux);
                aux = aux.split("/");
                var data = new Date(aux[1] + "-" + aux[0] + "-" + aux[2]);

                if (data < data_final_primeira_fase) {
                    //console.log(data + " - 1 Fase");
                    dados_primeira_fase[d1] = samplePest;
                    d1++;
                } else if (data > data_final_primeira_fase && data <= data_final_segunda_fase) {
                    //console.log(data + " - 2 Fase");
                    dados_segunda_fase[d2] = samplePest;
                    d2++;
                } else {
                    //console.log(data + " - 3 Fase");
                    dados_terceira_fase[d3] = samplePest;
                    d3++;
                }

            });
        });
    }
    // console.log("Primeira Fase");
    // console.log(dados_primeira_fase);
    // console.log("Segunda Fase");
    // console.log(dados_segunda_fase);
    // console.log("Terceira Fase");
    // console.log(dados_terceira_fase);
    if (fase == "primeira") {
        return dados_primeira_fase;
    } else if (fase == "segunda") {
        return dados_segunda_fase;
    } else if (fase == "terceira") {
        return dados_terceira_fase;
    } else { }

}




$(function(){
    loadJson();
    //console.log(buscarSojaBt());

    //gerarGraficoPizzaDistribuicaoPercentual("Norte", false);
    //gerarGraficoPizzaDistribuicaoPercentual("Sudoeste", false);

    //console.log(JSON.parse(localStorage.getItem("dados")));
    //buscarTipoSoja();
    //console.log(gerarDadosPorFase("primeira"));
    //console.log(gerarDadosPorFaseETipoDeSoja("primeira", false));

});

