var editableElements = document.querySelectorAll(".editable");

for( var i = 0; i < editableElements.length; i++){
    editableElements[i].addEventListener("dblclick", function(){
        if(!this.classList.contains("editing")){
            this.classList.add("editing");
            if(this.classList.contains("editable-textarea")){
                setEditingTextArea(this);
            }else{
                setEditingArea(this);
            }
            
        }       
    });
}

function setEditingArea(elem)
{
    var text = elem.textContent.trim();
    elem.setAttribute("data-original", text);
    

    var input = document.createElement("input");
    input.type = "text";
    input.id = "active-editable-box";
    input.style.height = elem.offsetHeight + 2;
    input.style.fontSize = elem.offsetHeight - 4;
    input.value = text;
    input.addEventListener("blur", function(){undoEditable(elem)});

    var save = createSaveButton();
    save.addEventListener("click", function(){saveEditable(elem)});

    elem.textContent="";
    elem.appendChild(input);
    elem.appendChild(save);
    input.focus();
}

function setEditingTextArea(elem)
{
    var text = elem.textContent.trim();
    elem.setAttribute("data-original", text);
    
    var input = document.createElement("textarea");
    input.id = "active-editable-box";
    input.textContent = text;
    // input.setAttribute("rows", 15);
    // input.setAttribute("cols", 55);
    input.style.boxSizing = "border-box";
    input.style.width = "100%";
    input.style.height = elem.offsetHeight * 1.7;
    input.addEventListener("blur", function(){undoEditable(elem)});

    var save = createSaveButton();
    save.addEventListener("click", function(){saveEditable(elem)});

    elem.textContent="";
    elem.appendChild(input);
    elem.appendChild(save);
    input.focus();
}

function createSaveButton()
{
    var save = document.createElement("button");
    save.style.padding = "5px";
    save.style.width= "20px";
    save.style.height= "20px";
    save.style.margin = "4px";
    save.style.backgroundImage = "url('floppy.png')";
    save.style.backgroundSize = "100%";
    save.style.backgroundColor = "#5cb85c";
    save.style.border = "none";
    save.style.backgroundRepeat = "no-repeat";
    save.style.cursor = "pointer";
    save.style.textDecoration = "none";
    save.mouseIsOver = false;
    save.id = "active-editable-save-btn";
    save.onmouseover = function(){
        this.mouseIsOver = true;
    };
    save.onmouseout = function(){
        this.mouseIsOver = false;
    };

    return save;
}

function saveEditable(elem)
{
    var target = document.getElementById("active-editable-box");
    elem.innerHTML = target.value;
    elem.classList.remove("editing");
}

function undoEditable(elem)
{
    var btn = document.getElementById("active-editable-save-btn");
    
    if(btn.mouseIsOver !== true){
        var text = elem.getAttribute("data-original");
        elem.innerHTML = text;
        elem.classList.remove("editing");
    }
}