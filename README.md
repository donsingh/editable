[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub version](https://badge.fury.io/gh/boennemann%2Fbadges.svg)](https://github.com/donsingh/editable/releases)
[![Only 32 Kb](https://badge-size.herokuapp.com/Naereen/StrapDown.js/master/strapdown.min.js)](https://github.com/donsingh/editable/blob/master/editable.js)


# Editable

A Javascript plugin for allowing users to edit an element's text in real time.


## Examples

### Basic Example

A simple `<p>` tag that is editable:

![Basic Example](https://github.com/donsingh/editable/blob/master/images/basic.gif)

Clicking anywhere outside the element would undo all edits:

![Undoing Example](https://github.com/donsingh/editable/blob/master/images/undo.gif)

Textarea is also supported:

![Textarea Example](https://github.com/donsingh/editable/blob/master/images/textarea.gif)



## Installation & Usage

Ofcourse start off by downloading the editable.js file and appending it to your page
```
<script src='editable.js'></script>
```

Then just add the class `editable` on elements with text that you want to modify

  

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
