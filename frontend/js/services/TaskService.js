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
        $http.get('https://sharedspace.herokuapp.com/getTasks?complete=true', { withCredentials: true }).then(function (response) {
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

