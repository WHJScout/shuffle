({
    helperMethod : function(cmp,result) {
        console.log("helperMethod start");

        var action = cmp.get("c.AddResult");
        action.setParams({
            result:result.toUpperCase(),
            mode: cmp.get("v.slectedMode").toUpperCase()
        });
        // console.log("result: "+result+"mode: "+mode);
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                // cmp.set("v.cases", response.getReturnValue());
                console.log("response ok");
            }else{
                console.log("response err");
            }
        });
        $A.enqueueAction(action);

        console.log("end");
    }
})
