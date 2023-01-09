import { FC, MouseEventHandler, useCallback } from "react"
import {
    Button,
    Container,
    Heading,
    HStack,
    Text,
    VStack,
    Image,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

import { useRouter } from "next/router";


const Connected: FC = () => {
    const router = useRouter()
    // const handleClick = (e) => {
    //   e.preventDefault()
    //   router.push(newMint)
    // }
    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
        async (event) => {
            if (event.defaultPrevented) return;
            if (!walletAdapter.connected || !candyMachine) return;

            try {
                setIsMinting(true);
                const nft = await metaplex.candyMachines().mint({ candyMachine }).run();

                console.log(nft);
                router.push(`/newMint?mint=${nft.nft.address.toBase58()}`);
            } catch (error) {
                alert(error);
            } finally {
                setIsMinting(false);
            }
        },
        [router]
    );


    return (
        <VStack spacing={20}>
            <Container>
                <VStack spacing={8}>
                    <Heading
                        color="white"
                        as="h1"
                        size="2xl"
                        noOfLines={1}
                        textAlign="center"
                    >
                        Welcome Buildoor.
                    </Heading>

                    <Text color="bodyText" fontSize="xl" textAlign="center">
                        Each buildoor is randomly generated and can be staked to receive
                        <Text as="b"> $BLD</Text> Use your <Text as="b"> $BLD</Text> to
                        upgrade your buildoor and receive perks within the community!
                    </Text>
                </VStack>
            </Container>

            <HStack spacing={10}>
                <Image src="avatar1.png" alt="" />
                <Image src="avatar2.png" alt="" />
                <Image src="avatar3.png" alt="" />
                <Image src="avatar4.png" alt="" />
                <Image src="avatar5.png" alt="" />
            </HStack>

            <Button bgColor="accent" color="white" maxW="380px" onClick={() => router.push('/newMint')}>
                <HStack>
                    <Text>mint buildoor</Text>
                    <ArrowForwardIcon />
                </HStack>
            </Button>
        </VStack>
    )
}

export default Connected

function setIsMinting(arg0: boolean) {
    throw new Error("Function not implemented.");
}
