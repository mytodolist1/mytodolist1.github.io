document.addEventListener("DOMContentLoaded", function () {
  const contentWrapper = document.getElementById("app");

  contentWrapper.style.display = 'none';

  // setTimeout(function () {
  //   loaderWrapper.style.display = 'none';
  //   contentWrapper.style.display = 'block';
  // }, 2000);

});

export const hideLoading = () => {
  const loaderWrapper = document.getElementById("loader-wrapper");
  const contentWrapper = document.getElementById("app");

  loaderWrapper.style.display = 'none';
  contentWrapper.style.display = 'block';
}