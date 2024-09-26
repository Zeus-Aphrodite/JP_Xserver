/* <![CDATA[ */
window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/15.0.3/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/15.0.3/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "https://twlm.work/consulting/wp-includes/js/wp-emoji-release.min.js?ver=6.6.2",
  },
};
/*! This file is auto-generated */
!(function (i, n) {
  var o, s, e;
  function c(e) {
    try {
      var t = { supportTests: e, timestamp: new Date().valueOf() };
      sessionStorage.setItem(o, JSON.stringify(t));
    } catch (e) {}
  }
  function p(e, t, n) {
    e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
    var t = new Uint32Array(
        e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
      ),
      r =
        (e.clearRect(0, 0, e.canvas.width, e.canvas.height),
        e.fillText(n, 0, 0),
        new Uint32Array(
          e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
        ));
    return t.every(function (e, t) {
      return e === r[t];
    });
  }
  function u(e, t, n) {
    switch (t) {
      case "flag":
        return n(
          e,
          "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f",
          "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f"
        )
          ? !1
          : !n(
              e,
              "\ud83c\uddfa\ud83c\uddf3",
              "\ud83c\uddfa\u200b\ud83c\uddf3"
            ) &&
              !n(
                e,
                "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
                "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"
              );
      case "emoji":
        return !n(e, "\ud83d\udc26\u200d\u2b1b", "\ud83d\udc26\u200b\u2b1b");
    }
    return !1;
  }
  function f(e, t, n) {
    var r =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
          ? new OffscreenCanvas(300, 150)
          : i.createElement("canvas"),
      a = r.getContext("2d", { willReadFrequently: !0 }),
      o = ((a.textBaseline = "top"), (a.font = "600 32px Arial"), {});
    return (
      e.forEach(function (e) {
        o[e] = t(a, e, n);
      }),
      o
    );
  }
  function t(e) {
    var t = i.createElement("script");
    (t.src = e), (t.defer = !0), i.head.appendChild(t);
  }
  "undefined" != typeof Promise &&
    ((o = "wpEmojiSettingsSupports"),
    (s = ["flag", "emoji"]),
    (n.supports = { everything: !0, everythingExceptFlag: !0 }),
    (e = new Promise(function (e) {
      i.addEventListener("DOMContentLoaded", e, { once: !0 });
    })),
    new Promise(function (t) {
      var n = (function () {
        try {
          var e = JSON.parse(sessionStorage.getItem(o));
          if (
            "object" == typeof e &&
            "number" == typeof e.timestamp &&
            new Date().valueOf() < e.timestamp + 604800 &&
            "object" == typeof e.supportTests
          )
            return e.supportTests;
        } catch (e) {}
        return null;
      })();
      if (!n) {
        if (
          "undefined" != typeof Worker &&
          "undefined" != typeof OffscreenCanvas &&
          "undefined" != typeof URL &&
          URL.createObjectURL &&
          "undefined" != typeof Blob
        )
          try {
            var e =
                "postMessage(" +
                f.toString() +
                "(" +
                [JSON.stringify(s), u.toString(), p.toString()].join(",") +
                "));",
              r = new Blob([e], { type: "text/javascript" }),
              a = new Worker(URL.createObjectURL(r), {
                name: "wpTestEmojiSupports",
              });
            return void (a.onmessage = function (e) {
              c((n = e.data)), a.terminate(), t(n);
            });
          } catch (e) {}
        c((n = f(s, u, p)));
      }
      t(n);
    })
      .then(function (e) {
        for (var t in e)
          (n.supports[t] = e[t]),
            (n.supports.everything = n.supports.everything && n.supports[t]),
            "flag" !== t &&
              (n.supports.everythingExceptFlag =
                n.supports.everythingExceptFlag && n.supports[t]);
        (n.supports.everythingExceptFlag =
          n.supports.everythingExceptFlag && !n.supports.flag),
          (n.DOMReady = !1),
          (n.readyCallback = function () {
            n.DOMReady = !0;
          });
      })
      .then(function () {
        return e;
      })
      .then(function () {
        var e;
        n.supports.everything ||
          (n.readyCallback(),
          (e = n.source || {}).concatemoji
            ? t(e.concatemoji)
            : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)));
      }));
})((window, document), window._wpemojiSettings);
/* ]]> */
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-179208830-2");

$(function () {
  $(".formbox").each(function () {
    $(this).val($(this).attr("title")).css("color", "#969696");
  });

  $(".formbox").focus(function () {
    $(this).val("").css("color", "#000");
  });

  $(".formbox").blur(function () {
    $(this).val($(this).attr("title")).css("color", "#969696");
  });

  $(".focus").focus(function () {
    if (this.value == "メールアドレスを入力") {
      $(this).val("").css("color", "#000000");
    } else if (this.value == "名前を入力") {
      $(this).val("").css("color", "#000000");
    }
  });

  $(".focus").blur(function () {
    if (this.value == "") {
      if (this.name == "d[0]") {
        $(this).val("メールアドレスを入力").css("color", "#969696");
      } else {
        $(this).val("名前を入力").css("color", "#969696");
      }
    }
  });

  $(window).bind("load resize", function () {
    if ($(window).width() > 900) {
      $("div.full-width").each(function () {
        $(this).height($(this).height());
        if (!$(this).find(".absolute")[0]) {
          if ($(this).find(".orverlay")[0]) {
            $(this).html(
              '<div class="absolute"><div class="orverlay"><div class="content-width">' +
                $(".orverlay", this).html() +
                "</div></div></div>"
            );
          } else {
            $(this).html(
              '<div class="absolute"><div class="content-width">' +
                $(this).html() +
                "</div></div>"
            );
          }
          $(this)
            .find(".absolute")
            .css(
              "backgroundColor",
              $(this)
                .find(".content-width")
                .children()
                .eq(0)
                .css("backgroundColor")
            );
          $(this)
            .find(".absolute")
            .css(
              "backgroundImage",
              $(this)
                .find(".content-width")
                .children()
                .eq(0)
                .css("backgroundImage")
            );
          $(this)
            .find(".absolute")
            .css(
              "backgroundPosition",
              $(this)
                .find(".content-width")
                .children()
                .eq(0)
                .css("backgroundPosition")
            );
          $(this)
            .find(".absolute")
            .css(
              "backgroundRepeat",
              $(this)
                .find(".content-width")
                .children()
                .eq(0)
                .css("backgroundRepeat")
            );
          if (
            $(this).find(".content-width").children().eq(0).hasClass("tilt")
          ) {
            $(this).find(".absolute").addClass("tilt");
          }
        }
        $(this).find(".absolute").width($(window).width());
        $(this)
          .find(".content-width")
          .children()
          .eq(0)
          .css("backgroundColor", "");
        $(this)
          .find(".content-width")
          .children()
          .eq(0)
          .css("backgroundImage", "");
        $(this)
          .find(".content-width")
          .children()
          .eq(0)
          .css("backgroundPosition", "");
        $(this)
          .find(".content-width")
          .children()
          .eq(0)
          .css("backgroundRepeat", "");
        $(this).find(".content-width").children().eq(0).removeClass("tilt");
      });

      $(".full-width-image").each(function () {
        if (!$(this).find(".absolute")[0]) {
          $(this).html('<div class="absolute">' + $(this).html() + "</div>");
        }
        $(this).find(".absolute").width($(window).width());
        if ($(this).find("img").height() > 0) {
          $(this).height($(this).find("img").height());
        } else {
          $(this).height($(this).find("img").attr("height"));
        }
      });

      $(".full-width-video").each(function () {
        $(this).height($(this).find("video").height());
        if (!$(this).find(".absolute")[0]) {
          $(this).html('<div class="absolute">' + $(this).html() + "</div>");
        }
        $(this).find(".absolute").width($(window).width());
      });

      $(".full-width-youtube").each(function () {
        $(this).height($(this).find(".bg-youtube-content").height());
        if (!$(this).find(".absolute")[0]) {
          $(this).html(
            '<div class="absolute"><div class="absolute-inner">' +
              $(this).html() +
              "</div></div>"
          );
        }
        $(this).find(".absolute").width($(window).width());
        $(this).find(".absolute-inner").width($(window).width());
        $(this)
          .find("iframe")
          .height(($(this).find(".absolute").width() * 36) / 64);

        if (
          $(this).find(".bg-youtube-content").height() >
          $(this).find("iframe").height()
        ) {
          $(this)
            .find("iframe")
            .height($(this).find(".bg-youtube-content").height());
          $(this)
            .find(".absolute-inner")
            .width(($(this).find("iframe").height() * 64) / 36);
        }

        $(this)
          .find(".absolute")
          .height($(this).find(".bg-youtube-content").height());
        var absoluteLeft =
          $(this).find(".absolute").width() -
          $(this).find(".absolute-inner").width();
        var absoluteTop =
          $(this).find(".absolute").height() - $(this).find("iframe").height();
        $(this)
          .find(".absolute-inner")
          .css("left", absoluteLeft / 2);
        $(this)
          .find("iframe")
          .css("top", absoluteTop / 2);
      });
    }

    $(".bg-video").each(function () {
      $(this).height($(this).find("video").height());
    });
  });

  $(window).bind("load", function () {
    $(".youtube").each(function () {
      var timerID;
      var played = 0;
      var box = $(this);
      var iframe = box.find("iframe").eq(0);
      var playerID = box.find("iframe").eq(0).attr("id");
      var player = new YT.Player(playerID, {
        events: {
          onStateChange: function (event) {
            if (event.data == YT.PlayerState.ENDED) {
              box.next(".youtube-text").show();
            }

            if (event.data == YT.PlayerState.PLAYING) {
              timerID = setInterval(function () {
                played++;
                if (iframe.data("show") && played >= iframe.data("show")) {
                  box.next(".youtube-text").show();
                }
              }, 1000);
            } else {
              clearInterval(timerID);
            }
          },
        },
      });
    });

    $(".bg-youtube").each(function () {
      var box = $(this);
      var iframe = box.find("iframe").eq(0);
      var playerID = box.find("iframe").eq(0).attr("id");
      var player = new YT.Player(playerID, {
        events: {
          onReady: function (event) {
            //event.target.playVideo();
            var videourl = event.target.getVideoUrl();
            var videoid = videourl.substr(videourl.indexOf("v=") + 2);
            event.target.loadPlaylist(videoid);
            event.target.setLoop(true);
            event.target.mute();
          },
        },
      });
    });
  });

  $("#header iframe").bind("load", function () {
    var content = this.contentWindow.document.documentElement;
    var frameHeight = 100;
    if (document.all) {
      frameHeight = content.scrollHeight;
    } else {
      frameHeight = content.offsetHeight;
    }
    this.style.height = frameHeight + "px";
  });

  $("#footer iframe").bind("load", function () {
    var content = this.contentWindow.document.documentElement;
    var frameHeight = 100;
    if (document.all) {
      frameHeight = content.scrollHeight;
    } else {
      frameHeight = content.offsetHeight;
    }
    this.style.height = frameHeight + "px";
  });
});

$(function () {
  $("img.wide").each(function () {
    $(this).parent().height($(this).height()).css("display", "block");
    $(this).bind("load", function () {
      $(this).parent().height($(this).height());
    });
  });
  var h = $(".head-image").height();
  $(window).bind("load resize", function () {
    if ($(".head-image").width() < 900 + 100) {
      $(".head-image").height((h * $(".head-image").width()) / (900 + 100));
    }
  });
});

