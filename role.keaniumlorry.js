module.exports = {
    /** @param {Creep} creep */
    run: function (creep) {
        const visualPath = {
            fill: 'transparent',
            stroke: '#25ff11',
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
        var resourceTypes = [

            /*            RESOURCE_CATALYZED_UTRIUM_ACID, // ATTACK
                        RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE, // HEAL
                        RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE, // MOVE
                        RESOURCE_CATALYZED_GHODIUM_ALKALIDE, // TOUGH
                        RESOURCE_CATALYZED_KEANIUM_ALKALIDE, // RANGED ATTACK
                        RESOURCE_CATALYZED_ZYNTHIUM_ACID, */// DISMANTLE

            //RESOURCE_OXYGEN,
            RESOURCE_KEANIUM,
            RESOURCE_ZYNTHIUM
            //RESOURCE_HYDROGEN
        ];
        if (creep.memory.working) { // mineral from terminal
            if (creep.room.terminal != undefined) {
                if (creep.withdraw(creep.room.terminal, RESOURCE_KEANIUM) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: visualPath});
                }
                
            }
        } else { // mineral to lab
            var keaniumlab = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5bba13c4b112697b688dc6b7' || s.mineralType === RESOURCE_KEANIUM) //W17N88
                    && s.mineralAmount < s.mineralCapacity
            });
           
            for (let i = 0, L = resourceTypes.length; i < L; i++) {
                if (creep.transfer(keaniumlab[i], RESOURCE_KEANIUM) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(keaniumlab[i], {visualizePathStyle: visualPath});
                }
            }
            

 // Stop k production if Terminal Full in Room W11N83
     /*       var terminalkFull = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: function(object) {
             return object.structureType == STRUCTURE_TERMINAL && (object.store[RESOURCE_KEANIUM] > 5000);
    		}
             });
         if(terminalkFull) {                                        
         
       Game.rooms['W11N83'].terminal.send(RESOURCE_KEANIUM, 5000, 'W17N88', 'internal trade k')   

        }*/
    }
}
}
