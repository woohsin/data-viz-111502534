let myGraph_bar = document.getElementById('myGraph_bar');

let trace_domestic_box_office = {};
trace_domestic_box_office.type = "bar";
trace_domestic_box_office.name ="domestic_box_office";
trace_domestic_box_office.x =[];
trace_domestic_box_office.y =[];

let trace_global_box_office = {};
trace_global_box_office.type = "bar";
trace_global_box_office.name ="global_box_office"
trace_global_box_office.x = [];
trace_global_box_office.y = [];

for(let i=0; i<global_box_office.length; i++) {
    trace_global_box_office.x[i] = global_box_office[i]['name'];
    trace_global_box_office.y[i] = global_box_office[i]['count'];
}

for(let i=0;i<domestic_box_office.length;i++){
    trace_domestic_box_office.x[i] = domestic_box_office[i]['name'];
    trace_domestic_box_office.y[i] = domestic_box_office[i]['count'];
}

let data_bar = [];

data_bar.push(trace_domestic_box_office);
data_bar.push(trace_global_box_office);

let barlayout = {
    margin:{
        t:50
    },
    title: 'Domestic & Global box office of top 10 movies in taiwan',
    updatemenus: [
        {
            y: 1,
            x: 1,
            yanchor: 'top',
            buttons: [
                {
                    method: 'restyle',
                    args: ['visible', [false, true]],
                    label: 'global_box_office'
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, false]],
                    label: 'domestic_box_office'
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, true]],
                    label: 'Display All'
                }
            ]
        }
    ]
};


Plotly.newPlot(myGraph_bar, data_bar, barlayout);
