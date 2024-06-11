// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
// var ctx = document.getElementById("myPieChart");
// var myPieChart = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: ["null", "Referral", "Social"],
//     datasets: [{
//       data: [55, 30, 15],
//       backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
//       hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
//       hoverBorderColor: "rgba(234, 236, 244, 1)",
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     tooltips: {
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       caretPadding: 10,
//     },
//     legend: {
//       display: false
//     },
//     cutoutPercentage: 80,
//   },
// });


loadDiagram();

async function loadDiagram(){

  try {
      const queryCourse = `
          query {
              findAllCourses {
                  id,
                  name,
              }
          }
      `;
      
      const requestCourseDiagram = await fetch('http://localhost:8080/graphql', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({ query: queryCourse })
      })
      let dataCourse = await requestCourseDiagram.json();
      
      
      const query = `
          query {
              findAllStudents{
                  course {
                    id
                  }
              }
          }
      `;
      
      const requestStudent = await   fetch('http://localhost:8080/graphql', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({ query })
      })
      let dataStudent = await requestStudent.json();
      console.log(dataStudent.data);

      let couserName=[];
      let couserCount=[];
      for (let element of dataCourse.data.findAllCourses) {
          couserName.push(element.name);
          couserCount.push({id: element.id,count:0});

      }
      for (let element of dataStudent.data.findAllStudents) {
          let idCourse=element.course.id;
          for (let elementCourse of couserCount){
              
              if(idCourse==elementCourse.id){
                  elementCourse.count++;
              }
          }

      }
      console.log(couserCount);
      let dataCourseChart=[];
      for (let element of couserCount){
        dataCourseChart.push(element.count);
      }
      console.log(dataCourseChart);

      var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: couserName,
    datasets: [{
      data: dataCourseChart,
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc','#00FFFF','#4B0082','#F5FFFA','#6A5ACD'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

     
      
  } catch (error) {
      
      console.error('Error:', error);
  }
}