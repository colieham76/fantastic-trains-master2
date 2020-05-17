module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
    
    // var numberOfharvesters = _.sum(Game.creeps, (c) => c.memory.role == 'harvester')
     //if (numberOfharvesters > 5){
      //  creep.suicide() 
       //}


        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working == true) {
            // find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_SPAWN
                             || s.structureType == STRUCTURE_EXTENSION
                             || s.structureType == STRUCTURE_NUKER)
                             && s.energy < s.energyCapacity
            });

            if (structure == undefined) {

                var dropedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES,{
                    filter: (e) => e.resourceType == RESOURCE_ENERGY
                });
                if(dropedEnergy) {
                    if(creep.pickup(dropedEnergy) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(dropedEnergy,{visualizePathStyle: {stroke: '#45ff0c'}});
                        creep.say('PickUp');
                    }
                }

                structure = creep.room.storage;
            }

            // if we found one
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.travelTo(structure);
                }
            }
        }
        // if creep is supposed to harvest energy from source
        else {

         creep.getEnergy(true, true);
        }
    }
};
