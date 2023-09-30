import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";

export default function DocsPage() {
	return (
		<div>
			<h1 className={title()}>Page is not ready.</h1>
			<br></br>
			<Link color="secondary" href="/">Go Back</Link>
		</div>
	);
}
