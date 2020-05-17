module.exports = {
    // a function to run the logic for this role
    run: function(creep) {



            if (!creep.memory.RFlag2) {
                creep.travelTo(Game.flags['RFlag2']);
                if (creep.pos.isNearTo(Game.flags['RFlag2'])) {
                    creep.memory.RFlag2 = true;
                }
                return;
            }
        if (creep.room.name !== creep.memory.target && !creep.memory.RFlag1) {
            creep.travelTo(Game.flags['RFlag1']);
            if (creep.pos.isNearTo(Game.flags['RFlag1'])) {
                creep.memory.RFlag1 = true;
            }
            return;
        }

        //if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            //creep.travelTo(creep.room.controller);
            //}

            if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.travelTo(creep.room.controller);
            }

    

    // if in target room
        if (creep.room.name !== creep.memory.target) {
            // find exit to target room
            var exit = creep.room.findExitTo(creep.memory.target);
            // move to exit
            creep.moveTo(creep.pos.findClosestByRange(exit));
        }
        else {
            




            //if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            //creep.travelTo(creep.room.controller);
            //}
            
            if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.travelTo(creep.room.controller);
            }

        } 
    }
}
