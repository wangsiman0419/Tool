"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var color_1 = require("../common/color");
var safe_area_1 = require("../mixins/safe-area");
component_1.VantComponent({
    mixins: [safe_area_1.safeArea()],
    props: {
        message: String,
        background: String,
        type: {
            type: String,
            value: 'danger'
        },
        color: {
            type: String,
            value: color_1.WHITE
        },
        duration: {
            type: Number,
            value: 3000
        },
        zIndex: {
            type: Number,
            value: 110
        }
    },
    methods: {
        show: function () {
            var _this = this;
            var _a = this.data, duration = _a.duration, onOpened = _a.onOpened;
            clearTimeout(this.timer);
            this.setData({
                show: true
            }, onOpened);
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(function () {
                    _this.hide();
                }, duration);
            }
        },
        hide: function () {
            var onClose = this.data.onClose;
            clearTimeout(this.timer);
            this.setData({
                show: false
            }, onClose);
        },
        onTap: function (event) {
            var onClick = this.data.onClick;
            if (onClick) {
                onClick(event.detail);
            }
        }
    }
});
