
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
            RESOURCE_CATALYZED_GHODIUM_ACID
            //RESOURCE_HYDROGEN
        ];
         if (creep.memory.working && creep.carryCapacity == _.sum(creep.carry)) {
            creep.memory.working = false;
        }
        if (!creep.memory.working && 0 == _.sum(creep.carry)) {
            creep.memory.working = true;
        }

 if(creep.room.name == 'W15N89') {

        if (creep.memory.working) {
            // fetch mineral from lab when not working creep is empty
            let XGH2O = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_LAB
                    && s.mineralAmount > 1500
                    && (s.id == '5c2f27108f353d75981d2f79')
            });
            // if we found right lab
            if (XGH2O != undefined) {

                if (creep.withdraw(XGH2O, RESOURCE_GHODIUM_ACID) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(XGH2O, {visualizePathStyle: visualPath});
                }
            }
         }
            // else put in terminal or storage
            else {
               if (_.sum(creep.carry) > 0)
                    {
                          if (creep.transfer(terminalVar, RESOURCE_CATALYZED_GHODIUM_ACID)  == ERR_NOT_IN_RANGE)
                        {
                          creep.moveTo(terminalVar);
                        }
                }
            }
      // Stop XGH2O production if Terminal Full in Room W15N89
            var terminalXGH2OFull = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: function(object) {
             return object.structureType == STRUCTURE_TERMINAL && (object.store[RESOURCE_CATALYZED_GHODIUM_ACID] > 1000);
    		}
             });
         if(terminalXGH2OFull) {                                         
         
       Game.rooms['W15N89'].terminal.send(RESOURCE_CATALYZED_GHODIUM_ACID, 1000, 'W17N88', 'internal trade XGH2O')   
         }
        }

        }
    }
