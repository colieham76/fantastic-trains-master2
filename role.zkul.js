module.exports = {
    /** @param {Creep} creep */
    run: function (creep) {
        const visualPath = {
            fill: 'transparent',
            stroke: '#ff9cef',
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
        var terminalVar = creep.room.terminal;
        var storageVar = creep.room.storage;
        var resourceTypes = [

            /*            RESOURCE_CATALYZED_UTRIUM_ACID, // ATTACK
                        RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE, // HEAL
                        RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE, // MOVE
                        RESOURCE_CATALYZED_GHODIUM_ALKALIDE, // TOUGH
                        RESOURCE_CATALYZED_KEANIUM_ALKALIDE, // RANGED ATTACK
                        RESOURCE_CATALYZED_ZYNTHIUM_ACID, */// DISMANTLE
            RESOURCE_UTRIUM_LEMERGITE,
            RESOURCE_ZYNTHIUM_KEANITE

        ];

        if (creep.memory.working && creep.carryCapacity == _.sum(creep.carry)) {
            creep.memory.working = false;
        }
        if (!creep.memory.working && 0 == _.sum(creep.carry)) {
            creep.memory.working = true;
        }

        if (creep.memory.working) {
            // fetch mineral from lab when not working creep is empty
            let ulLab = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_LAB
                    && s.mineralAmount > 100
                    && (s.id == '5cdad9207d49eb4de2cf4c74')
            });


            // if we found right lab
            if (ulLab != undefined) {

                if (creep.withdraw(ulLab, RESOURCE_UTRIUM_LEMERGITE) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(ulLab, {visualizePathStyle: visualPath});
                }
            }
}
            // else put in terminal or storage
            else {
                if (_.sum(creep.carry) > 0) {
                    if (creep.transfer(terminalVar, RESOURCE_UTRIUM_LEMERGITE) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(terminalVar);
                    }
                }
            }
        }
    }
