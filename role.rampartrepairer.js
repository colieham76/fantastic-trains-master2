
//var roleUpgrader = require('role.upgrader');

module.exports = {
    run: function(creep) {
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.working == true) {
            var target = Game.getObjectById(Game.rooms[creep.room.name].memory.toBuildRampart);
            if ((runEveryTicks(400) == true)||(target == undefined)) {
                Game.rooms[creep.room.name].memory.toBuildRampart = whichRampartToBuild(creep.room).id
            }
            if (target != undefined) {
                creep.say('rampart...');
                //console.log(creep.room.name,target);
                if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(target);
                        creep.repair(target)
                    }
            }
        }
            //else {
             //   roleUpgrader.run(creep);
            //}
        
    
    /*    else {
          var [resourceID, ifDropped] = evaluateEnergyResources(creep, true, true, true, true); // find energy functoin in myFunctoins
          if (resourceID != undefined) {
            energy = Game.getObjectById(resourceID);
            if (ifDropped) { // if energy is dropped
              if (creep.pickup(energy) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(energy);
              }
            }*/
    
    // if creep is supposed to get energy
        else {
             creep.getEnergy(true, true);
            }  
            
            
        
    }
};
