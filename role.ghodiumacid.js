
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

 if(creep.room.name == 'W11N88') {

        if (creep.memory.working) {
            // fetch mineral from lab when not working creep is empty
            let ulLab = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_LAB
                    && s.mineralAmount > 100
                    && (s.id == '5b9dfb0088d2075168155cd9')
            });
            // if we found right lab
            if (ulLab != undefined) {

                if (creep.withdraw(ulLab, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(ulLab, {visualizePathStyle: visualPath});
                }
            }
         }
            // else put in terminal or storage
            else {
               if (_.sum(creep.carry) > 0)
                    {
                          if (creep.transfer(terminalVar, RESOURCE_GHODIUM_ACID)  == ERR_NOT_IN_RANGE)
                        {
                          creep.moveTo(terminalVar);
                        }
                }
            }
      // Stop GH2O production if Terminal Full in Room W11N88
            var terminalGAFull = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: function(object) {
             return object.structureType == STRUCTURE_TERMINAL && (object.store[RESOURCE_GHODIUM_ACID] > 500);
    		}
             });
         if(terminalGAFull) {                                        
         
       Game.rooms['W11N88'].terminal.send(RESOURCE_GHODIUM_ACID, 500, 'W15N89', 'internal trade GH20')   
         }
        }

// W15N89 move ghodium acid from terminal to lab

        if(creep.room.name == 'W15N89') {
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
       // else put in lab        
             if (_.sum(creep.carry) > 0)
                    {
                   // bring mineral to lab when not working creep is empty
                   let gh2OLab = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                      filter: s => s.structureType == STRUCTURE_LAB && (s.id == '5c307bfa014a667e2134eb9d')
                     && s.mineralAmount < s.mineralCapacity
              });
                           // if we found right lab
           for (let i = 0, L = resourceTypes.length; i < L; i++) {
                if (creep.transfer(gh2OLab[i], RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(gh2OLab[i], {visualizePathStyle: visualPath});
                }
                            }
                    }
            }
        }
    }
    
}
