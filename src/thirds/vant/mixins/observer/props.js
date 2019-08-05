"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function observeProps(props) {
    if (!props) {
        return;
    }
    Object.keys(props).forEach(function (key) {
        var prop = props[key];
        if (prop === null || !('type' in prop)) {
            prop = { type: prop };
        }
        var observer = prop.observer;
        prop.observer = function () {
            if (observer) {
                if (typeof observer === 'string') {
                    observer = this[observer];
                }
                observer.apply(this, arguments);
            }
            this.set();
        };
        props[key] = prop;
    });
}
exports.observeProps = observeProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BzLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwib2JzZXJ2ZVByb3BzIiwicHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInByb3AiLCJ0eXBlIiwib2JzZXJ2ZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInNldCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3pCLFFBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1I7QUFDSDtBQUNETCxXQUFPTSxJQUFQLENBQVlELEtBQVosRUFBbUJFLE9BQW5CLENBQTJCLFVBQVVDLEdBQVYsRUFBZTtBQUN0QyxZQUFJQyxPQUFPSixNQUFNRyxHQUFOLENBQVg7QUFDQSxZQUFJQyxTQUFTLElBQVQsSUFBaUIsRUFBRSxVQUFVQSxJQUFaLENBQXJCLEVBQXdDO0FBQ3BDQSxtQkFBTyxFQUFFQyxNQUFNRCxJQUFSLEVBQVA7QUFDSDtBQUNELFlBQUlFLFdBQVdGLEtBQUtFLFFBQXBCO0FBQ0FGLGFBQUtFLFFBQUwsR0FBZ0IsWUFBWTtBQUN4QixnQkFBSUEsUUFBSixFQUFjO0FBQ1Ysb0JBQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUM5QkEsK0JBQVcsS0FBS0EsUUFBTCxDQUFYO0FBQ0g7QUFDREEseUJBQVNDLEtBQVQsQ0FBZSxJQUFmLEVBQXFCQyxTQUFyQjtBQUNIO0FBQ0QsaUJBQUtDLEdBQUw7QUFDSCxTQVJEO0FBU0FULGNBQU1HLEdBQU4sSUFBYUMsSUFBYjtBQUNILEtBaEJEO0FBaUJIO0FBQ0RQLFFBQVFFLFlBQVIsR0FBdUJBLFlBQXZCIiwiZmlsZSI6InByb3BzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBvYnNlcnZlUHJvcHMocHJvcHMpIHtcbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgcHJvcCA9IHByb3BzW2tleV07XG4gICAgICAgIGlmIChwcm9wID09PSBudWxsIHx8ICEoJ3R5cGUnIGluIHByb3ApKSB7XG4gICAgICAgICAgICBwcm9wID0geyB0eXBlOiBwcm9wIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9ic2VydmVyID0gcHJvcC5vYnNlcnZlcjtcbiAgICAgICAgcHJvcC5vYnNlcnZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvYnNlcnZlcikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyID0gdGhpc1tvYnNlcnZlcl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldCgpO1xuICAgICAgICB9O1xuICAgICAgICBwcm9wc1trZXldID0gcHJvcDtcbiAgICB9KTtcbn1cbmV4cG9ydHMub2JzZXJ2ZVByb3BzID0gb2JzZXJ2ZVByb3BzO1xuIl19