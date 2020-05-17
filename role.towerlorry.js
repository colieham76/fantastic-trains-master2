module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        
  	    var terminalVar = creep.room.terminal;
            var storageVar = creep.room.storage;
	    
        
        
        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.carry.energy < 50) {
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


            // find closest tower
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it

                filter: (s) =>  (s.structureType == STRUCTURE_NUKER || s.structureType == STRUCTURE_TOWER
                                                                    || s.structureType == STRUCTURE_LAB) 
                && s.energy < s.energyCapacity//* 0.8

            })

                                if (structure == undefined) {
                                    if (_.sum(creep.carry) > 0) {
                                        if (creep.transfer(terminalVar, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                            creep.travelTo(terminalVar);
                                        }
                                    }
                                }         

            // if we found one
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure);
                }
               /* if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_FULL) {
                    creep.room.storage
                }*/
            }


        if(creep.room.name == 'W71N69') {
           let link1W71N69 = creep.pos.findClosestByPath(FIND_STRUCTURES, { 
                 filter: s => s.structureType == STRUCTURE_LINK
                          && (s.id == '5d31001ac6972633ce21d564') 
              && s.energy < s.energyCapacity
             }); 
            
            let link2W71N69 = creep.pos.findClosestByPath(FIND_STRUCTURES, { 
                 filter: s => s.structureType == STRUCTURE_LINK
                          && (s.id == '5ce1c52121d3291b20e3af0a') 
                
              && s.energy < s.energyCapacity
             }); 
          /* if (link1W71N69 == undefined) {
                link1W71N69 = creep.room.storage;
            }
            if (link2W71N69 == undefined) {
                link2W71N69 = creep.room.storage;
            }*/
            
           if (link1W71N69 != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(link1W71N69 , RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(link1W71N69 );
                }
                /*if (creep.transfer(link1W71N69 , RESOURCE_ENERGY) == ERR_FULL) {
                    creep.room.storage
                }*/
            }
             if (link2W71N69 != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(link2W71N69 , RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(link2W71N69 );
                }
               /* if (creep.transfer(link2W71N69 , RESOURCE_ENERGY) == ERR_FULL) {
                    creep.room.storage
                }*/
            }
          }
        }
        // if creep is supposed to get energy
        else {
             creep.getEnergy(true, true);
            }       

        const target = creep.pos.inRangeTo(FIND_DROPPED_RESOURCES, {
            filter: s => s.resourceType == RESOURCE_ENERGY
        });

        if(target) {
            if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }
        }
    };
