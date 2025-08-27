import { Pair, PairAccount } from "../types";

export function pairAccountToPair(account: PairAccount): Pair {
  return {
    bump: account.bump,
    liquidityBookConfig: account.liquidityBookConfig.toBase58(),
    binStep: account.binStep,
    binStepSeed: account.binStepSeed,
    tokenMintX: account.tokenMintX.toBase58(),
    tokenMintY: account.tokenMintY.toBase58(),
    staticFeeParameters: {
      baseFactor: account.staticFeeParameters.baseFactor,
      filterPeriod: account.staticFeeParameters.filterPeriod,
      decayPeriod: account.staticFeeParameters.decayPeriod,
      reductionFactor: account.staticFeeParameters.reductionFactor,
      variableFeeControl: account.staticFeeParameters.variableFeeControl,
      maxVolatilityAccumulator:
        account.staticFeeParameters.maxVolatilityAccumulator,
      protocolShare: account.staticFeeParameters.protocolShare,
      space: Array.from(account.staticFeeParameters.space).slice(0, 2) as [
        number,
        number
      ],
    },
    activeId: account.activeId,
    dynamicFeeParameters: {
      timeLastUpdated: account.dynamicFeeParameters.timeLastUpdated,
      volatilityAccumulator: account.dynamicFeeParameters.volatilityAccumulator,
      volatilityReference: account.dynamicFeeParameters.volatilityReference,
      idReference: account.dynamicFeeParameters.idReference,
      space: Array.from(account.dynamicFeeParameters.space).slice(0, 4) as [
        number,
        number,
        number,
        number
      ],
    },
    protocolFeesX: account.protocolFeesX.toString(), 
    protocolFeesY: account.protocolFeesY.toString(),
    hook: account.hook ? account.hook.toBase58() : null,
  };
}
