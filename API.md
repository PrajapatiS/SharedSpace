# Task view

## GET /getTasks?completed=[boolean]
Returns an array of tasks. If true- returns only complete items, if false, returns all tasks.

#### RESPONSE if true
```
[
  {
    id: <number>,
    taskName: <String>,
    complete: true,
    user: <String>,
    points: <number>
  },
]
```
#### RESPONSE if false
```
[
  {
    id: <number>,
    taskName: <String>,
    complete: false,
    user: null,
    points: <number>
  },
]
```
## POST /markComplete
Marking a task as complete and giving points to the user.
```
{
    taskID: <number>
    user: <String>
}
```
## GET /getUser?user=[user] (if user == 'all', return all users and their points)
Query String param of user.
Returns points the user has.

```
[
  {
    user: <String>,
    points: <number>
  },
]
```

