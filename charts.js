
  const ctx = document.getElementById('myChart');
  const ctx2 = document.getElementById('myChart2');
  const ctx3 = document.getElementById('myChart3');
  const ctx4 = document.getElementById('myChart4');
  const ctx5 = document.getElementById('myChart5');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['jan', 'feb', 'mar', 'april', 'may', 'june'],
      datasets: [{
        label: 'No of Sales',
        data: [12, 29, 3, 5, 2, 3],
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
  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['jan', 'feb', 'mar', 'april', 'may', 'june'],
      datasets: [{
        label: 'No of Sales',
        data: [12, 29, 3, 5, 2, 3],
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
  new Chart(ctx3, {
    type: 'pie',
    data: {
      labels: ['jan', 'feb', 'mar', 'april', 'may', 'june'],
      datasets: [{
        label: 'No of Sales',
        data: [12, 29, 3, 5, 2, 3],
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
  new Chart(ctx4, {
    type: 'radar',
    data: {
      labels: ['jan', 'feb', 'mar', 'april', 'may', 'june'],
      datasets: [{
        label: 'No of Sales',
        data: [12, 29, 3, 5, 2, 3],
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
  new Chart(ctx5, {
    type: 'pie',
    data: {
      labels: ['jan', 'feb', 'mar', 'april'],
      datasets: [{
        label: 'No of Sales',
        data: [12, 29, 3, 5],
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
