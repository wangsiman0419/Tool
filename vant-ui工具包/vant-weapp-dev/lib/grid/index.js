"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    relation: {
        name: 'grid-item',
        type: 'descendant',
        linked: function (child) {
            this.children.push(child);
        },
        unlinked: function (child) {
            this.children = this.children.filter(function (item) { return item !== child; });
        }
    },
    props: {
        square: {
            type: Boolean,
            observer: 'updateChildren'
        },
        gutter: {
            type: [Number, String],
            value: 0,
            observer: 'updateChildren'
        },
        clickable: {
            type: Boolean,
            observer: 'updateChildren'
        },
        columnNum: {
            type: Number,
            value: 4,
            observer: 'updateChildren'
        },
        center: {
            type: Boolean,
            value: true,
            observer: 'updateChildren'
        },
        border: {
            type: Boolean,
            value: true,
            observer: 'updateChildren'
        }
    },
    beforeCreate: function () {
        this.children = [];
    },
    created: function () {
        var gutter = this.data.gutter;
        if (gutter) {
            this.setData({
                style: "padding-left: " + gutter + "px"
            });
        }
    },
    methods: {
        updateChildren: function () {
            this.children.forEach(function (child) {
                child.updateStyle();
            });
        }
    }
});
