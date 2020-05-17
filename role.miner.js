module.exports = {
    var: listOfRoles = ['miner', 'extractor', 'harvester', 'lorry', 'towerlorry','claimer', 'rampartrepairer', 'catalyst',
                   'upgrader', 'repairer', 'builder', 'wallRepairer', 'terminalory', 'rangedattacker'],
    // a function to run the logic for this role
    run: function (creep) {
          name: "miner"
        
        let myTerminal = creep.room.find(FIND_MY_STRUCTURES, {
            filter: t => t.structureType == STRUCTURE_TERMINAL
        })[0];
        
          if (Game.time % 5 === 0) {
        let utriumAmountinTerminal = myTerminal.store[RESOURCE_UTRIUM] === undefined ? 0 :
            myTerminal.store[RESOURCE_UTRIUM];
       
    switch (creep.room.name) {
       /* case 'W65N63':
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_UTRIUM, 3000, 'W79N63');
        case 'W71N69' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_UTRIUM, 3000, 'W79N63');
        case 'W62N69' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_UTRIUM, 3000, 'W79N63');
        case 'W63N66' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_UTRIUM, 3000, 'W79N63');
        case 'W63N64' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_UTRIUM, 3000, 'W79N63');
        case 'W62N61' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_UTRIUM, 3000, 'W79N63');
        case 'W61N68' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_UTRIUM, 3000, 'W79N63');
        case 'W77N69' :
            if (energyAmountInTerminal >= 10000) myTerminal.send(RESOURCE_UTRIUM, 3000, 'W79N63');*/
        case 'W79N63' :
            if (utriumAmountinTerminal >= 5000) myTerminal.send(RESOURCE_UTRIUM, 1000, 'W77N69');
                        /* myTerminal.send(RESOURCE_UTRIUM, 1000, 'W62N69'),
                         myTerminal.send(RESOURCE_UTRIUM, 1000, 'W79N64'),
                         myTerminal.send(RESOURCE_UTRIUM, 1000, 'W77N69');*/
    }
}
        
        

        /** @type {Room} */
        let room = this.room;
        // find all creeps in room
        /** @type {Array.<Creep>} */

        let creepsInRoom = creep.room.find(FIND_MY_CREEPS);
        // count the number of creeps alive for each role in this room
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a specific role
        /** @type {Object.<string, number>} */
        let numberOfCreeps = {};
        for (let role of listOfRoles) {
            numberOfCreeps[role] = _.sum(creepsInRoom, (c) => c.memory.role == role);
        }



        // get source
        let source = Game.getObjectById(creep.memory.sourceId);
        // find container next to source
        let container = source.pos.findInRange(FIND_STRUCTURES, 1, {
            filter: s => s.structureType == STRUCTURE_CONTAINER
        })[0];

        // if creep is on top of the container
        if (creep.pos.isEqualTo(container.pos)) {
            // harvest source
            creep.harvest(source);
        }
        // if creep is not on top of the container
        else {
            // move towards it
            creep.moveTo(container);
        }

        // if there are still miners
        if (numberOfCreeps['miner'] > 2 && creep.pos.getRangeTo(container) > 0 && creep.ticksToLive < 1400) {
            creep.suicide();
        }
    }
};
