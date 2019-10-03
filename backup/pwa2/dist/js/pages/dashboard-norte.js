// /*
//  * Author: Abdullah A Almsaeed
//  * Date: 4 Jan 2014
//  * Description:
//  *      This is a demo file used only for the main dashboard (index.html)
//  **/

// $(function () {

//   'use strict';

//   // Make the dashboard widgets sortable Using jquery UI
//   $('.connectedSortable').sortable({
//     placeholder         : 'sort-highlight',
//     connectWith         : '.connectedSortable',
//     handle              : '.box-header, .nav-tabs',
//     forcePlaceholderSize: true,
//     zIndex              : 999999
//   });
//   $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');



//   var ctx = document.getElementById("bar-chart-grouped").getContext('2d');
//   var myChart = new Chart(document.getElementById("bar-chart-grouped"), {
//     type: 'bar',
//     data: {
//       labels: ["0-30", "30-60", "60-90 dias"],
//       datasets: [
//         {
//           label: "Anticarsia gemmatalis",
//           backgroundColor: "#1048A9",
//           data: [70.6, 88.8, 46.1]
//         }, {
//           label: "Chrysodexis includens",
//           backgroundColor: "#A6120A",
//           data: [19.6, 8.8, 40.4]
//         },
//         {
//           label: "Spodoptera spp",
//           backgroundColor: "#00B74A",
//           data: [3.6, 0.6, 11.5]
//         }, {
//           label: "Grupo Heliothinae",
//           backgroundColor: "#FFCB1E",
//           data: [6.2, 1.2, 2]
//         }
//       ]
//     },
//     options: {
//       title: {
//         display: false,
//         text: 'Título',
//         fontSize: 15
//       },
//       legend:{
//         position: 'bottom',
//         labels:{
//           fontSize: 14,
//         }
//       },
//       scales: {
//         yAxes: [{
//           ticks: {

//             min: 0,
//             max: 100,
//             callback: function (value) { return value + "%" }
//           },
//           scaleLabel: {
//             display: true,
//             labelString: "Percentage"
//           }
//         }]
//       }
//     }
//   });


//   var ctx = document.getElementById("pie-chart").getContext('2d');
//   var myChart = new Chart(document.getElementById("pie-chart"), {
//     type: 'pie',
//     data: {
//       labels: ["Anticarsia gemmatalis", "Chrysodexis includens", "Spodoptera spp", "Grupo Heliothinae"],
//       datasets: [{
//         label: "Population (millions)",
//         backgroundColor: ["#1048A9", "#A6120A", "#00B74A", "#FFCB1E"],
//         data: [68.5, 22.9, 5.2, 3.3]
//       }]
//     },
//     options: {
//       title: {
//         display: false,
//         text: 'Titulo',
//         fontSize: 15
//       },
//       legend:{
//         position: 'left',
//         labels:{
//           fontSize: 14,
//         }
//       }
//     }
//   });

//   var ctx = document.getElementById("bar-chart-soja-percevejos-total-pr").getContext('2d');
//   var myChart = new Chart(document.getElementById("bar-chart-soja-percevejos-total-pr"), {
//     type: 'pie',
//     data: {
//       labels: ["Nezara viridula", "Piezodorus guildinii", "Euschistus heros", "Dichelops melacanthus", "Outros"],
//       datasets: [{
//         label: "Population (millions)",
//         backgroundColor: ["#c00000", "#00b050", "#548235", "#5b9bd5", "#ffff00"],
//         data: [5.7, 0.8, 85, 6.9, 1.6]
//       }]
//     },
//     options: {  
//       title: {
//         display: true,
//         text: 'Titulo',
//         fontSize: 15
//       },
//       legend:{
//         position: 'left',
//         labels:{
//           fontSize: 14,
//           boxWidth: 40
//         }
//       }
//     }

//   });

// });
