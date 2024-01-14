import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Hero from "../HomePage/Hero";

import ContactLabel from "../HomePage/ContactLabel";
import Footer from "../common/Footer";

import { HeroData } from "@/lib/data";
import Faq from "../HomePage/Faq";
import Container from "../common/Container";

const Policies = () => {
    return (
        <Box>
            <Hero heroData={HeroData.policies} />
            <Container>
                <Stack
                    my={["2rem", "4rem", "6rem"]}
                    maxW="45rem"
                    mx="auto"
                    spacing="3rem"
                >
                    <Wapper title={"1. Introduction"}>
                        <Box>
                            <Text>
                                {`This Privacy Policy (the "Policy") describes how
                            Sprinters Technologies ("Company", "we", "us", or
                            "our") collects, uses, and discloses your personal
                            information when you visit or use our website, (the "Website"). It
                            alsodescribes the categories of information we
                            collect, and our processes and policiesregarding the
                            use and protection of that information. We collect
                            information to provideour services, which include
                            creation and maintenance of technological
                            applications andsoftwares, and to perform other
                            functions related to those services (collectively,
                            the“Services”).`}
                            </Text>
                            <Text>
                                We respect the privacy of the information that
                                is entrusted to us. We also respect the rights
                                of those with whom we interact. This Privacy
                                Policy is intended to provide transparency about
                                our data collection, security, and sharing. We
                                urge you to read this Privacy Policy so that you
                                understand our commitment to you and your
                                privacy, and how you can participate in that
                                commitment.
                            </Text>
                        </Box>
                    </Wapper>
                    <Wapper title={"2. Consent"}>
                        <Text>
                            This Privacy Policy applies to both the online and
                            offline collection of information by Sprinters
                            Technologies. By visiting our website or using any
                            of our services, you acknowledge that you consent to
                            our collection, use, disclosure, transfer and
                            storage of information as set forth in this Privacy
                            Policy.
                        </Text>
                    </Wapper>
                    <Wapper title={"3. The Information That We Collect"}>
                        <Text mt=".5rem">
                            We collect information you voluntarily provide to
                            us. This includes information you provide to us when
                            you sign up for a newsletter, subscribe to our blog,
                            or otherwise communicate with us. The information we
                            collect includes the following: personal
                            identifiers, such as name, address, date of birth,
                            gender, and contact information; and commercial
                            information such as service provided history.
                        </Text>

                        <Text mt=".5rem">
                            We may also automatically collect information that
                            is related to you but that does not personally
                            identify you when you visit our Website. These are
                            information that could personally identify you in
                            its original form, but which we have modified,
                            possibly by aggregating, anonymizing or
                            de-identifying such information. This includes
                            information about your IP address, browser type,
                            operating system, and referral URL. We may also
                            collect information about how you use our Website,
                            such as the pages you visit, the links you click,
                            and any search engine you may have used to locate
                            the site. We use this information to help diagnose
                            problems with our server, administer our website,
                            and compile broad statistical data. In addition, we
                            gather certain navigational information about where
                            you go on our website. This information enables us
                            to determine which areas of our website are most
                            frequently visited and helps us to tailor the sites
                            to the needs and interests of our online visitors.
                            Such information is gathered by us in the aggregate
                            and is not associated with a specific individual.
                        </Text>

                        <Text mt=".5rem">
                            Sprinters Technologies also collects information you
                            provide to us (i.e., name, e-mail address, etc.)
                            when you interact with us either online or in
                            person. You provide some of this information
                            directly, and we get some of it by collecting
                            information about your interactions and experiences
                            with our services. The information we collect
                            depends on the context of your interactions with
                            Sprinters Technologies and the choices you make,
                            including your browser privacy settings and the
                            products and features you use. Sprinters
                            Technologies also uses Google Analytics, which
                            utilizes cookies to track performance, enabling us
                            to enhance the customer experience on our website
                        </Text>

                        <Text mt=".5rem">
                            In addition, when you download or use our
                            mobile-device applications, or access our
                            mobile-optimized website, we may receive information
                            about your mobile device, including a unique
                            identifier for your device.
                        </Text>
                        <Text mt=".5rem">
                            Finally, we may collect information about you from
                            third parties to help us correct or supplement our
                            records, improve the quality or personalization of
                            our tech services to you, and prevent or detect
                            fraud. We work closely with third parties,
                            collecting demographic and other information to
                            constantly improve our products and services and may
                            receive information about you from them
                        </Text>
                    </Wapper>
                    <Wapper title={"4. How We Use Your Information"}>
                        <Text mt=".5rem">
                            We use your personal information to provide you with
                            our services, such as providing you with access to
                            our website and content, and responding to your
                            inquiries; to improve our services, such as by
                            analyzing website traffic and user behavior; to send
                            you marketing communications, such as newsletters
                            and promotional emails; and to comply with our legal
                            obligations such as law enforcement requests.
                        </Text>
                        <Text mt=".5rem">
                            Understanding the importance of your privacy, we
                            take the confidentiality, integrity, and
                            availability of your information seriously. To
                            ensure the privacy and security of your information,
                            we take reasonable physical, electronic, and
                            managerial measures to safeguard and secure your
                            information.
                        </Text>
                        <Text mt=".5rem">
                            While we strive to ensure that your data is always
                            protected, no data transmission can be guaranteed to
                            be 100% secure. Consequently, we cannot ensure or
                            warrant the security of any information you transmit
                            to us and you understand that any information that
                            you transfer to us is done at your own risk. By
                            using our services or providing your information to
                            us, you agree that we can communicate with you
                            regarding security, privacy, and administrative
                            issues relating to your use of our Services.
                        </Text>
                    </Wapper>

                    <Wapper title={"5. How We Share Your Information"}>
                        <Text mt=".5rem">
                            We understand the importance of your privacy, thus,
                            we disseminate your information to only third
                            parties described below;
                        </Text>
                        <Text mt=".5rem">
                            1. Law enforcement and government agencies
                            conducting an investigation, or other third parties
                            if we are required to do so by law. This is in order
                            to, verify or enforce compliance with the policies
                            governing our Services and applicable laws; to
                            protect the legal rights of Sprinters Technologies,
                            its affiliates, or employees, agents, and
                            contractors; to protect the safety and security of
                            Sprinters Technologies’s customers; and to protect
                            the rights, property, and safety of Sprinters
                            Technologies;
                        </Text>
                        <Text mt=".5rem">
                            2. Select Business Partners such as retailers and
                            other companies at various times that we use to help
                            us provide our services, such as banking
                            institutions, website hosting companies and email
                            marketing service providers;
                        </Text>
                        <Text mt=".5rem">
                            3. Agents, companies and individuals that we use to
                            perform certain functions and services on our
                            behalf. Examples include administering e-mail
                            services and running special promotions. Those
                            parties only have our permission to access and use
                            the information needed to perform these functions,
                            and may not use orstore the information for any
                            other purpose; and
                        </Text>

                        <Text mt=".5rem">
                            4. In the instance that we sell or transfer all or a
                            portion of our business assets, consumer information
                            may be one of the assets that is transferred as part
                            of the transaction.
                        </Text>
                    </Wapper>

                    <Wapper title={"6. Your Choices"}>
                        <Text>
                            You can unsubscribe from our marketing
                            communications by clicking on the “unsubscribe” link
                            in any marketing email you receive from us. You can
                            also request access to your personal information,
                            request that we correct or delete your personal
                            information, or object to the processing of your
                            personal information by contacting us at{" "}
                            <Text
                                as="a"
                                href="mailto:sprinters.techagency@gmail.com"
                                fontWeight="700"
                            >
                                sprinters.techagency@gmail.com
                            </Text>
                            .
                        </Text>
                    </Wapper>
                    <Wapper title={"7. Data Privacy & Security"}>
                        <Text>
                            We take reasonable steps to protect your personal
                            information from unauthorized access, use,
                            disclosure, alteration, or destruction. We also
                            respect the privacy of childrenof all ages and in
                            particular recognize the sensitivity of the
                            information of minors under the age of 13, thus, we
                            do not knowingly collect their information. In the
                            event that we learn that a minor has provided their
                            information to us, we will delete such information
                            as soon as possible.
                        </Text>
                    </Wapper>
                    <Wapper title={"8. Changes to This Policy"}>
                        <Text>
                            We may update this Policy from time to time. Such
                            changes will be effective immediately upon
                            publication unless otherwise specified. We will
                            notify you of any material changes to this Policy by
                            posting the updated Policy on our Website and by
                            sending you an email.
                            {"You're"} encouraged to periodically review this
                            Privacy Policy to keep up to date on how we handle
                            your information.
                        </Text>
                    </Wapper>
                    <Wapper title={"9. Contact Us"}>
                        <Text>
                            If you have any questions about this Policy, please
                            contact us at{" "}
                            <Text
                                as="a"
                                href="mailto:sprinters.techagency@gmail.com"
                                fontWeight="700"
                            >
                                sprinters.techagency@gmail.com
                            </Text>
                            .
                        </Text>
                    </Wapper>
                </Stack>
            </Container>
            <Footer />
        </Box>
    );
};

export default Policies;

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
