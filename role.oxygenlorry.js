module.exports = {
    /** @param {Creep} creep */
    run: function (creep) {
        const visualPath = {
            fill: 'transparent',
            stroke: '##fdfbff',
            lineStyle: 'continuous',
            strokeWidth: .3,
            opacity: .5
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
            RESOURCE_HYDROGEN,
            RESOURCE_OXYGEN
            //RESOURCE_HYDROGEN
        ];
        if (creep.memory.working) { // mineral from terminal
            if (creep.room.terminal != undefined) {
                if (creep.withdraw(creep.room.terminal, RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: visualPath});
                }
             }
        } else { // mineral to lab
            var oxygenlab1 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5d8406cc917a4c6ad7216543' || s.mineralType === RESOURCE_OXYGEN) //W11N88
                    && s.mineralAmount < s.mineralCapacity
            });
            var oxygenlab11 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5b15869a9417f5099dcc67db' || s.mineralType === RESOURCE_OXYGEN) //W12N89
                    && s.mineralAmount < s.mineralCapacity
            });
            var oxygenlab111 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5bba93dce8df2d3c72b82cde' || s.id == '5c5edc439b6f610a6df22341' ||
                        s.mineralType === RESOURCE_OXYGEN) //W17N88
                    && s.mineralAmount < s.mineralCapacity
            });
            for (let i = 0, L = resourceTypes.length; i < L; i++) {
                if (creep.transfer(oxygenlab11[i], RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(oxygenlab11[i], {visualizePathStyle: visualPath});
                }
            }
            for (let j = 0, M = resourceTypes.length; j < M; j++) {
                if (creep.transfer(oxygenlab1[j], RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(oxygenlab1[j], {visualizePathStyle: visualPath});
                }
            }
            for (let q = 0, R = resourceTypes.length; q < R; q++) {
                if (creep.transfer(oxygenlab111[q], RESOURCE_OXYGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(oxygenlab111[q], {visualizePathStyle: visualPath});
                }
            }

/*
            // Stop o production if Terminal Full in Room W12N89
            var terminaloFull = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: function(object) {
                    return object.structureType == STRUCTURE_TERMINAL && (object.store[RESOURCE_OXYGEN] > 5000);
                }
            });
            if(terminaloFull) {

                Game.rooms['W12N89'].terminal.send(RESOURCE_OXYGEN, 1000, 'W17N88', 'internal trade O')

            }
*/
            
        }
    }
}
