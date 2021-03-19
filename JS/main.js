function post(n, t, i, r) {
    var u = new FormData;
    Object.keys(t).forEach(function (n) {
        u.append(n, t[n])
    });
    window.fetch(n, {
        credentials: "include",
        method: "POST",
        mode: "cors",
        body: u
    }).then(function (n) {
        return n.json()
    }).then(function (n) {
        i(n)
    }).catch(function (n) {
        loadingDone();
        r && r(n)
    })
}
function get(n, t, i) {
    window.fetch(n, {
        credentials: "include",
        method: "GET",
        mode: "cors"
    }).then(function (n) {
        return n.json()
    }).then(function (n) {
        t(n)
    }).catch(function (n) {
        loadingDone();
        i && i(n)
    })
}
function update() {
    var i, r, n, t;
    if (i = Math.min(Math.max(-mouseY, -size), size) / radius * tspeed,
        r = -Math.min(Math.max(-mouseX, -size), size) / radius * tspeed,
        lasta = i,
        lastb = r,
        !(Math.abs(i) <= .01) || !(Math.abs(r) <= .01)) {
        for (sineCosine(i, r, 0),
            n = 0; n < mcList.length; n++)
            if (!mcList[n].on) {
                var u = mcList[n].cx
                    , l = mcList[n].cy * ca + mcList[n].cz * -sa
                    , f = mcList[n].cy * sa + mcList[n].cz * ca
                    , e = u * cb + f * sb
                    , o = l
                    , a = u * -sb + f * cb
                    , s = e * cc + o * -sc
                    , h = e * sc + o * cc
                    , c = a;
                mcList[n].cx = s;
                mcList[n].cy = h;
                mcList[n].cz = c;
                per = d / (d + c);
                mcList[n].x = howElliptical * s * per - howElliptical * 2;
                mcList[n].y = h * per;
                mcList[n].scale = per;
                t = per;
                t = (t - .6) * (10 / 6);
                mcList[n].alpha = t * t * t - .2;
                mcList[n].zIndex = Math.ceil(100 - Math.floor(mcList[n].cz))
            }
        doPosition()
    }
}
function positionAll() {
    for (var t = 0, i = 0, r = mcList.length, n = 0; n < r; n++)
        distr ? (t = Math.acos(-1 + (2 * (n + 1) - 1) / r),
            i = Math.sqrt(r * Math.PI) * t) : (t = Math.random() * Math.PI,
                i = Math.random() * 2 * Math.PI),
            mcList[n].cx = radius * Math.cos(i) * Math.sin(t),
            mcList[n].cy = radius * Math.sin(i) * Math.sin(t),
            mcList[n].cz = radius * Math.cos(t),
            aA[n].style.left = mcList[n].cx + oDiv.offsetWidth / 2 - mcList[n].offsetWidth / 2 + "px",
            aA[n].style.top = mcList[n].cy + oDiv.offsetHeight / 2 - mcList[n].offsetHeight / 2 + "px"
}
function doPosition() {
    for (var t, i = oDiv.offsetWidth / 2, r = oDiv.offsetHeight / 2, n = 0; n < mcList.length; n++)
        if (!mcList[n].on) {
            if (t = aA[n].style,
                mcList[n].alpha > .1)
                t.display != "" && (t.display = "");
            else {
                t.display != "none" && (t.display = "none");
                continue
            }
            t.left = mcList[n].cx + i - mcList[n].offsetWidth / 2 + "px";
            t.top = mcList[n].cy + r - mcList[n].offsetHeight / 2 + "px";
            t.filter = "alpha(opacity=" + 100 * mcList[n].alpha + ")";
            t.zIndex = mcList[n].zIndex;
            t.opacity = mcList[n].alpha
        }
}
function sineCosine(n, t, i) {
    sa = Math.sin(n * dtr);
    ca = Math.cos(n * dtr);
    sb = Math.sin(t * dtr);
    cb = Math.cos(t * dtr);
    sc = Math.sin(i * dtr);
    cc = Math.cos(i * dtr)
}
var clearSelect, DeviceInfo;
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function (n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery);
+function (n) {
    "use strict";
    function t() {
        var i = document.createElement("bootstrap")
            , n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (void 0 !== i.style[t])
                return {
                    end: n[t]
                };
        return !1
    }
    n.fn.emulateTransitionEnd = function (t) {
        var i = !1, u = this, r;
        n(this).one("bsTransitionEnd", function () {
            i = !0
        });
        return r = function () {
            i || n(u).trigger(n.support.transition.end)
        }
            ,
            setTimeout(r, t),
            this
    }
        ;
    n(function () {
        n.support.transition = t();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function (t) {
                if (n(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery);
+function (n) {
    "use strict";
    function u(i) {
        return this.each(function () {
            var r = n(this)
                , u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]', t = function (t) {
        n(t).on("click", i, this.close)
    }, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function (i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this), u = f.attr("data-target"), r;
        u || (u = f.attr("href"),
            u = u && u.replace(/.*(?=#[^\s]*$)/, ""));
        r = n("#" === u ? [] : u);
        i && i.preventDefault();
        r.length || (r = f.closest(".alert"));
        r.trigger(i = n.Event("close.bs.alert"));
        i.isDefaultPrevented() || (r.removeClass("in"),
            n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    }
        ;
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function () {
        return n.fn.alert = r,
            this
    }
        ;
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery);
+function (n) {
    "use strict";
    function i(i) {
        return this.each(function () {
            var u = n(this)
                , r = u.data("bs.button")
                , f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this, f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function (i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.isLoading = !1
    }, r;
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function (t) {
        var i = "disabled"
            , r = this.$element
            , f = r.is("input") ? "val" : "html"
            , u = r.data();
        t += "Text";
        null == u.resetText && r.data("resetText", r[f]());
        setTimeout(n.proxy(function () {
            r[f](null == u[t] ? this.options[t] : u[t]);
            "loadingText" == t ? (this.isLoading = !0,
                r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1,
                    r.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }
        ;
    t.prototype.toggle = function () {
        var t = !0, i = this.$element.closest('[data-toggle="buttons"]'), n;
        i.length ? (n = this.$element.find("input"),
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
                i.find(".active").removeClass("active"),
                this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
                    this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                this.$element.toggleClass("active"))
    }
        ;
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function () {
        return n.fn.button = r,
            this
    }
        ;
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        var r = n(t.target).closest(".btn");
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(),
            r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery);
+function (n) {
    "use strict";
    function i(i) {
        return this.each(function () {
            var u = n(this)
                , r = u.data("bs.carousel")
                , f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i)
                , e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function (t, i) {
        this.$element = n(t);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = i;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
    }, u, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function (n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    }
        ;
    t.prototype.cycle = function (t) {
        return t || (this.paused = !1),
            this.interval && clearInterval(this.interval),
            this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)),
            this
    }
        ;
    t.prototype.getItemIndex = function (n) {
        return this.$items = n.parent().children(".item"),
            this.$items.index(n || this.$active)
    }
        ;
    t.prototype.getItemForDirection = function (n, t) {
        var i = this.getItemIndex(t), f = "prev" == n && 0 === i || "next" == n && i == this.$items.length - 1, r, u;
        return f && !this.options.wrap ? t : (r = "prev" == n ? -1 : 1,
            u = (i + r) % this.$items.length,
            this.$items.eq(u))
    }
        ;
    t.prototype.to = function (n) {
        var i = this
            , t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1 || n < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                i.to(n)
            }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    }
        ;
    t.prototype.pause = function (t) {
        return t || (this.paused = !0),
            this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end),
                this.cycle(!0)),
            this.interval = clearInterval(this.interval),
            this
    }
        ;
    t.prototype.next = function () {
        if (!this.sliding)
            return this.slide("next")
    }
        ;
    t.prototype.prev = function () {
        if (!this.sliding)
            return this.slide("prev")
    }
        ;
    t.prototype.slide = function (i, r) {
        var e = this.$element.find(".item.active"), u = r || this.getItemForDirection(i, e), l = this.interval, f = "next" == i ? "left" : "right", a = this, o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0],
            s = n.Event("slide.bs.carousel", {
                relatedTarget: o,
                direction: f
            }),
            (this.$element.trigger(s),
                !s.isDefaultPrevented()) ? ((this.sliding = !0,
                    l && this.pause(),
                    this.$indicators.length) && (this.$indicators.find(".active").removeClass("active"),
                        h = n(this.$indicators.children()[this.getItemIndex(u)]),
                        h && h.addClass("active")),
                    c = n.Event("slid.bs.carousel", {
                        relatedTarget: o,
                        direction: f
                    }),
                    n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i),
                        u[0].offsetWidth,
                        e.addClass(f),
                        u.addClass(f),
                        e.one("bsTransitionEnd", function () {
                            u.removeClass([i, f].join(" ")).addClass("active");
                            e.removeClass(["active", f].join(" "));
                            a.sliding = !1;
                            setTimeout(function () {
                                a.$element.trigger(c)
                            }, 0)
                        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"),
                            u.addClass("active"),
                            this.sliding = !1,
                            this.$element.trigger(c)),
                    l && this.cycle(),
                    this) : void 0)
    }
        ;
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function () {
        return n.fn.carousel = u,
            this
    }
        ;
    r = function (t) {
        var o, r = n(this), u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")), e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()),
            f = r.attr("data-slide-to"),
            f && (e.interval = !1),
            i.call(u, e),
            f && u.data("bs.carousel").to(f),
            t.preventDefault())
    }
        ;
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function () {
        n('[data-ride="carousel"]').each(function () {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }
    function i(i) {
        return this.each(function () {
            var u = n(this)
                , r = u.data("bs.collapse")
                , f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function (i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    }, u;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function () {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    }
        ;
    t.prototype.show = function () {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"),
            !(r && r.length && (f = r.data("bs.collapse"),
                f && f.transitioning)) && (e = n.Event("show.bs.collapse"),
                    this.$element.trigger(e),
                    !e.isDefaultPrevented()))) {
            if (r && r.length && (i.call(r, "hide"),
                f || r.data("bs.collapse", null)),
                u = this.dimension(),
                this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0),
                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                this.transitioning = 1,
                o = function () {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }
                ,
                !n.support.transition)
                return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    }
        ;
    t.prototype.hide = function () {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"),
            this.$element.trigger(r),
            !r.isDefaultPrevented()))
            return i = this.dimension(),
                this.$element[i](this.$element[i]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1,
                u = function () {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }
                ,
                n.support.transition ? void this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : u.call(this)
    }
        ;
    t.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
        ;
    t.prototype.getParent = function () {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function (t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    }
        ;
    t.prototype.addAriaAndCollapsedClass = function (n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    }
        ;
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function () {
        return n.fn.collapse = u,
            this
    }
        ;
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u)
            , e = f.data("bs.collapse")
            , o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(t) {
        var i = t.attr("data-target"), r;
        return i || (i = t.attr("href"),
            i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")),
            r = i && n(i),
            r && r.length ? r : t.parent()
    }
    function u(t) {
        t && 3 === t.which || (n(o).remove(),
            n(i).each(function () {
                var u = n(this)
                    , i = r(u)
                    , f = {
                        relatedTarget: this
                    };
                i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)),
                    t.isDefaultPrevented() || (u.attr("aria-expanded", "false"),
                        i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
            }))
    }
    function e(i) {
        return this.each(function () {
            var r = n(this)
                , u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    }
    var o = ".dropdown-backdrop", i = '[data-toggle="dropdown"]', t = function (t) {
        n(t).on("click.bs.dropdown", this.toggle)
    }, f;
    t.VERSION = "3.3.7";
    t.prototype.toggle = function (t) {
        var f = n(this), i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f),
                o = i.hasClass("open"),
                u(),
                !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u),
                    e = {
                        relatedTarget: this
                    },
                    i.trigger(t = n.Event("show.bs.dropdown", e)),
                    t.isDefaultPrevented())
                    return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    }
        ;
    t.prototype.keydown = function (t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this),
            t.preventDefault(),
            t.stopPropagation(),
            !e.is(".disabled, :disabled"))) {
            if (o = r(e),
                s = o.hasClass("open"),
                !s && 27 != t.which || s && 27 == t.which)
                return 27 == t.which && o.find(i).trigger("focus"),
                    e.trigger("click");
            h = " li:not(.disabled):visible a";
            f = o.find(".dropdown-menu" + h);
            f.length && (u = f.index(t.target),
                38 == t.which && u > 0 && u--,
                40 == t.which && u < f.length - 1 && u++,
                ~u || (u = 0),
                f.eq(u).trigger("focus"))
        }
    }
        ;
    f = n.fn.dropdown;
    n.fn.dropdown = e;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function () {
        return n.fn.dropdown = f,
            this
    }
        ;
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function (n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery);
+function (n) {
    "use strict";
    function i(i, r) {
        return this.each(function () {
            var f = n(this)
                , u = f.data("bs.modal")
                , e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this, e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function (t, i) {
        this.options = i;
        this.$body = n(document.body);
        this.$element = n(t);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    }, r;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function (n) {
        return this.isShown ? this.hide() : this.show(n)
    }
        ;
    t.prototype.show = function (i) {
        var r = this
            , u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(u);
        this.isShown || u.isDefaultPrevented() || (this.isShown = !0,
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                r.$element.one("mouseup.dismiss.bs.modal", function (t) {
                    n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                })
            }),
            this.backdrop(function () {
                var f = n.support.transition && r.$element.hasClass("fade"), u;
                r.$element.parent().length || r.$element.appendTo(r.$body);
                r.$element.show().scrollTop(0);
                r.adjustDialog();
                f && r.$element[0].offsetWidth;
                r.$element.addClass("in");
                r.enforceFocus();
                u = n.Event("shown.bs.modal", {
                    relatedTarget: i
                });
                f ? r.$dialog.one("bsTransitionEnd", function () {
                    r.$element.trigger("focus").trigger(u)
                }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
            }))
    }
        ;
    t.prototype.hide = function (i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown && !i.isDefaultPrevented() && (this.isShown = !1,
            this.escape(),
            this.resize(),
            n(document).off("focusin.bs.modal"),
            this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    }
        ;
    t.prototype.enforceFocus = function () {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function (n) {
            document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    }
        ;
    t.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function (n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
        ;
    t.prototype.resize = function () {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    }
        ;
    t.prototype.hideModal = function () {
        var n = this;
        this.$element.hide();
        this.backdrop(function () {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    }
        ;
    t.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    }
        ;
    t.prototype.backdrop = function (i) {
        var e = this, f = this.$element.hasClass("fade") ? "fade" : "", r, u;
        if (this.isShown && this.options.backdrop) {
            if (r = n.support.transition && f,
                this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body),
                this.$element.on("click.dismiss.bs.modal", n.proxy(function (n) {
                    return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)),
                r && this.$backdrop[0].offsetWidth,
                this.$backdrop.addClass("in"),
                !i)
                return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
                u = function () {
                    e.removeBackdrop();
                    i && i()
                }
                ,
                n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    }
        ;
    t.prototype.handleUpdate = function () {
        this.adjustDialog()
    }
        ;
    t.prototype.adjustDialog = function () {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    }
        ;
    t.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
        ;
    t.prototype.checkScrollbar = function () {
        var n = window.innerWidth, t;
        n || (t = document.documentElement.getBoundingClientRect(),
            n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    }
        ;
    t.prototype.setScrollbar = function () {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    }
        ;
    t.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }
        ;
    t.prototype.measureScrollbar = function () {
        var n = document.createElement("div"), t;
        return n.className = "modal-scrollbar-measure",
            this.$body.append(n),
            t = n.offsetWidth - n.clientWidth,
            this.$body[0].removeChild(n),
            t
    }
        ;
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function () {
        return n.fn.modal = r,
            this
    }
        ;
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
        var r = n(this)
            , f = r.attr("href")
            , u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, ""))
            , e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function (n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal", function () {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(i) {
        return this.each(function () {
            var u = n(this)
                , r = u.data("bs.tooltip")
                , f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.tooltip", r = new t(this, f)),
                "string" == typeof i && r[i]())
        })
    }
    var t = function (n, t) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", n, t)
    }, i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function (t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0,
            this.type = t,
            this.$element = n(i),
            this.options = this.getOptions(r),
            this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
            this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            },
            this.$element[0] instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "),
            e = f.length; e--;)
            if (u = f[e],
                "click" == u)
                this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else
                "manual" != u && (o = "hover" == u ? "mouseenter" : "focusin",
                    s = "hover" == u ? "mouseleave" : "focusout",
                    this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)),
                    this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
        ;
    t.prototype.getDefaults = function () {
        return t.DEFAULTS
    }
        ;
    t.prototype.getOptions = function (t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t),
            t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            t
    }
        ;
    t.prototype.getDelegateOptions = function () {
        var t = {}
            , i = this.getDefaults();
        return this._options && n.each(this._options, function (n, r) {
            i[n] != r && (t[n] = r)
        }),
            t
    }
        ;
    t.prototype.enter = function (t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()),
            n(t.currentTarget).data("bs." + this.type, i)),
            t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0),
            i.tip().hasClass("in") || "in" == i.hoverState ? void (i.hoverState = "in") : (clearTimeout(i.timeout),
                i.hoverState = "in",
                i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function () {
                    "in" == i.hoverState && i.show()
                }, i.options.delay.show)) : i.show())
    }
        ;
    t.prototype.isInStateTrue = function () {
        for (var n in this.inState)
            if (this.inState[n])
                return !0;
        return !1
    }
        ;
    t.prototype.leave = function (t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()),
            n(t.currentTarget).data("bs." + this.type, i)),
            t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1),
            !i.isInStateTrue())
            return clearTimeout(i.timeout),
                i.hoverState = "out",
                i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function () {
                    "out" == i.hoverState && i.hide()
                }, i.options.delay.hide)) : i.hide()
    }
        ;
    t.prototype.show = function () {
        var c = n.Event("show.bs." + this.type), l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c),
                l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]),
                c.isDefaultPrevented() || !l)
                return;
            var u = this
                , r = this.tip()
                , a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement
                , v = /\s?auto?\s?/i
                , y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition()
                , o = r[0].offsetWidth
                , s = r[0].offsetHeight;
            y && (p = i,
                e = this.getPosition(this.$viewport),
                i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i,
                r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function () {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u)
            }
                ;
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    }
        ;
    t.prototype.applyPlacement = function (t, i) {
        var r = this.tip(), l = r[0].offsetWidth, e = r[0].offsetHeight, o = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10), h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function (n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i)
            , a = c ? 2 * u.left - l + h : 2 * u.top - e + f
            , v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    }
        ;
    t.prototype.replaceArrow = function (n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    }
        ;
    t.prototype.setContent = function () {
        var n = this.tip()
            , t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    }
        ;
    t.prototype.hide = function (i) {
        function f() {
            "in" != r.hoverState && u.detach();
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
            i && i()
        }
        var r = this
            , u = n(this.$tip)
            , e = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(e),
            !e.isDefaultPrevented())
            return u.removeClass("in"),
                n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", f).emulateTransitionEnd(t.TRANSITION_DURATION) : f(),
                this.hoverState = null,
                this
    }
        ;
    t.prototype.fixTitle = function () {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    }
        ;
    t.prototype.hasContent = function () {
        return this.getTitle()
    }
        ;
    t.prototype.getPosition = function (t) {
        t = t || this.$element;
        var r = t[0]
            , u = "BODY" == r.tagName
            , i = r.getBoundingClientRect();
        null == i.width && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = window.SVGElement && r instanceof window.SVGElement
            , e = u ? {
                top: 0,
                left: 0
            } : f ? null : t.offset()
            , o = {
                scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            }
            , s = u ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, o, s, e)
    }
        ;
    t.prototype.getCalculatedOffset = function (n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }
        ;
    t.prototype.getViewportAdjustedDelta = function (n, t, i, r) {
        var f = {
            top: 0,
            left: 0
        }, e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0,
            u = this.getPosition(this.$viewport),
            /right|left/.test(n) ? (o = t.top - e - u.scroll,
                s = t.top + e - u.scroll + r,
                o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e,
                    c = t.left + e + i,
                    h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)),
            f) : f
    }
        ;
    t.prototype.getTitle = function () {
        var t = this.$element
            , n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }
        ;
    t.prototype.getUID = function (n) {
        do
            n += ~~(1e6 * Math.random());
        while (document.getElementById(n));
        return n
    }
        ;
    t.prototype.tip = function () {
        if (!this.$tip && (this.$tip = n(this.options.template),
            1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
        ;
    t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
        ;
    t.prototype.enable = function () {
        this.enabled = !0
    }
        ;
    t.prototype.disable = function () {
        this.enabled = !1
    }
        ;
    t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }
        ;
    t.prototype.toggle = function (t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type),
            i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()),
                n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click,
            i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }
        ;
    t.prototype.destroy = function () {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function () {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null;
            n.$element = null
        })
    }
        ;
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function () {
        return n.fn.tooltip = i,
            this
    }
}(jQuery);
+function (n) {
    "use strict";
    function r(i) {
        return this.each(function () {
            var u = n(this)
                , r = u.data("bs.popover")
                , f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.popover", r = new t(this, f)),
                "string" == typeof i && r[i]())
        })
    }
    var t = function (n, t) {
        this.init("popover", n, t)
    }, i;
    if (!n.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.7";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function () {
        return t.DEFAULTS
    }
        ;
    t.prototype.setContent = function () {
        var n = this.tip()
            , i = this.getTitle()
            , t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof t ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    }
        ;
    t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }
        ;
    t.prototype.getContent = function () {
        var t = this.$element
            , n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    }
        ;
    t.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
        ;
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function () {
        return n.fn.popover = i,
            this
    }
}(jQuery);
+function (n) {
    "use strict";
    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(n(i).is(document.body) ? window : i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }
    function i(i) {
        return this.each(function () {
            var u = n(this)
                , r = u.data("bs.scrollspy")
                , f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.3.7";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
        ;
    t.prototype.refresh = function () {
        var t = this
            , i = "offset"
            , r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position",
            r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function () {
            var f = n(this)
                , u = f.data("target") || f.attr("href")
                , t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [[t[i]().top + r, u]] || null
        }).sort(function (n, t) {
            return n[0] - t[0]
        }).each(function () {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    }
        ;
    t.prototype.process = function () {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset, f = this.getScrollHeight(), e = this.options.offset + f - this.$scrollElement.height(), t = this.offsets, r = this.targets, u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(),
            i >= e)
            return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0])
            return this.activeTarget = null,
                this.clear();
        for (n = t.length; n--;)
            u != r[n] && i >= t[n] && (void 0 === t[n + 1] || i < t[n + 1]) && this.activate(r[n])
    }
        ;
    t.prototype.activate = function (t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
            , i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    }
        ;
    t.prototype.clear = function () {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
        ;
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function () {
        return n.fn.scrollspy = r,
            this
    }
        ;
    n(window).on("load.bs.scrollspy.data-api", function () {
        n('[data-spy="scroll"]').each(function () {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery);
+function (n) {
    "use strict";
    function r(i) {
        return this.each(function () {
            var u = n(this)
                , r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    var t = function (t) {
        this.element = n(t)
    }, u, i;
    t.VERSION = "3.3.7";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function () {
        var t = this.element, f = t.closest("ul:not(.dropdown-menu)"), i = t.data("target"), u;
        if (i || (i = t.attr("href"),
            i = i && i.replace(/.*(?=#[^\s]*$)/, "")),
            !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a")
                , e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                })
                , o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e),
                t.trigger(o),
                o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i),
                    this.activate(t.closest("li"), f),
                    this.activate(u, u.parent(), function () {
                        r.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: t[0]
                        });
                        t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: r[0]
                        })
                    }))
        }
    }
        ;
    t.prototype.activate = function (i, r, u) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            o ? (i[0].offsetWidth,
                i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active")
            , o = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && o ? f.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e();
        f.removeClass("in")
    }
        ;
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function () {
        return n.fn.tab = u,
            this
    }
        ;
    i = function (t) {
        t.preventDefault();
        r.call(n(this), "show")
    }
        ;
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery);
+function (n) {
    "use strict";
    function i(i) {
        return this.each(function () {
            var u = n(this)
                , r = u.data("bs.affix")
                , f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    var t = function (i, r) {
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
        this.$element = n(i);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition()
    }, r;
    t.VERSION = "3.3.7";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function (n, t, i, r) {
        var u = this.$target.scrollTop()
            , f = this.$element.offset()
            , e = this.$target.height();
        if (null != i && "top" == this.affixed)
            return u < i && "top";
        if ("bottom" == this.affixed)
            return null != i ? !(u + this.unpin <= f.top) && "bottom" : !(u + e <= n - r) && "bottom";
        var o = null == this.affixed
            , s = o ? u : f.top
            , h = o ? e : t;
        return null != i && u <= i ? "top" : null != r && s + h >= n - r && "bottom"
    }
        ;
    t.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop()
            , i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    }
        ;
    t.prototype.checkPositionWithEventLoop = function () {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    }
        ;
    t.prototype.checkPosition = function () {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height()
                , r = this.options.offset
                , f = r.top
                , u = r.bottom
                , h = Math.max(n(document).height(), n(document.body).height());
            if ("object" != typeof r && (u = f = r),
                "function" == typeof f && (f = r.top(this.$element)),
                "function" == typeof u && (u = r.bottom(this.$element)),
                i = this.getState(h, s, f, u),
                this.affixed != i) {
                if (null != this.unpin && this.$element.css("top", ""),
                    e = "affix" + (i ? "-" + i : ""),
                    o = n.Event(e + ".bs.affix"),
                    this.$element.trigger(o),
                    o.isDefaultPrevented())
                    return;
                this.affixed = i;
                this.unpin = "bottom" == i ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == i && this.$element.offset({
                top: h - s - u
            })
        }
    }
        ;
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function () {
        return n.fn.affix = r,
            this
    }
        ;
    n(window).on("load", function () {
        n('[data-spy="affix"]').each(function () {
            var r = n(this)
                , t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery);
!function (n) {
    if ("function" == typeof define && define.amd)
        define(["jquery"], n);
    else if ("object" == typeof exports && "object" == typeof module)
        n(require("jquery"));
    else {
        if (!window.jQuery)
            throw new Error("Not found jQuery.");
        n(window.jQuery)
    }
}(function (n) {
    function h(n, t) {
        window.console && window.console.trace && (console.trace(n),
            t && console.trace(t))
    }
    function t(n) {
        return n.data()
    }
    function c(n, t, i) {
        if (t && t.key) {
            var r, u = i.separator || ",";
            i && i.multiWord ? (r = n.val().split(u),
                r[r.length - 1] = t.key,
                n.val(r.join(u)).focus()) : n.attr("data-id", t.id).focus().val(t.key);
            n.trigger("onSetSelectValue", [t, (i.data.value || i._lastData.value)[t.index]])
        }
    }
    function f(n, t, i) {
        if (t.is(":visible")) {
            i.autoDropup && setTimeout(function () {
                var i = t.parents(".input-group");
                s.height() + s.scrollTop() - n.offset().top < t.height() && n.offset().top > t.height() + s.scrollTop() ? i.addClass("dropup") : i.removeClass("dropup")
            }, 10);
            var r = {};
            return "left" === i.listAlign ? r = {
                left: n.siblings("div").width() - n.parent().width(),
                right: "auto"
            } : "right" === i.listAlign && (r = {
                left: "auto",
                right: 0
            }),
                w && !i.showBtn && (t.parents(".input-group").hasClass("dropup") ? (r.top = "auto",
                    r.bottom = n.parent().height()) : (r.top = n.parent().height(),
                        r.bottom = "auto")),
                i.autoMinWidth || (r["min-width"] = n.parent().width()),
                t.css(r),
                n
        }
    }
    function i(n, t) {
        var r, u, i;
        return t.indexId === -1 && !t.idField || t.multiWord ? n : (r = n.css("background-color").replace(/ /g, "").split(",", 3).join(","),
            u = t.inputBgColor || "rgba(255,255,255,0.1)",
            i = t.inputWarnColor || "rgba(255,255,0,0.1)",
            n.attr("data-id") || !n.val() ? n.css("background", u) : (~i.indexOf(r) || n.trigger("onUnsetSelectValue").css("background", i),
                n))
    }
    function l(n, t, i) {
        var r, u, f = n.parent().find("tbody tr." + i.listHoverCSS);
        f.length && (r = (f.index() + 3) * f.height(),
            u = Number(t.css("max-height").replace("px", "")),
            r > u || t.scrollTop() > u ? r -= u : r = 0,
            t.scrollTop(r))
    }
    function a(n, t) {
        n.find("tr." + t.listHoverCSS).removeClass(t.listHoverCSS)
    }
    function k(n, t, i) {
        return !(!t.length || n.data("bsSuggest")) && (n.data("bsSuggest", {
            options: i
        }),
            !0)
    }
    function v(n) {
        var t, i = !0;
        for (t in n)
            if ("value" === t) {
                i = !1;
                break
            }
        return i ? (h("返回数据格式错误!"),
            !1) : !!n.value.length && n
    }
    function e(t, i) {
        var r = i.effectiveFields;
        return !("__index" === t || r.length && !~n.inArray(t, r))
    }
    function d(t, i) {
        return ~n.inArray(t, i.searchFields)
    }
    function o(n, t, i) {
        var l, c, u, w, a, v, r = n.parent().find("ul.dropdown-menu"), h = 0, s = ['<table class="table table-sm" style="margin:0">'], y, o;
        if (!t || !(l = t.value.length))
            return r.empty().hide(),
                n;
        if (y = t.value,
            i._lastData && JSON.stringify(i._lastData.value) === JSON.stringify(y) && r.find("tr").length === l)
            return r.show(),
                f(n, r, i),
                n;
        if (i._lastData = t,
            i.showHeader) {
            s.push("<thead><tr>");
            for (u in y[0])
                e(u, i) && (s.push("<th>", i.effectiveFieldsAlias[u] || u, 0 === h ? "(" + l + ")" : "", "<\/th>"),
                    h++);
            s.push("<\/tr><\/thead>")
        }
        for (s.push("<tbody>"),
            c = 0; c < l; c++) {
            h = 0;
            w = [];
            o = y[c];
            a = o[i.idField] || "";
            v = o[i.keyField] || "";
            for (u in o)
                v || i.indexKey !== h || (v = o[u]),
                    a || i.indexId !== h || (a = o[u]),
                    h++,
                    e(u, i) && w.push('<td data-name="', u, '">', o[u], "<\/td>");
            s.push('<tr data-index="', o.__index || c, '" data-id="', a, '" data-key="', v, '">', w.join(""), "<\/tr>")
        }
        return s.push("<\/tbody><\/table>"),
            r.html(s.join("")).show(),
            setTimeout(function () {
                if (!p) {
                    var n = r.find("table:eq(0)")
                        , t = 0
                        , i = 0;
                    r.height() < n.height() && Number(r.css("min-width").replace("px", "")) < r.width() && (t = 18,
                        i = 20);
                    r.css("padding-right", t);
                    n.css("margin-bottom", i)
                }
            }, 301),
            f(n, r, i),
            n
    }
    function y(t, i) {
        i = i || "";
        var r = {
            type: "GET",
            dataType: t.jsonp ? "jsonp" : "json",
            timeout: 5e3
        };
        return t.jsonp && (r.jsonp = t.jsonp),
            n.isFunction(t.fnAdjustAjaxParam) && (r = n.extend(r, t.fnAdjustAjaxParam(i, t))),
            r.url = function () {
                if (!i || r.data)
                    return r.url || t.url;
                var n = "?";
                return /=$/.test(t.url) ? n = "" : /\?/.test(t.url) && (n = "&"),
                    t.url + n + i
            }(),
            n.ajax(r).done(function (n) {
                t.data = t.fnProcessData(n)
            }).fail(h)
    }
    function g(t, i, r, u) {
        return r = n.trim(r),
            u.ignorecase && (t = t.toLocaleLowerCase(),
                r = r.toLocaleLowerCase()),
            r && (e(i, u) || d(i, u)) && (~r.indexOf(t) || u.twoWayMatch && ~t.indexOf(r))
    }
    function nt(t, i, r, u) {
        var f, c, e, s, h, o = {
            value: []
        };
        if (t = t || "",
            n.isFunction(u.fnPreprocessKeyword) && (t = u.fnPreprocessKeyword(t, u)),
            u.url)
            y(u, t).done(function (n) {
                r(i, u.data, u);
                i.trigger("onDataRequestSuccess", n);
                "firstByUrl" === u.getDataMethod && (u.url = null)
            });
        else {
            if (f = u.data,
                c = v(f))
                if (t) {
                    for (h = f.value.length,
                        e = 0; e < h; e++)
                        for (s in f.value[e])
                            if (f.value[e][s] && g(t, s, f.value[e][s] + "", u)) {
                                o.value.push(f.value[e]);
                                o.value[o.value.length - 1].__index = e;
                                break
                            }
                } else
                    o = f;
            r(i, o, u)
        }
    }
    function tt(n) {
        return v(n)
    }
    function it(t, i) {
        var r = t.prev("i.clearable");
        return i.clearable && !r.length && (r = n('<i class="clearable glyphicon glyphicon-remove"><\/i>').prependTo(t.parent())),
            r.css({
                position: "absolute",
                top: 12,
                right: i.showBtn ? (t.next(".input-group-btn").width() || 33) + 2 : 12,
                zIndex: 4,
                cursor: "pointer",
                fontSize: 12
            }).hide()
    }
    var p, s = n(window), w = !!window.ActiveXObject || "ActiveXObject" in window, r = navigator.userAgent.match(/Chrome\/(\d+)/), b, u;
    r && (r = Number(r[1]));
    p = w || r > 51;
    b = {
        url: null,
        jsonp: null,
        data: {
            value: []
        },
        indexId: 0,
        indexKey: 0,
        idField: "",
        keyField: "",
        autoSelect: !0,
        allowNoKeyword: !0,
        getDataMethod: "firstByUrl",
        delayUntilKeyup: !1,
        ignorecase: !1,
        effectiveFields: [],
        effectiveFieldsAlias: {},
        searchFields: [],
        twoWayMatch: !0,
        multiWord: !1,
        separator: ",",
        autoDropup: !1,
        autoMinWidth: !1,
        showHeader: !1,
        showBtn: !0,
        inputBgColor: "",
        inputWarnColor: "rgba(255,0,0,.1)",
        listStyle: {
            "padding-top": 0,
            "max-height": "375px",
            "max-width": "800px",
            overflow: "auto",
            width: "auto",
            transition: "0.3s",
            "-webkit-transition": "0.3s",
            "-moz-transition": "0.3s",
            "-o-transition": "0.3s"
        },
        listAlign: "left",
        listHoverStyle: "background: #07d; color:#fff",
        listHoverCSS: "jhover",
        clearable: !1,
        keyLeft: 37,
        keyUp: 38,
        keyRight: 39,
        keyDown: 40,
        keyEnter: 13,
        fnProcessData: tt,
        fnGetData: nt,
        fnAdjustAjaxParam: null,
        fnPreprocessKeyword: null
    };
    u = {
        init: function (r) {
            var u = this;
            return r = r || {},
                void 0 === r.showHeader && r.effectiveFields && r.effectiveFields.length > 1 && (r.showHeader = !0),
                r = n.extend(!0, {}, b, r),
                r.processData && (r.fnProcessData = r.processData),
                r.getData && (r.fnGetData = r.getData),
                "firstByUrl" === r.getDataMethod && r.url && !r.delayUntilKeyup && y(r).done(function (n) {
                    r.url = null;
                    u.trigger("onDataRequestSuccess", n)
                }),
                n("#bsSuggest").length || n("head:eq(0)").append('<style id="bsSuggest">.' + r.listHoverCSS + "{" + r.listHoverStyle + "}<\/style>"),
                u.each(function () {
                    var h, v, u = n(this), s = it(u, r), e = u.parents(".input-group").find("ul.dropdown-menu:eq(0)");
                    return k(u, e, r) ? (r.showBtn || u.css("border-radius", "4px").parents(".input-group:eq(0)").css("width", "100%").find(".btn:eq(0)").hide(),
                        u.removeClass("disabled").prop("disabled", !1).attr("autocomplete", "off"),
                        e.css(r.listStyle),
                        r.inputBgColor || (r.inputBgColor = u.css("background-color")),
                        u.on("keydown", function (n) {
                            var i, f;
                            if (e.is(":visible")) {
                                if (i = e.find("." + r.listHoverCSS),
                                    f = "",
                                    a(e, r),
                                    n.keyCode === r.keyDown) {
                                    if (i.length ? i.next().length ? f = t(i.next().mouseover()) : r.autoSelect && u.val(u.attr("alt")).attr("data-id", "") : f = t(e.find("tbody tr:first").mouseover()),
                                        l(u, e, r),
                                        !r.autoSelect)
                                        return
                                } else if (n.keyCode === r.keyUp) {
                                    if (i.length ? i.prev().length ? f = t(i.prev().mouseover()) : r.autoSelect && u.val(u.attr("alt")).attr("data-id", "") : f = t(e.find("tbody tr:last").mouseover()),
                                        l(u, e, r),
                                        !r.autoSelect)
                                        return
                                } else
                                    n.keyCode === r.keyEnter ? (f = t(i),
                                        e.hide().empty()) : u.attr("data-id", "");
                                c(u, f, r)
                            }
                        }).on("keyup input", function (t) {
                            var f;
                            return ~n.inArray(t.keyCode, [r.keyDown, r.keyUp, r.keyEnter]) ? (u.val(u.val()),
                                void i(u, r)) : (t.keyCode && i(u, r),
                                    clearTimeout(v),
                                    void (v = setTimeout(function () {
                                        f = u.val();
                                        n.trim(f) && f === u.attr("alt") || (u.attr("alt", f),
                                            r.multiWord && (f = f.split(r.separator).reverse()[0]),
                                            (f.length || r.allowNoKeyword) && r.fnGetData(n.trim(f), u, o, r))
                                    }, 300)))
                        }).on("focus", function () {
                            f(u, e, r)
                        }).on("blur", function () {
                            h || e.css("display", "")
                        }).on("click", function () {
                            var t = u.val();
                            return n.trim(t) && t === u.attr("alt") && e.find("table tr").length ? e.show() : void (e.is(":visible") || (r.multiWord && (t = t.split(r.separator).reverse()[0]),
                                (t.length || r.allowNoKeyword) && r.fnGetData(n.trim(t), u, o, r)))
                        }),
                        u.parent().find(".btn:eq(0)").attr("data-toggle", "").click(function () {
                            var n = "none";
                            return e.css("display") === n && (n = "block",
                                r.url ? (u.click().focus(),
                                    e.find("tr").length || (n = "none")) : o(u, r.data, r)),
                                e.css("display", n),
                                !1
                        }),
                        e.mouseenter(function () {
                            h = 1;
                            u.blur()
                        }).mouseleave(function () {
                            h = 0;
                            u.focus()
                        }).on("mouseenter", "tbody tr", function () {
                            return a(e, r),
                                n(this).addClass(r.listHoverCSS),
                                !1
                        }).on("mousedown", "tbody tr", function () {
                            c(u, t(n(this)), r);
                            i(u, r);
                            e.hide()
                        }),
                        void (s.length && (s.click(function () {
                            u.val("").attr("data-id", "");
                            i(u, r)
                        }),
                            u.parent().mouseenter(function () {
                                u.prop("disabled") || s.show()
                            }).mouseleave(function () {
                                s.hide()
                            })))) : void console.warn("不是一个标准的 bootstrap 下拉式菜单或已初始化:", u)
                })
        },
        show: function () {
            return this.each(function () {
                n(this).click()
            })
        },
        hide: function () {
            return this.each(function () {
                n(this).parent().find("ul.dropdown-menu").css("display", "")
            })
        },
        disable: function () {
            return this.each(function () {
                n(this).attr("disabled", !0).parent().find(".btn:eq(0)").prop("disabled", !0)
            })
        },
        enable: function () {
            return this.each(function () {
                n(this).attr("disabled", !1).parent().find(".btn:eq(0)").prop("disabled", !1)
            })
        },
        destroy: function () {
            return this.each(function () {
                n(this).off().removeData("bsSuggest").removeAttr("style").parent().find(".btn:eq(0)").off().show().attr("data-toggle", "dropdown").prop("disabled", !1).next().css("display", "").off()
            })
        },
        version: function () {
            return "0.1.17"
        }
    };
    n.fn.bsSuggest = function (t) {
        if ("string" == typeof t && u[t]) {
            var i = !0;
            return this.each(function () {
                if (!n(this).data("bsSuggest"))
                    return i = !1
            }),
                i || "init" === t || "version" === t ? u[t].apply(this, [].slice.call(arguments, 1)) : this
        }
        return u.init.apply(this, arguments)
    }
}),
    function (n, t) {
        typeof define == "function" && define.amd ? define(["$"], t) : typeof exports == "object" ? module.exports = t() : n.Query = t(window.Zepto || window.jQuery || $)
    }(this, function (n) {
        return {
            getQuery: function (n, t, r) {
                var h = new RegExp("(^|&|#)" + n + "=([^&]*)(&|$|#)", "i"), u, f, e, o, s;
                if (r = r || window,
                    u = r.location.href,
                    o = "",
                    f = t == "#" ? u.split("#") : u.split("?"),
                    e = f.length == 1 ? "" : f[1],
                    e != "")
                    for (gg = e.split(/&|#/),
                        s = gg.length,
                        str = arguments[0] + "=",
                        i = 0; i < s; i++)
                        if (gg[i].indexOf(str) == 0) {
                            o = gg[i].replace(str, "");
                            break
                        }
                return decodeURI(o)
            },
            getForm: function (t) {
                var i = {}, r = {}, f, u, e;
                n(t).find("*[name]").each(function (t, u) {
                    var h, s = n(u).attr("name"), e = n.trim(n(u).val()), f = [], o, c;
                    s == "" || n(u).hasClass("getvalued") || (n(u).data("type") == "money" && (e = e.replace(/\,/gi, "")),
                        n(u).attr("type") == "radio" && (o = null,
                            n("input[name='" + s + "']:radio").each(function () {
                                n(this).is(":checked") && (o = n.trim(n(this).val()))
                            }),
                            e = o ? o : ""),
                        n(u).attr("type") == "checkbox" && (o = [],
                            n("input[name='" + s + "']:checkbox").each(function () {
                                n(this).is(":checked") && o.push(n.trim(n(this).val()))
                            }),
                            e = o.length ? o.join(",") : ""),
                        n(u).attr("listvalue") && (i[n(u).attr("listvalue")] || (i[n(u).attr("listvalue")] = [],
                            n("input[listvalue='" + n(u).attr("listvalue") + "']").each(function () {
                                var r, t, f;
                                n(this).val() != "" && (r = n(this).attr("name"),
                                    t = {},
                                    t[r] = n(this).data("type") == "json" ? JSON.parse(n(this).val()) : n.trim(n(this).val()),
                                    n(this).attr("paramquest") && (f = JSON.parse(n(this).attr("paramquest")),
                                        t = n.extend(t, f)),
                                    i[n(u).attr("listvalue")].push(t),
                                    n(this).addClass("getvalued"))
                            }))),
                        n(u).attr("arrayvalue") && (i[n(u).attr("arrayvalue")] || (i[n(u).attr("arrayvalue")] = [],
                            n("input[arrayvalue='" + n(u).attr("arrayvalue") + "']").each(function () {
                                var t, r;
                                n(this).val() != "" && (t = {},
                                    t = n(this).data("type") == "json" ? JSON.parse(n(this).val()) : n.trim(n(this).val()),
                                    n(this).attr("paramquest") && (r = JSON.parse(n(this).attr("paramquest")),
                                        t = n.extend(t, r)),
                                    i[n(u).attr("arrayvalue")].push(t))
                            }))),
                        s == "" || n(u).hasClass("getvalued")) || (s.match(/\./) ? (f = s.split("."),
                            h = f[0],
                            f.length == 3 ? (r[f[1]] = r[f[1]] || {},
                                r[f[1]][f[2]] = e) : n(u).data("type") == "json" ? (r[f[1]] = JSON.parse(e),
                                    n(u).attr("paramquest") && (c = JSON.parse(n(u).attr("paramquest")),
                                        r[f[1]] = n.extend(r[f[1]], c))) : r[f[1]] = e,
                            i[h] = i[h] ? n.extend({}, i[h], r) : r) : i[s] = e)
                });
                f = {};
                for (u in i)
                    e = i[u],
                        f[u] = typeof e == "object" ? JSON.stringify(e) : i[u];
                return n(".getvalued").removeClass("getvalued"),
                    f
            },
            setHash: function (t) {
                var u = "", r, i;
                t = n.extend(this.getHash(), t);
                r = [];
                for (i in t)
                    t[i] != "" && r.push(i + "=" + encodeURIComponent(t[i]));
                return u += r.join("&"),
                    location.hash = u,
                    this
            },
            getHash: function (n) {
                var u, t, f, i, e, r;
                if (typeof n == "string")
                    return this.getQuery(n, "#");
                if (u = {},
                    t = location.hash,
                    t.length > 0)
                    for (t = t.substr(1),
                        f = t.split("&"),
                        i = 0,
                        e = f.length; i < e; i++)
                        r = f[i].split("="),
                            r.length > 0 && (u[r[0]] = decodeURI(r[1]) || "");
                return u
            }
        }
    }),
    function (n, t) {
        typeof define == "function" && define.amd ? define(["$", "query"], t) : typeof exports == "object" ? module.exports = t() : n.Paging = t(window.Zepto || window.jQuery || $, Query)
    }(this, function () {
        "use strict";
        function t(n, t) {
            var i = n.currentTarget
                , f = n.clientX
                , e = n.clientY;
            if (i instanceof Element && typeof f == "number" && typeof e == "number")
                return r({
                    clientX: f,
                    clientY: e
                }, i.getBoundingClientRect(), window.getComputedStyle(i), u(t))
        }
        function r(n, t, i, r) {
            var e = document, o = e.body.appendChild(e.createElement("div")), f = o.style, s;
            f.position = "absolute";
            f.overflow = "hidden";
            f.pointerEvents = "none";
            f.left = t.left + e.documentElement.scrollLeft + e.body.scrollLeft + "px";
            f.top = t.top + e.documentElement.scrollTop + e.body.scrollTop + "px";
            f.width = t.width + "px";
            f.height = t.height + "px";
            f.zIndex = "" + ((i.zIndex && parseInt(i.zIndex, 10) || 0) + 1);
            f.borderTopLeftRadius = i.borderTopLeftRadius;
            f.borderTopRightRadius = i.borderTopRightRadius;
            f.borderBottomLeftRadius = i.borderBottomLeftRadius;
            f.borderBottomRightRadius = i.borderBottomRightRadius;
            f.opacity = r.opacity;
            s = o.appendChild(e.createElement("div"));
            s.className = r.className;
            var c = Math.max(n.clientX - t.left, t.right - n.clientX)
                , l = Math.max(n.clientY - t.top, t.bottom - n.clientY)
                , h = Math.sqrt(c * c + l * l)
                , u = s.style;
            return u.backgroundColor = r.color,
                u.width = h * 2 + "px",
                u.height = h * 2 + "px",
                u.marginLeft = n.clientX - t.left - h + "px",
                u.marginTop = n.clientY - t.top - h + "px",
                u.borderRadius = "50%",
                u.transitionProperty = "transform,opacity",
                u.transitionDuration = r.spreadingDuration + "," + r.clearingDuration,
                u.transitionTimingFunction = r.spreadingTimingFunction + "," + r.clearingTimingFunction,
                u.transitionDelay = r.spreadingDelay + "," + r.clearingDelay,
                u.transform = "scale(0)",
                u.opacity = "1",
                setTimeout(function () {
                    u.transform = "scale(1)";
                    u.opacity = "0"
                }),
                s.addEventListener("transitionend", function (n) {
                    n.propertyName === "opacity" && o.parentNode && o.parentNode.removeChild(o)
                }),
                o
        }
        function u(t) {
            if (!t)
                return n;
            var i = {};
            return Object.keys(n).forEach(function (r) {
                i[r] = t.hasOwnProperty(r) ? t[r] : n[r]
            }),
                i
        }
        var n = {
            className: "",
            color: "rgba(0, 0, 0, .1)",
            opacity: null,
            spreadingDuration: ".4s",
            spreadingDelay: "0s",
            spreadingTimingFunction: "linear",
            clearingDuration: "1s",
            clearingDelay: "0s",
            clearingTimingFunction: "ease-in-out"
        }
            , i = Object.freeze({
                defaultOptions: n,
                "default": t
            });
        return Object.keys(i).reduce(function (n, t) {
            return n[t] = i[t],
                n
        }, t)
    }),
    function (n) {
        n.fn.serializeObject = function () {
            var t = {}
                , i = this.serializeArray();
            return n.each(i, function () {
                t[this.name] ? (t[this.name].push || (t[this.name] = [t[this.name]]),
                    t[this.name].push(this.value || "")) : t[this.name] = this.value || ""
            }),
                t
        }
    }(jQuery);
$(function () {
    var n, t;
    $(".demo1").bootstrapNews({
        newsPerPage: 5,
        autoplay: !0,
        pauseOnHover: !0,
        direction: "up",
        newsTickerInterval: 2e3,
        onToDo: function () { }
    });
    $(".notices").bootstrapNews({
        newsPerPage: 4,
        autoplay: !0,
        pauseOnHover: !0,
        navigation: !1,
        direction: "down",
        newsTickerInterval: 2500,
        onToDo: function () { }
    });
    $("a[href]").click(function () {
        $(this).attr("target") != "_blank" && ($(this).attr("href").indexOf("#") >= 0 || $(this).attr("href").indexOf("javascript") >= 0 || (loading(),
            setTimeout(function () {
                loadingDone();
                window.notie.alert({
                    type: 4,
                    text: "页面加载失败！",
                    time: 4
                })
            }, 6e4)))
    });
    n = $(".cd-main-header");
    document.documentElement.scrollTop || document.body.scrollTop > 0 ? n.css("background-color", "white") : n.css("background-color", "transparent");
    document.onscroll = function () {
        document.documentElement.scrollTop || document.body.scrollTop > 10 ? n.css({
            "background-color": "white",
            transition: "all 1s ease-in-out"
        }) : n.css({
            "background-color": "transparent",
            transition: "all 1s ease-in-out"
        })
    }
        ;
    $("#search").bsSuggest({
        allowNoKeyword: !1,
        multiWord: !0,
        separator: ",",
        getDataMethod: "url",
        url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?p=3&t=" + (new Date).getTime() + "&wd=",
        jsonp: "cb",
        processData: function (n) {
            var t, i = {
                value: []
            }, r;
            if (!n || !n.s || n.s.length === 0)
                return !1;
            for (r = n.s.length,
                t = 0; t < r; t++)
                i.value.push({
                    word: n.s[t]
                });
            return i.defaults = "baidu",
                i
        }
    });
    t = new Tippy(".tippy-scale", {
        position: "bottom",
        animation: "scale",
        arrow: "true",
        theme: "light"
    });
    $(".btn").on("mousedown", function (n) {
        window.ripplet(n, {
            color: null,
            className: "rainbow",
            clearingDuration: "3s",
            spreadingDuration: "1s"
        })
    });
    Object.prototype.hasOwnProperty.call(window, "event") || ["mousedown", "mouseenter", "onmouseleave"].forEach(function (n) {
        window.addEventListener(n, function (n) {
            window.event = n
        }, !0)
    })
});
clearSelect = "getSelection" in window ? function () {
    window.getSelection().removeAllRanges()
}
    : function () {
        document.selection.empty()
    }
    ,
    function (n, t) {
        function u() {
            o(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
            f();
            r()
        }
        function r() {
            for (var n = 0; n < i.length; n++) {
                if (i[n].alpha <= 0) {
                    t.body.removeChild(i[n].el);
                    i.splice(n, 1);
                    continue
                }
                i[n].y--;
                i[n].scale += .004;
                i[n].alpha -= .013;
                i[n].el.style.cssText = "left:" + i[n].x + "px;top:" + i[n].y + "px;opacity:" + i[n].alpha + ";transform:scale(" + i[n].scale + "," + i[n].scale + ") rotate(45deg);background:" + i[n].color
            }
            requestAnimationFrame(r)
        }
        function f() {
            var t = typeof n.onclick == "function" && n.onclick;
            n.onclick = function (n) {
                t && t();
                e(n)
            }
        }
        function e(n) {
            var r = t.createElement("div");
            r.className = "heart";
            i.push({
                el: r,
                x: n.clientX - 5,
                y: n.clientY - 5,
                scale: 1,
                alpha: 1,
                color: s()
            });
            t.body.appendChild(r)
        }
        function o(n) {
            var i = t.createElement("style");
            i.type = "text/css";
            try {
                i.appendChild(t.createTextNode(n))
            } catch (r) {
                i.styleSheet.cssText = n
            }
            t.getElementsByTagName("head")[0].appendChild(i)
        }
        function s() {
            return "rgb(" + ~~(Math.random() * 255) + "," + ~~(Math.random() * 255) + "," + ~~(Math.random() * 255) + ")"
        }
        var i = [];
        n.requestAnimationFrame = function () {
            return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame || function (n) {
                setTimeout(n, 1e3 / 60)
            }
        }();
        u()
    }(window, document);
DeviceInfo = function () {
    var r = typeof self != "undefined" ? self : this
        , i = r || {}
        , t = {
            navigator: typeof r.navigator != "undefined" ? r.navigator : {},
            infoMap: {
                engine: ["WebKit", "Trident", "Gecko", "Presto"],
                browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Arora", "Lunascape", "QupZilla", "Coc Coc", "Kindle", "Iceweasel", "Konqueror", "Iceape", "SeaMonkey", "Epiphany", "360", "360SE", "360EE", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
                os: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
                device: ["Mobile", "Tablet", "iPad"]
            }
        }
        , n = function () {
            return {
                getMatchMap: function (n) {
                    return {
                        Trident: n.indexOf("Trident") > -1 || n.indexOf("NET CLR") > -1,
                        Presto: n.indexOf("Presto") > -1,
                        WebKit: n.indexOf("AppleWebKit") > -1,
                        Gecko: n.indexOf("Gecko/") > -1,
                        Safari: n.indexOf("Safari") > -1,
                        Chrome: n.indexOf("Chrome") > -1 || n.indexOf("CriOS") > -1,
                        IE: n.indexOf("MSIE") > -1 || n.indexOf("Trident") > -1,
                        Edge: n.indexOf("Edge") > -1,
                        Firefox: n.indexOf("Firefox") > -1 || n.indexOf("FxiOS") > -1,
                        "Firefox Focus": n.indexOf("Focus") > -1,
                        Chromium: n.indexOf("Chromium") > -1,
                        Opera: n.indexOf("Opera") > -1 || n.indexOf("OPR") > -1,
                        Vivaldi: n.indexOf("Vivaldi") > -1,
                        Yandex: n.indexOf("YaBrowser") > -1,
                        Arora: n.indexOf("Arora") > -1,
                        Lunascape: n.indexOf("Lunascape") > -1,
                        QupZilla: n.indexOf("QupZilla") > -1,
                        "Coc Coc": n.indexOf("coc_coc_browser") > -1,
                        Kindle: n.indexOf("Kindle") > -1 || n.indexOf("Silk/") > -1,
                        Iceweasel: n.indexOf("Iceweasel") > -1,
                        Konqueror: n.indexOf("Konqueror") > -1,
                        Iceape: n.indexOf("Iceape") > -1,
                        SeaMonkey: n.indexOf("SeaMonkey") > -1,
                        Epiphany: n.indexOf("Epiphany") > -1,
                        "360": n.indexOf("QihooBrowser") > -1 || n.indexOf("QHBrowser") > -1,
                        "360EE": n.indexOf("360EE") > -1,
                        "360SE": n.indexOf("360SE") > -1,
                        UC: n.indexOf("UC") > -1 || n.indexOf(" UBrowser") > -1,
                        QQBrowser: n.indexOf("QQBrowser") > -1,
                        QQ: n.indexOf("QQ/") > -1,
                        Baidu: n.indexOf("Baidu") > -1 || n.indexOf("BIDUBrowser") > -1,
                        Maxthon: n.indexOf("Maxthon") > -1,
                        Sogou: n.indexOf("MetaSr") > -1 || n.indexOf("Sogou") > -1,
                        LBBROWSER: n.indexOf("LBBROWSER") > -1,
                        "2345Explorer": n.indexOf("2345Explorer") > -1,
                        TheWorld: n.indexOf("TheWorld") > -1,
                        XiaoMi: n.indexOf("MiuiBrowser") > -1,
                        Quark: n.indexOf("Quark") > -1,
                        Qiyu: n.indexOf("Qiyu") > -1,
                        Wechat: n.indexOf("MicroMessenger") > -1,
                        Taobao: n.indexOf("AliApp(TB") > -1,
                        Alipay: n.indexOf("AliApp(AP") > -1,
                        Weibo: n.indexOf("Weibo") > -1,
                        Douban: n.indexOf("com.douban.frodo") > -1,
                        Suning: n.indexOf("SNEBUY-APP") > -1,
                        iQiYi: n.indexOf("IqiyiApp") > -1,
                        Windows: n.indexOf("Windows") > -1,
                        Linux: n.indexOf("Linux") > -1 || n.indexOf("X11") > -1,
                        "Mac OS": n.indexOf("Macintosh") > -1,
                        Android: n.indexOf("Android") > -1 || n.indexOf("Adr") > -1,
                        Ubuntu: n.indexOf("Ubuntu") > -1,
                        FreeBSD: n.indexOf("FreeBSD") > -1,
                        Debian: n.indexOf("Debian") > -1,
                        "Windows Phone": n.indexOf("IEMobile") > -1 || n.indexOf("Windows Phone") > -1,
                        BlackBerry: n.indexOf("BlackBerry") > -1 || n.indexOf("RIM") > -1,
                        MeeGo: n.indexOf("MeeGo") > -1,
                        Symbian: n.indexOf("Symbian") > -1,
                        iOS: n.indexOf("like Mac OS X") > -1,
                        "Chrome OS": n.indexOf("CrOS") > -1,
                        WebOS: n.indexOf("hpwOS") > -1,
                        Mobile: n.indexOf("Mobi") > -1 || n.indexOf("iPh") > -1 || n.indexOf("480") > -1,
                        Tablet: n.indexOf("Tablet") > -1 || n.indexOf("Nexus 7") > -1,
                        iPad: n.indexOf("iPad") > -1
                    }
                },
                matchInfoMap: function (i) {
                    var e = t.navigator.userAgent || {}, o = n.getMatchMap(e), r, u, f;
                    for (r in t.infoMap)
                        for (u = 0; u < t.infoMap[r].length; u++)
                            f = t.infoMap[r][u],
                                o[f] && (i[r] = f)
                },
                getOS: function () {
                    var t = this;
                    return n.matchInfoMap(t),
                        t.os
                },
                getOSVersion: function () {
                    var i = this, n = t.navigator.userAgent || {}, r;
                    return i.osVersion = "",
                        r = {
                            Windows: function () {
                                var t = n.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
                                return {
                                    "6.4": "10",
                                    "6.3": "8.1",
                                    "6.2": "8",
                                    "6.1": "7",
                                    "6.0": "Vista",
                                    "5.2": "XP",
                                    "5.1": "XP",
                                    "5.0": "2000"
                                }[t] || t
                            },
                            Android: function () {
                                return n.replace(/^.*Android ([\d.]+);.*$/, "$1")
                            },
                            iOS: function () {
                                return n.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
                            },
                            Debian: function () {
                                return n.replace(/^.*Debian\/([\d.]+).*$/, "$1")
                            },
                            "Windows Phone": function () {
                                return n.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
                            },
                            "Mac OS": function () {
                                return n.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".")
                            },
                            WebOS: function () {
                                return n.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
                            }
                        },
                        r[i.os] && (i.osVersion = r[i.os](),
                            i.osVersion == n && (i.osVersion = "")),
                        i.osVersion
                },
                GetOSBit: function () {
                    return navigator.userAgent.indexOf("x64") > 0 ? "64位" : ""
                },
                getOrientationStatu: function () {
                    var n = window.matchMedia("(orientation: portrait)");
                    return n.matches ? "竖屏" : "横屏"
                },
                getDeviceType: function () {
                    var t = this;
                    return t.device = "PC",
                        n.matchInfoMap(t),
                        t.device
                },
                getNetwork: function () {
                    return navigator && navigator.connection && navigator.connection.effectiveType
                },
                getLanguage: function () {
                    var n = this;
                    return n.language = function () {
                        var i = t.navigator.browserLanguage || t.navigator.language
                            , n = i.split("-");
                        return n[1] && (n[1] = n[1].toUpperCase()),
                            n.join("_")
                    }(),
                        n.language
                },
                getBrowserInfo: function () {
                    var u = this, o, c, s;
                    n.matchInfoMap(u);
                    var r = t.navigator.userAgent || {}
                        , h = function (n, i) {
                            var r = t.navigator.mimeTypes;
                            for (var u in r)
                                if (r[u][n] == i)
                                    return !0;
                            return !1
                        }
                        , f = n.getMatchMap(r)
                        , e = !1;
                    if (i.chrome && (o = r.replace(/^.*Chrome\/([\d]+).*$/, "$1"),
                        o > 36 && i.showModalDialog ? e = !0 : o > 45 && (e = h("type", "application/vnd.chromium.remoting-viewer"))),
                        f.Baidu && f.Opera && (f.Baidu = !1),
                        f.Mobile && (f.Mobile = !(r.indexOf("iPad") > -1)),
                        e && (h("type", "application/gameplugin") ? f["360SE"] = !0 : t.navigator && typeof t.navigator.connection.saveData == "undefined" ? f["360SE"] = !0 : f["360EE"] = !0),
                        f.IE || f.Edge) {
                        c = window.screenTop - window.screenY;
                        switch (c) {
                            case 102:
                                f["360EE"] = !0;
                                break;
                            case 104:
                                f["360SE"] = !0
                        }
                    }
                    return s = {
                        Safari: function () {
                            return r.replace(/^.*Version\/([\d.]+).*$/, "$1")
                        },
                        Chrome: function () {
                            return r.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
                        },
                        IE: function () {
                            return r.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
                        },
                        Edge: function () {
                            return r.replace(/^.*Edge\/([\d.]+).*$/, "$1")
                        },
                        Firefox: function () {
                            return r.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
                        },
                        "Firefox Focus": function () {
                            return r.replace(/^.*Focus\/([\d.]+).*$/, "$1")
                        },
                        Chromium: function () {
                            return r.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
                        },
                        Opera: function () {
                            return r.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
                        },
                        Vivaldi: function () {
                            return r.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
                        },
                        Yandex: function () {
                            return r.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
                        },
                        Arora: function () {
                            return r.replace(/^.*Arora\/([\d.]+).*$/, "$1")
                        },
                        Lunascape: function () {
                            return r.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, "$1")
                        },
                        QupZilla: function () {
                            return r.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, "$1")
                        },
                        "Coc Coc": function () {
                            return r.replace(/^.*coc_coc_browser\/([\d.]+).*$/, "$1")
                        },
                        Kindle: function () {
                            return r.replace(/^.*Version\/([\d.]+).*$/, "$1")
                        },
                        Iceweasel: function () {
                            return r.replace(/^.*Iceweasel\/([\d.]+).*$/, "$1")
                        },
                        Konqueror: function () {
                            return r.replace(/^.*Konqueror\/([\d.]+).*$/, "$1")
                        },
                        Iceape: function () {
                            return r.replace(/^.*Iceape\/([\d.]+).*$/, "$1")
                        },
                        SeaMonkey: function () {
                            return r.replace(/^.*SeaMonkey\/([\d.]+).*$/, "$1")
                        },
                        Epiphany: function () {
                            return r.replace(/^.*Epiphany\/([\d.]+).*$/, "$1")
                        },
                        "360": function () {
                            return r.replace(/^.*QihooBrowser\/([\d.]+).*$/, "$1")
                        },
                        "360SE": function () {
                            var n = r.replace(/^.*Chrome\/([\d]+).*$/, "$1");
                            return {
                                "63": "10.0",
                                "55": "9.1",
                                "45": "8.1",
                                "42": "8.0",
                                "31": "7.0",
                                "21": "6.3"
                            }[n] || ""
                        },
                        "360EE": function () {
                            var n = r.replace(/^.*Chrome\/([\d]+).*$/, "$1");
                            return {
                                "69": "11.0",
                                "63": "9.5",
                                "55": "9.0",
                                "50": "8.7",
                                "30": "7.5"
                            }[n] || ""
                        },
                        Maxthon: function () {
                            return r.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
                        },
                        QQBrowser: function () {
                            return r.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
                        },
                        QQ: function () {
                            return r.replace(/^.*QQ\/([\d.]+).*$/, "$1")
                        },
                        Baidu: function () {
                            return r.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1")
                        },
                        UC: function () {
                            return r.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
                        },
                        Sogou: function () {
                            return r.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
                        },
                        LBBROWSER: function () {
                            var n = navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/, "$1");
                            return {
                                "57": "6.5",
                                "49": "6.0",
                                "46": "5.9",
                                "42": "5.3",
                                "39": "5.2",
                                "34": "5.0",
                                "29": "4.5",
                                "21": "4.0"
                            }[n] || ""
                        },
                        "2345Explorer": function () {
                            return r.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1")
                        },
                        TheWorld: function () {
                            return r.replace(/^.*TheWorld ([\d.]+).*$/, "$1")
                        },
                        XiaoMi: function () {
                            return r.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
                        },
                        Quark: function () {
                            return r.replace(/^.*Quark\/([\d.]+).*$/, "$1")
                        },
                        Qiyu: function () {
                            return r.replace(/^.*Qiyu\/([\d.]+).*$/, "$1")
                        },
                        Wechat: function () {
                            return r.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
                        },
                        Taobao: function () {
                            return r.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
                        },
                        Alipay: function () {
                            return r.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
                        },
                        Weibo: function () {
                            return r.replace(/^.*weibo__([\d.]+).*$/, "$1")
                        },
                        Douban: function () {
                            return r.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1")
                        },
                        Suning: function () {
                            return r.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1")
                        },
                        iQiYi: function () {
                            return r.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
                        }
                    },
                        u.browserVersion = "",
                        s[u.browser] && (u.browserVersion = s[u.browser](),
                            u.browserVersion == r && (u.browserVersion = "")),
                        u.browser == "Edge" && (u.engine = "EdgeHTML"),
                        u.browser == "Chrome" && parseInt(u.browserVersion) > 27 && (u.engine = "Blink"),
                        u.browser == "Opera" && parseInt(u.browserVersion) > 12 && (u.engine = "Blink"),
                        u.browser == "Yandex" && (u.engine = "Blink"),
                    {
                        Name: u.browser,
                        Version: u.browserVersion,
                        CoreType: u.engine
                    }
                }
            }
        }()
        , u = function () {
            return {
                DeviceInfoObj: function () {
                    return {
                        deviceType: n.getDeviceType(),
                        OS: {
                            Name: n.getOS(),
                            Version: n.getOSVersion(),
                            Bit: n.GetOSBit(),
                            toString: function () {
                                return n.getOS() + " " + n.getOSVersion() + " " + n.GetOSBit()
                            }
                        },
                        screenHeight: i.screen.height,
                        screenWidth: i.screen.width,
                        language: n.getLanguage(),
                        netWork: n.getNetwork(),
                        orientation: n.getOrientationStatu(),
                        browserInfo: n.getBrowserInfo(),
                        userAgent: t.navigator.userAgent
                    }
                }
            }
        }();
    return u.DeviceInfoObj()
}();
!function (n) {
    function t(r) {
        if (i[r])
            return i[r].exports;
        var u = i[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(u.exports, u, u.exports, t),
            u.l = !0,
            u.exports
    }
    var i = {};
    t.m = n;
    t.c = i;
    t.i = function (n) {
        return n
    }
        ;
    t.d = function (n, i, r) {
        t.o(n, i) || Object.defineProperty(n, i, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
        ;
    t.n = function (n) {
        var i = n && n.__esModule ? function () {
            return n.default
        }
            : function () {
                return n
            }
            ;
        return t.d(i, "a", i),
            i
    }
        ;
    t.o = function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }
        ;
    t.p = "";
    t(t.s = 4)
}([function (n, t, i) {
    "use strict";
    i(2);
    i(1)
}
    , function (n, t, i) {
        "use strict";
        function f(n, t) {
            if (!(n instanceof t))
                throw new TypeError("Cannot call a class as a function");
        }
        var r = Object.assign || function (n) {
            for (var i, r, t = 1; t < arguments.length; t++) {
                i = arguments[t];
                for (r in i)
                    Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
            }
            return n
        }
            , e = function () {
                function n(n, t) {
                    for (var i, r = 0; r < t.length; r++)
                        i = t[r],
                            i.enumerable = i.enumerable || !1,
                            i.configurable = !0,
                            "value" in i && (i.writable = !0),
                            Object.defineProperty(n, i.key, i)
                }
                return function (t, i, r) {
                    return i && n(t.prototype, i),
                        r && n(t, r),
                        t
                }
            }()
            , o = i(3)
            , s = function (n) {
                return n && n.__esModule ? n : {
                    "default": n
                }
            }(o)
            , u = function () {
                function n(t) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i;
                    (f(this, n),
                        "addEventListener" in window && !/MSIE 9/i.test(navigator.userAgent) && !window.operamini) && ((this.callbacks = {},
                            this.settings = this._applyGlobalSettings(r),
                            this.classNames = {
                                popper: "tippy-popper",
                                tooltip: "tippy-tooltip",
                                content: "tippy-tooltip-content"
                            },
                            this.tooltippedEls = t instanceof Element ? [t] : [].slice.call(document.querySelectorAll(t)),
                            n.bus || (n.bus = {
                                refs: [],
                                listeners: {}
                            }),
                            n.bus.listeners.touchstart) || (n.bus.listeners.touchstart = !0,
                                i = function t() {
                                    n.touchUser = !0;
                                    document.body.classList.add("tippy-touch");
                                    window.removeEventListener("touchstart", t)
                                }
                                ,
                                window.addEventListener("touchstart", i)),
                            this._createTooltips(),
                            this._handleDocumentHidingEvents())
                }
                return e(n, [{
                    key: "_setMaps",
                    value: function () {
                        n.bus.popperMap = n.bus.refs.map(function (n) {
                            return n.popper
                        });
                        n.bus.tooltippedElMap = n.bus.refs.map(function (n) {
                            return n.tooltippedEl
                        })
                    }
                }, {
                    key: "_closest",
                    value: function (n, t) {
                        return Element.prototype.matches || (Element.prototype.matches = "WebkitAppearance" in document.documentElement.style && !/Edge\/\d./i.test(navigator.userAgent) ? Element.prototype.webkitMatchesSelector : Element.prototype.msMatchesSelector),
                            Element.prototype.closest || (Element.prototype.closest = function (n) {
                                for (var t = this; t;) {
                                    if (t.matches(n))
                                        return t;
                                    t = t.parentElement
                                }
                            }
                            ),
                            n.closest(t)
                    }
                }, {
                    key: "_applyGlobalSettings",
                    value: function (n) {
                        this.callbacks.beforeShown = n.beforeShown || new Function;
                        this.callbacks.shown = n.shown || new Function;
                        this.callbacks.beforeHidden = n.beforeHidden || new Function;
                        this.callbacks.hidden = n.hidden || new Function;
                        var t = {
                            html: !1,
                            position: "top",
                            animation: "shift",
                            animateFill: !0,
                            arrow: !1,
                            delay: 0,
                            trigger: "mouseenter focus",
                            duration: 400,
                            interactive: !1,
                            theme: "dark",
                            offset: 0,
                            hideOnClick: !0,
                            multiple: !1,
                            popperOptions: {}
                        };
                        return {
                            html: n.html || t.html,
                            position: n.position || t.position,
                            animation: n.animation || t.animation,
                            animateFill: n.animateFill !== !1 && (n.animateFill || t.animateFill),
                            arrow: n.arrow || t.arrow,
                            delay: n.delay || t.delay,
                            trigger: n.trigger || t.trigger,
                            duration: 0 === n.duration ? 0 : n.duration || t.duration,
                            interactive: n.interactive || t.interactive,
                            theme: n.theme || t.theme,
                            offset: n.offset || t.offset,
                            hideOnClick: n.hideOnClick !== !1 && (n.hideOnClick || t.hideOnClick),
                            multiple: n.multiple !== !1 && (n.multiple || t.multiple),
                            popperOptions: n.popperOptions || t.popperOptions
                        }
                    }
                }, {
                    key: "_handleDocumentHidingEvents",
                    value: function () {
                        var t = this
                            , f = function (n) {
                                var r = t._closest(n, "[data-tooltipped]")
                                    , u = t._closest(n, "." + t.classNames.popper)
                                    , i = {};
                                return r ? (i.type = "tooltippedEl",
                                    i.target = r) : u ? (i.type = "popper",
                                        i.target = u) : i = null,
                                    i
                            }
                            , i = function (t) {
                                var r = -1
                                    , u = -1
                                    , i = f(t);
                                return i && ("tooltippedEl" === i.type ? r = n.bus.tooltippedElMap.indexOf(i.target) : "popper" === i.type && (u = n.bus.popperMap.indexOf(i.target))),
                                {
                                    tooltippedElIndex: r,
                                    popperIndex: u
                                }
                            }
                            , r = function (r) {
                                var f = i(r.target), e = f.tooltippedElIndex !== -1, u;
                                if (f.popperIndex === -1 || !n.bus.refs[f.popperIndex].settings.interactive) {
                                    if (e) {
                                        if (u = n.bus.refs[f.tooltippedElIndex],
                                            !u.settings.multiple && (u.settings.trigger.indexOf("click") !== -1 || n.touchUser))
                                            return void n.bus.refs.forEach(function (n) {
                                                n.popper !== u.popper && t.hide(n.popper)
                                            });
                                        if (!u.settings.hideOnClick || u.settings.trigger.indexOf("click") !== -1)
                                            return
                                    } else
                                        [].slice.call(document.querySelectorAll(".active[data-tooltipped]")).forEach(function (n) {
                                            return n.classList.remove("active")
                                        });
                                    n.bus.refs.forEach(function (n) {
                                        return t.hide(n.popper)
                                    })
                                }
                            }
                            , u = function (r) {
                                var u = i(r.target);
                                u.tooltippedElIndex !== -1 && (9 !== r.keyCode || n.bus.refs[u.tooltippedElIndex].popper.classList.contains("html-template") || n.bus.refs.forEach(function (n) {
                                    return t.hide(n.popper)
                                }))
                            };
                        n.bus.listeners.click || (n.bus.listeners = {
                            click: r,
                            keydown: u
                        },
                            document.addEventListener("click", r),
                            document.addEventListener("keydown", u))
                    }
                }, {
                    key: "_createPopperInstance",
                    value: function (n, t, i) {
                        var u = r({
                            placement: i.position
                        }, i.popperOptions || {}, {
                            modifiers: r({}, i.popperOptions ? i.popperOptions.modifiers : {}, {
                                offset: r({
                                    offset: parseInt(i.offset)
                                }, i.popperOptions && i.popperOptions.modifiers ? i.popperOptions.modifiers.offset : {})
                            })
                        });
                        setTimeout(function () {
                            new s.default(n, t, u).enableEventListeners()
                        }, 0)
                    }
                }, {
                    key: "_createPopperElement",
                    value: function (n, t) {
                        var r = document.createElement("div"), i, e, f, u;
                        return r.setAttribute("class", this.classNames.popper),
                            i = document.createElement("div"),
                            (i.setAttribute("class", this.classNames.tooltip + " " + t.theme + " leave"),
                                i.setAttribute("data-position", t.position),
                                i.setAttribute("data-animation", t.animation),
                                t.arrow) && (e = document.createElement("div"),
                                    e.setAttribute("x-arrow", ""),
                                    i.appendChild(e)),
                            t.animateFill && (i.setAttribute("data-animatefill", ""),
                                f = document.createElement("div"),
                                f.setAttribute("class", "leave"),
                                f.setAttribute("x-circle", ""),
                                i.appendChild(f)),
                            u = document.createElement("div"),
                            u.setAttribute("class", this.classNames.content),
                            t.html ? (u.innerHTML = document.getElementById(t.html.replace("#", "")).innerHTML,
                                r.classList.add("html-template"),
                                r.setAttribute("tabindex", "0"),
                                i.setAttribute("data-template-id", t.html)) : u.innerHTML = n,
                            i.appendChild(u),
                            r.appendChild(i),
                            document.body.appendChild(r),
                            r
                    }
                }, {
                    key: "_applyIndividualSettings",
                    value: function (n) {
                        var e = n.getAttribute("data-html") || this.settings.html, t, i, s, r, u, h, f, c, l;
                        e && "false" !== e || (e = !1);
                        var a = n.getAttribute("data-position") || this.settings.position
                            , v = n.getAttribute("data-animation") || this.settings.animation
                            , o = n.getAttribute("data-animatefill") || this.settings.animateFill;
                        return "false" === o && (o = !1),
                            t = n.getAttribute("data-arrow") || this.settings.arrow,
                            t && "false" !== t ? o = !1 : t = !1,
                            i = n.getAttribute("data-trigger") || this.settings.trigger,
                            i && (i = i.trim().split(" ")),
                            s = n.getAttribute("data-theme") || this.settings.theme,
                            s && (s += "-theme"),
                            r = parseInt(n.getAttribute("data-delay")),
                            r || 0 === r || (r = this.settings.delay),
                            u = parseInt(n.getAttribute("data-duration")),
                            u || 0 === u || (u = this.settings.duration),
                            h = n.getAttribute("data-interactive") || this.settings.interactive,
                            "false" === h && (h = !1),
                            f = parseInt(n.getAttribute("data-offset")),
                            f || 0 === f || (f = this.settings.offset),
                            c = n.getAttribute("data-hideonclick") || this.settings.hideOnClick,
                            "false" === c && (c = !1),
                            l = n.getAttribute("data-multiple") || this.settings.multiple,
                            "false" === l && (l = !1),
                        {
                            html: e,
                            position: a,
                            animation: v,
                            animateFill: o,
                            arrow: t,
                            delay: r,
                            trigger: i,
                            duration: u,
                            interactive: h,
                            theme: s,
                            offset: f,
                            hideOnClick: c,
                            multiple: l,
                            popperOptions: this.settings.popperOptions
                        }
                    }
                }, {
                    key: "_createTooltips",
                    value: function () {
                        var t = this;
                        this.tooltippedEls.forEach(function (i) {
                            var r = t._applyIndividualSettings(i), f = i.getAttribute("title"), u;
                            if (null !== f && "" !== f || r.html) {
                                i.setAttribute("data-original-title", f || "html");
                                i.removeAttribute("title");
                                i.setAttribute("data-tooltipped", "");
                                u = t._createPopperElement(f, r);
                                t._createPopperInstance(i, u, r);
                                var o = function (n) {
                                    if ("click" === n.type && "visible" === u.style.visibility && r.hideOnClick)
                                        return t.hide(u);
                                    if (r.delay) {
                                        var i = setTimeout(function () {
                                            return t.show(u, r.duration)
                                        }, r.delay);
                                        u.setAttribute("data-timeout", i)
                                    } else
                                        t.show(u, r.duration);
                                    r.interactive && n.target.classList.add("active")
                                }
                                    , s = function (n) {
                                        if (r.interactive) {
                                            var f = function n(f) {
                                                t._closest(f.target, "." + t.classNames.popper) === u || t._closest(f.target, "[data-tooltipped]") || r.trigger.indexOf("click") !== -1 || (i.classList.remove("active"),
                                                    t.hide(u),
                                                    document.removeEventListener("mousemove", n))
                                            };
                                            return void document.addEventListener("mousemove", f)
                                        }
                                        t.hide(u)
                                    }
                                    , h = function () {
                                        r.interactive && !n.touchUser || t.hide(u)
                                    }
                                    , e = [];
                                r.trigger.forEach(function (n) {
                                    "manual" !== n && (i.addEventListener(n, o),
                                        e.push({
                                            event: n,
                                            method: o
                                        }),
                                        "mouseenter" === n && (i.addEventListener("mouseleave", s),
                                            e.push({
                                                event: "mouseleave",
                                                method: s
                                            })),
                                        "focus" === n && (i.addEventListener("blur", h),
                                            e.push({
                                                event: "blur",
                                                method: h
                                            })))
                                });
                                n.bus.refs.push({
                                    tooltippedEl: i,
                                    popper: u,
                                    settings: r,
                                    listeners: e
                                });
                                i === t.tooltippedEls[t.tooltippedEls.length - 1] && t._setMaps()
                            }
                        })
                    }
                }, {
                    key: "getPopperElement",
                    value: function (t) {
                        try {
                            return n.bus.refs[n.bus.tooltippedElMap.indexOf(t)].popper
                        } catch (n) {
                            throw new Error("[Tippy error]: Element does not exist in any Tippy instances");
                        }
                    }
                }, {
                    key: "show",
                    value: function (n) {
                        var u = this, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 400, r, t;
                        this.callbacks.beforeShown();
                        r = n.querySelector("." + this.classNames.tooltip);
                        t = n.querySelector("[x-circle]");
                        r.style.WebkitTransitionDuration = i + "ms";
                        r.style.transitionDuration = i + "ms";
                        r.classList.add("enter");
                        r.classList.remove("leave");
                        t && (t.style.WebkitTransitionDuration = i + "ms",
                            t.style.transitionDuration = i + "ms",
                            t.classList.add("enter"),
                            t.classList.remove("leave"));
                        n.style.visibility = "visible";
                        n.focus();
                        setTimeout(function () {
                            "hidden" !== n.style.visibility && u.callbacks.shown()
                        }, i)
                    }
                }, {
                    key: "hide",
                    value: function (t) {
                        var f = this, i, r, u;
                        (clearTimeout(t.getAttribute("data-timeout")),
                            "hidden" !== getComputedStyle(t).getPropertyValue("visibility")) && (this.callbacks.beforeHidden(),
                                n.bus.refs[n.bus.popperMap.indexOf(t)].tooltippedEl.classList.remove("active"),
                                i = t.querySelector("." + this.classNames.tooltip),
                                i.classList.add("leave"),
                                i.classList.remove("enter"),
                                r = t.querySelector("[x-circle]"),
                                r && (r.classList.add("leave"),
                                    r.classList.remove("enter")),
                                t.style.visibility = "hidden",
                                u = 0,
                                i.style.transitionDuration ? u = parseInt(i.style.transitionDuration.replace("ms", "")) : i.style.WebkitTransitionDuration && (u = parseInt(i.style.WebkitTransitionDuration.replace("ms", ""))),
                                setTimeout(function () {
                                    "visible" !== t.style.visibility && f.callbacks.hidden()
                                }, u))
                    }
                }, {
                    key: "destroy",
                    value: function (t) {
                        var i = n.bus.popperMap.indexOf(t)
                            , r = n.bus.tooltippedElMap[i];
                        n.bus.refs[i].listeners.forEach(function (n) {
                            return r.removeEventListener(n.event, n.method)
                        });
                        n.bus.popperMap.splice(i, 1);
                        n.bus.tooltippedElMap.splice(i, 1);
                        n.bus.refs.splice(i, 1);
                        document.body.removeChild(t)
                    }
                }]),
                    n
            }();
        window.Tippy = u;
        n.exports = u
    }
    , function () { }
    , function (n) {
        !function (t, i) {
            n.exports = i()
        }(0, function () {
            "use strict";
            function i(n) {
                var t = n.offsetParent
                    , i = t && t.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? t : window.document.documentElement
            }
            function f(n, t) {
                if (1 !== n.nodeType)
                    return [];
                var i = window.getComputedStyle(n, null);
                return t ? i[t] : i
            }
            function r(n) {
                return "HTML" === n.nodeName ? n : n.parentNode || n.host
            }
            function u(n) {
                if (!n || ["HTML", "BODY", "#document"].indexOf(n.nodeName) !== -1)
                    return window.document.body;
                var t = f(n)
                    , i = t.overflow
                    , e = t.overflowX
                    , o = t.overflowY;
                return /(auto|scroll)/.test(i + o + e) ? n : u(r(n))
            }
            function e(n) {
                var t = n.nodeName;
                return "BODY" !== t && "HTML" !== t && ("fixed" === f(n, "position") || e(r(n)))
            }
            function o(n) {
                return e(i(n)) ? "fixed" : "absolute"
            }
            function p(n, t) {
                var i = "x" === t ? "Left" : "Top"
                    , r = "Left" === i ? "Right" : "Bottom";
                return Number(n["border" + i + "Width"].split("px")[0]) + Number(n["border" + r + "Width"].split("px")[0])
            }
            function w(n) {
                var o = navigator.appVersion.indexOf("MSIE 10") !== -1, t = void 0, i, r, u, e;
                if (o)
                    try {
                        t = n.getBoundingClientRect()
                    } catch (n) {
                        t = {}
                    }
                else
                    t = n.getBoundingClientRect();
                if (i = {
                    left: t.left,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                },
                    "HTML" === n.nodeName && o) {
                    var s = window.document.documentElement
                        , h = s.scrollTop
                        , c = s.scrollLeft;
                    i.top -= h;
                    i.bottom -= h;
                    i.left -= c;
                    i.right -= c
                }
                return r = t.width - (n.clientWidth || t.right - t.left),
                    u = t.height - (n.clientHeight || t.bottom - t.top),
                    (r || u) && (e = f(n),
                        r -= p(e, "x"),
                        u -= p(e, "y")),
                    i.right -= r,
                    i.width -= r,
                    i.bottom -= u,
                    i.height -= u,
                    i
            }
            function s(n) {
                var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top", t = "top" === u ? "scrollTop" : "scrollLeft", i = n.nodeName, r;
                return "BODY" === i || "HTML" === i ? (r = window.document.documentElement,
                    (window.document.scrollingElement || r)[t]) : n[t]
            }
            function b(n, t) {
                var f = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                    , r = s(t, "top")
                    , u = s(t, "left")
                    , i = f ? -1 : 1;
                return n.top += r * i,
                    n.bottom += r * i,
                    n.left += u * i,
                    n.right += u * i,
                    n
            }
            function k(n, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                    , v = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                    , s = u(t)
                    , e = w(n)
                    , o = w(t)
                    , r = {
                        top: e.top - o.top,
                        left: e.left - o.left,
                        bottom: e.top - o.top + e.height,
                        right: e.left - o.left + e.width,
                        width: e.width,
                        height: e.height
                    };
                a && !v ? r = b(r, s, !0) : i(n).contains(s) && "BODY" !== s.nodeName && (r = b(r, t));
                var h = f(t)
                    , c = Number(h.borderTopWidth.split("px")[0])
                    , l = Number(h.borderLeftWidth.split("px")[0]);
                return r.top -= c,
                    r.bottom -= c,
                    r.left -= l,
                    r.right -= l,
                    r
            }
            function d() {
                var t = window.document.body
                    , n = window.document.documentElement;
                return {
                    height: Math.max(t.scrollHeight, t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight),
                    width: Math.max(t.scrollWidth, t.offsetWidth, n.clientWidth, n.scrollWidth, n.offsetWidth)
                }
            }
            function at(n) {
                var t = void 0, i;
                return "HTML" === n.nodeName ? (i = d(),
                    t = {
                        width: i.width,
                        height: i.height,
                        left: 0,
                        top: 0
                    }) : t = {
                        width: n.offsetWidth,
                        height: n.offsetHeight,
                        left: n.offsetLeft,
                        top: n.offsetTop
                    },
                    t.right = t.left + t.width,
                    t.bottom = t.top + t.height,
                    t
            }
            function vt(n) {
                var t = at(n), u, r;
                return "HTML" !== n.nodeName ? (u = i(n),
                    r = vt(u),
                {
                    width: t.offsetWidth,
                    height: t.offsetHeight,
                    left: t.left + r.left,
                    top: t.top + r.top,
                    right: t.right - r.right,
                    bottom: t.bottom - r.bottom
                }) : t
            }
            function h(n) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top"
                    , t = u(n)
                    , f = s(t, i);
                return ["BODY", "HTML"].indexOf(t.nodeName) === -1 ? f + h(r(t), i) : f
            }
            function c(n, t, f) {
                var s = {
                    top: 0,
                    left: 0
                }, l = i(n), c;
                if ("viewport" === f) {
                    var a = vt(l)
                        , v = a.left
                        , y = a.top
                        , p = window.document.documentElement
                        , w = p.clientWidth
                        , b = p.clientHeight;
                    "fixed" === o(n) ? (s.right = w,
                        s.bottom = b) : s = {
                            top: 0 - y,
                            right: w - v + h(n, "left"),
                            bottom: b - y + h(n, "top"),
                            left: 0 - v
                        }
                } else if (c = void 0,
                    c = "scrollParent" === f ? u(r(n)) : "window" === f ? window.document.body : f,
                    "BODY" === c.nodeName) {
                    var g = d()
                        , nt = g.height
                        , tt = g.width;
                    s.right = tt;
                    s.bottom = nt
                } else
                    s = k(c, l, e(n));
                return s.left += t,
                    s.top += t,
                    s.right -= t,
                    s.bottom -= t,
                    s
            }
            function g(n, t, i) {
                if (n.indexOf("auto") === -1)
                    return n;
                var r = c(i, 0, "scrollParent")
                    , u = {
                        top: t.top - r.top,
                        right: r.right - t.right,
                        bottom: r.bottom - t.bottom,
                        left: t.left - r.left
                    }
                    , e = Object.keys(u).sort(function (n, t) {
                        return u[t] - u[n]
                    })[0]
                    , f = n.split("-")[1];
                return e + (f ? "-" + f : "")
            }
            function ri(n) {
                var t = !1
                    , i = 0
                    , r = document.createElement("span");
                return new MutationObserver(function () {
                    n();
                    t = !1
                }
                ).observe(r, {
                    attributes: !0
                }),
                    function () {
                        t || (t = !0,
                            r.setAttribute("x-index", i),
                            i += 1)
                    }
            }
            function ui(n) {
                var t = !1;
                return function () {
                    t || (t = !0,
                        setTimeout(function () {
                            t = !1;
                            n()
                        }, ti))
                }
            }
            function nt(n, t) {
                return Array.prototype.find ? n.find(t) : n.filter(t)[0]
            }
            function yt(n, t, i) {
                if (Array.prototype.findIndex)
                    return n.findIndex(function (n) {
                        return n[t] === i
                    });
                var r = nt(n, function (n) {
                    return n[t] === i
                });
                return n.indexOf(r)
            }
            function n(n) {
                return t({}, n, {
                    right: n.left + n.width,
                    bottom: n.top + n.height
                })
            }
            function tt(n) {
                var t = window.getComputedStyle(n)
                    , i = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
                    , r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
                return {
                    width: n.offsetWidth + r,
                    height: n.offsetHeight + i
                }
            }
            function l(n) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return n.replace(/left|right|bottom|top/g, function (n) {
                    return t[n]
                })
            }
            function it(n, t, i, r) {
                r = r.split("-")[0];
                var u = tt(t)
                    , o = {
                        position: n,
                        width: u.width,
                        height: u.height
                    }
                    , f = ["right", "left"].indexOf(r) !== -1
                    , s = f ? "top" : "left"
                    , e = f ? "left" : "top"
                    , h = f ? "height" : "width"
                    , c = f ? "width" : "height";
                return o[s] = i[s] + i[h] / 2 - u[h] / 2,
                    o[e] = r === e ? i[e] - u[c] : i[l(e)],
                    o
            }
            function rt(n, t, r) {
                var u = "fixed" === n.position
                    , f = n.isParentTransformed;
                return k(r, i(u && f ? r : t), u, f)
            }
            function ut(n) {
                for (var i, r, u = [!1, "ms", "webkit", "moz", "o"], f = n.charAt(0).toUpperCase() + n.slice(1), t = 0; t < u.length - 1; t++)
                    if (i = u[t],
                        r = i ? "" + i + f : n,
                        void 0 !== window.document.body.style[r])
                        return r;
                return null
            }
            function ft(n) {
                return n && "[object Function]" === {}.toString.call(n)
            }
            function et(n, t) {
                return n.some(function (n) {
                    var i = n.name;
                    return n.enabled && i === t
                })
            }
            function ot(n, t, i) {
                var r = nt(n, function (n) {
                    return n.name === t
                });
                return !!r && n.some(function (n) {
                    return n.name === i && n.enabled && n.order < r.order
                })
            }
            function st(n) {
                return "" !== n && !isNaN(parseFloat(n)) && isFinite(n)
            }
            function ht(n) {
                return "BODY" !== n.nodeName && ("none" !== f(n, "transform") || (r(n) ? ht(r(n)) : n))
            }
            function pt(n, t) {
                return window.removeEventListener("resize", t.updateBound),
                    t.scrollParents.forEach(function (n) {
                        n.removeEventListener("scroll", t.updateBound)
                    }),
                    t.updateBound = null,
                    t.scrollParents = [],
                    t.scrollElement = null,
                    t.eventsEnabled = !1,
                    t
            }
            function ct(n, t, i) {
                return (void 0 === i ? n : n.slice(0, yt(n, "name", i))).forEach(function (n) {
                    n.enabled && ft(n.function) && (t = n.function(t, n))
                }),
                    t
            }
            function wt(n, t) {
                Object.keys(t).forEach(function (i) {
                    t[i] !== !1 ? n.setAttribute(i, t[i]) : n.removeAttribute(i)
                })
            }
            function a(n, t) {
                Object.keys(t).forEach(function (i) {
                    var r = "";
                    ["width", "height", "top", "right", "bottom", "left"].indexOf(i) !== -1 && st(t[i]) && (r = "px");
                    n.style[i] = t[i] + r
                })
            }
            function bt(n, t, i, r) {
                var e = "BODY" === n.nodeName
                    , f = e ? window : n;
                f.addEventListener(t, i, {
                    passive: !0
                });
                e || bt(u(f.parentNode), t, i, r);
                r.push(f)
            }
            function kt(n, t, i, r) {
                i.updateBound = r;
                window.addEventListener("resize", i.updateBound, {
                    passive: !0
                });
                var f = u(n);
                return bt(f, "scroll", i.updateBound, i.scrollParents),
                    i.scrollElement = f,
                    i.eventsEnabled = !0,
                    i
            }
            function fi(n, i) {
                var r = {
                    position: n.offsets.popper.position
                }
                    , o = {
                        "x-placement": n.placement
                    }
                    , u = Math.round(n.offsets.popper.left)
                    , f = Math.round(n.offsets.popper.top)
                    , e = ut("transform");
                return i.gpuAcceleration && e ? (r[e] = "translate3d(" + u + "px, " + f + "px, 0)",
                    r.top = 0,
                    r.left = 0,
                    r.willChange = "transform") : (r.left = u,
                        r.top = f,
                        r.willChange = "top, left"),
                    a(n.instance.popper, t({}, r, n.styles)),
                    wt(n.instance.popper, t({}, o, n.attributes)),
                    n.offsets.arrow && a(n.arrowElement, n.offsets.arrow),
                    n
            }
            function ei(n, t, i, r, u) {
                var f = rt(u, t, n);
                return i.placement = g(i.placement, f, t),
                    t.setAttribute("x-placement", i.placement),
                    i
            }
            function oi(t, i) {
                var u, a, c;
                if (!ot(t.instance.modifiers, "arrow", "keepTogether"))
                    return console.warn("WARNING: `keepTogether` modifier is required by arrow modifier in order to work, be sure to include it before `arrow`!"),
                        t;
                if (u = i.element,
                    "string" == typeof u) {
                    if (!(u = t.instance.popper.querySelector(u)))
                        return t
                } else if (!t.instance.popper.contains(u))
                    return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        t;
                var v = t.placement.split("-")[0]
                    , o = n(t.offsets.popper)
                    , f = t.offsets.reference
                    , s = ["left", "right"].indexOf(v) !== -1
                    , l = s ? "height" : "width"
                    , r = s ? "top" : "left"
                    , y = s ? "left" : "top"
                    , h = s ? "bottom" : "right"
                    , e = tt(u)[l];
                return f[h] - e < o[r] && (t.offsets.popper[r] -= o[r] - (f[h] - e)),
                    f[r] + e > o[h] && (t.offsets.popper[r] += f[r] + e - o[h]),
                    a = f[r] + f[l] / 2 - e / 2,
                    c = a - n(t.offsets.popper)[r],
                    c = Math.max(Math.min(o[l] - e, c), 0),
                    t.arrowElement = u,
                    t.offsets.arrow = {},
                    t.offsets.arrow[r] = c,
                    t.offsets.arrow[y] = "",
                    t
            }
            function si(n) {
                return "end" === n ? "start" : "start" === n ? "end" : n
            }
            function hi(t, i) {
                if (et(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement)
                    return t;
                var f = c(t.instance.popper, i.padding, i.boundariesElement)
                    , r = t.placement.split("-")[0]
                    , o = l(r)
                    , u = t.placement.split("-")[1] || ""
                    , e = [];
                return e = "flip" === i.behavior ? [r, o] : i.behavior,
                    e.forEach(function (s, h) {
                        if (r !== s || e.length === h + 1)
                            return t;
                        r = t.placement.split("-")[0];
                        o = l(r);
                        var a = n(t.offsets.popper)
                            , v = t.offsets.reference
                            , c = Math.floor
                            , p = "left" === r && c(a.right) > c(v.left) || "right" === r && c(a.left) < c(v.right) || "top" === r && c(a.bottom) > c(v.top) || "bottom" === r && c(a.top) < c(v.bottom)
                            , w = c(a.left) < c(f.left)
                            , b = c(a.right) > c(f.right)
                            , k = c(a.top) < c(f.top)
                            , d = c(a.bottom) > c(f.bottom)
                            , g = "left" === r && w || "right" === r && b || "top" === r && k || "bottom" === r && d
                            , y = ["top", "bottom"].indexOf(r) !== -1
                            , nt = !!i.flipVariations && (y && "start" === u && w || y && "end" === u && b || !y && "start" === u && k || !y && "end" === u && d);
                        (p || g || nt) && (t.flipped = !0,
                            (p || g) && (r = e[h + 1]),
                            nt && (u = si(u)),
                            t.placement = r + (u ? "-" + u : ""),
                            t.offsets.popper = it(t.instance.state.position, t.instance.popper, t.offsets.reference, t.placement),
                            t = ct(t.instance.modifiers, t, "flip"))
                    }),
                    t
            }
            function ci(t) {
                var f = n(t.offsets.popper)
                    , r = t.offsets.reference
                    , s = t.placement.split("-")[0]
                    , u = Math.floor
                    , e = ["top", "bottom"].indexOf(s) !== -1
                    , o = e ? "right" : "bottom"
                    , i = e ? "left" : "top"
                    , h = e ? "width" : "height";
                return f[o] < u(r[i]) && (t.offsets.popper[i] = u(r[i]) - f[h]),
                    f[i] > u(r[o]) && (t.offsets.popper[i] = u(r[o])),
                    t
            }
            function li(t, i) {
                var f = t.placement
                    , u = t.offsets.popper
                    , r = void 0;
                return st(i.offset) ? r = [i.offset, 0] : (r = i.offset.split(" "),
                    r = r.map(function (i, r) {
                        var h = i.match(/(\d*\.?\d*)(.*)/), o = +h[1], u = h[2], s = f.indexOf("right") !== -1 || f.indexOf("left") !== -1, c, e;
                        if (1 === r && (s = !s),
                            c = s ? "height" : "width",
                            0 === u.indexOf("%")) {
                            e = void 0;
                            switch (u) {
                                case "%p":
                                    e = t.offsets.popper;
                                    break;
                                case "%":
                                case "$r":
                                default:
                                    e = t.offsets.reference
                            }
                            return n(e)[c] / 100 * o
                        }
                        return "vh" === u || "vw" === u ? ("vh" === u ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : "px" === u ? +o : +i
                    })),
                    t.placement.indexOf("left") !== -1 ? (u.top += r[0],
                        u.left -= r[1] || 0) : t.placement.indexOf("right") !== -1 ? (u.top += r[0],
                            u.left += r[1] || 0) : t.placement.indexOf("top") !== -1 ? (u.left += r[0],
                                u.top -= r[1] || 0) : t.placement.indexOf("bottom") !== -1 && (u.left += r[0],
                                    u.top += r[1] || 0),
                    t
            }
            function ai(r, u) {
                var o = u.boundariesElement || i(r.instance.popper)
                    , e = c(r.instance.popper, u.padding, o);
                u.boundaries = e;
                var s = u.priority
                    , f = n(r.offsets.popper)
                    , h = {
                        primary: function (n) {
                            var t = f[n];
                            return f[n] < e[n] && !u.escapeWithReference && (t = Math.max(f[n], e[n])),
                                v({}, n, t)
                        },
                        secondary: function (n) {
                            var t = "right" === n ? "left" : "top"
                                , i = f[t];
                            return f[n] > e[n] && !u.escapeWithReference && (i = Math.min(f[t], e[n] - ("right" === n ? f.width : f.height))),
                                v({}, t, i)
                        }
                    };
                return s.forEach(function (n) {
                    var i = ["left", "top"].indexOf(n) !== -1 ? "primary" : "secondary";
                    f = t({}, f, h[i](n))
                }),
                    r.offsets.popper = f,
                    r
            }
            function vi(i) {
                var f = i.placement
                    , c = f.split("-")[0]
                    , e = f.split("-")[1];
                if (e) {
                    var u = i.offsets.reference
                        , o = n(i.offsets.popper)
                        , s = ["bottom", "top"].indexOf(c) !== -1
                        , r = s ? "left" : "top"
                        , h = s ? "width" : "height"
                        , l = {
                            start: v({}, r, u[r]),
                            end: v({}, r, u[r] + u[h] - o[h])
                        };
                    i.offsets.popper = t({}, o, l[e])
                }
                return i
            }
            function yi(n) {
                if (!ot(n.instance.modifiers, "hide", "preventOverflow"))
                    return console.warn("WARNING: preventOverflow modifier is required by hide modifier in order to work, be sure to include it before hide!"),
                        n;
                var t = n.offsets.reference
                    , i = nt(n.instance.modifiers, function (n) {
                        return "preventOverflow" === n.name
                    }).boundaries;
                if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                    if (n.hide === !0)
                        return n;
                    n.hide = !0;
                    n.attributes["x-out-of-boundaries"] = ""
                } else {
                    if (n.hide === !1)
                        return n;
                    n.hide = !1;
                    n.attributes["x-out-of-boundaries"] = !1
                }
                return n
            }
            function pi(t) {
                var i = t.placement
                    , u = i.split("-")[0]
                    , r = n(t.offsets.popper)
                    , e = n(t.offsets.reference)
                    , f = ["left", "right"].indexOf(u) !== -1
                    , o = ["top", "left"].indexOf(u) === -1;
                return r[f ? "left" : "top"] = e[i] - (o ? r[f ? "width" : "height"] : 0),
                    t.placement = l(i),
                    t.offsets.popper = n(r),
                    t
            }
            for (var wi = ["native code", "[object MutationObserverConstructor]"], dt = function (n) {
                return wi.some(function (t) {
                    return (n || "").toString().indexOf(t) > -1
                })
            }, gt = "undefined" != typeof window, ni = ["Edge", "Trident", "Firefox"], ti = 0, lt = 0; lt < ni.length; lt += 1)
                if (gt && navigator.userAgent.indexOf(ni[lt]) >= 0) {
                    ti = 1;
                    break
                }
            var bi = gt && dt(window.MutationObserver)
                , ii = bi ? ri : ui
                , ki = function (n, t) {
                    if (!(n instanceof t))
                        throw new TypeError("Cannot call a class as a function");
                }
                , di = function () {
                    function n(n, t) {
                        for (var i, r = 0; r < t.length; r++)
                            i = t[r],
                                i.enumerable = i.enumerable || !1,
                                i.configurable = !0,
                                "value" in i && (i.writable = !0),
                                Object.defineProperty(n, i.key, i)
                    }
                    return function (t, i, r) {
                        return i && n(t.prototype, i),
                            r && n(t, r),
                            t
                    }
                }()
                , v = function (n, t, i) {
                    return t in n ? Object.defineProperty(n, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[t] = i,
                        n
                }
                , t = Object.assign || function (n) {
                    for (var i, r, t = 1; t < arguments.length; t++) {
                        i = arguments[t];
                        for (r in i)
                            Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
                    }
                    return n
                }
                , gi = {
                    computeAutoPlacement: g,
                    debounce: ii,
                    findIndex: yt,
                    getBordersSize: p,
                    getBoundaries: c,
                    getBoundingClientRect: w,
                    getClientRect: n,
                    getOffsetParent: i,
                    getOffsetRect: at,
                    getOffsetRectRelativeToCustomParent: k,
                    getOuterSizes: tt,
                    getParentNode: r,
                    getPopperOffsets: it,
                    getPosition: o,
                    getReferenceOffsets: rt,
                    getScroll: s,
                    getScrollParent: u,
                    getStyleComputedProperty: f,
                    getSupportedPropertyName: ut,
                    getTotalScroll: h,
                    getWindowSizes: d,
                    includeScroll: b,
                    isFixed: e,
                    isFunction: ft,
                    isModifierEnabled: et,
                    isModifierRequired: ot,
                    isNative: dt,
                    isNumeric: st,
                    isTransformed: ht,
                    removeEventListeners: pt,
                    runModifiers: ct,
                    setAttributes: wt,
                    setStyles: a,
                    setupEventListeners: kt
                }
                , nr = {
                    shift: {
                        order: 100,
                        enabled: !0,
                        "function": vi
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        "function": li,
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        "function": ai,
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        "function": ci
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        "function": oi,
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        "function": hi,
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport"
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        "function": pi
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        "function": yi
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        gpuAcceleration: !0,
                        "function": fi,
                        onLoad: ei
                    }
                }
                , tr = {
                    placement: "bottom",
                    eventsEnabled: !0,
                    onCreate: function () { },
                    onUpdate: function () { },
                    modifiers: nr
                }
                , y = function () {
                    function n(i, r) {
                        var f = this, u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, e;
                        ki(this, n);
                        this.scheduleUpdate = function () {
                            return requestAnimationFrame(f.update)
                        }
                            ;
                        this.update = ii(this.update.bind(this));
                        this.options = t({}, n.Defaults, u);
                        this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        };
                        this.reference = i.jquery ? i[0] : i;
                        this.popper = r.jquery ? r[0] : r;
                        this.modifiers = Object.keys(n.Defaults.modifiers).map(function (i) {
                            return t({
                                name: i
                            }, n.Defaults.modifiers[i])
                        });
                        this.modifiers = this.modifiers.map(function (n) {
                            var i = u.modifiers && u.modifiers[n.name] || {};
                            return t({}, n, i)
                        });
                        u.modifiers && (this.options.modifiers = t({}, n.Defaults.modifiers, u.modifiers),
                            Object.keys(u.modifiers).forEach(function (t) {
                                if (void 0 === n.Defaults.modifiers[t]) {
                                    var i = u.modifiers[t];
                                    i.name = t;
                                    f.modifiers.push(i)
                                }
                            }));
                        this.state.position = o(this.reference);
                        this.modifiers = this.modifiers.sort(function (n, t) {
                            return n.order - t.order
                        });
                        this.modifiers.forEach(function (n) {
                            n.enabled && ft(n.onLoad) && n.onLoad(f.reference, f.popper, f.options, n, f.state)
                        });
                        this.state.isParentTransformed = ht(this.popper.parentNode);
                        this.update();
                        e = this.options.eventsEnabled;
                        e && this.enableEventListeners();
                        this.state.eventsEnabled = e
                    }
                    return di(n, [{
                        key: "update",
                        value: function () {
                            if (!this.state.isDestroyed) {
                                var n = {
                                    instance: this,
                                    styles: {},
                                    attributes: {},
                                    flipped: !1,
                                    offsets: {}
                                };
                                this.state.position = o(this.reference);
                                a(this.popper, {
                                    position: this.state.position
                                });
                                n.offsets.reference = rt(this.state, this.popper, this.reference);
                                n.placement = g(this.options.placement, n.offsets.reference, this.popper);
                                n.originalPlacement = this.options.placement;
                                n.offsets.popper = it(this.state, this.popper, n.offsets.reference, n.placement);
                                n = ct(this.modifiers, n);
                                this.state.isCreated ? this.options.onUpdate(n) : (this.state.isCreated = !0,
                                    this.options.onCreate(n))
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return this.state.isDestroyed = !0,
                                et(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                                    this.popper.style.left = "",
                                    this.popper.style.position = "",
                                    this.popper.style.top = "",
                                    this.popper.style[ut("transform")] = ""),
                                this.disableEventListeners(),
                                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                                this
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function () {
                            this.state.eventsEnabled || (this.state = kt(this.reference, this.options, this.state, this.scheduleUpdate))
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function () {
                            this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate),
                                this.state = pt(this.reference, this.state))
                        }
                    }]),
                        n
                }();
            return y.Utils = gi,
                y.placements = ["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"],
                y.Defaults = tr,
                y
        })
    }
    , function (n, t, i) {
        n.exports = i(0)
    }
]);
typeof Object.create != "function" && (Object.create = function (n) {
    function t() { }
    return t.prototype = n,
        new t
}
),
    function (n, t, i, r) {
        var u = {
            init: function (t, i) {
                var r = this;
                if (r.elem = i,
                    r.$elem = n(i),
                    r.newsTagName = r.$elem.find(":first-child").prop("tagName"),
                    r.newsClassName = r.$elem.find(":first-child").attr("class"),
                    r.timer = null,
                    r.resizeTimer = null,
                    r.animationStarted = !1,
                    r.isHovered = !1,
                    typeof t == "string") {
                    console && console.error("String property override is not supported");
                    throw "String property override is not supported";
                } else
                    r.options = n.extend({}, n.fn.bootstrapNews.options, t),
                        r.prepareLayout(),
                        r.options.autoplay && r.animate(),
                        r.options.navigation && r.buildNavigation(),
                        typeof r.options.onToDo == "function" && r.options.onToDo.apply(r, arguments)
            },
            prepareLayout: function () {
                var i = this, r;
                n(i.elem).find("." + i.newsClassName).on("mouseenter", function () {
                    i.onReset(!0)
                });
                n(i.elem).find("." + i.newsClassName).on("mouseout", function () {
                    i.onReset(!1)
                });
                n.map(i.$elem.find(i.newsTagName), function (t, r) {
                    r > i.options.newsPerPage - 1 ? n(t).hide() : n(t).show()
                });
                i.$elem.find(i.newsTagName).length < i.options.newsPerPage && (i.options.newsPerPage = i.$elem.find(i.newsTagName).length);
                r = 0;
                n.map(i.$elem.find(i.newsTagName), function (t, u) {
                    u < i.options.newsPerPage && (r = parseInt(r) + parseInt(n(t).height()) + 10)
                });
                n(i.elem).css({
                    "overflow-y": "hidden",
                    height: r
                });
                n(t).resize(function () {
                    i.resizeTimer !== null && clearTimeout(i.resizeTimer);
                    i.resizeTimer = setTimeout(function () {
                        i.prepareLayout()
                    }, 200)
                })
            },
            findPanelObject: function () {
                for (var n = this.$elem; n.parent() !== r;)
                    if (n = n.parent(),
                        n.parent().hasClass("panel"))
                        return n.parent();
                return r
            },
            buildNavigation: function () {
                var t = this.findPanelObject(), i, r, u;
                if (t) {
                    i = '<ul class="pagination pull-right" style="margin: 0px;"><li><a href="#" class="prev"><span class="glyphicon glyphicon-chevron-down"><\/span><\/a><\/li><li><a href="#" class="next"><span class="glyphicon glyphicon-chevron-up"><\/span><\/a><\/li><\/ul><div class="clearfix"><\/div>';
                    r = n(t).find(".panel-footer")[0];
                    r ? n(r).append(i) : n(t).append('<div class="panel-footer">' + i + "<\/div>");
                    u = this;
                    n(t).find(".prev").on("click", function (n) {
                        n.preventDefault();
                        u.onPrev()
                    });
                    n(t).find(".next").on("click", function (n) {
                        n.preventDefault();
                        u.onNext()
                    })
                }
            },
            onStop: function () { },
            onPause: function () {
                var n = this;
                n.isHovered = !0;
                this.options.autoplay && n.timer && clearTimeout(n.timer)
            },
            onReset: function (n) {
                var t = this;
                t.timer && clearTimeout(t.timer);
                t.options.autoplay && (t.isHovered = n,
                    t.animate())
            },
            animate: function () {
                var n = this;
                n.timer = setTimeout(function () {
                    n.options.pauseOnHover || (n.isHovered = !1);
                    n.isHovered || (n.options.direction === "up" ? n.onNext() : n.onPrev())
                }, n.options.newsTickerInterval)
            },
            onPrev: function () {
                var t = this, i;
                if (t.animationStarted)
                    return !1;
                t.animationStarted = !0;
                i = "<" + t.newsTagName + ' style="display:none;" class="' + t.newsClassName + '">' + n(t.$elem).find(t.newsTagName).last().html() + "<\/" + t.newsTagName + ">";
                n(t.$elem).prepend(i);
                n(t.$elem).find(t.newsTagName).first().slideDown(t.options.animationSpeed, function () {
                    n(t.$elem).find(t.newsTagName).last().remove()
                });
                n(t.$elem).find(t.newsTagName + ":nth-child(" + parseInt(t.options.newsPerPage + 1) + ")").slideUp(t.options.animationSpeed, function () {
                    t.animationStarted = !1;
                    t.onReset(t.isHovered)
                });
                n(t.elem).find("." + t.newsClassName).on("mouseenter", function () {
                    t.onReset(!0)
                });
                n(t.elem).find("." + t.newsClassName).on("mouseout", function () {
                    t.onReset(!1)
                })
            },
            onNext: function () {
                var t = this, i;
                if (t.animationStarted)
                    return !1;
                t.animationStarted = !0;
                i = "<" + t.newsTagName + ' style="display:none;" class=' + t.newsClassName + ">" + n(t.$elem).find(t.newsTagName).first().html() + "<\/" + t.newsTagName + ">";
                n(t.$elem).append(i);
                n(t.$elem).find(t.newsTagName).first().slideUp(t.options.animationSpeed, function () {
                    n(this).remove()
                });
                n(t.$elem).find(t.newsTagName + ":nth-child(" + parseInt(t.options.newsPerPage + 1) + ")").slideDown(t.options.animationSpeed, function () {
                    t.animationStarted = !1;
                    t.onReset(t.isHovered)
                });
                n(t.elem).find("." + t.newsClassName).on("mouseenter", function () {
                    t.onReset(!0)
                });
                n(t.elem).find("." + t.newsClassName).on("mouseout", function () {
                    t.onReset(!1)
                })
            }
        };
        n.fn.bootstrapNews = function (n) {
            return this.each(function () {
                var t = Object.create(u);
                t.init(n, this)
            })
        }
            ;
        n.fn.bootstrapNews.options = {
            newsPerPage: 4,
            navigation: !0,
            autoplay: !0,
            direction: "up",
            animationSpeed: "normal",
            newsTickerInterval: 4e3,
            pauseOnHover: !0,
            onStop: null,
            onPause: null,
            onReset: null,
            onPrev: null,
            onNext: null,
            onToDo: null
        }
    }(jQuery, window, document);
var radius = 90
    , d = 200
    , dtr = Math.PI / 180
    , mcList = []
    , lasta = 1
    , lastb = 1
    , distr = !0
    , tspeed = 11
    , size = 200
    , mouseX = 0
    , mouseY = 10
    , howElliptical = 1
    , aA = null
    , oDiv = null;
window.onload = function () {
    var n = 0
        , t = null;
    if (oDiv = document.getElementById("tagscloud"),
        oDiv) {
        for (aA = oDiv.getElementsByTagName("a"),
            n = 0; n < aA.length; n++)
            t = {},
                aA[n].onmouseover = function (n) {
                    return function () {
                        n.on = !0;
                        this.style.zIndex = 9999;
                        this.style.color = "#fff";
                        this.style.padding = "5px 5px";
                        this.style.filter = "alpha(opacity=100)";
                        this.style.opacity = 1
                    }
                }(t),
                aA[n].onmouseout = function (n) {
                    return function () {
                        n.on = !1;
                        this.style.zIndex = n.zIndex;
                        this.style.color = "#fff";
                        this.style.padding = "5px";
                        this.style.filter = "alpha(opacity=" + 100 * n.alpha + ")";
                        this.style.opacity = n.alpha;
                        this.style.zIndex = n.zIndex
                    }
                }(t),
                t.offsetWidth = aA[n].offsetWidth,
                t.offsetHeight = aA[n].offsetHeight,
                mcList.push(t);
        sineCosine(0, 0, 0);
        positionAll(),
            function () {
                update();
                setTimeout(arguments.callee, 40)
            }()
    }
}
    ;
$(function () {
    var n = $("#rocket-to-top"), r = $(document).scrollTop(), i, t = !0;
    $(window).scroll(function () {
        var i = $(document).scrollTop();
        i == 0 ? n.css("background-position") == "0px 0px" ? n.fadeOut("slow") : t && (t = !1,
            $(".level-2").css("opacity", 1),
            n.delay(100).animate({
                marginTop: "-1000px"
            }, "normal", function () {
                n.css({
                    "margin-top": "-125px",
                    display: "none"
                });
                t = !0
            })) : n.fadeIn("slow")
    });
    n.hover(function () {
        $(".level-2").stop(!0).animate({
            opacity: 1
        })
    }, function () {
        $(".level-2").stop(!0).animate({
            opacity: 0
        })
    });
    $(".level-3").click(function () {
        function r() {
            var r = n.css("background-position");
            if (n.css("display") == "none" || t == 0) {
                clearInterval(i);
                n.css("background-position", "0px 0px");
                return
            }
            switch (r) {
                case "0px 0px":
                    n.css("background-position", "-298px 0px");
                    break;
                case "-298px 0px":
                    n.css("background-position", "-447px 0px");
                    break;
                case "-447px 0px":
                    n.css("background-position", "-596px 0px");
                    break;
                case "-596px 0px":
                    n.css("background-position", "-745px 0px");
                    break;
                case "-745px 0px":
                    n.css("background-position", "-298px 0px")
            }
        }
        t && (i = setInterval(r, 50),
            $("html,body").animate({
                scrollTop: 0
            }, "slow"))
    })
});
jQuery(document).ready(function (n) {
    function t() {
        n(".cd-nav-trigger").removeClass("nav-is-visible");
        n(".cd-main-header").removeClass("nav-is-visible");
        n(".cd-primary-nav").removeClass("nav-is-visible");
        n(".has-children ul").addClass("is-hidden");
        n(".has-children a").removeClass("selected");
        n(".moves-out").removeClass("moves-out");
        n(".cd-main-content").removeClass("nav-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
            n("body").removeClass("overflow-hidden")
        })
    }
    function i(t) {
        t == "close" ? (n(".cd-search").removeClass("is-visible"),
            n(".cd-search-trigger").removeClass("search-is-visible")) : (n(".cd-search").toggleClass("is-visible"),
                n(".cd-search-trigger").toggleClass("search-is-visible"),
                n(window).width() > u && n(".cd-search").hasClass("is-visible") && n(".cd-search").find('input[type="search"]').focus(),
                n(".cd-search").hasClass("is-visible") ? n(".cd-overlay").addClass("is-visible") : n(".cd-overlay").removeClass("is-visible"))
    }
    function f() {
        var n = window
            , t = "inner";
        return "innerWidth" in window || (t = "client",
            n = document.documentElement || document.body),
            n[t + "Width"] >= u ? !0 : !1
    }
    function r() {
        var t = n(".cd-nav")
            , i = f();
        i ? (t.detach(),
            t.insertBefore(".cd-header-buttons")) : (t.detach(),
                t.insertAfter(".cd-main-content"))
    }
    var u = 1170;
    r();
    n(window).on("resize", function () {
        window.requestAnimationFrame ? window.requestAnimationFrame(r) : setTimeout(r, 300)
    });
    n(".cd-nav-trigger").on("click", function (r) {
        if (r.preventDefault(),
            n(".cd-main-content").hasClass("nav-is-visible"))
            t(),
                n(".cd-overlay").removeClass("is-visible");
        else {
            n(this).addClass("nav-is-visible");
            n(".cd-primary-nav").addClass("nav-is-visible");
            n(".cd-main-header").addClass("nav-is-visible");
            n(".cd-main-content").addClass("nav-is-visible").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                n("body").addClass("overflow-hidden")
            });
            i("close");
            n(".cd-overlay").addClass("is-visible")
        }
    });
    n(".cd-search-trigger").on("click", function (n) {
        n.preventDefault();
        i();
        t()
    });
    n(".cd-overlay").on("swiperight", function () {
        n(".cd-primary-nav").hasClass("nav-is-visible") && (t(),
            n(".cd-overlay").removeClass("is-visible"))
    });
    n(".nav-on-left .cd-overlay").on("swipeleft", function () {
        n(".cd-primary-nav").hasClass("nav-is-visible") && (t(),
            n(".cd-overlay").removeClass("is-visible"))
    });
    n(".cd-overlay").on("click", function () {
        t();
        i("close");
        n(".cd-overlay").removeClass("is-visible")
    });
    n(".cd-primary-nav").children(".has-children").children("a").on("click", function (n) {
        n.preventDefault()
    });
    n(".has-children").children("a").on("click", function (t) {
        f() || t.preventDefault();
        var r = n(this);
        r.next("ul").hasClass("is-hidden") ? (r.addClass("selected").next("ul").removeClass("is-hidden").end().parent(".has-children").parent("ul").addClass("moves-out"),
            r.parent(".has-children").siblings(".has-children").children("ul").addClass("is-hidden").end().children("a").removeClass("selected"),
            n(".cd-overlay").addClass("is-visible")) : (r.removeClass("selected").next("ul").addClass("is-hidden").end().parent(".has-children").parent("ul").removeClass("moves-out"),
                n(".cd-overlay").removeClass("is-visible"));
        i("close")
    });
    n(".go-back").on("click", function () {
        n(this).parent("ul").addClass("is-hidden").parent(".has-children").parent("ul").removeClass("moves-out")
    })
})
