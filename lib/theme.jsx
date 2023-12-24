import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary_10: "#44B649",
    primary_20: "#338937",
    primary_30: "#ECF8ED",
    primary_40: "#296D2C",

    neutral_20: "#ffffff",
    neutral_30: "#595959",
    neutral_40: "#616161",
    neutral_50: "#8F8F8F",

    gray_1: "#333333",
    gray_2: "#393939",
    gray_3: "#1f1f1f",
    gray_4: "#344054",
    gray_5: "#D0D5DD",
    gray_6: "#666",

    light_1: "#E6E6E6",
    light_2: "#F2F3F4",
    light_3: "#EAECF0",
    light_4: "#F6F8FF",
    light_5: "#737373",
    light_6: "#667085",
    light_7: "#F7F7F7",

    dark_1: "#222",
    dark_2: "#000000",
};

export const theme = extendTheme({ colors });
