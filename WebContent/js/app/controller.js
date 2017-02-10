angular.module('myModule', [])
    .controller('myController', function($scope, $timeout) {
    	$scope.zoneId = ["Calle 85", "Salitre plaza", "Parque 93", "Calle 80", "Centro"];
    	$scope.jsonArray = [[
    	                {"zoneId":"Calle 85", "data":{"count":1,"speed":10,"time":1466781876681}},
    	                {"zoneId":"Salitre plaza", "data":{"count":2,"speed":8.5,"time":1466781876681}},
    	                {"zoneId":"Parque 93", "data":{"count":4,"speed":15,"time":1466781876681}},
    	                {"zoneId":"Calle 80", "data":{"count":3,"speed":13.5,"time":1466781876681}},
    	                {"zoneId":"Centro", "data":{"count":1,"speed": 9 ,"time":1466781876681}}
    	               ], 
    	               [
    	                {"zoneId":"Calle 85", "data":{"count":3,"speed":1,"time":1466781876681}},
    	                {"zoneId":"Salitre plaza", "data":{"count":1,"speed":3.5,"time":1466781876681}},
    	                {"zoneId":"Parque 93", "data":{"count":5,"speed":14,"time":1466781876681}},
    	                {"zoneId":"Calle 80", "data":{"count":2,"speed":11.5,"time":1466781876681}},
    	                {"zoneId":"Centro", "data":{"count":5,"speed": 12 ,"time":1466781876681}}
    	               ]];
    	
        $scope.chartUpdate = function () {
        	
        	var zone1 = [];
        	var zone2 = [];
        	var zone3 = [];
        	var zone4 = [];
        	var zone5 = [];
        	
        	$scope.zoneAvg = [0,0,0,0,0];
        	$scope.count = [0,0,0,0,0];
        	
        	
        	angular.forEach($scope.jsonArray, function(value, key){
				zone1.push(value[0].data.speed);
				zone2.push(value[1].data.speed);
				zone3.push(value[2].data.speed);
				zone4.push(value[3].data.speed);
				zone5.push(value[4].data.speed);
				
				$scope.zoneAvg[0] = $scope.zoneAvg[0] + value[0].data.speed;
				$scope.zoneAvg[1] = $scope.zoneAvg[1] + value[1].data.speed;
				$scope.zoneAvg[2] = $scope.zoneAvg[2] + value[2].data.speed;
				$scope.zoneAvg[3] = $scope.zoneAvg[3] + value[3].data.speed;
				$scope.zoneAvg[4] = $scope.zoneAvg[4] + value[4].data.speed;
				
				$scope.count[0] = value[0].data.count;
				$scope.count[1] = value[1].data.count;
				$scope.count[2] = value[2].data.count;
				$scope.count[3] = value[3].data.count;
				$scope.count[4] = value[4].data.count;
			});
        	
        	Highcharts.chart('graph', {
                title: {
                    text: 'Time',
                    x: -20 //center
                },
                subtitle: {
                    text: '',
                    x: -20
                },
                xAxis: {
                    categories: ['12.00am', '1.00am', '2.00am', '3.00am', '4.00am','5.00am', '6.00am', '7.00am', '8.00am', '9.00am', '10.00am', '11.00am', '12.00pm']
                },
                yAxis: {
                    title: {
                        text: 'Speed Zone'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: 'km'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: $scope.zoneId[0],
                    data: zone1
                }, {
                    name: $scope.zoneId[1],
                    data: zone2
                }, {
                    name: $scope.zoneId[2],
                    data: zone3
                }, {
                    name: $scope.zoneId[3],
                    data: zone4
                }, {
                    name: $scope.zoneId[4],
                    data: zone5
                }]
            });
        	
        	Highcharts.chart('chart2', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Count by zones'
                },
                	colors: ['#8bb9f8', '#8bb9f8', '#8bb9f8', '#8bb9f8', '#8bb9f8'],
                subtitle: {
                    text: ''
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: ''
                    }

                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
                },

                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    
                    data: [ {
                        name: '1',
                        y: $scope.count[0]
                    }, {
                        name: '2',
                        y: $scope.count[1]
                    }, {
                        name: '3',
                        y: $scope.count[2]
                    }, {
                        name: '4',
                        y: $scope.count[3]
                    }, {
                        name: '5',
                        y: $scope.count[4]
                    }]
                }]
            });
        	
        	var pieReview = new d3pie("pieChartReview", {
                "header": {
                    "title": {
                        "fontSize": 34,
                        "font": "courier"
                    },
                    "subtitle": {
                        "color": "#999999",
                        "fontSize": 10,
                        "font": "courier"
                    },
                    "location": "pie-center",
                    "titleSubtitlePadding": 10
                },
                "footer": {
                    "color": "#999999",
                    "fontSize": 10,
                    "font": "open sans",
                    "location": "bottom-left"
                },
                "size": {
                    "canvasHeight": 220,
                    "canvasWidth": 220,
                    "pieInnerRadius": "52%",
                    "pieOuterRadius": "68%"
                },
                "data": {
                    "content": [{
                        "label": "Completed in advance",
                        "value": $scope.zoneAvg[0],
                        "color": "#c25991"
                    }, {
                        "label": "Completed on time",
                        "value": $scope.zoneAvg[1],
                        "color": "#f9992e"
                    }, {
                        "label": "Completed Late",
                        "value": $scope.zoneAvg[2],
                        "color": "#a578f7"
                    }, {
                        "label": "Ongoing Tasks",
                        "value": $scope.zoneAvg[3],
                        "color": "#5ddfca"
                    }, {
                        "label": "Pending Tasks",
                        "value": $scope.zoneAvg[4],
                        "color": "#ff2a00"
                    }]
                },
                "labels": {
                    "outer": {
                        "format": "none",
                        "pieDistance": 0
                    },
                    "inner": {
                        "format": "value"
                    },
                    "mainLabel": {
                        "fontSize": 11
                    },
                    "percentage": {
                        "color": "#999999",
                        "fontSize": 11,
                        "decimalPlaces": 0
                    },
                    "value": {
                        "color": "#e6e6d8",
                        "fontSize": 11
                    },
                    "truncation": {
                        "enabled": true
                    }
                },
                "effects": {
                    "pullOutSegmentOnClick": {
                        "effect": "linear",
                        "speed": 400,
                        "size": 8
                    }
                },
                "misc": {
                    "colors": {
                        "segmentStroke": "#fff"
                    }
                },
                "callbacks": {}
            });
        	
        	if($scope.jsonArray.length < 13) {
	        	setTimeout(function() {
	        		var newData = [];
	        		for (var i=0; i<5; i++) {
	        			var data = {
	            				"count":Math.floor(Math.random() * 10),
	            				"speed":Math.floor(Math.random() * 90 + 10),
	            				"time":Math.floor(Math.random()*90000) + 10000
	            				};
	            		var zone = {
	            				"zoneId":$scope.zoneId[i],
	            				"data": data
	            				};
	        			newData.push(zone);
	    		    }
	        		$scope.jsonArray.push(newData);
	        		var myEl = angular.element(document.querySelector('#pieChartReview'));
	        	    myEl.empty();
	        		$scope.chartUpdate();
	    		}, 60000);
        	}
        }
        
        $scope.chartUpdate();
    });