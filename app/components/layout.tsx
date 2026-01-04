import { Box, Flex, Spacer } from '@chakra-ui/react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import type { NextPage } from 'next'
import type { ReactElement } from 'react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function Layout({ children }: { children: ReactElement }) {
    return (
        <Box bg='gray.100' id="box" h='100%' >
            <Flex px={4} py={4} gap={2} bg='gray.200'>
                <Link as={NextLink} href='/'>
                    Home
                </Link>
                <Link as={NextLink} href='/about'>
                    About
                </Link>
                <Spacer bg='gray.300' />
                <WalletMultiButton />
            </Flex>
            {children}
        </Box >
    )
}