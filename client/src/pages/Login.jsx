const Login = () => {
    return (
        <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial=scale=1.0">
    

    <title>Login Washer Website</title>
    <link rel="stylesheet" href="style.css">
    </head>
<body>
<div class="wrapper">
    <form action="">
        <h1>Login</h1>
       <div class="input-box">
        <input type="text" placeholder="Username"required>
        
        </div>

        <div class="input-box">
            <input type="password" placeholder="Password"required>
           </div>

        <div class="remember-forgot">
        <label><input type="checkbox">Remember me</label>
        <a href="#">Forgot Password?</a>
   </div>

<button type="submit" class="btn">Login</button>

       <div class="register-link">
        <p>Don't have an account? <a 
            href="#">Register</a> </p>
       
    </div>

    </form>
    </div>
</body>
</html>

    );
};
export default Login