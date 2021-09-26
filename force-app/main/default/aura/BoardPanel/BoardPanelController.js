({
    startGame : function(component, event, helper) {
        let gameModeComboBox = component.find("gameMode");
        let value = gameModeComboBox.get("v.value");

        component.set("v.slectedMode", value);

        console.log(value);
        // alert('start game');
        
    },
    reshuffleBoard : function(component, event, helper) {
        console.log(222);
        // alert('reshuffle board');
    },
    
})