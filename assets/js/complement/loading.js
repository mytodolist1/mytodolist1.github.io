document.addEventListener("DOMContentLoaded", function () {
  var loaderWrapper = document.getElementById("loader-wrapper");
  var contentWrapper = document.getElementById("app");

  contentWrapper.style.display = 'none';

  setTimeout(function () {
    loaderWrapper.style.display = 'none';
    contentWrapper.style.display = 'block';
  }, 3000);
});

// document.addEventListener("DOMContentLoaded", function () {
//   var loaderWrapper = document.createElement("div");
//   loaderWrapper.id = "loader-wrapper";
//   loaderWrapper.innerHTML = `
//       <div id="loader"></div>
//       <div id="loader"></div>
//       <div id="loader"></div>
//       <div id="loader"></div>
//       <div id="loader"></div>    
//   `;
  
//   document.body.appendChild(loaderWrapper);

//   setTimeout(function () {
//       loaderWrapper.style.display = 'none';
//   }, 3000);
  
// });