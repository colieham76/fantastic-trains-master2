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

            /*            RESOURCE_CATALYZED_UTRIUM_ACID, // ATTACK
                        RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE, // HEAL
                        RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE, // MOVE
                        RESOURCE_CATALYZED_GHODIUM_ALKALIDE, // TOUGH
                        RESOURCE_CATALYZED_KEANIUM_ALKALIDE, // RANGED ATTACK
                        RESOURCE_CATALYZED_ZYNTHIUM_ACID, */// DISMANTLE

            //RESOURCE_OXYGEN,
            RESOURCE_KEANIUM,
            RESOURCE_ZYNTHIUM
            //RESOURCE_HYDROGEN
        ];
        if (creep.memory.working) { // mineral from terminal
            if (creep.room.terminal != undefined) {
                if (creep.withdraw(creep.room.terminal, RESOURCE_ZYNTHIUM) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.terminal, {visualizePathStyle: visualPath});
                }
                /*    if (creep.withdraw(creep.room.terminal, RESOURCE_ZYNTHIUM) == ERR_NOT_ENOUGH_RESOURCES) {
                        creep.moveTo(creep.room.storage, {visualizePathStyle: visualPath});
                    }
                    if (creep.withdraw(creep.room.storage, RESOURCE_ZYNTHIUM) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.storage, {visualizePathStyle: visualPath});
                    }*/
            }
        } else { // mineral to lab
            var zynthiumlab13 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5bea90ed515acb053b7fa4bf' || s.mineralType === RESOURCE_ZYNTHIUM) //W17N88
                    && s.mineralAmount < s.mineralCapacity
            });
            var zynthiumlab16 = creep.room.find(FIND_STRUCTURES, {
                filter: (s) => s.structureType == STRUCTURE_LAB
                    && (s.id == '5beff33aa819a70feafc934e' || s.mineralType === RESOURCE_ZYNTHIUM) //W11N83
                    && s.mineralAmount < s.mineralCapacity
            });
            for (let i = 0, L = resourceTypes.length; i < L; i++) {
                if (creep.transfer(zynthiumlab13[i], RESOURCE_ZYNTHIUM) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(zynthiumlab13[i], {visualizePathStyle: visualPath});
                }
            }
            for (let j = 0, M = resourceTypes.length; j < M; j++) {
                if (creep.transfer(zynthiumlab16[j], RESOURCE_ZYNTHIUM) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(zynthiumlab16[j], {visualizePathStyle: visualPath});
                }
            }
        }
    }
}
/*

var labs = [ {id:'5b6b0b028667d14c4f5d01d0', //W11N88
        resource:'O', // This needs to stay undefined in order to be where it's actvated
        amount : 2900
    	},
        {id:'5b6ca1898ce20a4c31e0fd48',//W11N88
            resource: 'H',
            amount : 10000
        },
        {id: '5b6d130339049a1dcee785e8',//W11N88
            resource: 'OH',
            amount : 1
        },
		{id:'5b8dfd013afa2171d6172bef',//W14N89
		 resource: 'L',
		 amount : 1000
		},
		{id:'5b8f254c2f412863f40349e6',//W14N89
		 resource: 'U',
		 amount : 1000
		},
		{id:'5b8f37a015869c71b30e3d9d',//W14N89
		 resource: 'UL',
		 amount : 1000
		},
			{id:'5b794e385ef4787ce1faf90b',//W12N88
			resource: 'U',
			amount : 1000
			},
			{id:'5b241cb6267f0709236babce', //W12N88
		 	resource: 'L',
		 	amount : 1000
			},
			{id:'5b76697c3dd60605c045d6ee', //W12N88
		 	resource: 'UL',
		 	amount : 1000
			},
				{id:'5b161af87f3d3f23a8aeaaf5', //W12N89
				 resource: 'H',
				 amount : 1000
				},
				{id:'5b15869a9417f5099dcc67db', //W12N89
				 resource: 'O',
				 amount: 1000
				},
				{id:'5b9dea1a38f11e0fb6185d11', //W12N89
				 resource: 'OH',
				 amount: 1000
				},
				    {id:'5bea88d68132171a782936e9', //W17N88
				    resource: 'Z',
				    amount : 1000
				    },
				    {id:'5bea90ed515acb053b7fa4bf', //W17N88
				    resource: 'K',
				    amount: 1000
				    },
				    {id:'5bb8be1b34a08f5159a3fa45', //W17N88
				    resource: 'ZK',
				    amount: 1000
				    },
              {id:'5beff33aa819a70feafc934e', //W11N83
				    resource: 'Z',
				    amount : 1000
				    },
				    {id:'5c172df7be6b9e4381e9f4fe', //W11N83
				    resource: 'K',
				    amount: 1000
				    },
				    {id:'5c16a75c85ddb632587cccda', //W11N83
				    resource: 'ZK',
				    amount: 1000
				    },
    ];
var lab1 = Game.getObjectById ( labs[0].id ); //oxygen w11n88
var lab2 = Game.getObjectById ( labs[1].id ); //hydrogen w11n88
var lab3 = Game.getObjectById ( labs[2].id ); //hydroxide w11n88
var lab4 = Game.getObjectById ( labs[3].id ); //lemergium w14n89
var lab5 = Game.getObjectById ( labs[4].id ); //utrium w14n89
var lab6 = Game.getObjectById ( labs[5].id ); // utrium lemergite w14n89
var lab7 = Game.getObjectById ( labs[6].id ); //utrium w12n88
var lab8 = Game.getObjectById ( labs[7].id ); //lemergium w12n88
var lab9 = Game.getObjectById ( labs[8].id ); // utrium lemergite w12n88
var lab10 = Game.getObjectById ( labs(9).id ); //hydrogen w12n89
var lab11 = Game.getObjectById ( labs(10).id ); //oxygen w12n89
var lab12 = Game.getObjectById ( labs(11).id ); //hydroxide w12n89
var lab13 = Game.getObjectById ( labs(12).id ); //zynthium W17N88
var lab14 = Game.getObjectById ( labs(13).id ); //keanium W17N88
var lab15 = Game.getObjectById ( labs(14).id ); //zynthium keanite W17N88
var lab16 = Game.getObjectById ( labs(16).id ); //zynthium W11N83
var lab17 = Game.getObjectById ( labs(17).id ); //keanium W11N83
var lab18 = Game.getObjectById ( labs(18).id ); //zynthium keanite W11N83
 */
