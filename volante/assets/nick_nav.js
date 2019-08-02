/**
 * Expand the left side navigation bar and swap the hamburger button "onclick"
 * such that the next click closes it
 */
function openNavSideBar() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("hamburger_nav").onclick = closeNavSideBar;
  // Mobirise expects class="opened" on the <nav> element for animate for
  // hamburger
  document.getElementById("testing").classList.add("opened");
}

/**
 * Collapse the left side navigation bar and swap the hamburger button "onclick"
 * such that the next click opens it
 */
function closeNavSideBar() {
  document.getElementById("sidenav").style.width = "0px";
  document.getElementById("hamburger_nav").onclick = openNavSideBar;
  // Mobirise expects class="opened" on the <nav> element for animate for
  // X
  document.getElementById("testing").classList.remove("opened");
}

/**
 * Collapse the left side navigation bar when user scrolls on main page
 * if it's already open
 */
window.onscroll = function() {
    if(document.getElementById("sidenav").style.width !== "0px") {
      closeNavSideBar();
    }
};
