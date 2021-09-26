({
    doInit: function(component, event, helper) {
        console.log("init");
        let gameMode = component.get("v.mode");
        let column = 0;
        if(gameMode && gameMode==="hard"){
            column = 6;
        }else if(gameMode==="medium"){
            column = 4;
        }else{
            column = 3;
        }

        let words = helper.getWords(column * column);
        // console.log("Words :" + words);
        component.set("v.words", words);
        let winWord = helper.getWinWord(words);
        // console.log("Wion word :" + helper.getWinWord(words));
        component.set("v.winWord", winWord);
    },

    onRender: function(cmp) {

    }
})