//Available script attributes :
//lwds-bs="10px" to set debug border width
//lwds-bc="red" to set debug border color
//lwds-b-disabled to disable debug border (colouring will still be active)
//disabled to disable the script (debug border and colouring)

//Default usage : put <script src="tag-colorer.js" defer></script> in <head>
//Using parameters in tag attributes : <script src="tc.js" defer lwds-bs="10px" lwds-bc="red" lwds-b-disabled></script>
//Note : defer MUST be set, or script be at the end of html.

if(document.currentScript.hasAttribute("disabled"))
{
    console.debug("Script deactivated.")
    throw Error("Exiting");
}


function colorElements(esNl)
{
    es = [];
    esNl.forEach(e => e.style ? es.push(e) : undefined);//might not have filter.
    es.forEach(e=>e.style.backgroundColor = `hsl(${Math.random()}turn ${Math.random() < 0.3 ? "60%" : "100%"} 50% / .7)`);
}

colorElements(document.querySelectorAll("*"));

const obs = new MutationObserver(mrs=>mrs.forEach(mr=>colorElements(mr.addedNodes)));
obs.observe(document.querySelector("body"), {childList:true, subtree:true});


lwdsBs = "2px";
if (document.currentScript.hasAttribute("lwds-bs"))
    lwdsBs = document.currentScript.getAttribute("lwds-bs");

lwdsBc = "grey";
if (document.currentScript.hasAttribute("lwds-bc"))
    lwdsBc = document.currentScript.getAttribute("lwds-bc");

if(!document.currentScript.hasAttribute("lwds-b-disabled"))
{
    document.addEventListener("mouseup", ()=>document.querySelectorAll("*").forEach(e=>e.style.border = ""));
    document.addEventListener("mousedown", ()=>document.querySelectorAll("*").forEach(e=>e.style.border = `solid ${lwdsBc} ${lwdsBs}`));
}
//Publier ceci en extension vscode
