var vizList = ["https://public.tableau.com/views/RegionalSampleWorkbook/Flights",
  "https://public.tableau.com/views/RegionalSampleWorkbook/Obesity",
  "https://public.tableau.com/views/RegionalSampleWorkbook/College",
  "https://public.tableau.com/views/RegionalSampleWorkbook/Stocks",
  "https://public.tableau.com/views/RegionalSampleWorkbook/Storms"
];

var viz,
  vizLen = vizList.length,
  vizCount = 0;

function createViz(vizPlusMinus) {
  var vizDiv = document.getElementById("vizContainer"),
    options = {
      hideTabs: true
    };

  vizCount = vizCount + vizPlusMinus;

  if (vizCount >= vizLen) {
    // Keep the vizCount in the bounds of the array index.
    vizCount = 0;
  } else if (vizCount < 0) {
    vizCount = vizLen - 1;
  }

  if (viz) { // If a viz object exists, delete it.
    viz.dispose();
  }

  var vizURL = vizList[vizCount];
  viz = new tableau.Viz(vizDiv, vizURL, options);
}
