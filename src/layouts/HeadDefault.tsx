export { HeadDefault };

import { ColorSchemeScript } from "@mantine/core";
import logoUrl from "../assets/logo.svg";

function HeadDefault() {
	return (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="Demo showcasing Vike + React" />
			<link rel="icon" href={logoUrl} />
			<ColorSchemeScript />
		</>
	);
}
