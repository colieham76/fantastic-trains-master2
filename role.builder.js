var actionGetEnergy = require('action.getEnergy');
var actionBuild = require('action.build');

module.exports = {
    run: function(creep) {
        creep.say('bldng');
       if(creep.memory.working && creep.store.energy == 0) {
    		creep.memory.working = false;
    	}
    	else if(!creep.memory.working && creep.store.energy == creep.store.getCapacity()){
    		creep.memory.working = true;
    	}
        if (creep.memory.working == true) {
            actionBuild.run(creep);
        }
        else {

            var [resourceID, ifDropped] = evaluateEnergyResources(creep, false, true,
                true, true); // find energy function in myFunctions
            if (resourceID != undefined) {
                energy = Game.getObjectById(resourceID);
                if (ifDropped) { // if energy is dropped
                    if (creep.pickup(energy) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(energy);
                    }
                }
                else { // energy is from container, storage or link
                    if (creep.withdraw(energy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(energy);
                    }
                }
            }

            // finding resources
            actionGetEnergy.run(creep);
        }
    }
};
