var roleBuilder = require('role.builder');

module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {

/*
if (!creep.memory.claimFlag7) {
            creep.travelTo(Game.flags['claimFlag7']);
            if (creep.pos.isNearTo(Game.flags['claimFlag7'])) {
                creep.memory.claimFlag7 = true;
            }
            return;
         }
        else
        if (!creep.memory.claimFlag6) {
            creep.travelTo(Game.flags['claimFlag6']);
            if (creep.pos.isNearTo(Game.flags['claimFlag6'])) {
                creep.memory.claimFlag6 = true;
            }
            return;
         }
          if (!creep.memory.claimFlag5) {
            creep.travelTo(Game.flags['claimFlag5']);
            if (creep.pos.isNearTo(Game.flags['claimFlag5'])) {
                creep.memory.claimFlag5 = true;
            }
            return;
        }
       else
        if (!creep.memory.claimFlag4) {
            creep.travelTo(Game.flags['claimFlag4']);
            if (creep.pos.isNearTo(Game.flags['claimFlag4'])) {
                creep.memory.claimFlag4 = true;
            }
            return;
         }
        else
        if (!creep.memory.claimFlag3) {
            creep.travelTo(Game.flags['claimFlag3']);
            if (creep.pos.isNearTo(Game.flags['claimFlag3'])) {
                creep.memory.claimFlag3 = true;
            }
            return;
         }
        else
         if (!creep.memory.claimFlag2) {
            creep.travelTo(Game.flags['claimFlag2']);
            if (creep.pos.isNearTo(Game.flags['claimFlag2'])) {
                creep.memory.claimFlag2 = true;
            }
            return;
         }       
        else
             if (!creep.memory.claimFlag1) {
            creep.travelTo(Game.flags['claimFlag1']);
            if (creep.pos.isNearTo(Game.flags['claimFlag1'])) {
                creep.memory.claimFlag1 = true;
            }
            return;
      }   
*/

        
       // if creep is trying to repair something but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to repair something
        if (creep.memory.working == true) {
            // find all walls in the room
            var walls = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_WALL || s.structureType == STRUCTURE_RAMPART
            });

            var target = undefined;

            // loop with increasing percentages
            for (let percentage = 0.0001; percentage <= 1; percentage = percentage + 0.0001){
                // find a wall with less than percentage hits
                for (let wall of walls) {
                    if (wall.hits / wall.hitsMax < percentage) {
                        target = wall;
                        break;
                    }
                }

                // if there is one
                if (target != undefined) {
                    // break the loop
                    break;
                }
            }

            // if we find a wall that has to be repaired
            if (target != undefined) {
                // try to repair it, if not in range
                if (creep.repair(target) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(target);
                }
            }
            // if we can't fine one
            else {
                // look for construction sites
                roleBuilder.run(creep);
            }
        }

               // if creep is supposed to get energy
        else {

var dropedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES,{
                    filter: (e) => e.resourceType == RESOURCE_ENERGY
                });
                if(dropedEnergy) {
                    if(creep.pickup(dropedEnergy) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(dropedEnergy,{visualizePathStyle: {stroke: '#45ff0c'}});
                        creep.say('PickUp');
                    }
                }

            // find closest container
            let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY]
            });
            
            let storagextra = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_STORAGE 
                || s.structureType == STRUCTURE_TERMINAL//&& s.store[RESOURCE_ENERGY] > 10000
            });

            if (container == undefined) {
               // withdraw from storage
                if (creep.withdraw(storagextra, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.travelTo(storagextra);             
                   }
                }
        
        
        else {
            creep.getEnergy(true, true);
        }
    }
    }
};
