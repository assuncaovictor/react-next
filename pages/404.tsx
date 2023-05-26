import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
	const router = useRouter();

	useEffect(() => {
		// Redirecionar para a página desejada
		router.push("/");
	}, []);

	return null; // ou adicione uma mensagem para exibir na página
};

export default NotFoundPage;
