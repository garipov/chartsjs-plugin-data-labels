new window.Chart('canvas1', {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Data 1',
        backgroundColor: '#79D1CF',
        data: [60, 80, 81, 56, 55, 40],
        dataLabels: {
          colors: ['#000', '#fff', '#555', '#f00', '#999', '#333']
        }
      },
      {
        label: 'Data 2',
        backgroundColor: '#0275d8',
        data: [6, -40, 41, 23, 22, 20]
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
    },
    tooltips: {
      mode: 'index'
    }
  }
});

new window.Chart('canvas4', {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Data 1',
        backgroundColor: '#79D1CF',
        data: [60, 80, 81, 56, 55, 40, 60, 80, 81, 56, 55, 40, 60, 80, 81, 56, 55, 40, 60, 80, 81, 56, 55, 40, 60, 80, 81, 56, 55, 40, 60, 80, 81, 56, 55, 40]
      },
      {
        label: 'Data 2',
        backgroundColor: '#0275d8',
        data: [2, -40, 41, 23, 22, 20, 2, -40, 41, 23, 22, 20, 2, -40, 41, 23, 22, 20, 2, -40, 41, 23, 22, 20, 2, -40, 41, 23, 22, 20, 2, -40, 41, 23, 22, 20]
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

new window.Chart('canvas3', {
  type: 'bar',
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


new window.Chart('canvas2', {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        data: [65, 60, -80, 81, 56, 55, 40]
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
    }
  }
});
