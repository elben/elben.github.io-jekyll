
Our code now looks something like this

```javascript
```

```clojure

```

=========

- two ways to save a document, say Ctrl+S or clicking "Save". We can have two channels, same place to do the logic.
	- using events is too loose—anyone can capture events
	- both components would need to hold the save logic (e.g. share ref to obj)

One final problem to address is communication.

Say we have an input field that holds a HEX value. We want the background color of the page to change to whatever value the user types in. In JavaScript, we may do something like this:

```javascript
// TODO verify correctness
$("input.hex-value").onchange(function () {
  $("body").css("background", $(this).val());
});
```

- `go` is a macro
	- allows async code to look like synchronous code
	- allows you to move logic to proper place, separating mechanism of data transfer (e.g. browser events) from the logic.