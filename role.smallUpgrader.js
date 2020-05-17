
let actionGetEnergy = require('action.getEnergy');
let actionUpgrade = require('action.upgradeController');
let actionBuild = require('action.build');

module.exports = {
    run: function(creep) {
        creep.say('upgrading');
        if (creep.memory.working === true && creep.carry.energy === 0) {
            creep.memory.working = false;
            creep.say('refill!')
        } else if (creep.memory.working === false && creep.carry.energy === creep.carryCapacity) {
            creep.memory.working = true;
        }

        if (creep.memory.target !== undefined && creep.room.name !== creep.memory.target) {
            creep.moveTo(Game.flags[creep.memory.target]);
        } else {
            if (creep.memory.working === true) {
                /*if ( ifConstructionSiteInRoom(creep.room) ) {
                     actionBuild.run(creep);
                 }
                 else {*/
                actionUpgrade.run(creep);

            } else {
                if (creep.room.name === 'W71N69') {
                    creep.moveTo(6, 26, {visualizePathStyle: {stroke: '#ffaa00'}});
                    if (creep.pos == 6, 26) {
                            const upgradeContainer = Game.getObjectById('5ce1cb25e632af2dff382150');
                            if (upgradeContainer.energy > 0) {
                                if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                                    creep.travelTo(upgradeContainer);
                                }
                            }
                    }
                }
            }
        if (creep.room.name === 'W65N63') {
                    creep.moveTo(44, 42, {visualizePathStyle: {stroke: '#ffaa00'}});
                    if (creep.pos == 44,42) {
                        const upgradeContainer = Game.getObjectById('5cd80e21c7f85a307d113390');
                        if (upgradeContainer.energy > 0) {
                            if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                                creep.travelTo(upgradeContainer);
                            }
                        }
                    }
                }

            if (creep.room.name === 'W63N66') {
                creep.moveTo(14, 21, {visualizePathStyle: {stroke: '#ffaa00'}});
                if (creep.pos == 14,21) {
                    const upgradeContainer = Game.getObjectById('5cda1c38c872463cd4b7b913');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
            }

            if (creep.room.name === 'W79N64') {
                creep.moveTo(23, 17, {visualizePathStyle: {stroke: '#ffaa00'}});
                if (creep.pos == 23,17) {
                    const upgradeContainer = Game.getObjectById('5d9306ede68a1c0001c62fc1');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
            }


            if (creep.room.name === 'W79N63') {
                creep.moveTo(34, 36, {visualizePathStyle: {stroke: '#ffaa00'}});
                if (creep.pos == 34,36) {
                    const upgradeContainer = Game.getObjectById('5d5b8b51a76b2143e1a5df3e');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
            }



            if (creep.room.name === 'W62N69') {
                creep.moveTo(23, 12, {visualizePathStyle: {stroke: '#ffaa00'}});
                if (creep.pos == 23,12) {
                    const upgradeContainer = Game.getObjectById('5cf9681768cf3e6212e434db');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
            }

            if (creep.room.name === 'W61N68') {
                creep.moveTo(24, 34, {visualizePathStyle: {stroke: '#ffaa00'}});
                if (creep.pos == 24, 34) {
                    const upgradeContainer = Game.getObjectById('5cd6e9f0a4ceff307ee438f1');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
            }

            if (creep.room.name === 'W63N64') {
                creep.moveTo(24, 16, {visualizePathStyle: {stroke: '#ffaa00'}});
                if (creep.pos == 24,16) {
                    const upgradeContainer = Game.getObjectById('5cfbbcba68cf3e6212e56554');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
            }


            if (creep.room.name === 'W77N69') {
                creep.moveTo(28, 31, {visualizePathStyle: {stroke: '#ffaa00'}});
                if (creep.pos == 28,31) {
                    const upgradeContainer = Game.getObjectById('5cd9a04675aed476c9a30752');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
            }

            if (creep.room.name === 'W62N61') {
                creep.moveTo(15, 20, {visualizePathStyle: {stroke: '#ffaa00'}});
                if (creep.pos == 15,20) {
                    const upgradeContainer = Game.getObjectById('5ce056a7074ed46fed3a9deb');
                    if (upgradeContainer.energy > 0) {
                        if (creep.withdraw(upgradeContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.travelTo(upgradeContainer);
                        }
                    }
                }
            }


            }
        }
    };
