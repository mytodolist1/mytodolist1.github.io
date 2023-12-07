  // document.onreadystatechange = function () {
  //   if (document.readyState === 'complete') {
  //     setTimeout(function () {
  //       document.getElementById('loader-wrapper').style.display = 'none';
  //     }, 2000); 
  //   }
  // };

  // loading.js
document.addEventListener("DOMContentLoaded", function () {
  // Create the loading element
  var loaderWrapper = document.createElement("div");
  loaderWrapper.id = "loader-wrapper";
  loaderWrapper.innerHTML = `
      <div id="loader"></div>
      <div id="loader"></div>
      <div id="loader"></div>
      <div id="loader"></div>
      <div id="loader"></div>    
  `;
  
  // Append the loading element to the body
  document.body.appendChild(loaderWrapper);

  // Add a timeout to hide the loader after 2 seconds
  setTimeout(function () {
      loaderWrapper.style.display = 'none';
  }, 3000);
});
