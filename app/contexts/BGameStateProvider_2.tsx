import { createContext, useContext, useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    PlayerData,
    MAX_ENERGY,
    TIME_TO_REFILL_ENERGY,
    GameData,
    GAME_DATA_SEED,
    PROGRAM_ID,
    useAnchorProvider,
    getProgram,
} from "@/utils/anchor";
import { BN } from "@coral-xyz/anchor";


import {
  Game, type GameStateForUI
} from "@/types/game_2";



export const game = new Game();

interface BGameStateContextType_2 {
    //   playerDataPDA: PublicKey | null;
    gameState: GameStateForUI;
    setGameState: (newGameState: GameStateForUI) => void;
    //   nextEnergyIn: number;
    //   totalWoodAvailable: number | null;
}


const BGameStateContext = createContext<BGameStateContextType_2>({} as BGameStateContextType_2);

export const useGameState = () => useContext(BGameStateContext);

export const BGameStateProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    const [gameState, setGameState] = useState<GameStateForUI>(game.cloneForUI());

    return (
        <BGameStateContext.Provider
            value={{
                // playerDataPDA,
                gameState: gameState,
                setGameState: setGameState,
                // nextEnergyIn,
                // totalWoodAvailable,
            }}
        >
            {children}
        </BGameStateContext.Provider>
    );
};
