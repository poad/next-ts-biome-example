"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import StyledJsxRegistry from "./registry";
import theme from "./theme";
import "./layout.css";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<StyledJsxRegistry>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						{children}
					</ThemeProvider>
				</StyledJsxRegistry>
			</body>
		</html>
	);
}
