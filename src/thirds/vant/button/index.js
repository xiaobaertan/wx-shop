"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
    classes: ['hover-class', 'loading-class'],
    props: {
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
        }
    },
    methods: {
        onClick: function onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsIlZhbnRDb21wb25lbnQiLCJtaXhpbnMiLCJidXR0b24iLCJvcGVuVHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInBsYWluIiwiQm9vbGVhbiIsImJsb2NrIiwicm91bmQiLCJzcXVhcmUiLCJsb2FkaW5nIiwiaGFpcmxpbmUiLCJkaXNhYmxlZCIsImxvYWRpbmdUZXh0IiwiU3RyaW5nIiwidHlwZSIsInNpemUiLCJsb2FkaW5nU2l6ZSIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZGF0YSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLFdBQVdELFFBQVEsa0JBQVIsQ0FBZjtBQUNBLElBQUlFLGNBQWNGLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUksYUFBWixDQUEwQjtBQUN0QkMsWUFBUSxDQUFDSCxTQUFTSSxNQUFWLEVBQWtCSCxZQUFZSSxRQUE5QixDQURjO0FBRXRCQyxhQUFTLENBQUMsYUFBRCxFQUFnQixlQUFoQixDQUZhO0FBR3RCQyxXQUFPO0FBQ0hDLGVBQU9DLE9BREo7QUFFSEMsZUFBT0QsT0FGSjtBQUdIRSxlQUFPRixPQUhKO0FBSUhHLGdCQUFRSCxPQUpMO0FBS0hJLGlCQUFTSixPQUxOO0FBTUhLLGtCQUFVTCxPQU5QO0FBT0hNLGtCQUFVTixPQVBQO0FBUUhPLHFCQUFhQyxNQVJWO0FBU0hDLGNBQU07QUFDRkEsa0JBQU1ELE1BREo7QUFFRnBCLG1CQUFPO0FBRkwsU0FUSDtBQWFIc0IsY0FBTTtBQUNGRCxrQkFBTUQsTUFESjtBQUVGcEIsbUJBQU87QUFGTCxTQWJIO0FBaUJIdUIscUJBQWE7QUFDVEYsa0JBQU1ELE1BREc7QUFFVHBCLG1CQUFPO0FBRkU7QUFqQlYsS0FIZTtBQXlCdEJ3QixhQUFTO0FBQ0xDLGlCQUFTLG1CQUFZO0FBQ2pCLGdCQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVUixRQUFYLElBQXVCLENBQUMsS0FBS1EsSUFBTCxDQUFVVixPQUF0QyxFQUErQztBQUMzQyxxQkFBS1csS0FBTCxDQUFXLE9BQVg7QUFDSDtBQUNKO0FBTEk7QUF6QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4uL21peGlucy9idXR0b25cIik7XG52YXIgb3Blbl90eXBlXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL29wZW4tdHlwZVwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW2J1dHRvbl8xLmJ1dHRvbiwgb3Blbl90eXBlXzEub3BlblR5cGVdLFxuICAgIGNsYXNzZXM6IFsnaG92ZXItY2xhc3MnLCAnbG9hZGluZy1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHBsYWluOiBCb29sZWFuLFxuICAgICAgICBibG9jazogQm9vbGVhbixcbiAgICAgICAgcm91bmQ6IEJvb2xlYW4sXG4gICAgICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgaGFpcmxpbmU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBsb2FkaW5nVGV4dDogU3RyaW5nLFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2RlZmF1bHQnXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbm9ybWFsJ1xuICAgICAgICB9LFxuICAgICAgICBsb2FkaW5nU2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcyMHB4J1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubG9hZGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==