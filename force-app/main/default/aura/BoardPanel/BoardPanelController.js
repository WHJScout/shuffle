({
    startGame : function(component, event, helper) {
        let gameModeComboBox = component.find("gameMode");
        let value = gameModeComboBox.get("v.value");
        console.log(value);
        console.log(111);
        
    },
    reshuffleBoard : function(component, event, helper) {
        console.log(222);
    },
    
})