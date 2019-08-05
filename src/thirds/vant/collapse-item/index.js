"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 20);
    });
};
component_1.VantComponent({
    classes: ['title-class', 'content-class'],
    relation: {
        name: 'collapse',
        type: 'ancestor',
        linked: function linked(parent) {
            this.parent = parent;
        }
    },
    props: {
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        isLink: {
            type: Boolean,
            value: true
        }
    },
    data: {
        contentHeight: 0,
        expanded: false,
        transition: false
    },
    mounted: function mounted() {
        var _this = this;
        this.updateExpanded().then(nextTick).then(function () {
            _this.set({ transition: true });
        });
    },
    methods: {
        updateExpanded: function updateExpanded() {
            if (!this.parent) {
                return Promise.resolve();
            }
            var _a = this.parent.data,
                value = _a.value,
                accordion = _a.accordion;
            var _b = this.parent.children,
                children = _b === void 0 ? [] : _b;
            var name = this.data.name;
            var index = children.indexOf(this);
            var currentName = name == null ? index : name;
            var expanded = accordion ? value === currentName : (value || []).some(function (name) {
                return name === currentName;
            });
            var stack = [];
            if (expanded !== this.data.expanded) {
                stack.push(this.updateStyle(expanded));
            }
            stack.push(this.set({ index: index, expanded: expanded }));
            return Promise.all(stack);
        },
        updateStyle: function updateStyle(expanded) {
            var _this = this;
            return this.getRect('.van-collapse-item__content').then(function (rect) {
                return rect.height;
            }).then(function (height) {
                if (expanded) {
                    return _this.set({
                        contentHeight: height ? height + "px" : 'auto'
                    });
                } else {
                    return _this.set({ contentHeight: height + "px" }).then(nextTick).then(function () {
                        return _this.set({ contentHeight: 0 });
                    });
                }
            });
        },
        onClick: function onClick() {
            if (this.data.disabled) {
                return;
            }
            var _a = this.data,
                name = _a.name,
                expanded = _a.expanded;
            var index = this.parent.children.indexOf(this);
            var currentName = name == null ? index : name;
            this.parent.switch(currentName, !expanded);
        },
        onTransitionEnd: function onTransitionEnd() {
            if (this.data.expanded) {
                this.set({
                    contentHeight: 'auto'
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwibmV4dFRpY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJWYW50Q29tcG9uZW50IiwiY2xhc3NlcyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJwYXJlbnQiLCJwcm9wcyIsInRpdGxlIiwiaWNvbiIsIlN0cmluZyIsImxhYmVsIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwiYm9yZGVyIiwiaXNMaW5rIiwiZGF0YSIsImNvbnRlbnRIZWlnaHQiLCJleHBhbmRlZCIsInRyYW5zaXRpb24iLCJtb3VudGVkIiwiX3RoaXMiLCJ1cGRhdGVFeHBhbmRlZCIsInRoZW4iLCJzZXQiLCJtZXRob2RzIiwiX2EiLCJhY2NvcmRpb24iLCJfYiIsImNoaWxkcmVuIiwiaW5kZXgiLCJpbmRleE9mIiwiY3VycmVudE5hbWUiLCJzb21lIiwic3RhY2siLCJwdXNoIiwidXBkYXRlU3R5bGUiLCJhbGwiLCJnZXRSZWN0IiwicmVjdCIsImhlaWdodCIsIm9uQ2xpY2siLCJzd2l0Y2giLCJvblRyYW5zaXRpb25FbmQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsV0FBVyxTQUFYQSxRQUFXLEdBQVk7QUFBRSxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CO0FBQUUsZUFBT0MsV0FBV0QsT0FBWCxFQUFvQixFQUFwQixDQUFQO0FBQWlDLEtBQWxFLENBQVA7QUFBNkUsQ0FBMUc7QUFDQUosWUFBWU0sYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsZUFB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QWV1QixTQUFTLElBQTFCLEVBQVYsRUFDRmpCLElBREUsQ0FDRzNCLFFBREgsRUFFRjJCLElBRkUsQ0FFRyxZQUFZO0FBQUUsK0JBQU9GLE1BQU1HLEdBQU4sQ0FBVSxFQUFFUCxlQUFlLENBQWpCLEVBQVYsQ0FBUDtBQUF5QyxxQkFGMUQsQ0FBUDtBQUdIO0FBQ0osYUFiTSxDQUFQO0FBY0gsU0FwQ0k7QUFxQ0x3QixpQkFBUyxtQkFBWTtBQUNqQixnQkFBSSxLQUFLekIsSUFBTCxDQUFVSixRQUFkLEVBQXdCO0FBQ3BCO0FBQ0g7QUFDRCxnQkFBSWMsS0FBSyxLQUFLVixJQUFkO0FBQUEsZ0JBQW9CYixPQUFPdUIsR0FBR3ZCLElBQTlCO0FBQUEsZ0JBQW9DZSxXQUFXUSxHQUFHUixRQUFsRDtBQUNBLGdCQUFJWSxRQUFRLEtBQUt4QixNQUFMLENBQVl1QixRQUFaLENBQXFCRSxPQUFyQixDQUE2QixJQUE3QixDQUFaO0FBQ0EsZ0JBQUlDLGNBQWM3QixRQUFRLElBQVIsR0FBZTJCLEtBQWYsR0FBdUIzQixJQUF6QztBQUNBLGlCQUFLRyxNQUFMLENBQVlvQyxNQUFaLENBQW1CVixXQUFuQixFQUFnQyxDQUFDZCxRQUFqQztBQUNILFNBN0NJO0FBOENMeUIseUJBQWlCLDJCQUFZO0FBQ3pCLGdCQUFJLEtBQUszQixJQUFMLENBQVVFLFFBQWQsRUFBd0I7QUFDcEIscUJBQUtNLEdBQUwsQ0FBUztBQUNMUCxtQ0FBZTtBQURWLGlCQUFUO0FBR0g7QUFDSjtBQXBESTtBQXRDYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgbmV4dFRpY2sgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCAyMCk7IH0pOyB9O1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogWyd0aXRsZS1jbGFzcycsICdjb250ZW50LWNsYXNzJ10sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2NvbGxhcHNlJyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbmFtZTogbnVsbCxcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBpc0xpbms6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGNvbnRlbnRIZWlnaHQ6IDAsXG4gICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgICAgdHJhbnNpdGlvbjogZmFsc2VcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy51cGRhdGVFeHBhbmRlZCgpXG4gICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNldCh7IHRyYW5zaXRpb246IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVFeHBhbmRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucGFyZW50LmRhdGEsIHZhbHVlID0gX2EudmFsdWUsIGFjY29yZGlvbiA9IF9hLmFjY29yZGlvbjtcbiAgICAgICAgICAgIHZhciBfYiA9IHRoaXMucGFyZW50LmNoaWxkcmVuLCBjaGlsZHJlbiA9IF9iID09PSB2b2lkIDAgPyBbXSA6IF9iO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmRhdGEubmFtZTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudE5hbWUgPSBuYW1lID09IG51bGwgPyBpbmRleCA6IG5hbWU7XG4gICAgICAgICAgICB2YXIgZXhwYW5kZWQgPSBhY2NvcmRpb25cbiAgICAgICAgICAgICAgICA/IHZhbHVlID09PSBjdXJyZW50TmFtZVxuICAgICAgICAgICAgICAgIDogKHZhbHVlIHx8IFtdKS5zb21lKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBuYW1lID09PSBjdXJyZW50TmFtZTsgfSk7XG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBbXTtcbiAgICAgICAgICAgIGlmIChleHBhbmRlZCAhPT0gdGhpcy5kYXRhLmV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnVwZGF0ZVN0eWxlKGV4cGFuZGVkKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFjay5wdXNoKHRoaXMuc2V0KHsgaW5kZXg6IGluZGV4LCBleHBhbmRlZDogZXhwYW5kZWQgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlU3R5bGU6IGZ1bmN0aW9uIChleHBhbmRlZCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlY3QoJy52YW4tY29sbGFwc2UtaXRlbV9fY29udGVudCcpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlY3QpIHsgcmV0dXJuIHJlY3QuaGVpZ2h0OyB9KVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SGVpZ2h0OiBoZWlnaHQgPyBoZWlnaHQgKyBcInB4XCIgOiAnYXV0bydcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2V0KHsgY29udGVudEhlaWdodDogaGVpZ2h0ICsgXCJweFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnNldCh7IGNvbnRlbnRIZWlnaHQ6IDAgfSk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBuYW1lID0gX2EubmFtZSwgZXhwYW5kZWQgPSBfYS5leHBhbmRlZDtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICB2YXIgY3VycmVudE5hbWUgPSBuYW1lID09IG51bGwgPyBpbmRleCA6IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnBhcmVudC5zd2l0Y2goY3VycmVudE5hbWUsICFleHBhbmRlZCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEhlaWdodDogJ2F1dG8nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==