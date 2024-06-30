import { baseSepolia } from 'viem/chains';
import { generateContractHook } from '@/hooks/contracts';
import BuyMeACoffeeABI from './BuyMeACoffeeABI';
import { Chain } from 'viem';

/**
 * Returns contract data for the BuyMeACoffee contract.
 */
export const useBuyMeACoffeeContract = generateContractHook({
  abi: BuyMeACoffeeABI,
  [baseSepolia.id]: {
    chain: baseSepolia as Chain,
    address: '0xcE0EBD0282e247553eb8fDdeE3281b5EC09ddD16',
  },

  // ... more chains for this contract go here
});
