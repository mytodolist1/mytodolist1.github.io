document.addEventListener("DOMContentLoaded", function () {
  const contentWrapper = document.getElementById("app");

  contentWrapper.style.display = 'none';
});

export const hideLoading = () => {
  const loaderWrapper = document.getElementById("loader-wrapper");
  const contentWrapper = document.getElementById("app");

  loaderWrapper.style.display = 'none';
  contentWrapper.style.display = 'block';
}