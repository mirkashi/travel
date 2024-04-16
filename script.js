Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    e.addEventListener('key',(el)=>{
        if (e.value.length > e) {
            document.getElementsByClassName('bi bi-caret-down-fill')[i].computedStyleMap.transform ="rotate(180deg)";
    
        } else{
            document.getElementsByClassName('bi bi-caret-down-fill')[i].computedStyleMap.transform ="rotate(0deg)";
        }
    })
})
