var roles = {
 //   powerSourceLorry: require('role.powerSourceLorry'),
 //   powerSourceHealer: require('role.powerSourceHealer'),
 //   powerSourceAttacker: require('role.powerSourceAttacker'),
    rangedattacker: require('role.rangedattacker'),
    harvester: require('role.harvester'),
    upgrader: require('role.upgrader'),
    builder: require('role.builder'),
    repairer: require('role.repairer'),
    wallRepairer: require('role.wallRepairer'),
   rampartrepairer: require('role.rampartrepairer'),
    longDistanceHarvester: require('role.longDistanceHarvester'),
    longDistanceBuilder: require('role.longDistanceBuilder'),
    longDistanceLorry: require('role.longDistanceLorry'),
    claimer: require('role.claimer'),
    reservists1: require('role.reservists1'),
    miner: require('role.miner'),
    lorry: require('role.lorry'),
    towerlorry: require('role.towerlorry'),
    extractor: require('role.extractor'),
    
   mineralminer: require('role.mineralminer'),
   lemergiumlorry: require('role.lemergiumlorry'),
  utriumlorry: require('role.utriumlorry'),
    terminalory: require('role.terminalory'),
    bigUpgrader: require('role.bigUpgrader'),
    smallUpgrader: require('role.smallUpgrader'),
   keaniumlorry: require('role.keaniumlorry'),
   zynthiumlorry: require('role.zynthiumlorry'),
    oxygenlorry: require('role.oxygenlorry'),
    hydrogenlorry: require('role.hydrogenlorry'),
    catalyst: require('role.catalyst'), // X
    hydroxidelorry: require('role.hydroxidelorry'), //OH
    ghodiumlorry: require('role.ghodiumlorry'), //G
    ghodiumhydride: require('role.ghodiumhydridelorry'),//GH
    ghodiumacid: require('role.ghodiumacid'),//GH2O
    ghodiumacidlorry: require('role.ghodiumacidlorry'),//GH2O
    zkul: require('role.zkul'),//
    storagelorry: require('role.storagelorry'),
    mugger: require('role.mugger'),
  
};

Creep.prototype.runRole =
    function () {
        roles[this.memory.role].run(this)
    };

/** @function 
    @param {bool} useContainer
    @param {bool} useSource */
Creep.prototype.getEnergy =
    function (useContainer, useSource) {
        /** @type {StructureContainer} */
        let container;
        // if the Creep should look for containers
        if (useContainer) {
            // find closest container
            container = this.pos.findClosestByPath(FIND_STRUCTURES, {
               filter: s => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE
                             || s.structureType == STRUCTURE_TERMINAL) &&
                             s.store[RESOURCE_ENERGY] > 450
            });
            // if one was found
            if (container != undefined) {
                // try to withdraw energy, if the container is not in range
                if (this.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    this.moveTo(container);
                }
            }
        }

           
        // if no container was found and the Creep should look for Sources
        if (container == undefined && useSource) {
            // find closest source
            var source = this.pos.findClosestByPath(FIND_SOURCES_ACTIVE);

            // try to harvest energy, if the source is not in range
            if (this.harvest(source) == ERR_NOT_IN_RANGE) {
                // move towards it
                this.moveTo(source);
            }
        }
    };
