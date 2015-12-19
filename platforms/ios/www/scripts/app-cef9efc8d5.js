angular.module("ionic").run(["$templateCache",function(i){i.put("app/dashboard/dashboard.html",'<ion-view title="Dashboard"><ion-content><div class="row"><div class="col"><p>Progress {{ dashboard.status.progress }}%</p><p>Score {{ dashboard.status.score }}</p><div class="card"><div class="item item-divider">{{ dashboard.task.name }}</div><div class="item item-text-wrap">{{ dashboard.task.description }}</div></div></div></div></ion-content><div class="bar bar-footer"><div class="tabs tabs-icon-top"><a class="tab-item"><i class="icon ion-home"></i> Home</a> <a ui-sref="locations" class="tab-item"><i class="icon ion-star"></i> Favorites</a> <a class="tab-item"><i class="icon ion-gear-a"></i> Settings</a></div></div></ion-view>'),i.put("app/locations/locations.html",'<ion-view title="Locations"><ion-content><div class="list"><ion-list><a ng-class="{\'disabled\': !item.accessible}" class="item item-icon-left item-icon-right" ng-repeat="item in locations.list" ng-click="locations.selectLocation(item.id)"><i class="icon ion-ios-location-outline"></i> {{item.name}}<p>{{item.description}}</p><i class="icon" ng-class="{\'ion-ios-checkmark\': item.completed, \'ion-ios-arrow-right\': !item.completed}"></i></a></ion-list></div></ion-content></ion-view>'),i.put("app/login/login.html",'<ion-view title="LocalSense"><ion-content><div class="list card"><div class="row"><div class="col"><label class="item item-input"><span class="input-label">Game ID</span> <input type="text" ng-model="login.game"></label></div></div><div class="row"><div class="col"><label class="item item-input"><span class="input-label">Your Name</span> <input type="text" ng-model="login.name"></label></div></div><div class="row"><div class="col"><button class="button button-full button-positive" ng-click="login.submit()">Login</button></div></div></div></ion-content></ion-view>'),i.put("app/map/map.html",'<ion-view title="Map"><ion-content><div class="row"><div class="col"><h2>Map</h2></div></div></ion-content></ion-view>'),i.put("app/welcome/welcome.html",'<ion-view title="LocalSense"><ion-content><div class="row"><div class="col"><h2>Welcome</h2><p>Instructions</p></div></div><div class="row"><div class="col"><button class="button button-full button-positive" ng-click="welcome.beginGame()">Start the Game</button></div></div></ion-content></ion-view>')}]);
//# sourceMappingURL=../maps/scripts/app-cef9efc8d5.js.map