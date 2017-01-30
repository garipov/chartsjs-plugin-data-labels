new window.Chart('canvas1', {
  type: 'horizontalBar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Data 1',
        data: [60, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ]
      },
      {
        label: 'Data 2',
        data: [2, -40, 41, 23, 22, 20],
        backgroundColor: [
          'rgba(255, 210, 132, 0.3)',
          'rgba(54, 25, 235, 0.3)',
          'rgba(255, 170, 86, 0.3)',
          'rgba(75, 112, 192, 0.3)',
          'rgba(153, 150, 255, 0.3)',
          'rgba(255, 80, 64, 0.3)'
        ],
        borderColor: [
          'rgba(255,210,132,1)',
          'rgba(54, 25, 235, 1)',
          'rgba(255, 170, 86, 1)',
          'rgba(75, 112, 192, 1)',
          'rgba(153, 150, 255, 1)',
          'rgba(255, 80, 64, 1)'
        ]
      }
    ]
  },
  options: {
    animation: {
      duration: 0
    },
    elements: {
      rectangle: {
      }
    },
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }
});

new window.Chart('canvas2', {
  type: 'horizontalBar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Data 1',
        backgroundColor: [
          'rgba(255, 210, 132, 0.3)',
          'rgba(54, 25, 235, 0.3)',
          'rgba(255, 170, 86, 0.3)',
          'rgba(75, 112, 192, 0.3)',
          'rgba(153, 150, 255, 0.3)',
          'rgba(255, 80, 64, 0.3)'
        ],
        borderColor: [
          'rgba(255, 210, 100, 1)',
          'rgba(54, 25, 100, 1)',
          'rgba(255, 170, 100, 1)',
          'rgba(75, 112, 100, 1)',
          'rgba(153, 150, 100, 1)',
          'rgba(255, 80, 100, 1)'
        ],
        data: [60, 80, 81, 56, 55, 40]
      },
      {
        label: 'Data 2',
        backgroundColor: [
          'rgba(255, 210, 132, 0.3)',
          'rgba(54, 25, 235, 0.3)',
          'rgba(255, 170, 86, 0.3)',
          'rgba(75, 112, 192, 0.3)',
          'rgba(153, 150, 255, 0.3)',
          'rgba(255, 80, 64, 0.3)'
        ],
        borderColor: [
          'rgba(255, 210, 100, 1)',
          'rgba(54, 25, 100, 1)',
          'rgba(255, 170, 100, 1)',
          'rgba(75, 112, 100, 1)',
          'rgba(153, 150, 100, 1)',
          'rgba(255, 80, 100, 1)'
        ],
        data: [2, -40, 41, 23, 22, 20]
      }
    ]
  },
  options: {
    animation: {
      duration: 0
    }
  }
});

