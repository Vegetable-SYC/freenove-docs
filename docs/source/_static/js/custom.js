// JavaScript Document
$(document).ready(function () {
    loadReady();

});
$(window).resize(function () {
    NaviResize();
});

function loadReady() {
    setNavBar();
    NaviResize();

}

function NaviResize() {
    var navWidth = $('.wy-nav-side').width() + $('.wy-nav-content').outerWidth(true) + $('.wy-nav-side').offset().left;
    var navHeight = $(".extrabody-content").height();
    var navItemWidth = navWidth / 7;
    navItemWidth = navItemWidth < 60 ? 60 : navItemWidth;
    var navItemHeight = navItemWidth / 5;
    $(".nav_fn>ul>li").width(navItemWidth);
    $(".nav_fn>ul>li").height($(".extrabody-content").height);
    $(".nav_fn>ul a").css("font-size", navItemWidth * 0.15 + "px");

}

let navBarHtml =
    `
  <div class="nav_fn">
    <ul>
        <!-- <li class="navLogo"><a href="/index.html"></a></li> -->
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/"  target="_blank" class="dropBtn">Home</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="#" class="dropBtn">Store</a>
                <div class="dropDownContent">
                    <a href="https://store.freenove.com/" target="_blank">Official </a>
                    <a href="https://freenove.com/store" target="_blank">Amazon </a>
                    <a href="https://freenove.com/store" target="_blank">eBay </a>
                    <a href="https://freenove.aliexpress.com/store" target="_blank">AliExpress </a>
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/tutorial.html#" target="_blank" class="dropBtn">Tutorial</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/support.html#" target="_blank" class="dropBtn">Support</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/app.html#" target="_blank" class="dropBtn">App</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/contact.html#" target="_blank" class="dropBtn">Contact</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/about.html#" target="_blank" class="dropBtn">About</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        
            <!-- <li id="txt">
                <div class="navDropDown">
                    <a href="https://freenove.com/" class="dropBtn">Welcome</a>
                    <div class="dropDownContent">
                    </div>
                </div>
            </li> -->
       
    </ul>
</div>
`;

let footerHtml = `
<div style="border-top: 1px solid #ccc; ">
    <br/>
    <div id="copy_right" style="float: left;">
        © CopyRight 2016 - 2025
    </div>
    <div style="float: right;">
        Need help? Contact <a href="mailto:support@freenove.com">support@freenove.com</a> 
    </div>
    <br/>
</div>`;

function setNavBar() {
    let navBar = document.getElementById('navContent');
    navBar.innerHTML = navBarHtml;
}

function setPageLogo() {
    var link =      document.querySelector("link[rel*='icon']") ||      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = "https://cdn.jsdelivr.net/gh/Freenove/freenove-docs/docs/source/_static/images/freenove_logo_tag_icon.png";
    document.getElementsByTagName("head")[0].appendChild(link);
}
function setHomeButtonPicture() {
    let home_button = document.getElementsByClassName('logo');
    // console.log(home_button);
    home_button[0].src = "https://cdn.jsdelivr.net/gh/Freenove/freenove-docs/docs/source/_static/images/freenove_logo_home_button.png";
}
window.onload = function () {    
    // console.log('window.onload');
    setPageLogo();
    setHomeButtonPicture();
    let footer_content = document.getElementById('footer_content');
    footer_content.innerHTML = footerHtml;
    $("#copy_right").text("© CopyRight 2016 - " + new Date().getFullYear() + ", Freenove")
};

// console.log('freenove');

