const ctx = document.getElementById('myChart').getContext('2d');

async function getData(){
    let httpResponse = await fetch('dunkinDonuts.json');
    httpResponse = await httpResponse.json();
    let data = httpResponse.data;

    let state = data.map(x => x.state);
    let almond = data.filter(x => x.almond == "Y");
    almond = almond.map(x => x.state);

    let storeCount = state.reduce((obj,item) => {
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});

    let almondCount = almond.reduce((obj,item) => {
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});

    let almondData = [];

    for (let store in storeCount){
        let y = almondCount[store] ? almondCount[store] : 0;
        almondData.push(y);
    };

    const myChart = new Chart(ctx, {
        data: {
            datasets: [{
                type: 'bar',
                label: '# of Stores per State',
                data: Object.values(storeCount),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }, {
                type: 'line',
                label: '# of Stores with Almond Milk',
                data: almondData
            }],
            labels: Object.keys(storeCount),
        },
    });
}

getData();

