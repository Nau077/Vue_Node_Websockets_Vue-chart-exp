const
    http = require("http"),
    express = require("express"),
    socketio = require("socket.io");
    cors = require('cors');

    const app = express();
    const server = http.createServer(app);
    const io = socketio(server);

const SERVER_PORT = 3300;

let dataTable = [
    {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
    },
    {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
    },
    ]

let dataChart = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
      ],
    dataOne : [40, 39, 10, 40, 39, 80, 40],
    dataTwo : [60, 55, 32, 10, 2, 12, 53]
}

io.on('connection', socket => {
    console.log('socket connected');
    io.emit('setDataTable', dataTable);

    io.emit('setDataChart', dataChart);
    
    socket.on('dataTableChange', msg => {
        dataTable = msg.data
        io.emit('setDataTable', dataTable );
      })
})

    app.use(cors())
    server.listen(SERVER_PORT, () => console.info(`Listening on port ${SERVER_PORT}.`));
