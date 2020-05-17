module.exports = {
    /** @param {Creep} creep */
    run: function (creep) {
            const visualPath = {
            fill: 'transparent',
            stroke: '#ff2042',
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
           RESOURCE_HYDROXIDE
        ];
       
        if (creep.memory.working) { //mineral from terminal
            if (creep.room.terminal != undefined) {
                if (creep.withdraw(creep.room.terminal, RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: visualPath});
                }
            }
        } else {  //mineral to lab
            var ohlab = creep.room.find(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_LAB
                   && (s.id == '5d846e85c29ef226d67ae926'
                       || s.id == '5d7b1b21e775fc109f306799'
                       || s.mineralType === RESOURCE_HYDROXIDE)
                    && s.mineralAmount < s.mineralCapacity
            });
            
            var terminalhFull = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: function(object) {
                    return object.structureType == STRUCTURE_TERMINAL && (object.store[RESOURCE_HYDROGEN] > 500);
    		        }
                });
                                
             for (let i = 0, L = resourceTypes.length; i < L; i++) {
                if (creep.transfer(ohlab[i], RESOURCE_HYDROXIDE) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(ohlab[i], {visualizePathStyle: visualPath});
                }
            }
        }
     }
}
