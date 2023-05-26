import React from "react";
import type { AppProps } from "next/app";
import { Container, Stack } from "@mui/material";
import PageNavigator from "@src/components/PageNavigator";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Stack width="100%" minHeight="100dvh" {...pageProps}>
			<Container sx={{ minHeight: "100%" }}>
				<Stack width="100%" position="relative" minHeight="100%">
					<Component {...pageProps} />
					<PageNavigator />
				</Stack>
			</Container>
		</Stack>
	);
};

export default MyApp;
