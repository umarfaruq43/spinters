import {
    Box,
    Link,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Hero from "../HomePage/Hero";

import Footer from "../common/Footer";

import { HeroData } from "@/lib/data";
import Container from "../common/Container";

const Terms = () => {
    return (
        <Box>
            <Hero heroData={HeroData.terms} />

            <Container>
                <Stack
                    my={["2rem", "4rem", "6rem"]}
                    maxW="45rem"
                    mx="auto"
                    spacing="3rem"
                >
                    <Wapper title={"1. Acceptance of Terms"}>
                        <Text>
                            By accessing or using the Sprinters Technologies
                            website{" "}
                            <Link
                                href="https://sprinterstechnologies.com/"
                                color="primary_20"
                            >
                                {" "}
                                www.sprinterstechnologies.com
                            </Link>
                            , you agree to comply with and be bound by these
                            Terms of Use. If you do not agree to these terms,
                            please do not use the website.
                        </Text>
                    </Wapper>

                    <Wapper title="2. Use of the Website">
                        <Text>
                            By accessing and using this website, you agree to
                            comply with and be bound by theseTerms of Use. You
                            agree to use the website only for lawful purposes
                            and in a manner consistent with all applicable laws
                            and regulations. Sprinters Technologies reserves the
                            right to refuse service, or restrict access at its
                            discretion. If you do not agree with any part of
                            these terms, you may not use the website. You are
                            prohibited from engaging in any activities that
                            violate laws, infringe on the rights of others, or
                            disrupt the functionality of the website. To access
                            this website, you do not need to create a user
                            account. Users must be at least 13 years old to
                            access our website and use our services. By using
                            the website, you affirm that you meet this
                            eligibility requirement.
                        </Text>
                    </Wapper>

                    <Wapper title={"3. Intellectual Property"}>
                        <Box>
                            <Text fontWeight="700" mb=".5rem">
                                3.1 Ownership
                            </Text>
                            <Text>
                                All content on the Website, including but not
                                limited to text, graphics, logos, images, and
                                software, is the property of Sprinters
                                Technologies and is protected by intellectual
                                property laws.
                            </Text>
                        </Box>

                        <Box mt="1rem">
                            <Text fontWeight="700" mb=".5rem">
                                3.2 License
                            </Text>
                            <Text>
                                You are granted a limited, revocable,
                                non-exclusive license to access and use the
                                Website for personal and non-commercial
                                purposes. Any unauthorized use may result in
                                legal action.
                            </Text>
                        </Box>
                    </Wapper>

                    <Wapper title={"4. User Content"}>
                        <Box>
                            <Text fontWeight="700" mb=".5rem">
                                4.1 Submission
                            </Text>
                            <Text>
                                You retain ownership of any content you submit
                                to the website. However, by posting content, you
                                grant Sprinters Technologies a worldwide,
                                irrevocable, non-exclusive, royalty-free license
                                to use, reproduce, modify, publish, and
                                distribute such content.
                            </Text>
                        </Box>

                        <Box mt="1rem">
                            <Text fontWeight="700" mb=".5rem">
                                4.2 Responsibility
                            </Text>
                            <Text>
                                You are solely responsible for the content you
                                submit, and it must not violate any third-party
                                rights or applicable laws. Sprinters
                                Technologies reserves the right to remove or
                                modify user content at its discretion.
                            </Text>
                        </Box>
                    </Wapper>
                    <Wapper title={"5. Privacy"}>
                        <Box>
                            <Text>
                                Our Privacy Policy which you can review{" "}
                                <Text
                                    as="a"
                                    href="/policies"
                                    color="primary_10"
                                    textDecor={"underline"}
                                >
                                    here
                                </Text>{" "}
                                outlines how we collect, use, disclose and
                                protect your personal information. By using the
                                website, you agree to the terms outlined and
                                practices described in the Privacy Policy.
                            </Text>
                        </Box>
                    </Wapper>
                    <Wapper title={"6. Disclaimer of Warranties"}>
                        <Box>
                            <Text>
                                This website is provided {"as is"} without any
                                warranties, expressed or implied. We do not
                                guarantee the accuracy, completeness, or
                                reliability of the content.
                            </Text>
                            <Text mt="1rem">
                                Sprinters Technologies are not liable for any
                                damages arising from your use or inability to
                                use the website. This includes direct, indirect,
                                incidental, consequential, or punitive damages.
                            </Text>
                        </Box>
                    </Wapper>
                    <Wapper title={"7. Indemnification"}>
                        <Text>
                            You agree to indemnify and hold us harmless from any
                            claims, losses, or damages, including legal fees,
                            resulting from your violation of these Terms of Use.
                        </Text>
                    </Wapper>
                    <Wapper title={"8. Termination"}>
                        <Text>
                            Sprinters Technologies reserves the right to
                            terminate or suspend your access to the website
                            without prior notice for any reason, including but
                            not limited to a breach of these Terms of Use. You
                            may also terminate your access at any time as you so
                            wish. Upon termination, all provisions of these
                            Terms will survive.
                        </Text>
                    </Wapper>
                    <Wapper title={"9. Governing Law and Jurisdiction"}>
                        <Text>
                            These Terms of Use are governed by and construed in
                            accordance with the laws of Nigeria. Any disputes
                            arising under or in connection with these terms
                            shall be subject to the exclusive jurisdiction of
                            the courts in Lagos, Nigeria.
                        </Text>
                    </Wapper>
                    <Wapper title={"10. Changes to Terms"}>
                        <Text>
                            Sprinters Technologies reserves the right to update
                            or modify these Terms of Use at any time. Continued
                            use of the Website after such changes constitutes
                            acceptance of the modified terms.
                        </Text>
                    </Wapper>
                    <Wapper title={"11. Contact Information"}>
                        <Text>
                            If you have any questions or concerns regarding
                            these Terms of Use, you may contact Sprinters
                            Technologies at the following:
                        </Text>
                        <UnorderedList spacing={".5rem"} mt="1rem">
                            <ListItem>
                                Email:{" "}
                                <Link
                                    href="mailto:info@sprinterstechnologies.com"
                                    color={"primary_20"}
                                >
                                    info@sprinterstechnologies.com
                                </Link>
                            </ListItem>
                            <ListItem>
                                Address: 54, Moleye Street, Alagomeji, Yaba,
                                Lagos.
                            </ListItem>
                            <ListItem>Phone: +234 (0) 911 022 7406</ListItem>
                        </UnorderedList>
                    </Wapper>
                    <Wapper title={"12. Effective Date"}>
                        <Text>
                            This Website term of use is effective from the 30th
                            Day of November, 2023.
                        </Text>
                    </Wapper>
                </Stack>
            </Container>
            <Footer />
        </Box>
    );
};

export default Terms;

const Wapper = ({ title, children }) => {
    return (
        <Box>
            <Text fontSize="1.5rem" fontWeight="700" mb=".5rem">
                {title}
            </Text>
            <Box fontSize={["1rem", null, "1.125rem"]} fontWeight="400">
                {children}
            </Box>
        </Box>
    );
};
