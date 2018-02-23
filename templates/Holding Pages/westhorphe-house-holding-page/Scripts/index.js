// This is just to auto-update the data-text if you're editing it directly on the page and is not required for the actual effect
$('[data-text]').on('keyup', function(){
  $(this).attr('data-text', $(this).text());
});

particlesJS("particles-js-f", {
  "particles": {
    "number": {
      "value": 670,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#116007"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0.06,
        "color": "#116007"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.18,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.01,
        "opacity_min": 0.065,
        "sync": true
      }
    },
    "size": {
      "value": 60,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 55,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 1500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 1600,
        "rotateY": 200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 36.54347455356053,
        "size": 33,
        "duration": 0.3,
        "opacity": 3,
        "speed": 3
      },
      "repulse": {
        "distance": 56.84540486109416,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


particlesJS("particles-js-m", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": "#116007"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0.06,
        "color": "#116007"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.09,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 3,
        "opacity_min": 0.03,
        "sync": false
      }
    },
    "size": {
      "value": 60,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 4,
        "size_min": 55,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 10,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 231,
        "size": 68,
        "duration": 0.5,
        "opacity": 0.6,
        "speed": 1
      },
      "repulse": {
        "distance": 56.84540486109416,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

particlesJS("particles-js-f-blur-bright", {
  "particles": {
    "number": {
      "value": 3,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#1da70d"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0.1,
        "color": "#000100"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 23,
        "opacity_min": 0.3,
        "sync": false
      }
    },
    "size": {
      "value": 70,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "size_min": 50,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.9,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 231,
        "size": 68,
        "duration": 0.5,
        "opacity": 0.6,
        "speed": 1
      },
      "repulse": {
        "distance": 56.84540486109416,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



var count_particles, stats, update;

// document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  /*
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    // count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  */
  requestAnimationFrame(update);
};
requestAnimationFrame(update);



// Get IE or Edge browser version
var version = detectIE();

if (version === false) {
    $('.hide-ie').show();
    $('.social-icon').addClass('golden-grad-shad');
    $('.social-icon').removeClass('golden-color');
    $('.show-ie').hide();

} else if (version >= 12) {
    $('.social-icon').addClass('golden-color');
    $('.social-icon').removeClass('golden-grad-shad');
    $('.hide-ie').hide();
    $('.show-ie').show();
} else {
    $('.social-icon').addClass('golden-color');
    $('.social-icon').removeClass('golden-grad-shad');
    $('.hide-ie').hide();
    $('.show-ie').show();
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}