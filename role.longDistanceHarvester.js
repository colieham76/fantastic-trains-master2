module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function(creep) {
	    
	    var terminalVar = creep.room.terminal;
            var storageVar = creep.room.storage;
	    
	    
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
        if (creep.memory.working === true) {
            // if in home room
            if (creep.room.name === creep.memory.home) {
                // find closest spawn, extension or tower which is not full
                var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    // the second argument for findClosestByPath is an object which takes
                    // a property called filter which can be a function
                    // we use the arrow operator to define it
                    filter: (s) => (s.structureType === STRUCTURE_SPAWN
                                 || s.structureType === STRUCTURE_EXTENSION
                                 || s.structureType === STRUCTURE_LINK
				// || s.structureType === STRUCTURE_STORAGE
                                // || s.structureType === STRUCTURE_TOWER
				   )
                                 && s.energy < s.energyCapacity * 0.6
                });

             
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
                    if (creep.transfer(structure, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        // move towards it
                        creep.travelTo(structure);
                    }
                }
            }
            // if not in home room...
            else {
                // find exit to home room
                var exit = creep.room.findExitTo(creep.memory.home);
                // and move to exit
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
        }
        // if creep is supposed to harvest energy from source
        else {
            // if in target room
            if (creep.room.name == creep.memory.target) {
		    
		   		    
		var dropedEnergy = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES,{
                    filter: (e) => e.resourceType == RESOURCE_ENERGY
                });
                if(dropedEnergy) {
                    if(creep.pickup(dropedEnergy) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(dropedEnergy,{visualizePathStyle: {stroke: '#45ff0c'}});
                        creep.say('PickUp');
                    }
                }
		    		    		    
                // find source
                var source = creep.room.find(FIND_SOURCES)[creep.memory.sourceIndex];

                // try to harvest energy, if the source is not in range
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    // move towards the source
                    creep.moveTo(source);
                }

                let invaderStructure = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
                if(invaderStructure){
                    if (creep.room.name === 'W64N63' && Game.time % 500 === 0) {
                        Game.spawns.Spawn1.memory.rangedattackerRoom = 'W64N63';
                        Game.spawns.Spawn21.memory.rangedattackerRoom = 'W64N63'
                    }
                    if (creep.room.name === 'W78N64' && Game.time % 500 === 0) {
                        Game.spawns.Spawn20.memory.rangedattackerRoom = 'W78N64';
                        Game.spawns.Spawn22.memory.rangedattackerRoom = 'W78N64'
                    }
                    if (creep.room.name === 'W62N67' && Game.time % 500 === 0) {
                        Game.spawns.Spawn16.memory.rangedattackerRoom = 'W62N67';
                        Game.spawns.Spawn6.memory.rangedattackerRoom = 'W62N67'
                    }
                    if (creep.room.name === 'W63N68' && Game.time % 510 === 0) {
                        Game.spawns.Spawn16.memory.rangedattackerRoom = 'W63N68';
                        Game.spawns.Spawn6.memory.rangedattackerRoom = 'W63N68'
                    }
                }
            }
            // if not in target room
            else {
                // find exit to target room
                var exit = creep.room.findExitTo(creep.memory.target);
                // move to exit
                creep.moveTo(creep.pos.findClosestByRange(exit));
            }
        }
    }
};


/*

           
        } else
            if (creep.transfer(energy, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.travelTo(energy);
                }


          
            var exit = creep.room.findExitTo(creep.memory.target);
                       creep.moveTo(creep.pos.findClosestByRange(exit));
        }
    };
*/
