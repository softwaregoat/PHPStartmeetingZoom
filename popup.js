$('#load-zoom').click(function () {
    let zoom = $('#zoom').val();
    let start = $('#startmeeting').val();
    if (start.includes('startmeeting.com')) {
        var height = window.screen.height * 0.85;
        var width = window.screen.width;
        window.open(start, 'meeting', 'width=' + width * 0.25 + ',height=' + height + ',toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=' + (width * 0.73 + 10) + ',top=20');
    }
    if (zoom.includes('zoom.')) {
        chrome.tabs.update({url: zoom});
        chrome.tabs.update({muted: true});
        window.close();
        updateUIState(tab, true);
    }
    else {
        chrome.runtime.sendMessage({msg: "non-zoom"});
    }
});