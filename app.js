    function initViz() {
      var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/ZodiacConstellations/Dashboard?:embed=t&:display_count=no&:origin=viz_share_link",

        options = {
          hideTabs: false,
          onFirstInteractive: function() {
            console.log("Run this code when the viz has finished loading.");
          }
        };

      var viz = new tableau.Viz(containerDiv, url, options);
      // Create a viz object and embed it in the container div.
    }
