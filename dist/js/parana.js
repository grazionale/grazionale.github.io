
//Geração de gráfico de barras referente a plantação de soja bt e não bt do estado do Paraná
function gerarDadosGraficoBarrasParana() {
    var primeira_fase = gerarDadosPorFaseERegiao("primeira", "Paraná");
    var segunda_fase = gerarDadosPorFaseERegiao("segunda", "Paraná");
    var terceira_fase = gerarDadosPorFaseERegiao("terceira", "Paraná");
    var total_anticarsia_primeira_fase = 0; var num_anticaria_primeira_fase = 0;
    var total_chrysodeixis_primeira_fase = 0; var num_chrysodeixis_primeira_fase = 0;
    var total_spodoptera_primeira_fase = 0; var num_spodoptera_primeira_fase = 0;
    var total_heliothinae_primeira_fase = 0; var num_heliothinae_primeira_fase = 0;

    //Calculos referentes a primeira fase
    $.each(primeira_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_primeira_fase = total_anticarsia_primeira_fase + samplePest.value;
            num_anticaria_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_primeira_fase = total_chrysodeixis_primeira_fase + samplePest.value;
            num_chrysodeixis_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_primeira_fase = total_spodoptera_primeira_fase + samplePest.value;
            num_spodoptera_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_primeira_fase = total_heliothinae_primeira_fase + samplePest.value;
            num_heliothinae_primeira_fase++;

        } else {

        }
    });

    //Calculos referentes a segunda fase
    var total_anticarsia_segunda_fase = 0; var num_anticaria_segunda_fase = 0;
    var total_chrysodeixis_segunda_fase = 0; var num_chrysodeixis_segunda_fase = 0;
    var total_spodoptera_segunda_fase = 0; var num_spodoptera_segunda_fase = 0;
    var total_heliothinae_segunda_fase = 0; var num_heliothinae_segunda_fase = 0;

    $.each(segunda_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_segunda_fase = total_anticarsia_segunda_fase + samplePest.value;
            num_anticaria_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_segunda_fase = total_chrysodeixis_segunda_fase + samplePest.value;
            num_chrysodeixis_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_segunda_fase = total_spodoptera_segunda_fase + samplePest.value;
            num_spodoptera_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_segunda_fase = total_heliothinae_segunda_fase + samplePest.value;
            num_heliothinae_segunda_fase++;

        } else {

        }
    });



    //Calculos referentes a terceira fase
    var total_anticarsia_terceira_fase = 0; var num_anticaria_terceira_fase = 0;
    var total_chrysodeixis_terceira_fase = 0; var num_chrysodeixis_terceira_fase = 0;
    var total_spodoptera_terceira_fase = 0; var num_spodoptera_terceira_fase = 0;
    var total_heliothinae_terceira_fase = 0; var num_heliothinae_terceira_fase = 0;

    $.each(terceira_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_terceira_fase = total_anticarsia_terceira_fase + samplePest.value;
            num_anticaria_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_terceira_fase = total_chrysodeixis_terceira_fase + samplePest.value;
            num_chrysodeixis_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_terceira_fase = total_spodoptera_terceira_fase + samplePest.value;
            num_spodoptera_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_terceira_fase = total_heliothinae_terceira_fase + samplePest.value;
            num_heliothinae_terceira_fase++;

        } else {

        }
    });

    // console.log("Primeira Fase");
    // console.log("Total Anticaris: " + total_anticarsia_primeira_fase + " | Num: " + num_anticaria_primeira_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_primeira_fase + " |  Num: " + num_chrysodeixis_primeira_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_primeira_fase + " | Num: " + num_spodoptera_primeira_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_primeira_fase + " | Num: " + num_heliothinae_primeira_fase);

    // console.log("Segunda Fase");
    // console.log("Total Anticaris: " + total_anticarsia_segunda_fase + " | Num: " + num_anticaria_segunda_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_segunda_fase + " | Num: " + num_chrysodeixis_segunda_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_segunda_fase + " | Num: " + num_spodoptera_segunda_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_segunda_fase + " | Num: " + num_heliothinae_segunda_fase);

    // console.log("Terceira Fase");
    // console.log("Total Anticaris: " + total_anticarsia_terceira_fase + " | Num: " + num_anticaria_terceira_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_terceira_fase + " | Num: " + num_chrysodeixis_terceira_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_terceira_fase + " | Num: " + num_spodoptera_terceira_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_terceira_fase + " | Num: " + num_heliothinae_terceira_fase);


    //Calcular os valores em porcentagem
    //Primeira Fase
    var total_valores_primeira_fase = total_anticarsia_primeira_fase + total_chrysodeixis_primeira_fase + total_spodoptera_primeira_fase + total_heliothinae_primeira_fase;
    var porcentagem_anticarsia_primeira_fase = parseFloat((total_anticarsia_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_chrysodeixis_primeira_fase = parseFloat((total_chrysodeixis_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_spodoptera_primeira_fase = parseFloat((total_spodoptera_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_heliothinae_primeira_fase = parseFloat((total_heliothinae_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);

    //Segunda Fase
    var total_valores_segunda_fase = total_anticarsia_segunda_fase + total_chrysodeixis_segunda_fase + total_spodoptera_segunda_fase + total_heliothinae_segunda_fase;
    var porcentagem_anticarsia_segunda_fase = parseFloat((total_anticarsia_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_chrysodeixis_segunda_fase = parseFloat((total_chrysodeixis_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_spodoptera_segunda_fase = parseFloat((total_spodoptera_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_heliothinae_segunda_fase = parseFloat((total_heliothinae_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);


    //Terceira Fase
    var total_valores_terceira_fase = total_anticarsia_terceira_fase + total_chrysodeixis_terceira_fase + total_spodoptera_terceira_fase + total_heliothinae_terceira_fase;
    var porcentagem_anticarsia_terceira_fase = parseFloat((total_anticarsia_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_chrysodeixis_terceira_fase = parseFloat((total_chrysodeixis_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_spodoptera_terceira_fase = parseFloat((total_spodoptera_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_heliothinae_terceira_fase = parseFloat((total_heliothinae_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);

    // console.log("porcentagem primeira fase");
    // console.log(porcentagem_anticarsia_primeira_fase);
    // console.log(porcentagem_chrysodeixis_primeira_fase);
    // console.log(porcentagem_spodoptera_primeira_fase);
    // console.log(porcentagem_heliothinae_primeira_fase);
    // console.log("porcentagem segunda fase");
    // console.log(porcentagem_anticarsia_segunda_fase);
    // console.log(porcentagem_chrysodeixis_segunda_fase);
    // console.log(porcentagem_spodoptera_segunda_fase);
    // console.log(porcentagem_heliothinae_segunda_fase);
    // console.log("porcentagem terceira fase");
    // console.log(porcentagem_anticarsia_terceira_fase);
    // console.log(porcentagem_chrysodeixis_terceira_fase);
    // console.log(porcentagem_spodoptera_terceira_fase);
    // console.log(porcentagem_heliothinae_terceira_fase);


    //Gerar Gráfico de Barras Referente AO Paraná Soja Bt e Não Bt

    var objeto = [
        {
            "fase": "Primeira",
            "anticarsia": {
                "valor": porcentagem_anticarsia_primeira_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_primeira_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_primeira_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_primeira_fase
            }
        },
        {
            "fase": "Segunda",
            "anticarsia": {
                "valor": porcentagem_anticarsia_segunda_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_segunda_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_segunda_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_segunda_fase
            }
        },
        {
            "fase": "Terceira",
            "anticarsia": {
                "valor": porcentagem_anticarsia_terceira_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_terceira_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_terceira_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_terceira_fase
            }
        }
    ];

    //console.log(objeto);
    return objeto;

}

//Gera grafico de barras das analises de lagartas tanto soja bt e não bt de todas as regiões do paraná
function gerarGraficoBarrasParana() {
    var valores = gerarDadosGraficoBarrasParana();

    //console.log(valores);
    
    var ctx = document.getElementById("bar-chart-grouped").getContext('2d');
    var myChart = new Chart(document.getElementById("bar-chart-grouped"), {
        type: 'bar',
        data: {
            labels: ["0-30", "30-60", "60-90 dias"],
            datasets: [
                {
                    label: "Anticarsia gemmatalis",
                    backgroundColor: "#C10250",
                    data: [valores[0].anticarsia.valor, valores[1].anticarsia.valor, valores[2].anticarsia.valor]
                }, {
                    label: "Chrysodeixis includens",
                    backgroundColor: "#03BCBF",
                    data: [valores[0].chrysodeixis.valor, valores[1].chrysodeixis.valor, valores[2].chrysodeixis.valor]
                },
                {
                    label: "Spodoptera spp",
                    backgroundColor: "#D3D945",
                    data: [valores[0].spodoptera.valor, valores[1].spodoptera.valor, valores[2].spodoptera.valor]
                }, {
                    label: "Grupo Heliothinae",
                    backgroundColor: "#FCB040",
                    data: [valores[0].heliothinae.valor, valores[1].heliothinae.valor, valores[2].heliothinae.valor]
                }
            ]
        },
        options: {
            title: {
                display: false,
                text: 'Título',
                fontSize: 15
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 14,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {

                        min: 0,
                        max: 100,
                        callback: function (value) { return value + "%" }
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    }
                }]
            }
        }
    });

}


// Gerar gráfico de Pizza da distribuição de lagartas em todos os periodos do MIP no Paraná (bt e não bt).
function gerarGraficoPizzaDistribuicaoPercentualLagartasNoParana() {

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



    var soja_data =JSON.parse(localStorage.getItem("dados"));
    var lagartas = buscarLagartas(soja_data);
    var cont = 0;

    $.each(lagartas, function (lagarta, tipo) {
        $.each(tipo, function (items, i) {
            if (cont == 0) {
                valor_anticarsia = valor_anticarsia + i.value;
                num_anticarsia++;
            } else if (cont == 1) {
                valor_chrysodeixis = valor_chrysodeixis + i.value;
                num_chrysodeixis++;
            } else if (cont == 2) {
                valor_spodoptera = valor_spodoptera + i.value;
                num_spodoptera++;
            } else {
                valor_heliothinae = valor_heliothinae + i.value;
                num_heliothinae++;
            }
        });
        cont++;
    });

    media_anticarsia = (valor_anticarsia / num_anticarsia);
    media_chrysodeixis = (valor_chrysodeixis / num_chrysodeixis);
    media_spodoptera = (valor_spodoptera / num_spodoptera);
    media_heliothinae = (valor_heliothinae / num_heliothinae);

    var total_media = media_anticarsia + media_chrysodeixis + media_spodoptera + media_heliothinae;

    var porcentagem_anticarsia = parseFloat((media_anticarsia * 100) / total_media).toFixed(2);
    var porcentagem_chrysodeixis = parseFloat((media_chrysodeixis * 100) / total_media).toFixed(2);
    var porcentagem_spodoptera = parseFloat((media_spodoptera * 100) / total_media).toFixed(2);
    var porcentagem_heliothinae = parseFloat((media_heliothinae * 100) / total_media).toFixed(2);


    var porcentagem_total = porcentagem_anticarsia + porcentagem_chrysodeixis + porcentagem_spodoptera + porcentagem_heliothinae;

    // console.log(valor_anticarsia + " Num: " + num_anticarsia + " Media: " + media_anticarsia + " Porcentagem: " + porcentagem_anticarsia);
    // console.log(valor_chrysodeixis + " Num: " + num_chrysodeixis + " Media: " + media_chrysodeixis + " Porcentagem: " + porcentagem_chrysodeixis);
    // console.log(valor_spodoptera + " Num: " + num_spodoptera + " Media: " + media_spodoptera + " Porcentagem: " + porcentagem_spodoptera);
    // console.log(valor_heliothinae + " Num: " + num_heliothinae + " Media: " + media_heliothinae + " Porcentagem: " + porcentagem_heliothinae);
    // console.log("Media total: " + total_media);
    // console.log("Porcentagem total: " + porcentagem_total);


    var ctx = document.getElementById("pie-chart").getContext('2d');
    var myChart = new Chart(document.getElementById("pie-chart"), {
        type: 'doughnut',
        data: {
            labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
            datasets: [{
                label: "Paraná",
                backgroundColor: ["#C10250", "#03BCBF", "#D3D945", "#FCB040"],
                data: [porcentagem_anticarsia, porcentagem_chrysodeixis, porcentagem_spodoptera, porcentagem_heliothinae]
            }]
        },
        options: {
            title: {
                display: false,
                text: 'Titulo',
                fontSize: 15
            },
            legend: {
                position: 'left',
                labels: {
                    fontSize: 14,
                }
            }
        }
    });



}


//Geração de dados para o gráfico de barras referente a plantação de soja não bt do Paraná
function gerarDadosGraficoBarrasParanaSojaNaoBt() {
    var primeira_fase = gerarDadosPorFaseETipoDeSoja("primeira", false);
    var segunda_fase = gerarDadosPorFaseETipoDeSoja("segunda", false);
    var terceira_fase = gerarDadosPorFaseETipoDeSoja("terceira", false);
    var total_anticarsia_primeira_fase = 0; var num_anticaria_primeira_fase = 0;
    var total_chrysodeixis_primeira_fase = 0; var num_chrysodeixis_primeira_fase = 0;
    var total_spodoptera_primeira_fase = 0; var num_spodoptera_primeira_fase = 0;
    var total_heliothinae_primeira_fase = 0; var num_heliothinae_primeira_fase = 0;

    //Calculos referentes a primeira fase
    $.each(primeira_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_primeira_fase = total_anticarsia_primeira_fase + samplePest.value;
            num_anticaria_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_primeira_fase = total_chrysodeixis_primeira_fase + samplePest.value;
            num_chrysodeixis_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_primeira_fase = total_spodoptera_primeira_fase + samplePest.value;
            num_spodoptera_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_primeira_fase = total_heliothinae_primeira_fase + samplePest.value;
            num_heliothinae_primeira_fase++;

        } else {

        }
    });

    //Calculos referentes a segunda fase
    var total_anticarsia_segunda_fase = 0; var num_anticaria_segunda_fase = 0;
    var total_chrysodeixis_segunda_fase = 0; var num_chrysodeixis_segunda_fase = 0;
    var total_spodoptera_segunda_fase = 0; var num_spodoptera_segunda_fase = 0;
    var total_heliothinae_segunda_fase = 0; var num_heliothinae_segunda_fase = 0;

    $.each(segunda_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_segunda_fase = total_anticarsia_segunda_fase + samplePest.value;
            num_anticaria_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_segunda_fase = total_chrysodeixis_segunda_fase + samplePest.value;
            num_chrysodeixis_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_segunda_fase = total_spodoptera_segunda_fase + samplePest.value;
            num_spodoptera_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_segunda_fase = total_heliothinae_segunda_fase + samplePest.value;
            num_heliothinae_segunda_fase++;

        } else {

        }
    });



    //Calculos referentes a terceira fase
    var total_anticarsia_terceira_fase = 0; var num_anticaria_terceira_fase = 0;
    var total_chrysodeixis_terceira_fase = 0; var num_chrysodeixis_terceira_fase = 0;
    var total_spodoptera_terceira_fase = 0; var num_spodoptera_terceira_fase = 0;
    var total_heliothinae_terceira_fase = 0; var num_heliothinae_terceira_fase = 0;

    $.each(terceira_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_terceira_fase = total_anticarsia_terceira_fase + samplePest.value;
            num_anticaria_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_terceira_fase = total_chrysodeixis_terceira_fase + samplePest.value;
            num_chrysodeixis_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_terceira_fase = total_spodoptera_terceira_fase + samplePest.value;
            num_spodoptera_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_terceira_fase = total_heliothinae_terceira_fase + samplePest.value;
            num_heliothinae_terceira_fase++;

        } else {

        }
    });

    // console.log("Primeira Fase");
    // console.log("Total Anticaris: " + total_anticarsia_primeira_fase + " | Num: " + num_anticaria_primeira_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_primeira_fase + " |  Num: " + num_chrysodeixis_primeira_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_primeira_fase + " | Num: " + num_spodoptera_primeira_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_primeira_fase + " | Num: " + num_heliothinae_primeira_fase);

    // console.log("Segunda Fase");
    // console.log("Total Anticaris: " + total_anticarsia_segunda_fase + " | Num: " + num_anticaria_segunda_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_segunda_fase + " | Num: " + num_chrysodeixis_segunda_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_segunda_fase + " | Num: " + num_spodoptera_segunda_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_segunda_fase + " | Num: " + num_heliothinae_segunda_fase);

    // console.log("Terceira Fase");
    // console.log("Total Anticaris: " + total_anticarsia_terceira_fase + " | Num: " + num_anticaria_terceira_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_terceira_fase + " | Num: " + num_chrysodeixis_terceira_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_terceira_fase + " | Num: " + num_spodoptera_terceira_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_terceira_fase + " | Num: " + num_heliothinae_terceira_fase);


    //Calcular os valores em porcentagem
    //Primeira Fase
    var total_valores_primeira_fase = total_anticarsia_primeira_fase + total_chrysodeixis_primeira_fase + total_spodoptera_primeira_fase + total_heliothinae_primeira_fase;
    var porcentagem_anticarsia_primeira_fase = parseFloat((total_anticarsia_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_chrysodeixis_primeira_fase = parseFloat((total_chrysodeixis_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_spodoptera_primeira_fase = parseFloat((total_spodoptera_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_heliothinae_primeira_fase = parseFloat((total_heliothinae_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);

    //Segunda Fase
    var total_valores_segunda_fase = total_anticarsia_segunda_fase + total_chrysodeixis_segunda_fase + total_spodoptera_segunda_fase + total_heliothinae_segunda_fase;
    var porcentagem_anticarsia_segunda_fase = parseFloat((total_anticarsia_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_chrysodeixis_segunda_fase = parseFloat((total_chrysodeixis_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_spodoptera_segunda_fase = parseFloat((total_spodoptera_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_heliothinae_segunda_fase = parseFloat((total_heliothinae_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);


    //Terceira Fase
    var total_valores_terceira_fase = total_anticarsia_terceira_fase + total_chrysodeixis_terceira_fase + total_spodoptera_terceira_fase + total_heliothinae_terceira_fase;
    var porcentagem_anticarsia_terceira_fase = parseFloat((total_anticarsia_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_chrysodeixis_terceira_fase = parseFloat((total_chrysodeixis_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_spodoptera_terceira_fase = parseFloat((total_spodoptera_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_heliothinae_terceira_fase = parseFloat((total_heliothinae_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);

    // console.log("porcentagem primeira fase");
    // console.log(porcentagem_anticarsia_primeira_fase);
    // console.log(porcentagem_chrysodeixis_primeira_fase);
    // console.log(porcentagem_spodoptera_primeira_fase);
    // console.log(porcentagem_heliothinae_primeira_fase);
    // console.log("porcentagem segunda fase");
    // console.log(porcentagem_anticarsia_segunda_fase);
    // console.log(porcentagem_chrysodeixis_segunda_fase);
    // console.log(porcentagem_spodoptera_segunda_fase);
    // console.log(porcentagem_heliothinae_segunda_fase);
    // console.log("porcentagem terceira fase");
    // console.log(porcentagem_anticarsia_terceira_fase);
    // console.log(porcentagem_chrysodeixis_terceira_fase);
    // console.log(porcentagem_spodoptera_terceira_fase);
    // console.log(porcentagem_heliothinae_terceira_fase);


    //Gerar Gráfico de Barras Referente AO Paraná Soja Bt e Não Bt

    var objeto = [
        {
            "fase": "Primeira",
            "anticarsia": {
                "valor": porcentagem_anticarsia_primeira_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_primeira_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_primeira_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_primeira_fase
            }
        },
        {
            "fase": "Segunda",
            "anticarsia": {
                "valor": porcentagem_anticarsia_segunda_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_segunda_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_segunda_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_segunda_fase
            }
        },
        {
            "fase": "Terceira",
            "anticarsia": {
                "valor": porcentagem_anticarsia_terceira_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_terceira_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_terceira_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_terceira_fase
            }
        }
    ];

    //console.log(objeto);
    return objeto;

}

//Dividir o Json em Datas 0-30 dias 31-60 dias 61-150 dias de acordo com soja bt e não bt
function gerarDadosPorFaseETipoDeSoja(fase, bt) {
    var dados = JSON.parse(localStorage.getItem("dados"));

    if(bt == true){
        var dados_soja_bt = buscarSojaBt(dados);
        if(dados_soja_bt == ""){
            console.log("Dados de soja Bt não encontrados");
            return;
        }
    } else {
        var dados_soja_nao_bt = buscarSojaNBt(dados);
        if(dados_soja_nao_bt == ""){
            console.log("Dados de soja não Bt não encontrados");
            return;
        }
        //console.log(dados_soja_nao_bt);
    }
        


    var dados_primeira_fase = []; d1 = 0;
    var dados_segunda_fase = []; d2 = 0;
    var dados_terceira_fase = []; d3 = 0;

    if(bt == true){
        var aux_data = dados_soja_bt[0].samplePestSet[0].sampleDate;
    } else {
        var aux_data = dados_soja_nao_bt[0].samplePestSet[0].sampleDate;
    }

    aux_data = aux_data.split("/");
    var data_inicial = new Date(aux_data[1] + "-" + aux_data[0] + "-" + aux_data[2]);
    var data_final_primeira_fase = new Date();
    var data_final_segunda_fase = new Date();

    data_final_primeira_fase = addDays(data_inicial, 30);
    data_final_segunda_fase = addDays(data_final_primeira_fase, 30);

    // console.log("Date Inicio: " + data_inicial);
    // console.log("Date final 1: " + data_final_primeira_fase);
    // console.log("Date final 2: " + data_final_segunda_fase);

    if(bt == true){
        $.each(dados_soja_bt, function (analises, analise) {
            //console.log(analise);
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
    } else {
        $.each(dados_soja_nao_bt, function (analises, analise) {
            //console.log(analise);
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
    }

    if (fase == "primeira") {
        return dados_primeira_fase;
    } else if (fase == "segunda") {
        return dados_segunda_fase;
    } else if (fase == "terceira") {
        return dados_terceira_fase;
    } else { }

}


//Gera grafico de barras das analises de lagartas de soja não bt de todas as regiões do paraná
function gerarGraficoBarrasParanaSojaNBt() {
    var valores = gerarDadosGraficoBarrasParanaSojaNaoBt();
    
    //console.log(valores);
    var ctx = document.getElementById("bar-chart-sojanbt-pr").getContext('2d');
    var myChart = new Chart(document.getElementById("bar-chart-sojanbt-pr"), {
        type: 'bar',
        data: {
            labels: ["0-30", "30-60", "60-90 dias"],
            datasets: [
                {
                    label: "Anticarsia gemmatalis",
                    backgroundColor: "#41C6F3",
                    data: [valores[0].anticarsia.valor, valores[1].anticarsia.valor, valores[2].anticarsia.valor]
                }, {
                    label: "Chrysodeixis includens",
                    backgroundColor: "#017EC1",
                    data: [valores[0].chrysodeixis.valor, valores[1].chrysodeixis.valor, valores[2].chrysodeixis.valor]
                },
                {
                    label: "Spodoptera spp",
                    backgroundColor: "#FDB225",
                    data: [valores[0].spodoptera.valor, valores[1].spodoptera.valor, valores[2].spodoptera.valor]
                }, {
                    label: "Grupo Heliothinae",
                    backgroundColor: "#EF3D31",
                    data: [valores[0].heliothinae.valor, valores[1].heliothinae.valor, valores[2].heliothinae.valor]
                }
            ]
        },
        options: {
            title: {
                display: false,
                text: 'Título',
                fontSize: 15
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 14,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {

                        min: 0,
                        max: 100,
                        callback: function (value) { return value + "%" }
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    }
                }]
            }
        }
    });

}


//Geração de dados para o gráfico de barras referente a plantação de soja bt do Paraná
function gerarDadosGraficoBarrasParanaSojaBt() {
    var primeira_fase = gerarDadosPorFaseETipoDeSoja("primeira", true);
    var segunda_fase = gerarDadosPorFaseETipoDeSoja("segunda", true);
    var terceira_fase = gerarDadosPorFaseETipoDeSoja("terceira", true);
    var total_anticarsia_primeira_fase = 0; var num_anticaria_primeira_fase = 0;
    var total_chrysodeixis_primeira_fase = 0; var num_chrysodeixis_primeira_fase = 0;
    var total_spodoptera_primeira_fase = 0; var num_spodoptera_primeira_fase = 0;
    var total_heliothinae_primeira_fase = 0; var num_heliothinae_primeira_fase = 0;

    //Calculos referentes a primeira fase
    $.each(primeira_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_primeira_fase = total_anticarsia_primeira_fase + samplePest.value;
            num_anticaria_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_primeira_fase = total_chrysodeixis_primeira_fase + samplePest.value;
            num_chrysodeixis_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_primeira_fase = total_spodoptera_primeira_fase + samplePest.value;
            num_spodoptera_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_primeira_fase = total_heliothinae_primeira_fase + samplePest.value;
            num_heliothinae_primeira_fase++;

        } else {

        }
    });

    //Calculos referentes a segunda fase
    var total_anticarsia_segunda_fase = 0; var num_anticaria_segunda_fase = 0;
    var total_chrysodeixis_segunda_fase = 0; var num_chrysodeixis_segunda_fase = 0;
    var total_spodoptera_segunda_fase = 0; var num_spodoptera_segunda_fase = 0;
    var total_heliothinae_segunda_fase = 0; var num_heliothinae_segunda_fase = 0;

    $.each(segunda_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_segunda_fase = total_anticarsia_segunda_fase + samplePest.value;
            num_anticaria_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_segunda_fase = total_chrysodeixis_segunda_fase + samplePest.value;
            num_chrysodeixis_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_segunda_fase = total_spodoptera_segunda_fase + samplePest.value;
            num_spodoptera_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_segunda_fase = total_heliothinae_segunda_fase + samplePest.value;
            num_heliothinae_segunda_fase++;

        } else {

        }
    });



    //Calculos referentes a terceira fase
    var total_anticarsia_terceira_fase = 0; var num_anticaria_terceira_fase = 0;
    var total_chrysodeixis_terceira_fase = 0; var num_chrysodeixis_terceira_fase = 0;
    var total_spodoptera_terceira_fase = 0; var num_spodoptera_terceira_fase = 0;
    var total_heliothinae_terceira_fase = 0; var num_heliothinae_terceira_fase = 0;

    $.each(terceira_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Anticarsia gemmatalis") {

            total_anticarsia_terceira_fase = total_anticarsia_terceira_fase + samplePest.value;
            num_anticaria_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Chrysodeixis includens") {

            total_chrysodeixis_terceira_fase = total_chrysodeixis_terceira_fase + samplePest.value;
            num_chrysodeixis_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Spodoptera spp") {

            total_spodoptera_terceira_fase = total_spodoptera_terceira_fase + samplePest.value;
            num_spodoptera_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Grupo Heliothinae") {

            total_heliothinae_terceira_fase = total_heliothinae_terceira_fase + samplePest.value;
            num_heliothinae_terceira_fase++;

        } else {

        }
    });

    // console.log("Primeira Fase");
    // console.log("Total Anticaris: " + total_anticarsia_primeira_fase + " | Num: " + num_anticaria_primeira_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_primeira_fase + " |  Num: " + num_chrysodeixis_primeira_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_primeira_fase + " | Num: " + num_spodoptera_primeira_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_primeira_fase + " | Num: " + num_heliothinae_primeira_fase);

    // console.log("Segunda Fase");
    // console.log("Total Anticaris: " + total_anticarsia_segunda_fase + " | Num: " + num_anticaria_segunda_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_segunda_fase + " | Num: " + num_chrysodeixis_segunda_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_segunda_fase + " | Num: " + num_spodoptera_segunda_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_segunda_fase + " | Num: " + num_heliothinae_segunda_fase);

    // console.log("Terceira Fase");
    // console.log("Total Anticaris: " + total_anticarsia_terceira_fase + " | Num: " + num_anticaria_terceira_fase);
    // console.log("Total Chrysodeixis: " + total_chrysodeixis_terceira_fase + " | Num: " + num_chrysodeixis_terceira_fase);
    // console.log("Total Spodoptera: " + total_spodoptera_terceira_fase + " | Num: " + num_spodoptera_terceira_fase);
    // console.log("Total Heliothinae: " + total_heliothinae_terceira_fase + " | Num: " + num_heliothinae_terceira_fase);


    //Calcular os valores em porcentagem
    //Primeira Fase
    var total_valores_primeira_fase = total_anticarsia_primeira_fase + total_chrysodeixis_primeira_fase + total_spodoptera_primeira_fase + total_heliothinae_primeira_fase;
    var porcentagem_anticarsia_primeira_fase = parseFloat((total_anticarsia_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_chrysodeixis_primeira_fase = parseFloat((total_chrysodeixis_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_spodoptera_primeira_fase = parseFloat((total_spodoptera_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_heliothinae_primeira_fase = parseFloat((total_heliothinae_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);

    //Segunda Fase
    var total_valores_segunda_fase = total_anticarsia_segunda_fase + total_chrysodeixis_segunda_fase + total_spodoptera_segunda_fase + total_heliothinae_segunda_fase;
    var porcentagem_anticarsia_segunda_fase = parseFloat((total_anticarsia_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_chrysodeixis_segunda_fase = parseFloat((total_chrysodeixis_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_spodoptera_segunda_fase = parseFloat((total_spodoptera_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_heliothinae_segunda_fase = parseFloat((total_heliothinae_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);


    //Terceira Fase
    var total_valores_terceira_fase = total_anticarsia_terceira_fase + total_chrysodeixis_terceira_fase + total_spodoptera_terceira_fase + total_heliothinae_terceira_fase;
    var porcentagem_anticarsia_terceira_fase = parseFloat((total_anticarsia_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_chrysodeixis_terceira_fase = parseFloat((total_chrysodeixis_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_spodoptera_terceira_fase = parseFloat((total_spodoptera_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_heliothinae_terceira_fase = parseFloat((total_heliothinae_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);

    // console.log("porcentagem primeira fase");
    // console.log(porcentagem_anticarsia_primeira_fase);
    // console.log(porcentagem_chrysodeixis_primeira_fase);
    // console.log(porcentagem_spodoptera_primeira_fase);
    // console.log(porcentagem_heliothinae_primeira_fase);
    // console.log("porcentagem segunda fase");
    // console.log(porcentagem_anticarsia_segunda_fase);
    // console.log(porcentagem_chrysodeixis_segunda_fase);
    // console.log(porcentagem_spodoptera_segunda_fase);
    // console.log(porcentagem_heliothinae_segunda_fase);
    // console.log("porcentagem terceira fase");
    // console.log(porcentagem_anticarsia_terceira_fase);
    // console.log(porcentagem_chrysodeixis_terceira_fase);
    // console.log(porcentagem_spodoptera_terceira_fase);
    // console.log(porcentagem_heliothinae_terceira_fase);


    //Gerar Gráfico de Barras Referente AO Paraná Soja Bt e Não Bt

    var objeto = [
        {
            "fase": "Primeira",
            "anticarsia": {
                "valor": porcentagem_anticarsia_primeira_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_primeira_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_primeira_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_primeira_fase
            }
        },
        {
            "fase": "Segunda",
            "anticarsia": {
                "valor": porcentagem_anticarsia_segunda_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_segunda_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_segunda_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_segunda_fase
            }
        },
        {
            "fase": "Terceira",
            "anticarsia": {
                "valor": porcentagem_anticarsia_terceira_fase
            },
            "chrysodeixis": {
                "valor": porcentagem_chrysodeixis_terceira_fase
            },
            "spodoptera": {
                "valor": porcentagem_spodoptera_terceira_fase
            },
            "heliothinae": {
                "valor": porcentagem_heliothinae_terceira_fase
            }
        }
    ];

    //console.log(objeto);
    return objeto;

}

//Gera grafico de barras das analises de lagartas de soja bt de todas as regiões do paraná
function gerarGraficoBarrasParanaSojaBt() {
    var valores = gerarDadosGraficoBarrasParanaSojaBt();
    
    //console.log(valores);
    
    var ctx = document.getElementById("bar-chart-sojabt-pr").getContext('2d');
    var myChart = new Chart(document.getElementById("bar-chart-sojabt-pr"), {
        type: 'bar',
        data: {
            labels: ["0-30", "30-60", "60-90 dias"],
            datasets: [
                {
                    label: "Anticarsia gemmatalis",
                    backgroundColor: "#F63061",
                    data: [valores[0].anticarsia.valor, valores[1].anticarsia.valor, valores[2].anticarsia.valor]
                }, {
                    label: "Chrysodeixis includens",
                    backgroundColor: "#42478B",
                    data: [valores[0].chrysodeixis.valor, valores[1].chrysodeixis.valor, valores[2].chrysodeixis.valor]
                },
                {
                    label: "Spodoptera spp",
                    backgroundColor: "#1EBD94",
                    data: [valores[0].spodoptera.valor, valores[1].spodoptera.valor, valores[2].spodoptera.valor]
                }, {
                    label: "Grupo Heliothinae",
                    backgroundColor: "#F5B400",
                    data: [valores[0].heliothinae.valor, valores[1].heliothinae.valor, valores[2].heliothinae.valor]
                }
            ]
        },
        options: {
            title: {
                display: false,
                text: 'Título',
                fontSize: 15
            },
            legend: {
                position: 'bottom',
                labels: {
                    fontSize: 14,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {

                        min: 0,
                        max: 100,
                        callback: function (value) { return value + "%" }
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    }
                }]
            }
        }
    });

}

// Gerar gráfico de Pizza da distribuição de percevejos em todos os periodos do MIP no Paraná (bt e não bt).
function gerarGraficoPizzaDistribuicaoPercentualPercevejosNoParana() {

    var valor_nazera = 0;
    var valor_piezodorus = 0;
    var valor_euschistus = 0;
    var valor_dichelops = 0;
    var valor_outros = 0;

    var num_nazera = 0;
    var num_piezodorus = 0;
    var num_euschistus = 0;
    var num_dichelops = 0;
    var num_outros = 0;

    var soja_data =JSON.parse(localStorage.getItem("dados"));
    var percevejos = buscarPercevejos(soja_data);
    var cont = 0;

    $.each(percevejos, function (percevejo, tipo) {
        $.each(tipo, function (items, i) {
            if (cont == 0) {
                valor_nazera = valor_nazera + i.value;
                num_nazera++;
            } else if (cont == 1) {
                valor_piezodorus = valor_piezodorus + i.value;
                num_piezodorus++;
            } else if (cont == 2) {
                valor_euschistus = valor_euschistus + i.value;
                num_euschistus++;
            } else if (cont == 3){
                valor_dichelops = valor_dichelops + i.value;
                num_dichelops++;
            } else {
                valor_outros = valor_outros + i.value;
                num_outros++;
            }
        });
        cont++;
    });

    var total_percevejos = valor_nazera + valor_piezodorus + valor_euschistus + valor_dichelops + valor_outros;

    var percentagem_nazera = parseFloat((valor_nazera * 100) / total_percevejos).toFixed(2);
    var porcentagem_piezodorus = parseFloat((valor_piezodorus * 100) / total_percevejos).toFixed(2);
    var porcentagem_euschistus = parseFloat((valor_euschistus * 100) / total_percevejos).toFixed(2);
    var porcentagem_dichelops = parseFloat((valor_dichelops * 100) / total_percevejos).toFixed(2);
    var porcentagem_outros = parseFloat((valor_outros * 100) / total_percevejos).toFixed(2);

    // console.log(valor_nazera + " Num: " + num_nazera + " Porcentagem: " + percentagem_nazera);
    // console.log(valor_piezodorus + " Num: " + num_piezodorus + " Porcentagem: " + porcentagem_piezodorus);
    // console.log(valor_euschistus + " Num: " + num_euschistus + " Porcentagem: " + porcentagem_euschistus);
    // console.log(valor_dichelops + " Num H: " + num_dichelops + " Porcentagem: " + porcentagem_dichelops);
    // console.log(valor_outros + " Num O: " + num_outros + " Media: "  + porcentagem_outros);
    // console.log("Total Percevejos: " + total_percevejos);


    var ctx = document.getElementById("pizza-chart-soja-percevejos-total-pr").getContext('2d');
    var myChart = new Chart(document.getElementById("pizza-chart-soja-percevejos-total-pr"), {
        type: 'doughnut',
        data: {
            labels: ["Nazera viridula", "Piezodorus guildinii", "Euschistus heros", "Dichelops melacanthus", "Outros"],
            datasets: [{
                label: "Norte",
                backgroundColor: ["#D70000", "#FF540E", "#FFC801", "#93C702", "#22A2E1"],
                data: [percentagem_nazera, porcentagem_piezodorus, porcentagem_euschistus, porcentagem_dichelops, porcentagem_outros]
            }]
        },
        options: {
            title: {
                display: false,
                text: 'Titulo',
                fontSize: 15
            },
            legend: {
                position: 'left',
                labels: {
                    fontSize: 14,
                }
            }
        }
    });

}

$(function(){

    //Paraná
    gerarGraficoBarrasParana();
    gerarGraficoPizzaDistribuicaoPercentualLagartasNoParana();
    gerarGraficoPizzaDistribuicaoPercentual("Paraná", false);
    gerarGraficoPizzaDistribuicaoPercentual("Paraná", true);
    gerarGraficoBarrasParanaSojaNBt();
    gerarGraficoBarrasParanaSojaBt();

    //Percevejos
    gerarGraficoPizzaDistribuicaoPercentualPercevejosNoParana();

    //Extras, contadores, arrumar um local correto para colocar as funções depois
    totalareacultivada();
    numero_de_unidades_de_referencia();
    numero_de_analises_realizadas();

});



