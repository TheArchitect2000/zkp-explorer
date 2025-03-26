export const serviceDeviceContractAddress =
  '0x4b08ea934e6bfb7c72a376c842c911e1dd2aa74f';

export const zkpContractAddress = '0x731b6c8d68ca98e0ab0592fdb1749c1d2f2ac504';

export const zkpContractABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'nodeId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'deviceId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'deviceType',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'hardwareVersion',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'firmwareVersion',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'zkp_payload',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'data_payload',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'unixtime_payload',
        type: 'string',
      },
    ],
    name: 'storeZKP',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'nodeId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'deviceId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'deviceType',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'hardwareVersion',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'firmwareVersion',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'data_payload',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'zkp_payload',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'unixtime_payload',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'ZKPStored',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getZKP',
    outputs: [
      {
        internalType: 'string',
        name: 'nodeId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'deviceId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'deviceType',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'hardwareVersion',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'firmwareVersion',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'zkp_payload',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'data_payload',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'unixtime_payload',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getZKPCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'zkps',
    outputs: [
      {
        internalType: 'string',
        name: 'nodeId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'deviceId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'deviceType',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'hardwareVersion',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'firmwareVersion',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'data_payload',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'zkp_payload',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'unixtime_payload',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export const serviceDeviceContractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "initialOwner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deviceId",
				"type": "string"
			}
		],
		"name": "DeviceManagement__DeviceIdNotExist",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deviceId",
				"type": "string"
			}
		],
		"name": "DeviceManagement__DuplicatedId",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "NodeManagers__IsAlreadyManager",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "NodeManagers__IsNotManager",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			}
		],
		"name": "NodeManagers__NodeIdMismatch",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "serviceId",
				"type": "string"
			}
		],
		"name": "ServiceManagement__DuplicatedId",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "serviceId",
				"type": "string"
			}
		],
		"name": "ServiceManagement__ServiceIdNotExist",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "nodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceIdType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceModel",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturer",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "parameters",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "useCost",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "deviceCoordination",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "ownernershipId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sharedDateTime",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "softwareVersion",
						"type": "string"
					}
				],
				"indexed": false,
				"internalType": "struct DeviceSharingManagement.Device",
				"name": "device",
				"type": "tuple"
			}
		],
		"name": "DeviceCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "nodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceIdType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceModel",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturer",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "parameters",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "useCost",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "deviceCoordination",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "ownernershipId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sharedDateTime",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "softwareVersion",
						"type": "string"
					}
				],
				"indexed": false,
				"internalType": "struct DeviceSharingManagement.Device",
				"name": "device",
				"type": "tuple"
			}
		],
		"name": "DeviceRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "manager",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			}
		],
		"name": "ManagerAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "manager",
				"type": "address"
			}
		],
		"name": "ManagerRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "nodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "serviceId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "serviceType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "devices",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "installationPrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "executionPrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imageUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "program",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "creationDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "publishedDate",
						"type": "string"
					}
				],
				"indexed": false,
				"internalType": "struct ServiceManagement.Service",
				"name": "service",
				"type": "tuple"
			}
		],
		"name": "ServiceCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "nodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "serviceId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "serviceType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "devices",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "installationPrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "executionPrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imageUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "program",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "creationDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "publishedDate",
						"type": "string"
					}
				],
				"indexed": false,
				"internalType": "struct ServiceManagement.Service",
				"name": "service",
				"type": "tuple"
			}
		],
		"name": "ServiceRemoved",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			}
		],
		"name": "addManager",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deviceId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deviceType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deviceIdType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "deviceModel",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "parameters",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "useCost",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "deviceCoordination",
				"type": "string[]"
			},
			{
				"internalType": "string",
				"name": "ownernershipId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "sharedDateTime",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "softwareVersion",
				"type": "string"
			}
		],
		"name": "createDevice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "serviceId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "serviceType",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "devices",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "installationPrice",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "executionPrice",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "program",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "creationDate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "publishedDate",
				"type": "string"
			}
		],
		"name": "createService",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fetchAllDevices",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "nodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceIdType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceModel",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturer",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "parameters",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "useCost",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "deviceCoordination",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "ownernershipId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sharedDateTime",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "softwareVersion",
						"type": "string"
					}
				],
				"internalType": "struct DeviceSharingManagement.Device[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fetchAllDevicesPerNode",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "nodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceIdType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deviceModel",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "manufacturer",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "parameters",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "useCost",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "deviceCoordination",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "ownernershipId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "sharedDateTime",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "softwareVersion",
						"type": "string"
					}
				],
				"internalType": "struct DeviceSharingManagement.Device[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fetchAllServices",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "nodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "serviceId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "serviceType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "devices",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "installationPrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "executionPrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imageUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "program",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "creationDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "publishedDate",
						"type": "string"
					}
				],
				"internalType": "struct ServiceManagement.Service[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fetchAllServicesPerNode",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "nodeId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "serviceId",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "serviceType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "devices",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "installationPrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "executionPrice",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imageUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "program",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "creationDate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "publishedDate",
						"type": "string"
					}
				],
				"internalType": "struct ServiceManagement.Service[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllManagers",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getManagerNodeId",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "targetNodeId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "targetDeviceId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			}
		],
		"name": "removeDevice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "removeManager",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "targetNodeId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "targetServiceId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "nodeId",
				"type": "string"
			}
		],
		"name": "removeService",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
