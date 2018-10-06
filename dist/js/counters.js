function totalareacultivada(){
    var dados = JSON.parse(localStorage.getItem("dados"));
    var total_area_plantada = 0;

    $.each(dados, function(analises, analise){
        total_area_plantada = total_area_plantada + analise.surveyField.sizeData.totalPlantedArea;
    });

    $("#total_area_cultivada").text(total_area_plantada + " ha");
}


function numero_de_unidades_de_referencia(){
    var dados = JSON.parse(localStorage.getItem("dados"));
    var num_urs = Object.keys(dados).length;

    $("#num_un_ref").text(num_urs);
}


function numero_de_analises_realizadas(){
    var dados = JSON.parse(localStorage.getItem("dados"));
    var num_analises = 0;

    $.each(dados, function(analises, analise){
        num_analises = num_analises + analise.samplePestSet.length;
    });


    $("#num_analises").text(num_analises);
    //console.log(num_analises);
}