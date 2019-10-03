/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict';

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.box-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');



  


  // var ctx = document.getElementById("pie-chart").getContext('2d');
  // var myChart = new Chart(document.getElementById("pie-chart"), {
  //   type: 'pie',
  //   data: {
  //     labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
  //     datasets: [{
  //       label: "Population (millions)",
  //       backgroundColor: ["#1048A9", "#A6120A", "#00B74A", "#FFCB1E"],
  //       data: [74.7, 20.3, 2.3, 2.7]
  //     }]
  //   },
  //   options: {
  //     title: {
  //       display: false,
  //       text: 'Titulo',
  //       fontSize: 15
  //     },
  //     legend:{
  //       position: 'left',
  //       labels:{
  //         fontSize: 14,
  //       }
  //     }
  //   }
  // });




  // var ctx = document.getElementById("bar-chart-sojabt-pr").getContext('2d');
  // var myChart = new Chart(document.getElementById("bar-chart-sojabt-pr"), {
  //   type: 'bar',
  //   data: {
  //     labels: ["0-30", "30-60", "60-90 dias"],
  //     datasets: [
  //       {
  //         label: "Anticarsia gemmatalis",
  //         backgroundColor: "#4f82be",
  //         data: [73, 45, 22]
  //       }, {
  //         label: "Chrysodexis includens",
  //         backgroundColor: "#c1514f",
  //         data: [24, 38, 41]
  //       },
  //       {
  //         label: "Spodoptera spp",
  //         backgroundColor: "#9cbb5a",
  //         data: [1.8, 8.5, 27]
  //       }, {
  //         label: "Grupo Heliothinae",
  //         backgroundColor: "#8165A3",
  //         data: [0, 8, 8.3]
  //       }
  //     ]
  //   },
  //   options: {
  //     title: {
  //       display: false,
  //       text: 'Título',
  //       fontSize: 15
  //     },
  //     legend:{
  //       position: 'bottom',
  //       labels:{
  //         fontSize: 14,
  //       }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {

  //           min: 0,
  //           max: 100,
  //           callback: function (value) { return value + "%" }
  //         },
  //         scaleLabel: {
  //           display: true,
  //           labelString: "Percentage"
  //         }
  //       }]
  //     }
  //   }
  // });

  // var ctx = document.getElementById("bar-chart-sojabt-pr-total").getContext('2d');
  // var myChart = new Chart(document.getElementById("bar-chart-sojabt-pr-total"), {
  //   type: 'doughnut',
  //   data: {
  //     labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
  //     datasets: [{
  //       label: "Population (millions)",
  //       backgroundColor: ["#4f82be", "#c1514f", "#9cbb5a", "#8165A3"],
  //       data: [46.2, 33.6, 14.4, 5.8]
  //     }]
  //   },
  //   options: {  
  //     title: {
  //       display: true,
  //       text: 'Titulo',
  //       fontSize: 15
  //     },
  //     legend:{
  //       position: 'left',
  //       labels:{
  //         fontSize: 14,
  //         boxWidth: 40
  //       }
  //     }
  //   }

  // });

  // var ctx = document.getElementById("bar-chart-sojanbt-pr").getContext('2d');
  // var myChart = new Chart(document.getElementById("bar-chart-sojanbt-pr"), {
  //   type: 'bar',
  //   data: {
  //     labels: ["0-30", "30-60", "60-90 dias"],
  //     datasets: [
  //       {
  //         label: "Anticarsia gemmatalis",
  //         backgroundColor: "#4f82be",
  //         data: [82, 86, 68]
  //       }, {
  //         label: "Chrysodexis includens",
  //         backgroundColor: "#c1514f",
  //         data: [11, 10, 29]
  //       },
  //       {
  //         label: "Spodoptera spp",
  //         backgroundColor: "#9cbb5a",
  //         data: [1, 0, 2]
  //       }, {
  //         label: "Grupo Heliothinae",
  //         backgroundColor: "#8165A3",
  //         data: [3, 0.5, 2.4]
  //       }
  //     ]
  //   },
  //   options: {
  //     title: {
  //       display: false,
  //       text: 'Título',
  //       fontSize: 15
  //     },
  //     legend:{
  //       position: 'bottom',
  //       labels:{
  //         fontSize: 14,
  //       }
  //     },
  //     scales: {
  //       yAxes: [{
  //         ticks: {

  //           min: 0,
  //           max: 100,
  //           callback: function (value) { return value + "%" }
  //         },
  //         scaleLabel: {
  //           display: true,
  //           labelString: "Percentage"
  //         }
  //       }]
  //     }
  //   }
  // });

  // var ctx = document.getElementById("bar-chart-sojanbt-pr-total").getContext('2d');
  // var myChart = new Chart(document.getElementById("bar-chart-sojanbt-pr-total"), {
  //   type: 'doughnut',
  //   data: {
  //     labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
  //     datasets: [{
  //       label: "Population (millions)",
  //       backgroundColor: ["#4f82be", "#c1514f", "#9cbb5a", "#8165A3"],
  //       data: [78.7, 17.5, 1.3, 2.5]
  //     }]
  //   },
  //   options: {  
  //     title: {
  //       display: true,
  //       text: 'Titulo',
  //       fontSize: 15
  //     },
  //     legend:{
  //       position: 'left',
  //       labels:{
  //         fontSize: 14,
  //         boxWidth: 40
  //       }
  //     }
  //   }

  // });

  // var ctx = document.getElementById("bar-chart-soja-percevejos-total-pr").getContext('2d');
  // var myChart = new Chart(document.getElementById("bar-chart-soja-percevejos-total-pr"), {
  //   type: 'pie',
  //   data: {
  //     labels: ["Nezara viridula", "Piezodorus guildinii", "Euschistus heros", "Dichelops melacanthus", "Outros"],
  //     datasets: [{
  //       label: "Population (millions)",
  //       backgroundColor: ["#c00000", "#00b050", "#548235", "#5b9bd5", "#ffff00"],
  //       data: [72.2, 12.4, 4.4, 7, 4]
  //     }]
  //   },
  //   options: {  
  //     title: {
  //       display: true,
  //       text: 'Titulo',
  //       fontSize: 15
  //     },
  //     legend:{
  //       position: 'left',
  //       labels:{
  //         fontSize: 14,
  //         boxWidth: 40
  //       }
  //     }
  //   }

  // });
});

 