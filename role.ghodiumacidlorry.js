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

 var resourceTypes = [

            /*            RESOURCE_CATALYZED_UTRIUM_ACID, // ATTACK
                        RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE, // HEAL
                        RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE, // MOVE
                        RESOURCE_CATALYZED_GHODIUM_ALKALIDE, // TOUGH
                        RESOURCE_CATALYZED_KEANIUM_ALKALIDE, // RANGED ATTACK
                        RESOURCE_CATALYZED_ZYNTHIUM_ACID, */// DISMANTLE

            //RESOURCE_OXYGEN,
           
		RESOURCE_GHODIUM_ACID
            //RESOURCE_HYDROGEN
        ];
    
         if (creep.memory.working && creep.carryCapacity == _.sum(creep.carry)) {
            creep.memory.working = false;
        }
        if (!creep.memory.working && 0 == _.sum(creep.carry)) {
            creep.memory.working = true;
        }

// W15N89 move ghodium acid from terminal to lab

        if (creep.memory.working) {
           gh2Oterminal = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_TERMINAL
            });
            
            if (gh2Oterminal != undefined) {

                if (creep.withdraw(gh2Oterminal, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(gh2Oterminal , {visualizePathStyle: visualPath});
                }
            }
         }  
            else {
        
             
                   // bring mineral to lab when not working creep is empty
                   let gh2OLab = creep.room.find(FIND_STRUCTURES, {
                      filter: s => s.structureType == STRUCTURE_LAB && (s.id == '5c307bfa014a667e2134eb9d' || s.id == '5c6492ca36c0dc66f80cca12'
									|| s.mineralType === RESOURCE_GHODIUM_ACID)
                     && s.mineralAmount < s.mineralCapacity
              });
                           // if we found right lab
           for (let x = 0, Y = resourceTypes.length; x < Y; x++) {
                if (creep.transfer(gh2OLab[x], RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(gh2OLab[x], {visualizePathStyle: visualPath});
                }
             }                  
           }
        }
      }
