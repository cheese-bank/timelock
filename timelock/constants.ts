/**
 * timelock contract address
 */
export const contract_address : any = {
    3: {
        'unitroller': '0x52Ab60E7F463B73C6A90ee116dBB18ac61DC63FF',
        'comptroller': '0x52Ab60E7F463B73C6A90ee116dBB18ac61DC63FF',
        'cToken1': '', 
        'cToken2': '', 
        'cTokenn': ''
    },
    1: {
        'unitroller': '0xdE2289695220531dfCf481FE3554D1C9C3156BA3',
        'comptroller': '0xdE2289695220531dfCf481FE3554D1C9C3156BA3',
        'sETH': '0xeAb126AE68de4c65834Ad9b6A570661cDbC2F6D0',
        'sDAI': '0xA80e737Ded94E8D2483ec8d2E52892D9Eb94cF1f',
        'sUSDC': '0x5E181bDde2fA8af7265CB3124735E9a13779c021',
        'sUSDT': '0x4c2a8A820940003cfE4a16294B239C8C55F29695',
        'sCHEESE': '0xc183Fb180fDD6B9035c747019546C5f2A3D9d251',
        'sUNI_V2-ETH-USDC': '0x57363E62d5A2595146e302c07A844C377E32eD40',
        'sUNI_V2-ETH-USDT': '0x609E0f0CB16e53878bA5E959A22fc7fcd81b124A',
        'sUNI_V2-ETH-DAI': '0x4C529EB6262D86446ae64f8BFab6ec5623E0BcD9',
        'sUNI_V2-CHEESE-ETH': '0x7e4956688367fB28de3C0A62193f59b1526a00e7' 
    }
}

/**
 * contract abi file name
 */
export const contract_abi_file : any = {
    'unitroller': 'unitroller-abi.json',
    'comptroller': 'comptroller-abi.json',
    'sETH': 'cETH-abi.json', 
    'sDAI': 'cToken-abi.json', 
    'sUSDC': 'cToken-abi.json',
    'sUSDT': 'cToken-abi.json', 
    'sCHEESE': 'cToken-abi.json', 
    'sUNI_V2-ETH-USDC': 'cToken-abi.json',
    'sUNI_V2-ETH-USDT': 'cToken-abi.json', 
    'sUNI_V2-ETH-DAI': 'cToken-abi.json',       
    'sUNI_V2-CHEESE-ETH': 'cToken-abi.json',
}

/**
 * deplay Offset, unit: seconds
 */
export const delay_offset = 300;

/**
 * Current timelock address
 */
export const timelock_address : any = {
    1: '0xC7EEc2C723b6faD28290E0755ca4e3D75C0d6958',  
    3: '0x4168FE8179C5e99074068244413909F40c4301B2'
}

/**
 * contract timelock queue transaction functions
 */
export const queue_functions : any = {
    'unitroller': ['_acceptAdmin', '_setPendingAdmin', '_setPendingImplementation'],
    'comptroller': ['_become', '_setBorrowPaused', '_setMiningBuff', '_changeMiningRule', '_setCompRate', '_setMintPaused', '_supportMarket', '_dropCompMarket', '_setPriceOracle', '_setCollateralFactor'],
    'sETH': ['_acceptAdmin', '_setReserveFactor'],
    'sDAI': ['_acceptAdmin', '_setReserveFactor'], 
    'sUSDC': ['_acceptAdmin', '_setReserveFactor'],
    'sUSDT': ['_acceptAdmin', '_setReserveFactor'], 
    'sCHEESE': ['_acceptAdmin', '_setReserveFactor'], 
    'sUNI_V2-ETH-USDC': ['_acceptAdmin', '_setReserveFactor'],
    'sUNI_V2-ETH-USDT': ['_acceptAdmin', '_setReserveFactor'], 
    'sUNI_V2-ETH-DAI': ['_acceptAdmin', '_setReserveFactor'],       
    'sUNI_V2-CHEESE-ETH': ['_acceptAdmin', '_setReserveFactor']
}

