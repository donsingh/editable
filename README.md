# Editable

A Javascript plugin for allowing users to edit an element's text in real time.


## Examples

### Basic Example
![Basic Example](https://github.com/donsingh/editable/blob/master/images/basic.gif)
A simple `<p>` tag that is editable

![Undoing Example](eet)
Clicking anywhere outside the element would undo all edits

![Textarea Example](test)
Textarea is also supported!

## Installation
  
Simply add `editable.js` in your html page

## Usage

  

Just add the class `editable` on elements with text that you want to modify

  

```

<div>
	<p class='editable'>This is a sample editable text</p>
</div>

```

  

For large text, add an **additional** `editable-textarea` class
```
<div  class="editable editable-textarea">
	The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
</div>
```

## Triggers
By default, all editable elements are triggered using the **doubleclick** mouse event.
