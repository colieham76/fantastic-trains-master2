module.exports = {
    /** @param {Creep} creep */
    run: function (creep) {
        const visualPath = {
            fill: 'transparent',
            stroke: '#FF00FF',
            lineStyle: 'continuous',
            strokeWidth: .1,
            opacity: .3
        };
    
	     if (creep.memory.working && creep.carryCapacity == _.sum(creep.carry)) {
                creep.memory.working = false;
            }
            if (!creep.memory.working && 0 == _.sum(creep.carry)) {
                creep.memory.working = true;
            }
               var resourceTypes = [RESOURCE_UTRIUM,
                                    RESOURCE_LEMERGIUM];

     if (creep.memory.working) { // mineral from terminal
	     if (creep.room.terminal != undefined) {
	     if (creep.withdraw(creep.room.terminal, RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
		     creep.moveTo(creep.room.terminal, {visualizePathStyle: visualPath});
	     }
         }
     } else { // mineral to lab
	    	     var utriumlab5 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5d093a828a696f3854704275' || s.mineralType === RESOURCE_UTRIUM) //W14N89
                    && s.mineralAmount < s.mineralCapacity
            });
	    	    
	    	for (let i = 0, L = resourceTypes.length; i < L; i++) {
		     	if (creep.transfer(utriumlab5[i], RESOURCE_UTRIUM) == ERR_NOT_IN_RANGE) {
			     	creep.moveTo(utriumlab5[i], {visualizePathStyle: visualPath});
		     		}	     
	     		}
           }
        }
    }
