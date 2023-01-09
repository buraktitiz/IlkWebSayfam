// REST OF YOUR CODE
import { Button, Text, HStack } from "@chakra-ui/react";
import { MouseEventHandler, useCallback, useEffect, useMemo, useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { NextPage } from "next";
import MainLayout from "./MainLayout";

import { PublicKey } from "@solana/web3.js";
import { Metaplex, walletAdapterIdentity } from "@metaplex-foundation/js";
import { useWallet } from "@solana/wallet-adapter-react/lib/types/useWallet";
import { useConnection } from "@solana/wallet-adapter-react";

interface NewMintProps {
    mint: PublicKey;
}

const Home: NextPage<NewMintProps> = ({ mint }) => {
    const [metadata, setMetadat] = useState<any>()
    const { connection } = useConnection()
    const walletAdapter = useWallet()
    const metaplex = useMemo(() => {
        return Metaplex.make(connection).use(walletAdapterIdentity(walletAdapter))
    }, [connection, walletAdapter])

    useEffect(() => {
        // What this does is to allow us to find the NFT object
        // based on the given mint address
        metaplex.nfts().findByMint({ mintAddress: mint }).run()
            .then((nft: { uri: RequestInfo | URL; }) => {
                // We then fetch the NFT uri to fetch the NFT metadata
                fetch(nft.uri)
                    .then((res) => res.json())
                    .then((metadata) => {
                        metadata(metadata)
                    })
            })
    }, [mint, metaplex, walletAdapter])

    // REST OF YOUR CODE
};

    return (
        <MainLayout>
            {/* REST OF YOUR CODE */}
            <Image src={metadata?.image ?? ""} alt="" />
            <Button
                bgColor="accent"
                color="white"
                maxWidth="380px"
                onClick={handleClick}
            >
                <HStack>
                    <Text>stake my buildoor</Text>
                    <ArrowForwardIcon />
                </HStack>
            </Button>
        </MainLayout>
    );
