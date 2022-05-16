import { registerCallApi } from "../api/talkToUs";

export const useTalkToUs = () => {
	const registerCall = async ({ description }) => {
		return await registerCallApi({ description: description });
	};

	return { registerCall };
};
