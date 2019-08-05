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
var queue = [];
function getContext() {
    var pages = getCurrentPages();
    return pages[pages.length - 1];
}
var Dialog = function Dialog(options) {
    options = __assign({}, Dialog.currentOptions, options);
    return new Promise(function (resolve, reject) {
        var context = options.context || getContext();
        var dialog = context.selectComponent(options.selector);
        delete options.selector;
        if (dialog) {
            dialog.set(__assign({ onCancel: reject, onConfirm: resolve }, options));
            queue.push(dialog);
        } else {
            console.warn('未找到 van-dialog 节点，请确认 selector 及 context 是否正确');
        }
    });
};
Dialog.defaultOptions = {
    show: true,
    title: '',
    message: '',
    zIndex: 100,
    overlay: true,
    asyncClose: false,
    messageAlign: '',
    transition: 'scale',
    selector: '#van-dialog',
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    showConfirmButton: true,
    showCancelButton: false,
    closeOnClickOverlay: false,
    confirmButtonOpenType: ''
};
Dialog.alert = Dialog;
Dialog.confirm = function (options) {
    return Dialog(__assign({ showCancelButton: true }, options));
};
Dialog.close = function () {
    queue.forEach(function (dialog) {
        dialog.close();
    });
    queue = [];
};
Dialog.stopLoading = function () {
    queue.forEach(function (dialog) {
        dialog.stopLoading();
    });
};
Dialog.setDefaultOptions = function (options) {
    Object.assign(Dialog.currentOptions, options);
};
Dialog.resetDefaultOptions = function () {
    Dialog.currentOptions = __assign({}, Dialog.defaultOptions);
};
Dialog.resetDefaultOptions();
exports.default = Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy5qcyJdLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInF1ZXVlIiwiZ2V0Q29udGV4dCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwiRGlhbG9nIiwib3B0aW9ucyIsImN1cnJlbnRPcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb250ZXh0IiwiZGlhbG9nIiwic2VsZWN0Q29tcG9uZW50Iiwic2VsZWN0b3IiLCJzZXQiLCJvbkNhbmNlbCIsIm9uQ29uZmlybSIsInB1c2giLCJjb25zb2xlIiwid2FybiIsImRlZmF1bHRPcHRpb25zIiwic2hvdyIsInRpdGxlIiwibWVzc2FnZSIsInpJbmRleCIsIm92ZXJsYXkiLCJhc3luY0Nsb3NlIiwibWVzc2FnZUFsaWduIiwidHJhbnNpdGlvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInNob3dDb25maXJtQnV0dG9uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJjb25maXJtQnV0dG9uT3BlblR5cGUiLCJhbGVydCIsImNvbmZpcm0iLCJjbG9zZSIsImZvckVhY2giLCJzdG9wTG9hZGluZyIsInNldERlZmF1bHRPcHRpb25zIiwicmVzZXREZWZhdWx0T3B0aW9ucyIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBLElBQUlBLFdBQVksYUFBUSxVQUFLQSxRQUFkLElBQTJCLFlBQVk7QUFDbERBLGVBQVdDLE9BQU9DLE1BQVAsSUFBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3BDLGFBQUssSUFBSUMsQ0FBSixFQUFPQyxJQUFJLENBQVgsRUFBY0MsSUFBSUMsVUFBVUMs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RDtBQUdBRCxPQUFPcUMsbUJBQVAsR0FBNkIsWUFBWTtBQUNyQ3JDLFdBQU9FLGNBQVAsR0FBd0J2QixTQUFTLEVBQVQsRUFBYXFCLE9BQU9nQixjQUFwQixDQUF4QjtBQUNILENBRkQ7QUFHQWhCLE9BQU9xQyxtQkFBUDtBQUNBM0MsUUFBUTRDLE9BQVIsR0FBa0J0QyxNQUFsQiIsImZpbGUiOiJkaWFsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcXVldWUgPSBbXTtcbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XG4gICAgcmV0dXJuIHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xufVxudmFyIERpYWxvZyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IF9fYXNzaWduKHt9LCBEaWFsb2cuY3VycmVudE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IGdldENvbnRleHQoKTtcbiAgICAgICAgdmFyIGRpYWxvZyA9IGNvbnRleHQuc2VsZWN0Q29tcG9uZW50KG9wdGlvbnMuc2VsZWN0b3IpO1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5zZWxlY3RvcjtcbiAgICAgICAgaWYgKGRpYWxvZykge1xuICAgICAgICAgICAgZGlhbG9nLnNldChfX2Fzc2lnbih7IG9uQ2FuY2VsOiByZWplY3QsIG9uQ29uZmlybTogcmVzb2x2ZSB9LCBvcHRpb25zKSk7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGRpYWxvZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ+acquaJvuWIsCB2YW4tZGlhbG9nIOiKgueCue+8jOivt+ehruiupCBzZWxlY3RvciDlj4ogY29udGV4dCDmmK/lkKbmraPnoa4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbkRpYWxvZy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBzaG93OiB0cnVlLFxuICAgIHRpdGxlOiAnJyxcbiAgICBtZXNzYWdlOiAnJyxcbiAgICB6SW5kZXg6IDEwMCxcbiAgICBvdmVybGF5OiB0cnVlLFxuICAgIGFzeW5jQ2xvc2U6IGZhbHNlLFxuICAgIG1lc3NhZ2VBbGlnbjogJycsXG4gICAgdHJhbnNpdGlvbjogJ3NjYWxlJyxcbiAgICBzZWxlY3RvcjogJyN2YW4tZGlhbG9nJyxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ+ehruiupCcsXG4gICAgY2FuY2VsQnV0dG9uVGV4dDogJ+WPlua2iCcsXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgY2xvc2VPbkNsaWNrT3ZlcmxheTogZmFsc2UsXG4gICAgY29uZmlybUJ1dHRvbk9wZW5UeXBlOiAnJ1xufTtcbkRpYWxvZy5hbGVydCA9IERpYWxvZztcbkRpYWxvZy5jb25maXJtID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gRGlhbG9nKF9fYXNzaWduKHsgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9LCBvcHRpb25zKSk7XG59O1xuRGlhbG9nLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKGRpYWxvZykge1xuICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICB9KTtcbiAgICBxdWV1ZSA9IFtdO1xufTtcbkRpYWxvZy5zdG9wTG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChkaWFsb2cpIHtcbiAgICAgICAgZGlhbG9nLnN0b3BMb2FkaW5nKCk7XG4gICAgfSk7XG59O1xuRGlhbG9nLnNldERlZmF1bHRPcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKERpYWxvZy5jdXJyZW50T3B0aW9ucywgb3B0aW9ucyk7XG59O1xuRGlhbG9nLnJlc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgRGlhbG9nLmN1cnJlbnRPcHRpb25zID0gX19hc3NpZ24oe30sIERpYWxvZy5kZWZhdWx0T3B0aW9ucyk7XG59O1xuRGlhbG9nLnJlc2V0RGVmYXVsdE9wdGlvbnMoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IERpYWxvZztcbiJdfQ==