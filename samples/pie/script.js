new window.Chart('canvas1', {
  type: 'pie',
  data: {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [
      {
        data: [300, 50, 100],
        dataLabels: {
          color: '#000',
          colors: ['#fff', '#ccc', '#000']
        },
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
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
  type: 'pie',
  data: {
    labels: [
      'Red',
      'Blue',
      'Orange',
      'Green',
      'Yellow',
      'Purple',
      'Light'
    ],
    datasets: [
      {
        data: [300, 50, 100, 200, 300, 500, 50],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#37ff93',
          '#f9ff99',
          '#be48ff',
          '#f4fffc'
        ]
      }]
  },
  options: {
    animation: {
      duration: 0
    }
  }
});

