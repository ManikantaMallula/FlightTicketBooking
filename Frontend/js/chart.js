// Chart
$(document).ready(function(){
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
['Task', 'Hours per Day'],
['License Valid ', 15],
['License Expires Soon', 05],
['License Expired ', 15],
]);

var options = {
title: 'License Expiry Status',
pieHole: 0.8,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
chart.draw(data, options);
}

});

// Chart
$(document).ready(function(){
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
['Task', 'Hours per Day'],
['Inlimit Flights', 15],
['Overlimit flights', 05],
]);

var options = {
title: 'Pilot Performance',
pieHole: 0.8,
};

var chart = new google.visualization.PieChart(document.getElementById('donutchart2'));
chart.draw(data, options);
}

});

// Chart
$(document).ready(function(){
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
var data = google.visualization.arrayToDataTable([
['Task', 'Hours per Day'],
['Total Hours', 15],
['Hours Completed', 05],
['Hours Lef', 05],
]);

var options = {
title: 'Total Working hours',
pieHole: 0.8,
};

var chart = new google.visualization.PieChart(document.getElementById('WorkingHours'));
chart.draw(data, options);
}

});