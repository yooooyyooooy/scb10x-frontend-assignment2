const FactoryABI = [
      {
            anonymous: false,
            inputs: [
                  {
                        indexed: false,
                        internalType: 'address',
                        name: '_deployedAddress',
                        type: 'address',
                  },
            ],
            name: 'DeployedAddress',
            type: 'event',
      },
      {
            anonymous: false,
            inputs: [
                  {
                        indexed: true,
                        internalType: 'address',
                        name: 'previousOwner',
                        type: 'address',
                  },
                  {
                        indexed: true,
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address',
                  },
            ],
            name: 'OwnershipTransferred',
            type: 'event',
      },
      {
            anonymous: false,
            inputs: [
                  {
                        indexed: false,
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                  },
            ],
            name: 'Paused',
            type: 'event',
      },
      {
            anonymous: false,
            inputs: [
                  {
                        indexed: false,
                        internalType: 'address',
                        name: 'account',
                        type: 'address',
                  },
            ],
            name: 'Unpaused',
            type: 'event',
      },
      {
            inputs: [
                  {
                        internalType: 'address',
                        name: '',
                        type: 'address',
                  },
            ],
            name: 'addressRecord',
            outputs: [
                  {
                        internalType: 'address',
                        name: '',
                        type: 'address',
                  },
            ],
            stateMutability: 'view',
            type: 'function',
      },
      {
            inputs: [
                  {
                        internalType: 'bytes32',
                        name: 'salt',
                        type: 'bytes32',
                  },
                  {
                        internalType: 'bytes32',
                        name: 'codeHash',
                        type: 'bytes32',
                  },
                  {
                        internalType: 'address',
                        name: 'deployer',
                        type: 'address',
                  },
            ],
            name: 'computeAddressWithDeployer',
            outputs: [
                  {
                        internalType: 'address',
                        name: '',
                        type: 'address',
                  },
            ],
            stateMutability: 'pure',
            type: 'function',
      },
      {
            inputs: [
                  {
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256',
                  },
                  {
                        internalType: 'bytes32',
                        name: 'salt',
                        type: 'bytes32',
                  },
                  {
                        internalType: 'bytes',
                        name: 'code',
                        type: 'bytes',
                  },
            ],
            name: 'deploy',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
      },
      {
            inputs: [
                  {
                        internalType: 'address',
                        name: '_userAddress',
                        type: 'address',
                  },
            ],
            name: 'getUserETHLeverageAddress',
            outputs: [
                  {
                        internalType: 'address',
                        name: '',
                        type: 'address',
                  },
            ],
            stateMutability: 'view',
            type: 'function',
      },
      {
            inputs: [],
            name: 'owner',
            outputs: [
                  {
                        internalType: 'address',
                        name: '',
                        type: 'address',
                  },
            ],
            stateMutability: 'view',
            type: 'function',
      },
      {
            inputs: [],
            name: 'paused',
            outputs: [
                  {
                        internalType: 'bool',
                        name: '',
                        type: 'bool',
                  },
            ],
            stateMutability: 'view',
            type: 'function',
      },
      {
            inputs: [],
            name: 'renounceOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
      },
      {
            inputs: [
                  {
                        internalType: 'address',
                        name: '_userAddress',
                        type: 'address',
                  },
                  {
                        internalType: 'address',
                        name: '_ETHLeverageAddress',
                        type: 'address',
                  },
            ],
            name: 'setAddressRecord',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
      },
      {
            inputs: [
                  {
                        internalType: 'address',
                        name: 'newOwner',
                        type: 'address',
                  },
            ],
            name: 'transferOwnership',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
      },
];

export default FactoryABI;
