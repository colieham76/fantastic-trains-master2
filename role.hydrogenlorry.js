module.exports = {
    /** @param {Creep} creep */
    run: function (creep) {
        const visualPath = {
            fill: 'transparent',
            stroke: '#fff511',
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

            //RESOURCE_OXYGEN,
            RESOURCE_HYDROGEN,
            RESOURCE_OXYGEN
            //RESOURCE_HYDROGEN
        ];
        if (creep.memory.working) { // mineral from terminal
            if (creep.room.terminal != undefined) {
                if (creep.withdraw(creep.room.terminal, RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: visualPath});
                }
            }
        } else { // mineral to lab
            var hydrogenlab2 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5d844792c436127b4908c16e'   //W79N64
                        || s.id == '5cda511b01815106812772fd'//W65N63
                        || s.mineralType === RESOURCE_HYDROGEN)
                    && s.mineralAmount < s.mineralCapacity
            });/*
            var hydrogenlab10 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5b161af87f3d3f23a8aeaaf5' || s.mineralType === RESOURCE_HYDROGEN) //W12N89
                    && s.mineralAmount < s.mineralCapacity
            });
             var hydrogenlab99 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5b6ca1898ce20a4c31e0fd48' || s.id == '5b9f89aac44fc50fa6e48ad3'
                        || s.mineralType === RESOURCE_HYDROGEN) //W11N88
                    && s.mineralAmount < s.mineralCapacity
            });
            var hydrogenlab98 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5c5eec63e95393215f063657'
                        || s.mineralType === RESOURCE_HYDROGEN) //W17N88
                    && s.mineralAmount < s.mineralCapacity
            });*/

         // Transfer H if Terminal Full in Room W11N88
            var terminalhFull = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                filter: function(object) {
             return object.structureType == STRUCTURE_TERMINAL && (object.store[RESOURCE_HYDROGEN] > 500);
    		}
             });
        
/*
     if(terminalhFull) {                                        
         Game.rooms['W11N88'].terminal.send(RESOURCE_HYDROGEN, 500, 'W17N88', 'internal trade H')   
         }
  */      




            for (let i = 0, L = resourceTypes.length; i < L; i++) {
                if (creep.transfer(hydrogenlab2[i], RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hydrogenlab2[i], {visualizePathStyle: visualPath});
                }
            }
            /*

            for (let j = 0, M = resourceTypes.length; j < M; j++) {
                if (creep.transfer(hydrogenlab10[j], RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hydrogenlab10[j], {visualizePathStyle: visualPath});
                }
            }
          for (let k = 0, M = resourceTypes.length; k < M; k++) {
                if (creep.transfer(hydrogenlab99[k], RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hydrogenlab99[k], {visualizePathStyle: visualPath});
                }
            }

            for (let e = 0, F = resourceTypes.length; e < F; e++) {
                if (creep.transfer(hydrogenlab98[e], RESOURCE_HYDROGEN) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(hydrogenlab98[e], {visualizePathStyle: visualPath});
                }
            }
            */
        }
    }
}
