new window.Chart('canvas1', {
  type: 'horizontalBar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Data 1',
        backgroundColor: '#79D1CF',
        data: [60, 80, 81, 56, 55, 40]
      },
      {
        label: 'Data 2',
        backgroundColor: '#0275d8',
        data: [2, -40, 41, 23, 22, 20]
      }
    ]
  },
  options: {
    animation: {
      duration: 0
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
        backgroundColor: '#79D1CF',
        data: [60, 80, 81, 56, 55, 40]
      },
      {
        label: 'Data 2',
        backgroundColor: '#0275d8',
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

