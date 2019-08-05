"use strict";

var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    classes: ['icon-class'],
    props: {
        readonly: Boolean,
        disabled: Boolean,
        size: {
            type: Number,
            value: 20
        },
        icon: {
            type: String,
            value: 'star'
        },
        voidIcon: {
            type: String,
            value: 'star-o'
        },
        color: {
            type: String,
            value: '#ffd21e'
        },
        voidColor: {
            type: String,
            value: '#c7c7c7'
        },
        disabledColor: {
            type: String,
            value: '#bdbdbd'
        },
        count: {
            type: Number,
            value: 5
        },
        value: {
            type: Number,
            value: 0
        }
    },
    data: {
        innerValue: 0
    },
    watch: {
        value: function value(_value) {
            if (_value !== this.data.innerValue) {
                this.set({ innerValue: _value });
            }
        }
    },
    computed: {
        list: function list() {
            var _a = this.data,
                count = _a.count,
                innerValue = _a.innerValue;
            return Array.from({ length: count }, function (_, index) {
                return index < innerValue;
            });
        }
    },
    methods: {
        onSelect: function onSelect(event) {
            var data = this.data;
            var index = event.currentTarget.dataset.index;
            if (!data.disabled && !data.readonly) {
                this.set({ innerValue: index + 1 });
                this.$emit('input', index + 1);
                this.$emit('change', index + 1);
            }
        },
        onTouchMove: function onTouchMove(event) {
            var _this = this;
            var _a = event.touches[0],
                clientX = _a.clientX,
                clientY = _a.clientY;
            this.getRect('.van-rate__item', true).then(function (list) {
                var target = list.find(function (item) {
                    return clientX >= item.left && clientX <= item.right && clientY >= item.top && clientY <= item.bottom;
                });
                if (target != null) {
                    _this.onSelect(__assign({}, event, { currentTarget: target }));
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwicmVhZG9ubHkiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJzaXplIiwidHlwZSIsIk51bWJlciIsImljb24iLCJTdHJpbmciLCJ2b2lkSWNvbiIsImNvbG9yIiwidm9pZENvbG9yIiwiZGlzYWJsZWRDb2xvciIsImNvdW50IiwiZGF0YSIsImlubmVyVmFsdWUiLCJ3YXRjaCIsInNldCIsImNvbXB1dGVkIiwibGlzdCIsIl9hIiwiQXJyYXkiLCJmcm9tIiwiXyIsImluZGV4IiwibWV0aG9kcyIsIm9uU2VsZWN0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIiRlbWl0Iiwib25Ub3VjaE1vdmUiLCJfdGhpcyIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImdldFJlY3QiLCJ0aGVuIiwidGFyZ2V0IiwiZmluZCIsIml0ZW0iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBLElBQUlBLFdBQVksYUFBUSxVQUFLQSxRQUFkLElBQTJCLFlBQVk7QUFDbERBLGVBQVdDLE9BQU9DLE1BQVAsSUFBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3BDLGFBQUssSUFBSUMsQ0FBSixFQUFPQyxJQUFJLENBQVgsRUFBY0MsSUFBSUMsVUFBVUMsTUFBakMsRUFBeUNILElBQUlDLENBQTdDLEVBQWdERCxHQUFoRCxFQUFxRDtBQUNqREQsZ0JBQUlHLFVBQVVGLENBQVYsQ0FBSjtBQUNBLGlC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VUFBVWQsR0FBR2MsT0FBeEM7QUFBQSxnQkFBaURDLFVBQVVmLEdBQUdlLE9BQTlEO0FBQ0EsaUJBQUtDLE9BQUwsQ0FBYSxpQkFBYixFQUFnQyxJQUFoQyxFQUFzQ0MsSUFBdEMsQ0FBMkMsVUFBVWxCLElBQVYsRUFBZ0I7QUFDdkQsb0JBQUltQixTQUFTbkIsS0FBS29CLElBQUwsQ0FBVSxVQUFVQyxJQUFWLEVBQWdCO0FBQ25DLDJCQUFPTixXQUFXTSxLQUFLQyxJQUFoQixJQUNIUCxXQUFXTSxLQUFLRSxLQURiLElBRUhQLFdBQVdLLEtBQUtHLEdBRmIsSUFHSFIsV0FBV0ssS0FBS0ksTUFIcEI7QUFJSCxpQkFMWSxDQUFiO0FBTUEsb0JBQUlOLFVBQVUsSUFBZCxFQUFvQjtBQUNoQk4sMEJBQU1OLFFBQU4sQ0FBZWhELFNBQVMsRUFBVCxFQUFhaUQsS0FBYixFQUFvQixFQUFFQyxlQUFlVSxNQUFqQixFQUFwQixDQUFmO0FBQ0g7QUFDSixhQVZEO0FBV0g7QUF4Qkk7QUF2RGEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIGNsYXNzZXM6IFsnaWNvbi1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDIwXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnc3RhcidcbiAgICAgICAgfSxcbiAgICAgICAgdm9pZEljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnc3Rhci1vJ1xuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjZmZkMjFlJ1xuICAgICAgICB9LFxuICAgICAgICB2b2lkQ29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnI2M3YzdjNydcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWRDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjYmRiZGJkJ1xuICAgICAgICB9LFxuICAgICAgICBjb3VudDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDVcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaW5uZXJWYWx1ZTogMFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLmRhdGEuaW5uZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0KHsgaW5uZXJWYWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgY291bnQgPSBfYS5jb3VudCwgaW5uZXJWYWx1ZSA9IF9hLmlubmVyVmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogY291bnQgfSwgZnVuY3Rpb24gKF8sIGluZGV4KSB7IHJldHVybiBpbmRleCA8IGlubmVyVmFsdWU7IH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgaWYgKCFkYXRhLmRpc2FibGVkICYmICFkYXRhLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoeyBpbm5lclZhbHVlOiBpbmRleCArIDEgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBpbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uVG91Y2hNb3ZlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2EgPSBldmVudC50b3VjaGVzWzBdLCBjbGllbnRYID0gX2EuY2xpZW50WCwgY2xpZW50WSA9IF9hLmNsaWVudFk7XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tcmF0ZV9faXRlbScsIHRydWUpLnRoZW4oZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gbGlzdC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGllbnRYID49IGl0ZW0ubGVmdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50WCA8PSBpdGVtLnJpZ2h0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZID49IGl0ZW0udG9wICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZIDw9IGl0ZW0uYm90dG9tO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vblNlbGVjdChfX2Fzc2lnbih7fSwgZXZlbnQsIHsgY3VycmVudFRhcmdldDogdGFyZ2V0IH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19