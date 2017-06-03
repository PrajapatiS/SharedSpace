module.exports = {
    name: 'TaskService',
    func: function ($http) {
        let tasks = [];

        $http.get('https://sharedspace.herokuapp.com/getTasks').then(function (response) {
            for (let i = 0; i < response.data.length; i++) {

                tasks.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                    // n.b. we don't care about WHO makes the task - just who completes it
                    // user: {
                    //     id: response.data[i].user.id,
                    //     userName: response.data[i].user.userName,
                    //     points: response.data[i].user.points,
                    // }
                })
            }
        });

        let completed = [];
        
        // retrieve tasks that have been completed (complete === true)
        $http.get('https://sharedspace.herokuapp.com/getTasks?complete=true').then(function (response) {
            for (let i = 0; i < response.data.length; i++) {

                completed.push({
                    id: response.data[i].id,
                    taskName: response.data[i].taskName,
                    complete: response.data[i].complete,
                    points: response.data[i].points,
                })
            }
        });


        return {
            getTasks: function () {
                return tasks;
            },
            completeTask(task) {
                $http.post('https://sharedspace.herokuapp.com/markComplete', task.id).then(function (response) {
                    console.log('post request submitted');
                })
            },
            getComplete: function () {
                console.log('get complete run');
                return completed;
            },
        }
    },

}

