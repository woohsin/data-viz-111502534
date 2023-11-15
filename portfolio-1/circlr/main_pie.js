let myGraph_pie = document.getElementById('myGraph_pie');

let trace_1112 ={};
trace_1112.type ="pie";
trace_1112.title ="11/12";
trace_1112.labels =[];
trace_1112.values =[];
trace_1112.domain = {
    row:0,
    column:0
};

for(let x=0; x < day_11_12.length; x++){
    trace_1112.labels[x] = day_11_12[x]['name'];
    trace_1112.values[x] = day_11_12[x]['count'];
}

let trace_1111 ={};
trace_1111.type ="pie";
trace_1111.title ="11/11";
trace_1111.labels =[];
trace_1111.values =[];
trace_1111.domain ={
    row: 0,
    column: 1
};
for(let x =0; x < day_11_11.length; x++) {
    trace_1111.labels[x] =day_11_11[x]['name'];
    trace_1111.values[x] =day_11_11[x]['count'];
}

let trace_1110 ={};
trace_1110.type ="pie";
trace_1110.title ="11/10";
trace_1110.labels =[];
trace_1110.values =[];
trace_1110.domain ={
    row: 1,
    column: 0
};
for(let x =0; x <day_11_10.length; x++) {
    trace_1110.labels[x] =day_11_10[x]['name'];
    trace_1110.values[x] =day_11_10[x]['count'];
}

let trace_1109 ={};
trace_1109.type ="pie";
trace_1109.title ="11/09";
trace_1109.labels =[];
trace_1109.values =[];
trace_1109.domain={
    row: 1,
    column: 1
};
for(let x = 0; x < day_11_09.length; x++) {
    trace_1109.labels[x] = day_11_09[x]['name'];
    trace_1109.values[x] = day_11_09[x]['count'];
}


let data_pie = [];
data_pie.push(trace_1112);
data_pie.push(trace_1111);
data_pie.push(trace_1110);
data_pie.push(trace_1109);

let layout_pie = {
    margin:{
        t:40,
        l:0,
    },
    title: '一天中手機使用APP分布',
    grid:{
        rows:2,
        columns:2
    }
};
Plotly.newPlot(myGraph_pie, data_pie, layout_pie);
