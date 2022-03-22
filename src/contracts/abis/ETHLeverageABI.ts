const ETHLeverageABI = [
      {
            inputs: [
                  {
                        internalType: 'address',
                        name: '_userAddress',
                        type: 'address',
                  },
                  {
                        internalType: 'address',
                        name: '_cEtherAddress',
                        type: 'address',
                  },
                  {
                        internalType: 'address',
                        name: '_cDaiAddress',
                        type: 'address',
                  },
                  {
                        internalType: 'address',
                        name: '_daiAddress',
                        type: 'address',
                  },
                  {
                        internalType: 'address',
                        name: '_WETHAddress',
                        type: 'address',
                  },
                  {
                        internalType: 'address',
                        name: '_comptrollerAddress',
                        type: 'address',
                  },
                  {
                        internalType: 'address',
                        name: '_swapRouterAddress',
                        type: 'address',
                  },
                  {
                        internalType: 'address',
                        name: '_ethUsdPriceFeedAddress',
                        type: 'address',
                  },
                  {
                        internalType: 'address',
                        name: '_daiUsdPriceFeedAddress',
                        type: 'address',
                  },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
      },
      {
            stateMutability: 'payable',
            type: 'fallback',
      },
      {
            inputs: [],
            name: 'closePosition',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
      },
      {
            inputs: [
                  {
                        internalType: 'uint256',
                        name: '_leverageRatio',
                        type: 'uint256',
                  },
            ],
            name: 'openPosition',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
      },
      {
            inputs: [],
            name: 'queryPosition',
            outputs: [
                  {
                        components: [
                              {
                                    internalType: 'uint256',
                                    name: 'ethDepositAmount',
                                    type: 'uint256',
                              },
                              {
                                    internalType: 'uint256',
                                    name: 'daiBorrowedAmount',
                                    type: 'uint256',
                              },
                              {
                                    internalType: 'uint256',
                                    name: 'ethDaiRate',
                                    type: 'uint256',
                              },
                              {
                                    internalType: 'uint256',
                                    name: 'leverageLevel',
                                    type: 'uint256',
                              },
                        ],
                        internalType: 'struct ETHLeverage.queryPositionResult',
                        name: '',
                        type: 'tuple',
                  },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
      },
      {
            stateMutability: 'payable',
            type: 'receive',
      },
];

export default ETHLeverageABI;
