/* FomoUps v1.1.0 | Modern Website Notification System */ ! function() {
  var e = document.getElementById("fomoups-container");
  e || (e = document.createElement("div"), e.id = "fomoups-container", e.className = "fomoups-top-right", document.body.appendChild(e));

  // Add hovering scroll event handlers
  e.addEventListener('mouseenter', function() {
    this.style.pointerEvents = 'auto';
  });
  e.addEventListener('mouseleave', function() {
    // Short delay to ensure we don't disable pointer events during active interactions
    setTimeout(() => {
      if (!document.querySelector('.fomoups-dragging')) {
        this.style.pointerEvents = 'none';
      }
    }, 300);
  });

  var t = document.createElement("style");
  t.textContent = `
#fomoups-container{
  --fomoups-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --fomoups-text-color: #333;
  --fomoups-secondary-text-color: #555;
  --fomoups-border-radius: 10px;
  position:fixed;
  width:320px;
  max-height:100vh;
  z-index:9999;
  overflow-y:visible;
  overflow-x:hidden;
  pointer-events:none;
  padding:0 5px 0 10px;
  margin:0;
  font-family:var(--fomoups-font-family);
  transition: all 0.2s ease;
  box-sizing: border-box;
}
#fomoups-container:hover {
  pointer-events:auto;
}
#fomoups-container::-webkit-scrollbar{
  display: none;
}
#fomoups-container::-webkit-scrollbar-thumb{
  background: rgba(0,0,0,0.2);
  border-radius: 10px;
  transition: background 0.2s ease;
}
#fomoups-container::-webkit-scrollbar-thumb:hover{
  background: rgba(0,0,0,0.3);
}
#fomoups-scroll-indicator, #fomoups-scroll-top {
  display: none;
}
.fomoups-top-right{
  top:20px;
  right:20px !important;
  left:auto !important;
}
.fomoups-top-left{
  top:20px;
  left:20px !important;
  right:auto !important;
}
.fomoups-bottom-right{
  bottom:20px;
  right:20px !important;
  left:auto !important;
}
.fomoups-bottom-left{
  bottom:20px;
  left:20px !important;
  right:auto !important;
}
.fomoups-notification{
  display:flex;
  align-items:center;
  padding:16px;
  background-color:#fff;
  border-radius:var(--fomoups-border-radius);
  box-shadow:0 2px 12px rgba(0,0,0,.15);
  margin-bottom:12px;
  border-left:4px solid #5664d2;
  pointer-events:auto;
  animation:fomoups-slide-in .3s ease-out;
  will-change:transform,opacity;
  position:relative;
  user-select:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  cursor:grab;
  touch-action:pan-x;
  transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease;
  font-family:var(--fomoups-font-family);
  font-size:14px;
  line-height:1.5;
  letter-spacing:0.01em;
  z-index:1;
  width: calc(100% - 10px); /* Adjust width */
  margin-right: 0;
  margin-left: 0;
  box-sizing: border-box;
}
.fomoups-notification.fomoups-dragging{
  cursor:grabbing;
  box-shadow:0 4px 16px rgba(0,0,0,.2);
  z-index:10000;
}
.fomoups-notification.fomoups-will-close{
  opacity:.6;
  box-shadow:0 2px 8px rgba(0,0,0,.1);
}
.fomoups-close{
  position:absolute;
  top:8px;
  right:8px;
  width:20px;
  height:20px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:12px;
  color:#888;
  cursor:pointer;
  background-color:#f0f0f0;
  border-radius:50%;
  transition:all .2s ease;
  z-index:2;
  opacity:.7;
}
.fomoups-close:hover{
  background-color:#e0e0e0;
  color:#555;
  opacity:1;
}
.fomoups-notification:hover .fomoups-close{opacity:1}
.fomoups-icon{
  width:40px;
  height:40px;
  background-color:#5664d2;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-right:14px;
  flex-shrink:0;
  color:#fff;
  min-width:40px;
  overflow:hidden;
}
.fomoups-icon i{
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  width:100%!important;
  height:100%!important;
  font-size:18px!important;
  line-height:1!important;
}
.fomoups-icon img{
  max-width:100%;
  max-height:100%;
  object-fit:cover;
  display:block;
  margin:auto;
}
.fomoups-content{
  flex-grow:1;
  overflow:hidden;
  min-width:0;
  font-family:var(--fomoups-font-family);
}
.fomoups-header{
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-bottom:6px;
}
.fomoups-title{
  font-weight:600;
  color:var(--fomoups-text-color);
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  max-width:calc(100% - 50px);
  font-size:15px;
  line-height:1.3;
}
.fomoups-time{
  font-size:12px;
  color:#888;
  position:absolute;
  top:10px;
  right:36px;
  font-weight:normal;
  font-style:normal;
}
.fomoups-message{
  color:var(--fomoups-secondary-text-color);
  font-size:14px;
  overflow-wrap:break-word;
  word-wrap:break-word;
  word-break:break-word;
  font-weight:normal;
  margin-top:2px;
  line-height:1.4;
}
.fomoups-blue{border-left-color:#1da1f2}
.fomoups-blue .fomoups-icon{background-color:#1da1f2}
.fomoups-green{border-left-color:#4caf50}
.fomoups-green .fomoups-icon{background-color:#4caf50}
.fomoups-red{border-left-color:#f44336}
.fomoups-red .fomoups-icon{background-color:#f44336}
.fomoups-yellow{border-left-color:#ffd700}
.fomoups-yellow .fomoups-icon{background-color:#ffd700;color:#333}
.fomoups-purple{border-left-color:#9c27b0}
.fomoups-purple .fomoups-icon{background-color:#9c27b0}
.fomoups-static{display:none}
@keyframes fomoups-slide-in{
  from {
    transform: translateX(110%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fomoups-slide-out{
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(110%);
    opacity: 0;
  }
}
.fomoups-top-left .fomoups-notification,.fomoups-bottom-left .fomoups-notification{transform-origin:left center;animation-name:fomoups-slide-in-left}
@keyframes fomoups-slide-in-left{
  from {
    transform: translateX(-110%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fomoups-slide-out-left{
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-110%);
    opacity: 0;
  }
}
`;
  document.head.appendChild(t);

  function o(t) {
    e.classList.contains("fomoups-top-left") || e.classList.contains("fomoups-bottom-left") ? t.style.animation = "fomoups-slide-out-left 0.3s forwards" : t.style.animation = "fomoups-slide-out 0.3s forwards";
    setTimeout(function() {
      if (t.parentNode === e) {
        e.removeChild(t);
      }
    }, 300);
  }

  function n(t) {
    var n = 0,
      i = 0,
      a = 0,
      s = 0,
      r = !1,
      l = window.innerWidth,
      c = null,
      d = .3 * l;

    function u(e) {
      if (e.target.closest(".fomoups-close")) return;
      c = t.getBoundingClientRect();
      if ("touchstart" === e.type) {
        n = e.touches[0].clientX;
        i = e.touches[0].clientY
      } else {
        n = e.clientX;
        i = e.clientY
      }
      a = 0;
      s = 0;
      r = !0;
      t.style.transition = "none";
      t.style.zIndex = "10001";
      t.classList.add("fomoups-dragging");
    }

    function p(e) {
      if (r) {
        e.preventDefault();
        var o, i;
        "touchmove" === e.type ? (o = e.touches[0].clientX, i = e.touches[0].clientY) : (o = e.clientX, i = e.clientY);
        var s = o - n;
        a = s, t.style.transform = "translateX(" + a + "px)";
        var l = Math.min(Math.abs(a) / d, 1);
        t.style.opacity = 1 - .4 * l, Math.abs(a) > d ? t.classList.add("fomoups-will-close") : t.classList.remove("fomoups-will-close")
      }
    }

    function f(n) {
      if (r) {
        r = !1, t.classList.remove("fomoups-dragging");
        if (Math.abs(a) > d) {
          var i = a > 0 ? "right" : "left",
            s = i === "right" ? l - c.left + 100 : -c.right - 100;
          t.style.transition = "all 0.3s ease-out", t.style.transform = "translateX(" + s + "px)", t.style.opacity = "0", setTimeout(function() {
            t.parentNode === e && e.removeChild(t)
          }, 300)
        } else t.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease", t.style.transform = "translateX(0)", t.style.opacity = "1", setTimeout(function() {
          t.style.transition = "", t.style.zIndex = ""
        }, 300)
      }
    }
    t.addEventListener("mousedown", u), t.addEventListener("touchstart", u, {
      passive: !0
    }), document.addEventListener("mouseup", f), document.addEventListener("touchend", f), document.addEventListener("mousemove", p), document.addEventListener("touchmove", p, {
      passive: !1
    }), window.addEventListener("resize", function() {
      l = window.innerWidth, d = .3 * l
    })
  }
  window.FomoUps = {
    setPosition: function(t) {
      e.className = "";
      e.classList.add("fomoups-" + t);
    },
    show: function(t, i, a) {
      var s = {
          ...{
            type: "default",
            icon: ["fa-solid", "fa-bell"],
            time: "now",
            duration: 5e3
          },
          ...a
        },
        r = document.createElement("div");
      r.className = "fomoups-notification", s.type && "default" !== s.type && r.classList.add("fomoups-" + s.type);
      var l = document.createElement("div");
      l.className = "fomoups-icon";

      // Check if imgIcon is provided (for image-based icons)
      if (s.imgIcon) {
        var imgElement = document.createElement("img");
        imgElement.src = s.imgIcon;
        imgElement.alt = "Notification Icon";
        imgElement.style.width = "24px";
        imgElement.style.height = "24px";
        imgElement.style.objectFit = "cover";
        imgElement.style.display = "block";
        imgElement.style.margin = "auto";
        imgElement.style.borderRadius = "2px";
        l.appendChild(imgElement);
      } else {
        // Use Font Awesome icon
        var c = document.createElement("i");
        if (Array.isArray(s.icon)) s.icon.forEach(function(e) {
          e && c.classList.add(e)
        });
        else if ("string" == typeof s.icon) {
          s.icon.split(" ").forEach(function(e) {
            e && c.classList.add(e)
          })
        }
        l.appendChild(c);
      }

      var d = document.createElement("div");
      d.className = "fomoups-content";
      var u = document.createElement("div");
      u.className = "fomoups-header";
      var p = document.createElement("div");
      p.className = "fomoups-title", p.textContent = t;
      var f = document.createElement("div");
      f.className = "fomoups-time", f.textContent = s.time, u.appendChild(p);
      var m = document.createElement("div");
      m.className = "fomoups-message", m.textContent = i, d.appendChild(u), d.appendChild(m), d.appendChild(f), r.appendChild(l), r.appendChild(d);
      var y = document.createElement("div");
      return y.className = "fomoups-close", y.innerHTML = '<i class="fa-solid fa-xmark"></i>', y.addEventListener("click", function(e) {
          e.stopPropagation(), o(r)
        }), r.appendChild(y), e.prepend(r), n(r),

        s.duration > 0 && setTimeout(function() {
          r.parentNode === e && o(r)
        }, s.duration), r
    },
    clear: function() {
      for (; e.firstChild;) o(e.firstChild)
    }
  }, window.showDefault = function() {
    FomoUps.show("Notification", "This is a simple notification message", {
      type: "default",
      icon: ["fa-solid", "fa-bell"]
    })
  }, window.showTwitter = function() {
    FomoUps.show("0 likes on your last post", "Consider a career shift", {
      type: "blue",
      icon: ["fa-brands", "fa-twitter"],
      time: "now"
    })
  }, window.showGym = function() {
    FomoUps.show("Gym Chad", "6 months ago you said tomorrow. Still in couch?", {
      type: "yellow",
      icon: ["fa-solid", "fa-dumbbell"],
      time: "30d"
    })
  }, window.showSuccess = function() {
    FomoUps.show("Payment received", "You received a payment of $120.00", {
      type: "green",
      icon: ["fa-solid", "fa-dollar-sign"],
      time: "1h"
    })
  }, window.showAlert = function() {
    FomoUps.show("System Alert", "Your account will expire in 3 days", {
      type: "red",
      icon: ["fa-solid", "fa-triangle-exclamation"],
      time: "important"
    })
  }, window.showFollow = function() {
    FomoUps.show("New follower", "Someone started following your profile", {
      type: "purple",
      icon: ["fa-solid", "fa-user-plus"],
      time: "5m"
    })
  };

  // Replace the static notification processor with predefined notifications
  // Define a predefined notifications array


  // Add method to show predefined notifications
  window.FomoUps.showPredefined = function(index) {
    if (index < 0 || index >= this.predefinedNotifications.length) {
      console.error("FomoUps: Invalid notification index");
      return;
    }

    const notification = this.predefinedNotifications[index];
    this.show(notification.title, notification.content, notification.options);
  };

  // Add configuration options
  window.FomoUps.config = {
    showPredefinedOnLoad: true, // Show predefined notifications on page load
    predefinedIndicesToShow: [], // Empty array means show all. To show specific ones, add their indices [0, 2, 4]
    predefinedDelayBetween: 3000 // Delay between notifications if no specific delay is provided
  };

  // Update showAllPredefined method to use configuration
  window.FomoUps.showAllPredefined = function(options) {
    options = options || {};
    const indicesToShow = options.indices || this.config.predefinedIndicesToShow || [];
    const delayBetween = options.delayBetween || this.config.predefinedDelayBetween || 3000;

    // If indices are specified, only show those notifications
    let notificationsToShow = this.predefinedNotifications;
    if (indicesToShow.length > 0) {
      notificationsToShow = indicesToShow.map(index => this.predefinedNotifications[index])
        .filter(notification => notification !== undefined);
    }

    notificationsToShow.forEach((notification, index) => {
      const delay = notification.options.delay || index * delayBetween;
      setTimeout(() => {
        this.show(notification.title, notification.content, notification.options);
      }, delay);
    });
  };

  // Show predefined notifications on page load if configured to do so
  document.addEventListener('DOMContentLoaded', function() {
    // Don't show predefined notifications on simple-test page
    const isSimpleTestPage = !!document.getElementById('default-btn') &&
      !!document.getElementById('image-btn') &&
      !!document.getElementById('multiple-btn');

    if (FomoUps.config.showPredefinedOnLoad && !isSimpleTestPage) {
      console.log('FomoUps: Loading predefined notifications');
      FomoUps.showAllPredefined();
    }
  });

  // Replace with empty function that does nothing
  function updateScrollIndicator() {
    // Function intentionally left empty - scrolling disabled
  }

  // Add demo functions at the end of the file
  window.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the simple-test page by looking for the buttons
    const defaultBtn = document.getElementById('default-btn');
    const imageBtn = document.getElementById('image-btn');
    const multipleBtn = document.getElementById('multiple-btn');

    // Only add event listeners if we're on the simple test page
    if (defaultBtn && imageBtn && multipleBtn) {
      console.log('FomoUps: Simple test page detected, binding event handlers');

      // Simple function to show a notification
      defaultBtn.addEventListener('click', function() {
        console.log('Showing default notification');
        FomoUps.show('Simple Notification', 'This is a basic notification with a Font Awesome icon', {
          type: 'blue',
          icon: ['fa-solid', 'fa-bell'],
          time: 'now',
          duration: 0
        });
      });

      // Function to show a notification with an image icon
      imageBtn.addEventListener('click', function() {
        console.log('Showing image notification');
        FomoUps.show('Image Icon', 'This notification uses an image instead of Font Awesome', {
          type: 'green',
          imgIcon: 'https://cdn-icons-png.flaticon.com/512/9455/9455025.png',
          time: 'new',
          duration: 0
        });
      });

      // Function to show multiple notifications
      multipleBtn.addEventListener('click', function() {
        console.log('Showing multiple notifications');

        // Default notification
        FomoUps.show('Notification 1', 'This is the first notification', {
          type: 'default',
          icon: ['fa-solid', 'fa-bell'],
          time: 'now',
          duration: 0
        });

        // Blue notification with Twitter icon
        setTimeout(function() {
          FomoUps.show('Twitter Update', 'New followers on your account', {
            type: 'blue',
            icon: ['fa-brands', 'fa-twitter'],
            time: '5m',
            duration: 0
          });
        }, 500);

        // Yellow notification with tag icon
        setTimeout(function() {
          FomoUps.show('Special Offer', 'Limited time discount available', {
            type: 'yellow',
            icon: ['fa-solid', 'fa-tag'],
            time: 'today',
            duration: 0
          });
        }, 1000);

        // Green notification with image
        setTimeout(function() {
          FomoUps.show('Custom Image', 'Using a custom image as icon', {
            type: 'green',
            imgIcon: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
            time: 'new',
            duration: 0
          });
        }, 1500);
      });
    }
  });

  // Add static notification processor
  document.addEventListener('DOMContentLoaded', function processStaticNotifications() {
    console.log('FomoUps: Processing static notifications');
    // Find all static notifications in the HTML
    var staticNotifications = document.querySelectorAll('.fomoups-static');
    console.log('Found ' + staticNotifications.length + ' static notifications');

    // Process each notification
    staticNotifications.forEach(function(notification) {
      var title = notification.querySelector('.fomoups-title').textContent;
      var content = notification.querySelector('.fomoups-content').textContent;
      var type = notification.getAttribute('data-type') || 'default';
      var time = notification.getAttribute('data-time') || 'now';
      var delay = parseInt(notification.getAttribute('data-delay') || '0', 10);
      var duration = parseInt(notification.getAttribute('data-duration') || '5000', 10);
      var options = {
        type: type,
        time: time,
        duration: duration
      };

      // Check if we have an image icon
      var imgIcon = notification.getAttribute('data-img-icon');
      if (imgIcon) {
        options.imgIcon = imgIcon;
      } else {
        // Use Font Awesome icon
        var iconClasses = notification.getAttribute('data-icon') || 'fa-solid fa-bell';
        options.icon = iconClasses.split(' ');
      }

      // Show notification after specified delay
      setTimeout(function() {
        console.log('FomoUps: Showing static notification - ' + title);
        FomoUps.show(title, content, options);
      }, delay);
    });
  });
}();
