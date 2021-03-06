(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('SharedSpace', ['ui.router','chart.js','angularMoment']);

// require service
const services = [
    require('./services/TaskService'),
    require('./services/SignInService'),
    require('./services/LogoutService'),
    require('./services/LeaderBoardService'),
    require('./services/UserService'),

];

// loop all services
for (let i = 0; i < services.length; i++) {
    app.factory(services[i].name, services[i].func);
};

// require controllers
const controllers = [
    require('./controllers/TaskController'),
    require('./controllers/AllCompleteController'),
    require('./controllers/NewTaskController'),
    require('./controllers/SignInController'),
    require('./controllers/LogoutController'),
    require('./controllers/LeaderBoardController'),
    require('./controllers/UserController'),

];

// loop all controllers
for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
};

// require components
const components = [
    require('./components/task'),
    require('./components/newTask'),
    require('./components/allComplete'),
    require('./components/signin'),
    require('./components/logout'),
    require('./components/leaderboard'),
    require('./components/about'),
    require('./components/users'),
]

// loop all components
for (let i = 0; i < components.length; i++) {
    app.component(components[i].name, components[i].array);
}

app.config( function ($stateProvider, $urlRouterProvider) {

// default path should be to /signin because
// users cannot view tasks unless they are signed in

$urlRouterProvider.otherwise('/signin');
    
    $stateProvider

        .state('signin', {
            url: '/signin',
            component: "signin"
        })

        .state('tasks', {
            url: '/tasks',
            component: 'allTasks',
        })

         .state('leaderboard', {
            url: '/leaderboard',
            component: 'leaderboard',
        })
        
        .state('about', {
            url: '/about',
            component: 'about',
        })

        .state('allComplete', {
            url: '/allComplete',
            component: 'allComplete',
        })

        .state('logout', {
            url: '/logout',
            component: 'logout',
        })

        .state('newTask', {
            url: '/newTask',
            component: 'newTask',
        })

        .state('users', {
            url: '/users',
            component: 'users',
        });

       
});
},{"./components/about":2,"./components/allComplete":3,"./components/leaderboard":4,"./components/logout":5,"./components/newTask":6,"./components/signin":7,"./components/task":8,"./components/users":9,"./controllers/AllCompleteController":10,"./controllers/LeaderBoardController":11,"./controllers/LogoutController":12,"./controllers/NewTaskController":13,"./controllers/SignInController":14,"./controllers/TaskController":15,"./controllers/UserController":16,"./services/LeaderBoardService":17,"./services/LogoutService":18,"./services/SignInService":19,"./services/TaskService":20,"./services/UserService":21}],2:[function(require,module,exports){
module.exports = {
    name: "about",
    array: {
        templateUrl: "/controllers/about.html",
//        changing from /src/main/resources/templates/about.html for heroku support
        //          new path is /controllers/about.html
        
    }
}; 
},{}],3:[function(require,module,exports){
module.exports = {
    name: "allComplete",
    array: {
        templateUrl: "/controllers/allComplete.html",
        controller: "AllCompleteController",
    }
}
},{}],4:[function(require,module,exports){
module.exports={
    name: "leaderboard",
    array: {

        templateUrl: "/controllers/leaderboard.html",
//        changing from /src/main/resources/template/leaderboard.html for heroku support
//          new path is /controllers/leaderboard.html
        controller: "LeaderBoardController",

    }
}
},{}],5:[function(require,module,exports){
module.exports = {
    name: "logout",
    array: {
        templateUrl: "/controllers/logout.html",
//        changing from /src/main/resources/template/signin.html for heroku support
        //          new path is /controllers/signin.html
        controller: "LogoutController"
    }
}
},{}],6:[function(require,module,exports){
module.exports = {
    name: "newTask",
    array: {
        templateUrl: "/controllers/newTask.html",
//        changing from /src/main/resources/template/newTask.html for heroku support
        //          new path is /controllers/newTask.html
        controller: "NewTaskController",
    }
}; 
},{}],7:[function(require,module,exports){
module.exports = {
    name: "signin",
    array: {
        templateUrl: "/controllers/signin.html",
//        changing from /src/main/resources/template/signin.html for heroku support
        //          new path is /controllers/signin.html
        controller: "SignInController",
    }
}
},{}],8:[function(require,module,exports){
module.exports = {
    name: "allTasks",
    array: {
        templateUrl: "/controllers/allTasks.html",
//        changing from /src/main/resources/template/allTasks.html for heroku support
        //          new path is /controllers/allTasks.html
        controller: "TaskController"
    }
};
},{}],9:[function(require,module,exports){
module.exports = {
    name: "users",
    array: {
        templateUrl: "/controllers/users.html",
//        changing from /src/main/resources/template/users.html for heroku support
        //          new path is /controllers/users.html
        controller: "UserController",
    }
}; 
},{}],10:[function(require,module,exports){
module.exports = {
    name: "AllCompleteController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
    }
} 
},{}],11:[function(require,module,exports){
module.exports={
    name: "LeaderBoardController",
    func: function($scope, LeaderBoardService){
       $scope.leadUsers= LeaderBoardService.getLeadUsers();
       
        
        //console.log(labels.push);
        $scope.labels = LeaderBoardService.getUserName();
        $scope.series = ['Series A'];
        $scope.data = LeaderBoardService.getPointData();
        console.log($scope.labels);
        // $scope.data = data;
    //      [25, 59, 80, 81, 56, 55, 40]
    //     // [28, 48, 40, 19, 86, 27, 90]
    //   ];
    }
}
},{}],12:[function(require,module,exports){
module.exports = {
    name: "LogoutController",
    func: function ($scope, LogoutService) {
        LogoutService.logout();
    }
}
},{}],13:[function(require,module,exports){
module.exports = {
  name: "NewTaskController",
  func: function ($scope, TaskService, $state) {

    $scope.submit = function () {
      TaskService.newTask($scope.taskName, $scope.taskPoints).then(function() {
        $state.go('tasks');
      });
    }
  }
}
},{}],14:[function(require,module,exports){
module.exports = {
    name: "SignInController",
    func: function ($scope, SignInService) {

        $scope.go = function () {
            SignInService.showUsers($scope.user_name);
            console.log('$scope.user_name');
        }
    }
}
},{}],15:[function(require,module,exports){
module.exports = {
    name: "TaskController",
    func: function ($scope, TaskService) {
        $scope.tasks = TaskService.getTasks();
        $scope.markComplete = function(task) {
            TaskService.completeTask(task);
        }
        
    }
} 
},{}],16:[function(require,module,exports){
module.exports={
    name: "UserController",
    func: function($scope, UserService){
       // need to make service
       $scope.users = UserService.getUsers();
    }
}
},{}],17:[function(require,module,exports){
module.exports= {
    name: 'LeaderBoardService',
    func: function($http){
        let leadUsers=[];
        let userNames=[];
        let pointDatas=[];
        $http.get('https://sharedspace.herokuapp.com/userPoints').then(function(response){
            for(let i=0; i<response.data.length;i++){
                leadUsers.push({
                    id:response.data[i].id,
                    userName:response.data[i].userName,
                    points:response.data[i].points,
                });
                userNames.push(response.data[i].userName);
                pointDatas.push(response.data[i].points);
            }
        });
        return {
            getLeadUsers:function(){
                return leadUsers;
            },

            getUserName : function() {
                return userNames;
            },

            getPointData : function() {

                return pointDatas;
            }
        }
    }
}
},{}],18:[function(require,module,exports){
module.exports = {
    name: 'LogoutService',
    func: function($http) {
        
        return {
            logout: function(){
                $http.post('https://sharedspace.herokuapp.com/logout');
                console.log('sucussful logout');
            }
        }
    }   
}
},{}],19:[function(require,module,exports){
module.exports = {
    name: 'SignInService',
    func: function($http) {
        
        return {

            showUsers: function(user_name){
                //return users;
                let u_name = {
                    userName: user_name.toLowerCase(),
                };
                console.log(user_name);
                $http.post('https://sharedspace.herokuapp.com/login', u_name);
               
            }
        }
    }   
}
},{}],20:[function(require,module,exports){
module.exports = {
    name: 'TaskService',
    func: function ($http) {

        return {
            getTasks: function () {
                let tasks = [];

            $http.get('https://sharedspace.herokuapp.com/getTasks').then(function (response) {
                for (let i = 0; i < response.data.length; i++) {

                    tasks.push({
                        id: response.data[i].id,
                        taskName: response.data[i].taskName,
                        complete: response.data[i].complete,
                        points: response.data[i].points,
                        time: response.data[i].time,
                    })
                }
            });

        // retrieve tasks that have been completed (complete === true)
        $http.get('https://sharedspace.herokuapp.com/getTasks?complete=true').then(function (response) {
            for (let i = 0; i < response.data.length; i++) {

                let name;
                if (response.data[i].user === null ||
                    response.data[i].user === undefined ||
                    response.data[i].user === '') {
                    name = 'You';
                } else {
                    name = response.data[i].user;
                }
                
                tasks.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                    time: response.data[i].time,
                    user: name,
                })
            }
        });
                
                return tasks;
        },


            completeTask(task) {
                console.log(task.id);
                console.log(task.complete);
                
                $http.post('https://sharedspace.herokuapp.com/markComplete', task.id, { withCredentials: true }).then(function (response) {
                    console.log('post request submitted');
                    // completed.push(tasks.pop());
                    task.complete = true;
                    console.log(task.time);
                })
            },
            newTask(name, points) {
                let newTask = {
                    taskName: name.toLowerCase(),
                    points: points
                };
                //https://192.168.1.4:8080/addTask
                return $http.post('https://sharedspace.herokuapp.com/addTask', newTask, { withCredentials: true }).then(function (response) {
                   console.log('new task submitted');
                })
            },
            
        }
    },

}


},{}],21:[function(require,module,exports){
module.exports = {
  name: 'UserService',
  func: function ($http) {
    
    return {
      getUsers: function () {

        let users = [];
    $http.get('https://sharedspace.herokuapp.com/userPoints').then(function (response) {
      for (let i = 0; i < response.data.length; i++) {

        users.push({
          id: response.data[i].id,
          userName: response.data[i].userName,
          points: response.data[i].points,
        })
      }
    },
    )
        return users;
      }
    }
  }
};
},{}]},{},[1]);
