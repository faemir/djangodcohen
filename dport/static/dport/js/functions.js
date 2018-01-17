function responsiveToggle() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

function workLoad() {
    document.getElementById("featTXT").style.display = "none";
    document.getElementById("tvtTXT").style.display = "none";
    document.getElementById("rmhTXT").style.display = "none";
    document.getElementById("acsTXT").style.display = "none";
    document.getElementById("fcTXT").style.display = "none";
    document.getElementById("scTXT").style.display = "none";
}
$(document).ready(function() {
    $('.featgallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
        zoom: {
            enabled: true,
            duration: 100, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $('.tvtgallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
        zoom: {
            enabled: true,
            duration: 100, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $('.rmhgallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
        zoom: {
            enabled: true,
            duration: 100, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $('.acsgallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
        zoom: {
            enabled: true,
            duration: 100, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $('.fcgallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: false,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        },
        zoom: {
            enabled: true,
            duration: 100, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true,
        closeOnContentClick: true,
        fixedContentPos: false,
        showCloseBtn: false,
        callbacks: {
            open: function() {
                // Play video on open:
                $(this.content).find('video')[0].play();
            }
        } // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
});

function contentToggleFEAT() {
    var txtlength = document.getElementsByClassName("projTXT").length;
    for (i = 0; i < txtlength; i++) {
        document.getElementsByClassName("projTXT")[i].style.display = "none";
    }
    document.getElementById("featTXT").style.display = "block";
}

function contentToggleTVT() {
    var txtlength = document.getElementsByClassName("projTXT").length;
    for (i = 0; i < txtlength; i++) {
        document.getElementsByClassName("projTXT")[i].style.display = "none";
    }
    document.getElementById("tvtTXT").style.display = "block";
    document.getElementById("scTXT").style.display = "block";

}

function contentToggleRMH() {
    var txtlength = document.getElementsByClassName("projTXT").length;
    for (i = 0; i < txtlength; i++) {
        document.getElementsByClassName("projTXT")[i].style.display = "none";
    }
    document.getElementById("rmhTXT").style.display = "block";
    document.getElementById("scTXT").style.display = "block";
}

function contentToggleACS() {
    var txtlength = document.getElementsByClassName("projTXT").length;
    for (i = 0; i < txtlength; i++) {
        document.getElementsByClassName("projTXT")[i].style.display = "none";
    }
    document.getElementById("acsTXT").style.display = "block";
    document.getElementById("scTXT").style.display = "block";
}

function contentToggleFC() {
    var txtlength = document.getElementsByClassName("projTXT").length;
    for (i = 0; i < txtlength; i++) {
        document.getElementsByClassName("projTXT")[i].style.display = "none";
    }
    document.getElementById("fcTXT").style.display = "block";
    document.getElementById("scTXT").style.display = "block";
}
