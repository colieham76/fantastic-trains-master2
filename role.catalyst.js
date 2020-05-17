module.exports = {
  // a function to run the logic for this role
  /** @param {Creep} creep */
  run: function (creep) {
        const visualPath = {
            fill: 'transparent',
            stroke: '#25ff11',
            lineStyle: 'continuous',
            strokeWidth: .1,
            opacity: .3
        };
        var terminalVar = creep.room.terminal;
        var storageVar = creep.room.storage;

 var resourceTypes = [

            /*            RESOURCE_CATALYZED_UTRIUM_ACID, // ATTACK
                        RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE, // HEAL
                        RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE, // MOVE
                        RESOURCE_CATALYZED_GHODIUM_ALKALIDE, // TOUGH
                        RESOURCE_CATALYZED_KEANIUM_ALKALIDE, // RANGED ATTACK
                        RESOURCE_CATALYZED_ZYNTHIUM_ACID, */// DISMANTLE

		RESOURCE_CATALYST

        ];
	  
         if (creep.memory.working && creep.carryCapacity == _.sum(creep.carry)) {
            creep.memory.working = false;
        }
        if (!creep.memory.working && 0 == _.sum(creep.carry)) {
            creep.memory.working = true;
        }

        if (creep.memory.working) {
        var target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES, {
            filter: s => s.resourceType == RESOURCE_CATALYST
            });
           if(target) {
               if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(target);
                  }
	   }
	}
	  else {
          /*
		      xterminal = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                     filter: s => s.structureType == STRUCTURE_TERMINAL
                     });
		      if (xterminal != undefined) {
                           if (creep.withdraw(xterminal, RESOURCE_CATALYST) == ERR_NOT_IN_RANGE) {                      
                               creep.moveTo(xterminal, {visualizePathStyle: visualPath});
                               }
                      }
            }  
            */
	       
              // bring mineral to TERMINAL when not working creep is empty
              let xLab = creep.pos.findClosestByRange(FIND_MY_STRUCTURES, {
              filter: s => s.structureType == STRUCTURE_LAB && (s.id == '5d041454ef1adc34998094b1')
             //|| s.id == '5c4eee6ff7bc003730aa60b8') 
		   //   && s.mineralAmount < s.mineralCapacity
              });
		      
           // if we found right lab
           for (let i = 0, L = resourceTypes.length; i < L; i++) {
                if (creep.transfer(xLab[i], RESOURCE_CATALYST) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(xLab[i], {visualizePathStyle: visualPath});
                    }
            }       
     }
}
                          }
