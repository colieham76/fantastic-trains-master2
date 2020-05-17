module.exports = {

    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.carry.energy === 0) {
            creep.memory.mode = 'pickup';
        }
        if (_.sum(creep.carry) === creep.carryCapacity) {
            creep.memory.mode = 'dropoff';
        }
        if (creep.memory.mode === "pickup") {
            this.harvestFromMinerals(creep);
        } else if (creep.memory.mode === "dropoff") {
            this.dropOffToLab(creep)
        }
    },

    dropOffToLab(creep) {
        let labs = creep.room.find(FIND_MY_STRUCTURES, {
            filter: structure => structure.structureType === STRUCTURE_LAB &&
                structure.mineralAmount < structure.mineralCapacity
        });
        let closestLab = creep.pos.findClosestByPath(labs);
        /*
         var labs = [ {id:'5b6b0b028667d14c4f5d01d0',
        resource:'O', // This needs to stay undefined in order to be where it's actvated
        amount : 2900
    	},
        {id:'5b6ca1898ce20a4c31e0fd48',
            resource: 'H',
            amount : 10000
        },
        {id: '5b6d130339049a1dcee785e8',
            resource: 'none',
            amount : 1
},
  */      
        
        let mineralType = _.find(_.keys(creep.carry), function (carryKey) {
            return carryKey !== 'energy'
        });

        if (creep.transfer(closestLab, mineralType) === ERR_NOT_IN_RANGE) {
            creep.moveTo(closestLab);
        }
        
         else {
            if (creep.room.terminal) {
                if (creep.transfer(creep.room.terminal, creep.memory.mineralType) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal);
                }
            }
        }
    },
  

    harvestFromMinerals: function (creep) {
        // only ever one mineral drop
        let target = creep.room.find(FIND_MINERALS)[0];
        if (creep.harvest(target) === ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
        }
    }
};
