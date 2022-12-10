
function initCheckbox(checkboxId, titlebar_name, titlebar_icon_url, titlebar_text) {
    var elem = document.getElementById(checkboxId);
    if (!elem)
        return;
    elem.onclick = function() {
        if (document.getElementById(checkboxId)
            .checked)
            addTitlebar(titlebar_name, titlebar_icon_url, titlebar_text);
        else
            removeTitlebar(titlebar_name);
        focusTitlebars(true);
        updateContentStyle();
        updateCheckbox();
    }
}
window.onfocus = function() {
    console.log("focus");
    focusTitlebars(true);
}
window.onblur = function() {
    console.log("blur");
    focusTitlebars(false);
}
window.onresize = function() {
    updateContentStyle();
}
window.onload = function() {
    initCheckbox("top-box", "top-titlebar", "top-titlebar.png", "Top Titlebar");
    initCheckbox("bottom-box", "bottom-titlebar", "bottom-titlebar.png", "Bottom Titlebar");
    initCheckbox("left-box", "left-titlebar", "left-titlebar.png", "Left Titlebar");
    initCheckbox("right-box", "right-titlebar", "right-titlebar.png", "Right Titlebar");
    document.getElementById("close-window-button")
        .onclick = function() {
            window.close();
        }
    updateContentStyle();
}
var currentWindow = chrome.app.window.current();
document.getElementById('navMin')
    .onclick = function() {
        currentWindow.minimize();
    }
document.getElementById('navMax')
    .onclick = function() {
        if (currentWindow.isMaximized() || currentWindow.isFullscreen()) {
            currentWindow.restore();
        } else {
            currentWindow.maximize();
        }
    }
document.getElementById('navClose')
    .onclick = function() {
        currentWindow.close();
    }

