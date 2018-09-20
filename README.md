# hopscotch

Hopscotch is a javascript framework which helps in creating product/feature tours in applications.


Steps:
  - Add hopscotch.js reference on your page
  - Define the tour in JS. Example shown below
    - "title" property will be used for the tour pop-up title
    - "content" property will be the body of the pop-up
    - "target" property will be the DOM element to which the pop-up should be associated to
    - "placement" property will indicate the location of the pop-up with respect to "target" element
  ```
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
        }],
      showPrevButton: true,
    );
  ```

   
