function gerarCanvasGraficoPizza(dados) {
    //console.log(dados);
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

    var lagartas = buscarLagartas(dados);
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

    
    var ctx = document.getElementById("canvas-generator-graph-pizza").getContext('2d');
    var myChart = new Chart(document.getElementById("canvas-generator-graph-pizza"), {
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

function gerarCanvasGraficoBarras(dados) {
    var valores = generateDataForGraphBar(dados);
    //console.log(valores);
    var ctx = document.getElementById("canvas-generator-graph-bar").getContext('2d');
    var myChart = new Chart(document.getElementById("canvas-generator-graph-bar"), {
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

function gerarTabelaDados(dados){
    var valores = generateDataForGraphBar(dados);
    //valores[0].anticarsia.valor, valores[1].anticarsia.valor, valores[2].anticarsia.valor
    $('#anticaria-0-30').html(valores[0].anticarsia.valor + "%");
    $('#anticaria-31-60').html(valores[1].anticarsia.valor + "%");
    $('#anticaria-61-150').html(valores[2].anticarsia.valor + "%");
    $('#chrys-0-30').html(valores[0].chrysodeixis.valor + "%");
    $('#chrys-31-60').html(valores[1].chrysodeixis.valor + "%");
    $('#chrys-61-150').html(valores[2].chrysodeixis.valor + "%");
    $('#spo-0-30').html(valores[0].spodoptera.valor + "%");
    $('#spo-31-60').html(valores[1].spodoptera.valor + "%");
    $('#spo-61-150').html(valores[2].spodoptera.valor + "%");
    $('#helio-0-30').html(valores[0].heliothinae.valor + "%");
    $('#helio-31-60').html(valores[1].heliothinae.valor + "%");
    $('#helio-61-150').html(valores[2].heliothinae.valor + "%");
}

function gerarTabelaDadosPercevejos(dados){
    var valores = generateDataForGraphBarPercevejos(dados);
    //valores[0].anticarsia.valor, valores[1].anticarsia.valor, valores[2].anticarsia.valor
    $('#nazera-0-30').html(valores[0].nazera.valor + "%");
    $('#nazera-31-60').html(valores[1].nazera.valor + "%");
    $('#nazera-61-150').html(valores[2].nazera.valor + "%");
    $('#piezodorus-0-30').html(valores[0].piezoduros.valor + "%");
    $('#piezodorus-31-60').html(valores[1].piezoduros.valor + "%");
    $('#piezodorus-61-150').html(valores[2].piezoduros.valor + "%");
    $('#eusch-0-30').html(valores[0].euschistus.valor + "%");
    $('#eusch-31-60').html(valores[1].euschistus.valor + "%");
    $('#eusch-61-150').html(valores[2].euschistus.valor + "%");
    $('#dichelops-0-30').html(valores[0].dichelops.valor + "%");
    $('#dichelops-31-60').html(valores[1].dichelops.valor + "%");
    $('#dichelops-61-150').html(valores[2].dichelops.valor + "%");
    $('#otrs-0-30').html(valores[0].outros.valor + "%");
    $('#otrs-31-60').html(valores[1].outros.valor + "%");
    $('#otrs-61-150').html(valores[2].outros.valor + "%");
}

function gerarCanvasGraficoPizzaPercevejos(dados){
    //console.log(dados);
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

    var percevejos = buscarPercevejos(dados);
    var cont = 0;

    $.each(percevejos, function (praga, tipo) {
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

    var ctx = document.getElementById("canvas-generator-graph-pizza-percevejos").getContext('2d');
    var myChart = new Chart(document.getElementById("canvas-generator-graph-pizza-percevejos"), {
        type: 'doughnut',
        data: {
            labels: ["Nazera viridula", "Piezodorus guildinii", "Euschistus heros", "Dichelops melacanthus", "Outros"],
            datasets: [{
                label: "Paraná",
                backgroundColor: ["#C10250", "#03BCBF", "#D3D945", "#FCB040"],
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

function gerarCanvasGraficoBarrasPercevejos(dados){
    var valores = generateDataForGraphBarPercevejos(dados);
    //console.log(valores);
    var ctx = document.getElementById("canvas-generator-graph-bar-percevejos").getContext('2d');
    var myChart = new Chart(document.getElementById("canvas-generator-graph-bar-percevejos"), {
        type: 'bar',
        data: {
            labels: ["0-30", "30-60", "60-150 dias"],
            datasets: [
                {
                    label: "Nazera viridula",
                    backgroundColor: "#C10250",
                    data: [valores[0].nazera.valor, valores[1].nazera.valor, valores[2].nazera.valor]
                }, {
                    label: "Piezodorus guildinii",
                    backgroundColor: "#03BCBF",
                    data: [valores[0].piezoduros.valor, valores[1].piezoduros.valor, valores[2].piezoduros.valor]
                },
                {
                    label: "Euschistus heros",
                    backgroundColor: "#D3D945",
                    data: [valores[0].euschistus.valor, valores[1].euschistus.valor, valores[2].euschistus.valor]
                }, {
                    label: "Dichelops melacanthus",
                    backgroundColor: "#FCB040",
                    data: [valores[0].dichelops.valor, valores[1].dichelops.valor, valores[2].dichelops.valor]
                }, {
                    label: "Outros",
                    backgroundColor: "#b1b1b1",
                    data: [valores[0].outros.valor, valores[1].outros.valor, valores[2].outros.valor]
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

function HCgerarCanvasGraficoBarrasLagartas(dados){

    var valores = generateDataForGraphBar(dados);

    Highcharts.chart('canvas-generator-graph-bar', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['0-30', '31-60', '61-150'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'População (porcentagem)',
                align: 'middle'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            column: {
                pointPadding: 0.1,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00'],
        credits: {
            enabled: false
        },
        exporting: { enabled: false },
        series: [{
            name: 'Anticarsia gemmatalis',
            data: [parseFloat(valores[0].anticarsia.valor), parseFloat(valores[1].anticarsia.valor), parseFloat(valores[2].anticarsia.valor)]
        }, {
            name: 'Chrysodeixis includens',
            data: [parseFloat(valores[0].chrysodeixis.valor), parseFloat(valores[1].chrysodeixis.valor), parseFloat(valores[2].chrysodeixis.valor)]
        }, {
            name: 'Spodoptera spp',
            data: [parseFloat(valores[0].spodoptera.valor), parseFloat(valores[1].spodoptera.valor), parseFloat(valores[2].spodoptera.valor)]
        }, {
            name: 'Grupo Heliothinae',
            data: [parseFloat(valores[0].heliothinae.valor), parseFloat(valores[1].heliothinae.valor), parseFloat(valores[2].heliothinae.valor)]
        }]
    });
}

function HCgerarCanvasGraficoBarrasPercevejos(dados){

    var valores = generateDataForGraphBarPercevejos(dados);

    Highcharts.chart('canvas-generator-graph-bar-percevejos', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['0-30', '31-60', '61-150'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'População (porcentagem)',
                align: 'middle'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            column: {
                pointPadding: 0.1,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5'],
        credits: {
            enabled: false
        },
        exporting: { enabled: false },
        series: [{
            name: 'Nazera viridula',
            data: [parseFloat(valores[0].nazera.valor), parseFloat(valores[1].nazera.valor), parseFloat(valores[2].nazera.valor)]
        }, {
            name: 'Piezodorus guildinii',
            data: [parseFloat(valores[0].piezoduros.valor), parseFloat(valores[1].piezoduros.valor), parseFloat(valores[2].piezoduros.valor)]
        }, {
            name: 'Euschistus heros',
            data: [parseFloat(valores[0].euschistus.valor), parseFloat(valores[1].euschistus.valor), parseFloat(valores[2].euschistus.valor)]
        }, {
            name: 'Dichelops melacanthus',
            data: [parseFloat(valores[0].dichelops.valor), parseFloat(valores[1].dichelops.valor), parseFloat(valores[2].dichelops.valor)]
        }, {
            name: 'Outros',
            data: [parseFloat(valores[0].outros.valor), parseFloat(valores[1].outros.valor), parseFloat(valores[2].outros.valor)]
        }]
    });
}

function HCgerarCanvasGraficoPizzaLagartas(dados){
  
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

    var lagartas = buscarLagartas(dados);
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

    var graph_pizza_lagartas = Highcharts.chart('canvas-generator-graph-pizza', {
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
                }
        },
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00'],
        credits: {
            enabled: false
        },
        exporting: { enabled: false },
        series: [{
            name: 'Lagartas',
            colorByPoint: true,
            data: [{
                name: 'Anticarsia gemmatalis',
                y: parseFloat(porcentagem_anticarsia),
                sliced: true,
                selected: true
            }, {
                name: 'Chrysodeixis includens',
                y: parseFloat(porcentagem_chrysodeixis)
            }, {
                name: 'Spodoptera spp',
                y: parseFloat(porcentagem_spodoptera)
            }, {
                name: 'Grupo Heliothinae',
                y: parseFloat(porcentagem_heliothinae)
            }]
        }]
    });
}

function HCgerarCanvasGraficoPizzaPercevejos(dados){
  
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

    var percevejos = buscarPercevejos(dados);
    var cont = 0;

    $.each(percevejos, function (praga, tipo) {
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

    Highcharts.chart('canvas-generator-graph-pizza-percevejos', {
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
                }
        },
        colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5'],
        credits: {
            enabled: false
        },
        exporting: { enabled: false },
        series: [{
            name: 'Percevejos',
            colorByPoint: true,
            data: [{
                name: 'Nazera viridula',
                y: parseFloat(percentagem_nazera),
                sliced: true,
                selected: true
            }, {
                name: 'Piezodorus guildinii',
                y: parseFloat(porcentagem_piezodorus)
            }, {
                name: 'Euschistus heros',
                y: parseFloat(porcentagem_euschistus)
            }, {
                name: 'Dichelops melacanthus',
                y: parseFloat(porcentagem_dichelops)
            }, {
                name: 'Outros',
                y: parseFloat(porcentagem_outros)
            }]
        }]
    });
}

//Retorna dados filtrados a partir do filtro (front-end) que o usuário escolher.
function filtrar(){
    var ano_safra = $("#ano-da-safra").val();
    var selectedValues = $('#regio-filtro').val();
    norte = 0; noroeste = 0; sul = 0; sudoeste = 0; oeste = 0;
    $.each(selectedValues, function(valores, selecionado){
        if(selecionado === "Norte"){
            norte = 1;
        } else if (selecionado === "Noroeste"){
            noroeste = 1;
        } else if (selecionado === "Sul"){
            sul = 1;
        } else if (selecionado === "Sudoeste"){
            sudoeste = 1;
        } else if (selecionado === "Oeste"){
            oeste = 1;
        } else if (selecionado === "Todas"){
            norte = 1;
            noroeste = 1;
            sul = 1;
            sudoeste = 1;
            oeste = 1;  
        }
    });

    // if($('#regiao-norte-safra').is(':checked')){ var norte = 1;} else{ var norte = 0;}
    // if($('#regiao-noroeste-safra').is(':checked')){ var noroeste = 1;} else{ var noroeste = 0;}
    // if($('#regiao-sul-safra').is(':checked')){ var sul = 1;} else{ var sul = 0;}
    // if($('#regiao-sudoeste-safra').is(':checked')){ var sudoeste = 1;} else{ var sudoeste = 0;}
    // if($('#regiao-oeste-safra').is(':checked')){ var oeste = 1;} else{ var oeste = 0;}


    var municio = $("#municiopio-regiao").val();
    var produtor = $("#produtor-safra").val();
    var tecnico = $("#tecnico-safra").val();
    var id_ur = $("#id-ur").val();
    var cultivar = $("#cultivar-safra").val();
    var ferrugem = $("#ferrugem-soja").val();
    var tipo_soja = $("#tipo-soja").val();
    var data_inicial = $("#data-inicial-amostra").val();
    var data_final = $("#data-final-amostra").val();

    dados = filterByAno(prepare_ano(ano_safra), "");
    //console.log("Filtrou por ano " + ano_safra); 
    dados = filterByRegion(norte, noroeste, sul, sudoeste, oeste, dados);

    if(municio == "Todos"){
        //console.log("Filtrou por todos os municipios");
    } else {
        //console.log("Filtrou pelo municipio " + municio);
        dados = filterByCounty(municio,dados);
    }

    if(produtor == ""){
        //console.log("Filtrou por todos os produtores");
    } else {
        //console.log("Filtrou pelo produtor " + produtor);
        dados = filterByProducer(produtor,dados);
    }

    if(tecnico == "Todos"){
        //console.log("Filtrou por todos os tecnicos");
    } else {
        //console.log("Filtrou pelo tecnico " + tecnico);
        dados = filterByTechnical(tecnico,dados);
    }

    if(id_ur == ""){
        //console.log("Filtrou por todos as UR's");
    } else {
        //console.log("Filtrou pela UR com o ID " + id_ur);
        dados = filterByUr(id_ur,dados);
    }

    if(cultivar == "Todos"){
        //console.log("Filtrou por todos os cultivar");
    } else {
        //console.log("Filtrou pelo cultivar " + cultivar);
        dados = filterByCultivar(cultivar,dados);
    }

    if(ferrugem == "sim"){
        //console.log("Filtrou por cultivos com ferrugem");
        dados = filterByRust(1,dados);
    } else if (ferrugem == "nao") {
        //console.log("Filtrou por cultivos sem ferrugem");
        dados = filterByRust(0,dados);
    } else {
        //console.log("Filtrou por cultivos com ferrugem e sem ferrugem");
    }

    if(tipo_soja == "sim"){
        //console.log("Filtrou por cultivos com soja Bt");
        dados = filterByBt(1,dados);
    } else if (tipo_soja == "nao") {
        //console.log("Filtrou por cultivos sem soja Bt");
        dados = filterByBt(0,dados);
    } else {
        //console.log("Filtrou por cultivos com soja Bt e não Bt");
    }


    if(data_inicial == "" || data_final == ""){
        //console.log("Filtrou por todos os períodos");
    } else {
        dados = filterByPeriod(data_inicial, data_final, dados);
        //console.log("Filtrou por desde: " + data_inicial + " até: " + data_final);
    }

    //console.log(dados);
    
    // $.each(Chart.instances, function(i, obj){
    //     //console.log(obj.chart.canvas.id);
    //     if(obj.chart.canvas.id == "canvas-generator-graph-pizza"){
    //         obj.destroy();
    //     }
    //     else if(obj.chart.canvas.id == "canvas-generator-graph-bar"){
    //         obj.destroy();
    //     } else if (obj.chart.canvas.id == "canvas-generator-graph-pizza-percevejos"){
    //         obj.destroy();
    //     } else {

    //     }
    // });
    
    if(jQuery.isEmptyObject(dados[0])){
        //alert("Não foi possível realizar uma filtragem com os itens especificados");
        return;
    }
    
    //gerarCanvasGraficoPizza(dados);
    //gerarCanvasGraficoBarras(dados);
    gerarTabelaDados(dados);
    gerarTabelaDadosPercevejos(dados);
    //gerarCanvasGraficoPizzaPercevejos(dados);
    //gerarCanvasGraficoBarrasPercevejos(dados);

    HCgerarCanvasGraficoBarrasLagartas(dados);
    HCgerarCanvasGraficoBarrasPercevejos(dados);
    HCgerarCanvasGraficoPizzaLagartas(dados);
    HCgerarCanvasGraficoPizzaPercevejos(dados);
}



