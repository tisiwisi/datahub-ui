// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

var jsonfile = {
  "source_id": 10,
  "source_name": "test",
  "description": null,
  "battery_level": 0.85,
  "gps_fix": false,
  "online": false,
  "reading_points": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            100,
            0
          ]
        },
        "properties": {
          Temperature: 12.5,
          Timestamp: "2020-08-18 09:59:26"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            100,
            0
          ]
        },
        "properties": {
          Noise: 100,
          Timestamp: "2020-08-18 09:59:26"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            100,
            0
          ]
        },
        "properties": {
          Temperature: 24.5,
          Timestamp: "2020-08-18 10:59:26"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            100,
            0
          ]
        },
        "properties": {
          Temperature: 48.5,
          Timestamp: "2020-08-21 15:11:26"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            100,
            0
          ]
        },
        "properties": {
          Noise: 100,
          Timestamp: "2020-08-21 15:11:26"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            16.506271,
            48.226822
          ]
        },
        "properties": {
          Temperature: 13,
          Timestamp: "2020-08-23 23:27:00"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            100,
            0
          ]
        },
        "properties": {
          Noise: 100,
          Timestamp: "2020-08-31 10:59:26"
        }
      }
    ]
  }
};


var data_temp;
var labels = jsonfile.reading_points.features.map(function(e){
  return e.properties.Timestamp;
});
var data_temp = jsonfile.reading_points.features.map(function(e){
  return e.properties.Temperature;
});

var data_noise = jsonfile.reading_points.features.map(function(e){
  return e.properties.Noise;
});

var ctx = document.getElementById('myChart').getContext('2d');


var config = {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Temperature (C)',
      data: data_temp,
      backgroundColor: "red",
      borderColor: "red",
      fill: false,
    }, {
      label: 'Noise (dB)',
      data: data_noise,
      backgroundColor: "blue",
      borderColor: "blue",
      fill: false,
    }]
  },
  options: {
    spanGaps: true,
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value'
        }
      }]
    }
  }
};
var chart = new Chart(ctx, config);



