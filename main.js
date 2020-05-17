global.homeRoom = 'W65N63';


/*
            if(terminalW71N69empty) {                                                  
                Game.rooms['W61N68'].terminal.send(RESOURCE_ENERGY, 50000, 'W71N69', 'internal trade')   
                }
            }
*/
//Game.rooms['W77N69'].terminal.send(RESOURCE_ENERGY, 40000, 'W65N63')
// Any modules that you use that modify the game's prototypes should be require'd
// before you require the profiler.
const profiler = require('screeps-profiler');

// import modules
require('prototype.creep');
require('prototype.tower');
require('prototype.spawn');
require('myFunctions');  //remove line 24 &25 to trap errors
var linkController = require('link-controller');
require('Traveler');

//require('labs');
//require('RoomVisual');
/*require('creeptalk')({
  'public': true,
  'language': require('creeptalk_basic')
})*/

//Game.spawns.Spawn8.memory.mugRoom = 'W18N86'
//Game.rooms['W71N69'].terminal.send(RESOURCE_ENERGY, 220000, 'W79N63', 'internal trade')

// This line monkey patches the global prototypes.
profiler.enable();	    
	  
module.exports.loop = function() {
profiler.wrap(function() {


    // Main.js logic should go here.	
	
	
	//Game.spawns.Spawn7.memory.claimRoom = 'W77N69'


	
 	  
/*	
if (Game.time % 180 == 0) {

          Game.spawns.Spawn3.memory.claimRoom = 'W61N67'
}  
	
if (Game.time % 120 == 0) {

  Game.spawns.Spawn1.memory.remotebuilderRoom = 'W65N64' 
	//Game.spawns.Spawn1.memory.remotebuilderRoom = 'W65N64'
	  }
*/
if (Game.time % 10000 == 0) {
          Game.rooms['W71N69'].terminal.send(RESOURCE_HYDROGEN, 10000, 'W79N64', 'internal trade')
          }

 //reservists
    //if(creep.room.name == 'W62N69' && creep.room.controller.my) {	
    if (Game.time % 800 == 0) {
        Game.spawns.Spawn16.memory.claimRoom = 'W63N69'; //from W62N69 with flag & 2 claimpts
        Game.spawns.Spawn6.memory.reserveRoom = 'W62N68' //from W62N69 2 clmpts
	    Game.spawns.Spawn5.memory.reserveRoom = 'W61N66' //from W61N68 2 clmpts
	  Game.spawns.Spawn1.memory.reserveRoom = 'W64N63' // from W65N63 2 clmpts
	  Game.spawns.Spawn21.memory.reserveRoom = 'W65N62' // from W65N63 2 clmpts
	    Game.spawns.Spawn10.memory.reserveRoom = 'W63N63' //W63N64 2 clmpts
	    Game.spawns.Spawn2.memory.reserveRoom = 'W62N63' //W63N64 2 clmpts
	     Game.spawns.Spawn3.memory.reserveRoom = 'W62N66' //W63N66 2 clmpts
	     Game.spawns.Spawn11.memory.reserveRoom = 'W63N67' //W63N66 2 clmpts
	    Game.spawns.Spawn22.memory.reserveRoom = 'W78N64' //W61N68 2 clmpts
    }
    if (Game.time % 700 === 0) {
        Game.spawns.Spawn16.memory.claimRoom = 'W63N68'; //W63N69 with flag
        Game.spawns.Spawn6.memory.reserveRoom = 'W62N67' //W62N69 2 clmpts
	Game.spawns.Spawn12.memory.reserveRoom = 'W61N67' //W61N68 2 clmpts
	    
    }
    
         // }



//   if (Game.time % 300 == 0) {
//	Game.spawns.Spawn1.memory.rangedattackerRoom = 'W64N63'
//	Game.spawns.Spawn21.memory.rangedattackerRoom = 'W64N63'	
//     }
	

//if (Game.time % 1000 == 0) {
//	Game.spawns.Spawn20.memory.rangedattackerRoom = 'W78N64'
	//Game.spawns.Spawn22.memory.rangedattackerRoom = 'W78N64'	
//     }

     Game.rooms['W65N63'].createConstructionSite(47,21, STRUCTURE_RAMPART);
	 Game.rooms['W65N63'].createConstructionSite(22,47, STRUCTURE_RAMPART);
	 Game.rooms['W65N63'].createConstructionSite(22,21, STRUCTURE_RAMPART);
	 Game.rooms['W65N63'].createConstructionSite(22,20, STRUCTURE_RAMPART);
	Game.rooms['W65N63'].createConstructionSite(25,26, STRUCTURE_RAMPART);
	 Game.rooms['W65N63'].createConstructionSite(18,35, STRUCTURE_RAMPART);
	 Game.rooms['W65N63'].createConstructionSite(23,20, STRUCTURE_RAMPART);
	 Game.rooms['W65N63'].createConstructionSite(19,34, STRUCTURE_RAMPART);
	 Game.rooms['W71N69'].createConstructionSite(14,47, STRUCTURE_RAMPART);
	 Game.rooms['W71N69'].createConstructionSite(21,35, STRUCTURE_RAMPART);
	 Game.rooms['W71N69'].createConstructionSite(21,18, STRUCTURE_RAMPART);
	Game.rooms['W79N63'].createConstructionSite(7,27, STRUCTURE_RAMPART);
	 Game.rooms['W79N63'].createConstructionSite(7,26, STRUCTURE_RAMPART);
	 Game.rooms['W79N63'].createConstructionSite(27,2, STRUCTURE_RAMPART);
	 Game.rooms['W79N63'].createConstructionSite(44,38, STRUCTURE_RAMPART);
	 Game.rooms['W79N63'].createConstructionSite(43,37, STRUCTURE_RAMPART);
	 Game.rooms['W62N69'].createConstructionSite(45,12, STRUCTURE_RAMPART);
	 Game.rooms['W62N69'].createConstructionSite(11,30, STRUCTURE_RAMPART);

Game.rooms['W61N68'].createConstructionSite(42,26, STRUCTURE_RAMPART);

  //Game.rooms['W79N64'].createConstructionSite(20,5, STRUCTURE_WALL);
//Game.rooms['W62N69'].createConstructionSite(11,30, STRUCTURE_RAMPART);	
	
	

    // check for memory entries of died creeps by iterating over Memory.creeps
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            delete Memory.creeps[name];
        }
    }
    // for each creeps
    for (let name in Game.creeps) {
        // run creep logic
        Game.creeps[name].runRole();
        //Game.creeps[name].minerCount();
    }
    // find all towers
    var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    // for each tower
    for (let tower of towers) {
        // run tower logic
        tower.defend();
    }
    // for each spawn
    for (let spawnName in Game.spawns) {
        // run spawn logic
        Game.spawns[spawnName].spawnCreepsIfNecessary();
     
    }
	//lab code

    var labs = [ 
	{id:'5d57fe7bcc9cb22f980f0aab', //W71N69 labs 0
        resource:'O', // This needs to stay undefined in order to be where it's actvated
        amount : 10000
    	},
        {id:'5ce7c35fb35a0d7c5194f4ce',//W71N69 labs 1
            resource: 'H',
            amount : 10000
        },
        {id: '5ce76d356f41786bfc7015b5',//W71N69 labs 2
            resource: 'OH',
            amount : 10000
        },
		{id:'5d5c37a4a5c322707aa341c1',//W79N63 labs 3
		 resource: 'L',
		 amount : 1000
		},
		{id:'5d73bbaeab1a6248bd3eb9fc',//W79N63 labs 4
		 resource: 'U',
		 amount : 1000
		},
		{id:'5d5bdf1ce295ac685cc4697d',//W79N63 labs 5
		 resource: 'UL',
		 amount : 1000
		},
			{id:'5d093a828a696f3854704275',//W65N63 labs 6
			resource: 'U',
			amount : 1000
			},
			{id:'5d094c45b0e4022970c91cbe', //W65N63 labs 7
		 	resource: 'L',
		 	amount : 1000
			},
			{id:'5cdad9207d49eb4de2cf4c74', //W65N63 labs 8
		 	resource: 'UL',
		 	amount : 1000
			},
				{id:'5d844792c436127b4908c16e', //W79N64 labs 9
				 resource: 'H',
				 amount : 1000
				},
				{id:'5d8406cc917a4c6ad7216543', //W79N64 labs 10
				 resource: 'O',
				 amount: 1000
				},
				{id:'5d846e85c29ef226d67ae926', //W79N64 labs 11
				 resource: 'OH',
				 amount: 1000
				},
	{id:'5cda511b01815106812772fd', //W65N63 labs 12
            resource: 'H',
            amount : 1000
        },
        {id:'5d09818a912e4534b233caa2', //W65N63 labs 13
            resource: 'LH',
            amount : 1000
        },
        {id:'5d7b1b21e775fc109f306799', //W65N63 labs 14
            resource: 'OH',
            amount : 1000
        },
        {id:'5d7b596d0366c910e6b28c52', //W65N63 labs 15
            resource: 'LH2O',
            amount : 1000
        },
				    {id:'5bea90ed515acb053b7fa4bf', //W17N88
				    resource: 'Z',
				    amount : 1000
				    },
				    {id:'5bba13c4b112697b688dc6b7', //W17N88
				    resource: 'K',
				    amount: 1000
				    },
				    {id:'5bea9e48cb45656870fd1096', //W17N88
				    resource: 'ZK',
				    amount: 1000
				    },
              				{id:'5bef64972d008d1cc26e86e5', //W63N66
				   	 resource: 'K',
				   	 amount : 1000
				   	 },
				    	{id:'5ce362c2f7ba2563d92df3ee', //W63N66
				    	resource: 'Z',
				   	 amount: 1000
				   	 },
				   	 {id:'5d07875261718016a942adb4', //W63N66
				   	 resource: 'ZK',
				    	amount: 1000
				    	},

       				 {id:'5b23164e8e80297658aae9db', //W12N88 ZK+UL=Ghodium
           			 resource: 'ZK',
            			amount: 1000
                                },
                                {id:'5b779d8adf624f7cfecb64e9', //W12N88 Ghodium
                                 resource: 'G',
                                 amount: 1000
                                 },
       {id:'5c0b9a71e34234554f7c6561', //W11N88 Ghodium
       resource: 'G',
       amount: 1000
       },
       {id:'5b9f89aac44fc50fa6e48ad3', //W11N88 Hydrogen
       resource: 'H',
       amount: 1000
       },
       {id:'5b9fec3b29804955f9880a6f', //W11N88 Ghodium Hydride
       resource: 'GH',
       amount: 1000
       },

       {id:'5b9dfb0088d2075168155cd9', //W11N88 Ghodium Acid
            resource: 'GH2O',
            amount: 1000
        },
                    {id:'5c307bfa014a667e2134eb9d', //W15N89 Ghodium Acid
                    resource: 'GH2O',
                    amount: 1000
                    },
                    {id:'5c2f841ee08eec7e05f1ac1e', //W15N89 Catalyst X
                    resource: 'X',
                    amount: 1000
                    },
                    {id:'5c2f27108f353d75981d2f79', //W15N89 Catalyised Ghodium Acid
                    resource: 'XGH2O',
                    amount: 1000
                    },
	            {id:'5c4eee6ff7bc003730aa60b8', //W15N89 Catalyst X
                    resource: 'X',
                    amount: 1000
                    },
	            {id:'5c6492ca36c0dc66f80cca12', //W15N89 Ghodium Acid
                    resource: 'GH2O',
                    amount: 1000
                    },
	            {id:'5c4e2e25801ac231f21b3e83', //W15N89 Catalyised Ghodium Acid
                    resource: 'XGH2O',
                    amount: 1000
                    },
	    {id:'5bba93dce8df2d3c72b82cde', //W17N88 Oxygen for KO
            resource: 'O',
            amount: 1000
            },
	    {id:'5bb8be1b34a08f5159a3fa45', //W17N88 Keanium Oxide KO
            resource: 'KO',
            amount: 1000
            },
	    {id:'5c5edc439b6f610a6df22341', //W17N88 Oxygen for Keanium Alkalide KHO2
            resource: 'O',
            amount: 1000
            },
	    {id:'5c5eec63e95393215f063657', //W17N88 Hydrogen for Keanium Alkalide KHO2
            resource: 'H',
            amount: 1000
            },
	    {id:'5bea88d68132171a782936e9', //W17N88 OH for Keanium Alkalide KHO2
            resource: 'OH',
            amount: 1000
            },
	    {id:'5c5efa3b5bad700cd3a5cbd9', //W17N88 Keanium Alkalide KHO2
            resource: 'kho2',
            amount: 1000
            }
	    
    ];
    var lab1 = Game.getObjectById  (  labs[0].id );//oxygen W71N69
    var lab2 = Game.getObjectById  (  labs[1].id );//hydrogen W71N69
    var lab3 = Game.getObjectById  (  labs[2].id );//hydroxide W71N69
    if(lab3.cooldown == 0 ) {
        lab3.runReaction(lab2,lab1)
    	}
	    var lab4 = Game.getObjectById  (  labs[3].id );//lemergium W79N63
	    var lab5 = Game.getObjectById  (  labs[4].id );//utrium W79N63
	    var lab6 = Game.getObjectById  (  labs[5].id );// utrium lemergite W79N63
             if(lab6.cooldown == 0 ) {
	     lab6.runReaction(lab5,lab4)				    
	     }
	        var lab7 = Game.getObjectById ( labs[6].id );//utrium W65N63
		 var lab8 = Game.getObjectById ( labs[7].id );//lemergium W65N63
		 var lab9 = Game.getObjectById ( labs[8].id );// utrium lemergite W65N63
		 if(lab9.cooldown == 0 ) {
		 lab9.runReaction(lab8,lab7)
		 }
			var lab10 = Game.getObjectById ( labs[9].id ); //hydrogen W79N64
			var lab11 = Game.getObjectById ( labs[10].id ); //oxygen W79N64
			var lab12 = Game.getObjectById ( labs[11].id ); //hydroxide W79N64
			if(lab12.cooldown == 0 ) {
			lab12.runReaction(lab11,lab10)
			}
	var lab13 = Game.getObjectById ( labs[12].id ); //hydrogen W65N63
	var lab14 = Game.getObjectById ( labs[13].id ); //lemergium hydride W65N63
	var lab15 = Game.getObjectById ( labs[14].id ); //hydroxide W65N63
	var lab16 = Game.getObjectById ( labs[15].id ); //lemergium acid W65N63
	if(lab14.cooldown == 0 ) {
	lab14.runReaction(lab13,lab8)
	}
    if(lab16.cooldown == 0 ) {
        lab16.runReaction(lab15,lab14)
    }
	/*
				var lab13 = Game.getObjectById ( labs[12].id ); //hydrogen W65N63
				var lab14 = Game.getObjectById ( labs[13].id ); //lemergium hydride W65N63
				var lab15 = Game.getObjectById ( labs[14].id ); //lemergium acid W65N63
				if(lab15.cooldown == 0 ) {
				lab15.runReaction(lab14,lab13)
				}
					var lab16 = Game.getObjectById ( labs[15].id ); //keanium W63N66
					var lab17 = Game.getObjectById ( labs[16].id ); //zynthium W63N66
					var lab18 = Game.getObjectById ( labs[17].id ); //zynthium keanite W63N66
					if(lab18.cooldown == 0 ) {
					lab18.runReaction(lab17,lab16)
					}
    //var lab9 = Game.getObjectById ( labs[8].id ); utrium lemurgite W12N88
    var lab19 = Game.getObjectById ( labs[18].id ); //zynthium keanite W12N88
    var lab20 = Game.getObjectById ( labs[19].id ); //Ghodium W12N88
    if(lab20.cooldown == 0 ) {
        lab20.runReaction(lab9,lab19)
    }
        var lab21 = Game.getObjectById ( labs[20].id ); //hydrogen for Ghodium W11N88
        var lab22 = Game.getObjectById ( labs[21].id ); //ghodium for hydrogen W11N88
        var lab23 = Game.getObjectById ( labs[22].id ); //ghodium hydride W11N88
        if(lab23.cooldown == 0 ) {
	lab23.runReaction(lab22,lab21)
	}
		var lab3 = Game.getObjectById  (  labs[2].id ); //hydroxide w11n88
    		var lab23 = Game.getObjectById ( labs[22].id ); //ghodium hydride W11N88
    		var lab24 = Game.getObjectById ( labs[23].id ); //ghodium acid W11N88
    		if(lab24.cooldown == 0 ) {
                lab24.runReaction(lab3,lab23)
                }
                         var lab25 = Game.getObjectById ( labs[24].id ); //W15N89 Ghodium Acid
    		         var lab26 = Game.getObjectById ( labs[25].id ); //W15N89 Catalyst X
    		         var lab27 = Game.getObjectById ( labs[26].id ); //W15N89 Catalyised Ghodium Acid
    		         if(lab27.cooldown == 0 ) {
                         lab27.runReaction(lab26,lab25)
                         }
	                 var lab28 = Game.getObjectById ( labs[27].id ); //W15N89 Ghodium Acid
    		         var lab29 = Game.getObjectById ( labs[28].id ); //W15N89 Catalyst X
    		         var lab30 = Game.getObjectById ( labs[29].id ); //W15N89 Catalyised Ghodium Acid
    		         if(lab30.cooldown == 0 ) {
                         lab30.runReaction(lab28,lab29)
                         }
	                        var lab31 = Game.getObjectById ( labs[30].id ); //W17N88 Oxygen for KO
    		         	var lab32 = Game.getObjectById ( labs[31].id ); //W17N88 Keanium Oxide KO
    		         	if(lab32.cooldown == 0 ) {
                         	lab32.runReaction(lab14,lab31)
                         	}
    var lab33 = Game.getObjectById ( labs[32].id ); 
    var lab34 = Game.getObjectById ( labs[33].id ); 
    var lab35 = Game.getObjectById ( labs[34].id ); 
    if(lab35.cooldown == 0 ) {
        lab35.runReaction(lab33,lab34)
    }
	
        var lab36 = Game.getObjectById ( labs[35].id ); //W17N88 Keanium Oxide KO
        if(lab36.cooldown == 0 ) {
            lab36.runReaction(lab35,lab32)
         }*/
       


	
	
	
// activate safe mode
var spawn = Game.spawns['Spawn1'];
var spawn2 = Game.spawns['Spawn2'];
var spawn3 = Game.spawns['Spawn3'];
var spawn4 = Game.spawns['Spawn4'];

if(spawn.room.storage && spawn.room.storage.hits < spawn.room.storage.hitsMax) {
   spawn.room.controller.activateSafeMode();
   } else if (spawn.hits < spawn.hitsMax) {
   spawn.room.controller.activateSafeMode();
   } else if (spawn.room.terminal && spawn.room.terminal.hits < spawn.room.terminal.hitsMax) {
   spawn.room.controller.activateSafeMode();
   }
	

	// Link run scripts
/*W71N69*/    const uploadLink1 = Game.getObjectById('5ce1c52121d3291b20e3af0a');
              linkController.run(uploadLink1);
              const uploadLink2 = Game.getObjectById('5cd838b075aed476c9a27d1d'); // loc at controller
              linkController.run(uploadLink2);
              const uploadLink3 = Game.getObjectById('5d31001ac6972633ce21d564');
              linkController.run(uploadLink3);
              const uploadLink4 = Game.getObjectById('5db559415d46491bccd8ff49');
              linkController.run(uploadLink4);
/*W62N61*/    const uploadLink5 = Game.getObjectById('5d0851edbf0f162934866943');
              linkController.run(uploadLink5);
	      const uploadLink6 = Game.getObjectById('5cfb4a5aa970836226ce1790');
              linkController.run(uploadLink6);
/*W63N65*/  const uploadLink7 = Game.getObjectById('5cd80e21c7f85a307d113390'); // loc at controller
            linkController.run(uploadLink7);
            const uploadLink8 = Game.getObjectById('5dbe7b24e9ac543a2c52d28c');
            linkController.run(uploadLink8);
            const uploadLink9 = Game.getObjectById('5cdb1373b7d51739269af00b');
            linkController.run(uploadLink9);
            const uploadLink10 = Game.getObjectById('5cd838b075aed476c9a27d1d');
            linkController.run(uploadLink10);
/*W61N68*/   const uploadLink11 = Game.getObjectById('5cd106008f10ae4bd0532232');
             linkController.run(uploadLink11);
/*W62N29*/  const uploadLink12 = Game.getObjectById('5dc20b76d53f09e554901ec8');
            linkController.run(uploadLink12);
	const uploadLink13 = Game.getObjectById('5dc1fd99a067857af80c30fa'); //bottom rampart
            linkController.run(uploadLink13);
	const uploadLink14 = Game.getObjectById('5cf95e43a970836226cd1dc2'); //bottom rampart
            linkController.run(uploadLink14);

/*W63N66*/    const uploadLink15 = Game.getObjectById('5cda536d091a1b30af58683f');
              linkController.run(uploadLink15);
/*W63N64*/  const uploadLink16 = Game.getObjectById('5cfbbcba68cf3e6212e56554');
            linkController.run(uploadLink16);
/*W77N69*/    const uploadLink17 = Game.getObjectById('5d06e97de0c7eb16f333aa4c');
              linkController.run(uploadLink17);
/*W79N64*/  const uploadLink18 = Game.getObjectById('5d84777851450c6b50c01b00');
            linkController.run(uploadLink18);
/*W79N63*/    const uploadLink19 = Game.getObjectById('5db639ff0eb0b6c2396e29d0');
              linkController.run(uploadLink19);
/*W63N65*/  const uploadLink20 = Game.getObjectById('5dbe7401e9ac54bda252ce8a'); //bottom rampart
              linkController.run(uploadLink20);
	/*W62N29*/ // const uploadLink19 = Game.getObjectById('5dc1fd99a067857af80c30fa'); //bottom rampart
                   //linkController.run(uploadLink19);
	/*W62N29*/ //const uploadLink20 = Game.getObjectById('5cf95e43a970836226cd1dc2'); //bottom rampart
                   //linkController.run(uploadLink20);


/*
	
// Terminal trade execution oxygen
if (spawn.room.terminal && (Game.time % 5 == 0)) {

if (spawn.room.terminal.store[RESOURCE_ENERGY] >= 2000 && spawn.room.terminal.store[RESOURCE_OXYGEN] >= 2000) { 
   var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_OXYGEN &&
				 order.type == ORDER_BUY &&
	Game.market.calcTransactionCost(200, spawn.room.name, order.roomName) < 5000);
	console.log('Coliehams Oxygen buy orders found: ' + orders.length);

	orders.sort(function(a,b){return b.price - a.price;});

	console.log('Best price: ' + orders[0].price);
	
	if (orders[0].price > 0.01) {
		var result = Game.market.deal(orders[0].id, 2000, spawn.room.name);
		if (result == 0) {
			console.log('Order completed successfully');
					}
				}
		}
};
*/

/*
// Terminal trade execution lymergium
if (spawn2.room.terminal && (Game.time % 5 == 0)) {

if (spawn2.room.terminal.store[RESOURCE_ENERGY] >= 2000 && spawn2.room.terminal.store[RESOURCE_LEMERGIUM] >= 2000) {
   var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_LEMERGIUM &&
				 order.type == ORDER_BUY &&
				 Game.market.calcTransactionCost(200, spawn2.room.name, order.roomName) < 5000);
	console.log('Coliehams lEMERGIUM buy orders found: ' + orders.length);

	orders.sort(function(a,b){return b.price - a.price;});

	console.log('Best price: ' + orders[0].price);	
	if (orders[0].price >= 0.01) {
		var result = Game.market.deal(orders[0].id, 2000, spawn2.room.name);
		if (result == 0) {
			console.log('Order completed successfully');
					}
				}
		}
};
// Terminal trade execution hydrogen
if (spawn3.room.terminal && (Game.time % 5 == 0)) {

    if (spawn3.room.terminal.store[RESOURCE_ENERGY] >= 2000 && spawn3.room.terminal.store[RESOURCE_HYDROGEN] >= 2000) {
        var orders = Game.market.getAllOrders(order => order.resourceType == RESOURCE_HYDROGEN &&
            order.type == ORDER_BUY &&

            Game.market.calcTransactionCost(200, spawn3.room.name, order.roomName) < 4800);

        console.log('Coliehams Hydrogen buy orders found: ' + orders.length);
        orders.sort(function (a, b) {
            return b.price - a.price;
        });

        console.log('Best price: ' + orders[0].price);
        if (orders[0].price >= 0.05) {

            var result = Game.market.deal(orders[0].id, 1000, spawn3.room.name);
            if (result == 0) {
                console.log('Order completed successfully');
            }
        }

	
    }*/
}
   )};	      	      
