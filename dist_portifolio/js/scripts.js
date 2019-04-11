function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}


// Open mobile menu

function open_menu(){
    document.getElementsByTagName('header')[0].classList.add("active");
    document.getElementsByTagName('body')[0].classList.add("active");
}

function close_menu(){
    document.getElementsByTagName('header')[0].classList.remove("active");
    document.getElementsByTagName('body')[0].classList.remove("active");
}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://demo8378319.mockable.io/empresas');
xhr.onload = function() {
    if (xhr.status === 200) {
        data = JSON.parse(xhr.response);
        for(i = 0 ; i < data.length ; i++){
            document.getElementById("experience").innerHTML += 
            '<div class="row">'+
                '<div class="col-md-12">'+
                    '<div id="experience-timeline">'+
                        '<div class="vtimeline-content">'+
                        '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div><h3>' + data[i]["empresa"] + '</h3>' +
                        '<h4>' + data[i]["cargo"] + '</h4>' +
                        '<p>' +
                            data[i]['atividades']
                        '</p>' +
                        '</div>'+
                    '</div>' +
                '</div>' +
            '</div>';
        }
    }
    else {
        console.log('A requisição falhou ' + xhr.status);
    }
};
xhr.send();

function changeColorTheme(){
    //document.getElementById('theme').
    if(document.querySelector("link[href='dist_portifolio/css/styles.css']") == null){
        document.querySelector("link[href='dist_portifolio/css/stylesDark.css']").href = "dist_portifolio/css/styles.css";
        document.getElementById('back-btn-cor').style.background = "#000";
        document.getElementById('back-btn-cor-plus').style.background = "#000";
        document.getElementById('back-btn-cor-mine').style.background = "#000";
        document.getElementById('back-btn-cor').style.color = "#fff";
        document.getElementById('lead').style.backgroundImage = "url('dist_portifolio/images/background1.jpg')";
        //url(../images/background1.jpg);
    } else {
        document.querySelector("link[href='dist_portifolio/css/styles.css']").href = "dist_portifolio/css/stylesDark.css";
        document.getElementById('back-btn-cor').style.background = "#FD1141";
        document.getElementById('back-btn-cor-plus').style.background = "#FD1141";
        document.getElementById('back-btn-cor-mine').style.background = "#FD1141";
        document.getElementById('back-btn-cor-plus').style.color = "#fff";
        document.getElementById('back-btn-cor-mine').style.color = "#fff";
        document.getElementById('back-btn-cor').style.color = "#fff";
        document.getElementById('lead').style.backgroundImage = "url('dist_portifolio/images/background2.jpg')";
    }
}

var skills = new XMLHttpRequest();
skills.open('GET', 'http://demo8378319.mockable.io/skills');
skills.onload = function() {
    if (skills.status === 200) {
        data = JSON.parse(skills.response);
        for(i = 0 ; i < data.length ; i++){
            document.getElementById("list-skills").innerHTML += '<li>' + data[i]['skill'] + '</li>';
        }
    }
    else {
        console.log('A requisição falhou ' + skills.status);
    }
};
skills.send();


function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
      document.body.style.fontSize = "1.5em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
}
