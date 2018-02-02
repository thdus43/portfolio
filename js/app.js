var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "서울시 금천구 가산디지털2로 115 대륭테크노타운3차";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "박소연";
		$rootScope.name2 = "";
	});
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/team.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/TeamImpression.jpg",
			 type : true, 
			 contents: "교육기관에서 처음으로 제작해본 spring기반 팀 프로젝트 입니다. 두 달 동안 제작했는데 개발 초기 팀원들과의 충분한 회의에도 불과하고 서로 조율 해야 할 부분이 훨씬 많았으며 도중에 추가되는 기능과 함께 처음 기획했던 계획에 차질이 생겨 프로젝트가 난잡해지고, 많은 수정과 시행착오 그리고 테스트를 거쳐 제작하였습니다. 팀원 모두 직접 교육기관에서 처음 경험해본 팀 프로젝트였기 때문에 많이 어설프고 헤맸지만 후반부에는 서로와의 의견조율과 함께 도와주고 타협하며 무사히 마칠 수 있었습니다. 이번 기획을 통해 다음에는 같은 실수를 하지 않도록 주의 할 것이며 힘들었던 만큼 값진 경험을 한 것 같습니다."
			},{
			 path: "portfolio/",
			 url : "personal/personal.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/PersonalImpression.JPG",
			 type : false,
			 contents: "팀 프로젝트 이후에 개발한 spring기반 웹 사이트입니다. 원래는 좀 더 거창한 프로젝트를 생각하고 있었지만 재량에 맞춰 제작했기 때문에 범위를 줄여 제작 한 것이 아쉬움이 큽니다. 그래도, 이전에 팀 프로젝트로 앞서 경험 해본 덕분인지 처음보다 많이 헤매이지 않았으며 팀 프로젝트 때 다른 파트를 맡았던 조원들의 코드를 좀 더 곱씹어보고 되돌아 볼 수 있는 시간을 가졌으며, 개인이 자기가 원하는 홈페이지를 직접 제작하고 구현 해봤다는 점에서 성취감과 함께 장기적으로 저에게 많은 도움과 기억에 남을 것 같습니다."
			},{
			 path: "media/",
			 url : "personal.mp4", 
			 title: "Personal",
			 name: "Media",
			 img: "personal/PersonalMedia.JPG",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});