// Define the tour!

var tour = {
      id: "sample-app-hopscotch",
      steps: [
        {
          title: "Home",
          content: "Home Page navigation",
          target: ".left-floater",
          placement: "right"
        },
        {
          title: "Navigation Links",
          content: "You can find the reference links categorized as per these tabs",
          target: document.querySelector(".nav-tab-panel"),
          placement: "right"
        },
    		{
    			title: "Results",
    			content: "You can find the respective link content in this section",
    			target: ".tab-container",
    			placement: "bottom"
    		}
      ],
      showPrevButton: true,
      scrollTopMargin: 100
    };

// Start the tour!
function StartTour(){
    hopscotch.startTour(tour);    
}
