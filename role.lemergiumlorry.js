module.exports = {
    /** @param {Creep} creep */
    run: function (creep) {

        var terminalVar = creep.room.terminal;
        var storageVar = creep.room.storage;
        
        
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
            RESOURCE_LEMERGIUM,
            RESOURCE_UTRIUM,
		RESOURCE_ZYNTHIUM_KEANITE
            //RESOURCE_HYDROGEN
        ];
        
        if (creep.memory.working) { // mineral from terminal

                if (creep.withdraw(creep.room.terminal, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: visualPath});
                }

            
        } else { // mineral to lab
            var lemergiumlab4 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5d094c45b0e4022970c91cbe' || s.mineralType === RESOURCE_LEMERGIUM) //W63N65
                    && s.mineralAmount < 100000
            });

            if (lemergiumlab4 == undefined) {
                if (_.sum(creep.store > 0)){
                    if (creep.transfer(storageVar, RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE) {
                        creep.travelTo(storageVar);
                    }
                }
            }


            for (let i = 0, L = resourceTypes.length; i < L; i++) {
                if (creep.transfer(lemergiumlab4[i], RESOURCE_LEMERGIUM) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(lemergiumlab4[i], {visualizePathStyle: visualPath});
                }
            }            		
        }
    }	 
};
