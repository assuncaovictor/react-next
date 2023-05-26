import Link from "next/link";
import React from "react";

const ContactPage = () => {
	return (
		<div>
			<h1>ContactPage</h1>
			<Link href="/home" passHref>
				Home
			</Link>
		</div>
	);
};

export default ContactPage;
