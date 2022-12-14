<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light"> <img src="../assets/images/Logo.webp" alt="" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"> <span
                class="navbar-toggler-icon"></span> </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link"><RouterLink to="/">Home</RouterLink></a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link"><RouterLink to="/about">Profile</RouterLink></a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link"><RouterLink to="/character">Character</RouterLink></a> 
                </li>
                <li class="nav-item">
                    <a class="nav-link"><RouterLink to="/album">Discography</RouterLink></a> 
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            </form>
        </div>
    </nav>
    <br>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>