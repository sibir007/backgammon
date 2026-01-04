import { ChakraProvider } from "@chakra-ui/react"
import WalletContextProvider from "../contexts/WalletContextProvider"
import SessionProvider from "@/contexts/SessionProvider"
import { GameStateProvider } from "@/contexts/GameStateProvider"
import type { AppProps } from "next/app"
import { NftProvider } from "@/contexts/NftProvider"
import { BGameStateProvider } from "@/contexts/BGameStateProvider_2"
import Layout  from "@/components/layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WalletContextProvider>
        <SessionProvider>
          <GameStateProvider>
            <NftProvider>
              <BGameStateProvider >
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </BGameStateProvider>
            </NftProvider>
          </GameStateProvider>
        </SessionProvider>
      </WalletContextProvider>
    </ChakraProvider>
  )
}
