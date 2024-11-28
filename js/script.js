// Function to create a progress bar
function createProgressBar(containerId, color, value) {
  let bar = new ProgressBar.SemiCircle(containerId, {
      strokeWidth: 5,
      color: "light",
      trailColor: "darkgray",
      trailWidth: 5,
      easing: "easeInOut",
      duration: 5000,
      svgStyle: null,
      text: {
          value: "",
          alignToBottom: false,
          className: "progressbar__label"
      },
      step: (state, bar) => {
          bar.path.setAttribute("stroke", state.color);
          var value = Math.round(bar.value() * 100);
          bar.setText(value + "%");
      }
  });

  bar.animate(value); // Animate to the specified value (0 to 1)
}

// Create different progress bars in each column
createProgressBar('#progress1', 'white', 0.45); 
createProgressBar('#progress2', 'white', 0.55); 
createProgressBar('#progress3', 'white', 0.09); 
createProgressBar('#progress4', 'white', 0.25); 



var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'line', // also try bar or other graph types

	// The data for our dataset
	data: {
		labels: ["Jun 2016", "Jul 2016", "Aug 2016", "Sep 2016", "Oct 2016", "Nov 2016", "Dec 2016", "Jan 2017", "Feb 2017", "Mar 2017", "Apr 2017", "May 2017"],
		// Information about the dataset
    datasets: [{
			label: "Rainfall",
			backgroundColor: 'lightblue',
			borderColor: 'royalblue',
			data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6],
		}]
	},

	// Configuration options
	options: {
    layout: {
      padding: 10,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Precipitation in Toronto'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Precipitation in mm'
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month of the Year'
				}
			}]
		}
	}
});



var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Dataset #1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 20, 81, 56, 55, 40],
    }]
  };
  
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
  
  new Chart('chart', {
    type: 'bar',
    options: options,
    data: data
  });





// pie chart 
function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
  }
  function addSlice(sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;
    $("."+sliceID).css({
      "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
    });
    $("."+sliceID+" span").css({
      "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
      "background-color": color
    });
  }
  function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var sliceID = "s"+dataCount+"-"+sliceCount;
    var maxSize = 179;
    if(sliceSize<=maxSize) {
      addSlice(sliceSize, pieElement, offset, sliceID, color);
    } else {
      addSlice(maxSize, pieElement, offset, sliceID, color);
      iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
  }
  function createPie(dataElement, pieElement) {
    var listData = [];
    $(dataElement+" span").each(function() {
      listData.push(Number($(this).html()));
    });
    var listTotal = 0;
    for(var i=0; i<listData.length; i++) {
      listTotal += listData[i];
    }
    var offset = 0;
    var color = [
      "cornflowerblue", 
      "olivedrab", 
      "orange", 
      "tomato", 
      "crimson", 
      "purple", 
      "turquoise", 
      "forestgreen", 
      "navy", 
      "gray"
    ];
    for(var i=0; i<listData.length; i++) {
      var size = sliceSize(listData[i], listTotal);
      iterateSlices(size, pieElement, offset, i, 0, color[i]);
      $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
      offset += size;
    }
  }
  createPie(".pieID.legend", ".pieID.pie");

  




