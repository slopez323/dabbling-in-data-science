# 📊 dabbling-in-data-science

In this assignment we'll be downloading a real dataset from [kaggle](https://www.kaggle.com/datasets?sort=usability&fileType=json). Your job will be to create a chart visualization based on that data that will be displayed on the DOM using the `chartjs` library.

Start out by creating an `index.html` and a `main.js` file.

## Part 1: Recall how to display a chart with `chartjs`

To display a chart, we'll need to do three things:

#### 1. Import the chartjs code

To do this, add the following line to your HTML:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.1/chart.min.js"></script>`

#### 2. Add a canvas element to the HTML

Now, create a canvas element somewhere in your HTML:

`<canvas id="myChart" width="400" height="400"></canvas>`

#### 3. Wire it up with JS

Finally, add the following lines to your JS:

```javascript

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

```

If a chart is displaying, then you're good to go! Observe that customizing the numbers in the `data` array above changes the bar heights of the chart.

## Part 2: Deciding on a real dataset

Your task is now to choose a dataset from [kaggle](https://www.kaggle.com/datasets?sort=usability&fileType=json). Once you've chosen a dataset, your job will be to create a chart that displays a piece of information about your chosen dataset. You may choose any dataset from kaggle; here are a few good ones:

* [Dataset of all Nobel prize awards and laureates from 1901-2019](https://www.kaggle.com/imdevskp/nobel-prize)
* [Information from all of the Dunkin Donuts stores in the US](https://www.kaggle.com/jpbulman/usa-dunkin-donuts-stores)
* [NFL Football Player Stats](https://www.kaggle.com/zynicide/nfl-football-player-stats)

_Note: if you choose your own dataset, try to get a dataset stored in a .json file. Many of them will be stored in .csv format. It's possible but more difficult to use these._

Once you've decided on a dataset, download it (you will have to make a kaggle account to do this).

## Part 3: Analyzing the data

Open up your dataset in VSCode and try to get a sense of what's what. There may be a few different files here so determine which file contains the important information. It should be a file ending in `.json`.

Look through your data and decide on a piece of information that you would like to display in a chart. Here are few examples that you are welcome to choose from (you may also choose your own):
* The number of Dunkin Donuts in each state
* The average prize money awarded each year for the Nobel Prize
* The average age of each NFL team

Once you've decided on a statistic, move on to part 4.

## Part 4: Calculting the statistic

Now it's time for the hard part: calculating the statistic. You'll need to write code that calculates appropriate labels and data values for your statistic. If your statistic is the number of Dunkin Donuts in each state, your final results might look like:
```
  [ 'WA', 'OR', 'CA', 'MT', 'ID', ..., 'NY' ] // labels
  [ 10, 4, 15, 3, 2, ..., 70 ]                // data
```

## Part 5: Displaying your statistic

Your final task is to display your statistic in a chartjs chart. Modify your code from part 1 with the data that you calculated in part 4 to do this!

## Stretch goals

* Calculate another statistic about your dataset
* Display a chart that is not a bar chart (use chartjs documentation for this)
