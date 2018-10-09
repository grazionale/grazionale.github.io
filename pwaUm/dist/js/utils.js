function checarTodasRegioes(){
    if($('#regiao-todas-safra').is(':checked')){ 
        $( "#regiao-norte-safra" ).prop( "checked", true );
        $( "#regiao-noroeste-safra" ).prop( "checked", true );
        $( "#regiao-sul-safra" ).prop( "checked", true );
        $( "#regiao-sudoeste-safra" ).prop( "checked", true );
        $( "#regiao-oeste-safra" ).prop( "checked", true );
    } else {
        $( "#regiao-norte-safra" ).prop( "checked", false );
        $( "#regiao-noroeste-safra" ).prop( "checked", false );
        $( "#regiao-sul-safra" ).prop( "checked", false );
        $( "#regiao-sudoeste-safra" ).prop( "checked", false );
        $( "#regiao-oeste-safra" ).prop( "checked", false );
    }
}
