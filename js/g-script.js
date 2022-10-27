import { parseJwt } from '../main';

const clientId = `${import.meta.env.VITE_GOOGLE_CLIENT_ID}`;

function handleCredentialResponse(response) {
	const data = parseJwt(response.credential);

	localStorage.setItem('@social-login:user', JSON.stringify(data));

	window.location.href = '/home.html';
}
window.onload = function () {
	google.accounts.id.initialize({
		client_id: clientId,
		callback: handleCredentialResponse,
	});
	google.accounts.id.renderButton(
		document.getElementById('buttonDiv'),
		{
			theme: 'outline',
			size: 'large',
			type: 'standard',
			shape: 'rectangular',
			text: 'signin_with',
			logo_alignment: 'center',
			width: '336',
		}, // customization attributes
	);
	google.accounts.id.prompt(); // also display the One Tap dialog
};
