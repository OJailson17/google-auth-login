export function renderUser() {
	const jsonData = localStorage.getItem('@social-login:user');
	const data = JSON.parse(jsonData);

	console.log(data);

	document.querySelector('#picture').src = data.picture;
	document.querySelector('#name').textContent = data.name;
	document.querySelector('#email').textContent = data.email;
}

window.onload = () => renderUser();
