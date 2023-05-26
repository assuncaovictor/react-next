import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import Link from "next/link";
import React from "react";

const urls: { name: string; path: string }[] = [
	{
		name: "Expolorando o framework",
		path: "/explore/home",
	},
];

const PageNavigator = () => {
	return (
		<Box position="absolute" bottom={8} right={8}>
			<SpeedDial
				ariaLabel="Navegação entre sessões do curso"
				sx={{ position: "fixed", bottom: 24, right: 24 }}
				icon={<SpeedDialIcon />}
			>
				{urls.map(({ name, path }) => (
					<SpeedDialAction
						key={name}
						icon={
							<Link href={path} passHref>
								Primeiro projeto
							</Link>
						}
						tooltipTitle={name}
					/>
				))}
			</SpeedDial>
		</Box>
	);
};

export default PageNavigator;
