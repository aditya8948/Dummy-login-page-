const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    messageDiv.innerText = '';
    messageDiv.className = '';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userDetails = {
        email: email,
        password: password
    };

    try {
        const response = await axios.post('http://localhost:3000/user/login', userDetails);
        if (response.status === 200) {
            messageDiv.className = 'success';
            messageDiv.innerText = response.data.message;
            alert(response.data.message);
        }
    } catch (err) {
        messageDiv.className = 'error';
        if (err.response) {
            messageDiv.innerText = err.response.data.message;
            alert(err.response.data.message);
        } else {
            messageDiv.innerText = `Error: ${err.message}`;
        }
    }
});
