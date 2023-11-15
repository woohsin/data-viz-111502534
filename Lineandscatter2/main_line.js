let myGraph_line = document.getElementById('myGraph_line');

let trace_yunlin = {};
trace_yunlin.mode = "markers+lines";
trace_yunlin.type = "scatter";
trace_yunlin.name = "雲林";
trace_yunlin.marker = {
    size: 10
}
trace_yunlin.x = [];
trace_yunlin.y = [];
trace_yunlin.text = [];
trace_yunlin.textposition = "bottom center";      //字的位置
trace_yunlin.textfont = {
    size:15
};

let trace_middleli = {};
trace_middleli.mode = "lines+markers";
trace_middleli.type = "scatter";
trace_middleli.name = "中壢";
trace_middleli.marker = {
    size: 10
}
trace_middleli.x =[];
trace_middleli.y =[];
trace_middleli.text = [];
trace_middleli.textposition = "bottom center";      //字的位置
trace_middleli.textfont = { 
    size:15
};

let trace_pindon = {};
trace_pindon.mode = "lines+markers";
trace_pindon.type = "scatter";
trace_pindon.name = "屏東";
trace_pindon.marker = {
    size:10
}
trace_pindon.x =[];
trace_pindon.y =[];
trace_pindon.text = [];
trace_pindon.textposition = "bottom center";      //字的位置
trace_pindon.textfont = { 
    size:15
};

for(let i = 0; i < middleli.length; i++){
    trace_middleli.x[i] = middleli[i][0];
    trace_middleli.y[i] = middleli[i][1];
    trace_middleli.text[i] = middleli[i][2];
}

for(let i = 0; i < pindon.length; i++){
    trace_pindon.x[i] = pindon[i][0];
    trace_pindon.y[i] = pindon[i][1];
    trace_pindon.text[i] = pindon[i][2];
}
for(let i = 0; i < yunlin.length; i++){
    trace_yunlin.x[i] = yunlin[i][0];
    trace_yunlin.y[i] = yunlin[i][1];
    trace_yunlin.text[i] = yunlin[i][2];
}

trace_yunlin.visible = true;
trace_middleli.visible = false;
trace_middleli.line = {
    color: 'red'
};
trace_pindon.visible = false;
trace_pindon.line = {
    color: 'green'
};

let data_line = [];
data_line.push(trace_middleli);
data_line.push(trace_yunlin);
data_line.push(trace_pindon);

let layout_line = {
    margin: {
        t: 50
    },
    xaxis: {
        range: [0, 24]
    },
    yaxis: {
        range: [10, 30]
    },
    title: '北中南一天中的氣溫',
    updatemenus: [
        {
            y: 1.2,
            x: 0.3,
            yanchor: 'top',
            buttons: [
                {
                    method: 'restyle',
                    args: ['visible', [false, true, false]],
                    label: '中壢'
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, false, false]],
                    label: '雲林'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true]],
                    label: '屏東'
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, true, true]],
                    label: 'Display All'
                }
            ]
        }
    ]
};


Plotly.newPlot(myGraph_line, data_line, layout_line);
