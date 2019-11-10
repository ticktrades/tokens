<script>
  import { onMount, afterUpdate } from "svelte";
  import Chart from "chart.js";

  let canvas;
  let chartContext;

  const DATA_POINTS_HOURS = 25;
  const INITIAL_VALUE = 0;

  export let data = new Array(DATA_POINTS_HOURS).fill(INITIAL_VALUE);

  const labels = [...data.keys()];

  const COLOR_POSITIVE = "#26a69a";
  const COLOR_NEGATIVE = "#f05250";

  const borderColor =
    data[0] <= data[data.length - 1] ? COLOR_POSITIVE : COLOR_NEGATIVE;

  let config = {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor: "#262b3e",
          borderColor,
          borderWidth: "2"
        }
      ]
    },
    options: {
      aspectRatio: 3,
      legend: {
        display: false
      },
      title: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [
          {
            ticks: {
              display: false
            },
            gridLines: {
              display: false,
              drawBorder: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              display: false,
              min: Math.min(...data),
              max: Math.max(...data),
            }
          }
        ]
      }
    }
  };

  onMount(async () => {
    chartContext = new Chart(canvas, config);
  });

  afterUpdate(() => {
		updateChart();
	});

  function updateChart() {
    chartContext.data.labels = labels;
    chartContext.data.datasets[0].data = data;
    chartContext.update();
  }
</script>
<style>
canvas{
  width: 100%;
}
</style>
<canvas bind:this={canvas} />
