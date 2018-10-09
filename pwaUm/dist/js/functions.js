//Dividir o Json em Datas 0-30 dias 31-60 dias 61-150 dias
//Parâmetros: "primeira", "segunda", ou "terceira", além de passar ou não o objeto dados
function generateDataFase(fase, dados) {

    data = dados;
    
    var dados_primeira_fase = []; d1 = 0;
    var dados_segunda_fase = []; d2 = 0;
    var dados_terceira_fase = []; d3 = 0;

    var data_final_primeira_fase = new Date();
    var data_final_segunda_fase = new Date();

    $.each(data, function (analises, analise) {
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

function generateDataForGraphBar(dados) {
    var primeira_fase = generateDataFase("primeira", dados);
    var segunda_fase = generateDataFase("segunda", dados);
    var terceira_fase = generateDataFase("terceira", dados);
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

function generateDataForGraphBarPercevejos(dados) {
    var primeira_fase = generateDataFase("primeira", dados);
    var segunda_fase = generateDataFase("segunda", dados);
    var terceira_fase = generateDataFase("terceira", dados);
    var total_nazera_primeira_fase = 0; var num_nazera_primeira_fase = 0;
    var total_piezoduros_primeira_fase = 0; var num_piezoduros_primeira_fase = 0;
    var total_euschistus_primeira_fase = 0; var num_euschistus_primeira_fase = 0;
    var total_dichelops_primeira_fase = 0; var num_dichelops_primeira_fase = 0;
    var total_outros_primeira_fase = 0; var num_outros_primeira_fase = 0; 

    //Calculos referentes a primeira fase
    $.each(primeira_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Nazera viridula") {

            total_nazera_primeira_fase = total_nazera_primeira_fase + samplePest.value;
            num_nazera_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Piezodorus guildinii") {

            total_piezoduros_primeira_fase = total_piezoduros_primeira_fase + samplePest.value;
            num_piezoduros_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Euschistus heros") {

            total_euschistus_primeira_fase = total_euschistus_primeira_fase + samplePest.value;
            num_euschistus_primeira_fase++;

        } else if (samplePest.pest.scientificName == "Euschistus heros") {

            total_dichelops_primeira_fase = total_dichelops_primeira_fase + samplePest.value;
            num_dichelops_primeira_fase++;

        } else if(samplePest.pest.scientificName == "Outros") {
            total_outros_primeira_fase = total_outros_primeira_fase + samplePest.value;
            num_outros_primeira_fase++;
        } else{

        }
    });

    //Calculos referentes a segunda fase
    var total_nazera_segunda_fase = 0; var num_nazera_segunda_fase = 0;
    var total_piezoduros_segunda_fase = 0; var num_piezoduros_segunda_fase = 0;
    var total_euschistus_segunda_fase = 0; var num_euschistus_segunda_fase = 0;
    var total_dichelops_segunda_fase = 0; var num_dichelops_segunda_fase = 0;
    var total_outros_segunda_fase = 0; var num_outros_segunda_fase = 0;

    $.each(segunda_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Nazera viridula") {

            total_nazera_segunda_fase = total_nazera_segunda_fase + samplePest.value;
            num_nazera_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Piezodorus guildinii") {

            total_piezoduros_segunda_fase = total_piezoduros_segunda_fase + samplePest.value;
            num_piezoduros_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Euschistus heros") {

            total_euschistus_segunda_fase = total_euschistus_segunda_fase + samplePest.value;
            num_euschistus_segunda_fase++;

        } else if (samplePest.pest.scientificName == "Euschistus heros") {

            total_dichelops_segunda_fase = total_dichelops_segunda_fase + samplePest.value;
            num_dichelops_segunda_fase++;

        } else if(samplePest.pest.scientificName == "Outros"){
            total_outros_segunda_fase = total_outros_segunda_fase + samplePest.value;
            num_outros_segunda_fase++;
        } else {

        }
    });



    //Calculos referentes a terceira fase
    var total_nazera_terceira_fase = 0; var num_nazera_terceira_fase = 0;
    var total_piezoduros_terceira_fase = 0; var num_piezoduros_terceira_fase = 0;
    var total_euschistus_terceira_fase = 0; var num_euschistus_terceira_fase = 0;
    var total_dichelops_terceira_fase = 0; var num_dichelops_terceira_fase = 0;
    var total_outros_terceira_fase = 0; var num_outros_terceira_fase = 0;

    $.each(terceira_fase, function (samplePestSet, samplePest) {
        //console.log(samplePest);
        if (samplePest.pest.scientificName == "Nazera viridula") {

            total_nazera_terceira_fase = total_nazera_terceira_fase + samplePest.value;
            num_nazera_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Piezodorus guildinii") {

            total_piezoduros_terceira_fase = total_piezoduros_terceira_fase + samplePest.value;
            num_piezoduros_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Euschistus heros") {

            total_euschistus_terceira_fase = total_euschistus_terceira_fase + samplePest.value;
            num_euschistus_terceira_fase++;

        } else if (samplePest.pest.scientificName == "Euschistus heros") {

            total_dichelops_terceira_fase = total_dichelops_terceira_fase + samplePest.value;
            num_dichelops_terceira_fase++;

        } else if(samplePest.pest.scientificName == "Outros") {
            total_outros_terceira_fase = total_outros_terceira_fase + samplePest.value;
            num_outros_terceira_fase++;
        } else {

        }
    });

    //Calcular os valores em porcentagem
    //Primeira Fase
    var total_valores_primeira_fase = total_nazera_primeira_fase + total_piezoduros_primeira_fase + total_euschistus_primeira_fase + total_dichelops_primeira_fase + total_outros_primeira_fase;
    var porcentagem_nazera_primeira_fase = parseFloat((total_nazera_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_piezoduros_primeira_fase = parseFloat((total_piezoduros_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_euschistus_primeira_fase = parseFloat((total_euschistus_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_dichelops_primeira_fase = parseFloat((total_dichelops_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);
    var porcentagem_outros_primeira_fase = parseFloat((total_outros_primeira_fase * 100) / total_valores_primeira_fase).toFixed(2);

    //Segunda Fase
    var total_valores_segunda_fase = total_nazera_segunda_fase + total_piezoduros_segunda_fase + total_euschistus_segunda_fase + total_dichelops_segunda_fase + total_outros_segunda_fase;
    var porcentagem_nazera_segunda_fase = parseFloat((total_nazera_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_piezoduros_segunda_fase = parseFloat((total_piezoduros_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_euschistus_segunda_fase = parseFloat((total_euschistus_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_dichelops_segunda_fase = parseFloat((total_dichelops_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);
    var porcentagem_outros_segunda_fase = parseFloat((total_outros_segunda_fase * 100) / total_valores_segunda_fase).toFixed(2);


    //Terceira Fase
    var total_valores_terceira_fase = total_nazera_terceira_fase + total_piezoduros_terceira_fase + total_euschistus_terceira_fase + total_dichelops_terceira_fase + total_outros_terceira_fase;
    var porcentagem_nazera_terceira_fase = parseFloat((total_nazera_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_piezoduros_terceira_fase = parseFloat((total_piezoduros_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_euschistus_terceira_fase = parseFloat((total_euschistus_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_dichelops_terceira_fase = parseFloat((total_dichelops_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);
    var porcentagem_outros_terceira_fase = parseFloat((total_outros_terceira_fase * 100) / total_valores_terceira_fase).toFixed(2);


    var objeto = [
        {
            "fase": "Primeira",
            "nazera": {
                "valor": porcentagem_nazera_primeira_fase
            },
            "piezoduros": {
                "valor": porcentagem_piezoduros_primeira_fase
            },
            "euschistus": {
                "valor": porcentagem_euschistus_primeira_fase
            },
            "dichelops": {
                "valor": porcentagem_dichelops_primeira_fase
            },
            "outros": {
                "valor": porcentagem_outros_primeira_fase
            }
        },
        {
            "fase": "Segunda",
            "nazera": {
                "valor": porcentagem_nazera_segunda_fase
            },
            "piezoduros": {
                "valor": porcentagem_piezoduros_segunda_fase
            },
            "euschistus": {
                "valor": porcentagem_euschistus_segunda_fase
            },
            "dichelops": {
                "valor": porcentagem_dichelops_segunda_fase
            },
            "outros": {
                "valor": porcentagem_outros_segunda_fase
            }
        },
        {
            "fase": "Terceira",
            "nazera": {
                "valor": porcentagem_nazera_terceira_fase
            },
            "piezoduros": {
                "valor": porcentagem_piezoduros_terceira_fase
            },
            "euschistus": {
                "valor": porcentagem_euschistus_terceira_fase
            },
            "dichelops": {
                "valor": porcentagem_dichelops_terceira_fase
            },
            "outros": {
                "valor": porcentagem_outros_terceira_fase
            }
        }
    ];

    //console.log(objeto);
    return objeto;

}
