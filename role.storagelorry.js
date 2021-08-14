module.exports = {
    // a function to run the logic for this role
    /** @param {Creep} creep */
    run: function (creep) {
        var storageVar = creep.room.storage;
        if(creep.memory.working && creep.store.energy == 0) {
            creep.memory.working = false;
        }
        else if(!creep.memory.working && creep.store.energy == creep.store.getCapacity()){
            creep.memory.working = true;
        }
        if (creep.room.name == 'W7S6') {
            creep.moveTo(31, 31, {visualizePathStyle: {stroke: '#ffaa00'}});
            if (creep.pos == 31, 31) {
                if (creep.memory.working == false) {
                    //LINK IN ROOM W7S6
                    const upgradeContainer = Game.getObjectById('60f7d1093bd3cc14ace13cfa');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
                else{
                    if (creep.transfer(storageVar, RESOURCE_ENERGY)  == ERR_NOT_IN_RANGE) {
                        creep.moveTo(storageVar);
                    }
                }
            }
        }
    }
}
