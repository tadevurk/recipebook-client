<template>
    <!-- Page Content -->
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4">
                <!--Add sidebar here-->
                <div class="sidebar bg-light p-3 mb-3">
                    <!-- Add a profile picture here -->
                    <img src="../components/images/photoAboutMe.jpg" alt="Profile Picture" class="img-fluid mb-3">
                    <h3>Basic Information</h3>
                    <ul class="list-unstyled">
                        <li>Name: Vedat</li>
                        <li>Surname: Türk</li>
                        <li>Student Number: 683343</li>
                        <li>School: InHolland University and Applied Sciences</li>
                        <li>Class: IT/2B</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-8">
                <h1 class="text-center mb-5">About Me</h1>
                <!-- Add a short bio or introduction here -->
                <p> Hello, my name is Vedat, and I am currently in my second year at InHolland University and Applied
                    Sciences, where I am studying software development and web design. I have always been passionate about
                    creating and developing innovative software systems and websites, and in my spare time, I enjoy cooking
                    and trying out new recipes.<br> <br>
                    One of my passions is sharing my culinary creations with others, which is why I decided to create this
                    website. On this site, you will find a collection of recipes that I have found and tried from various
                    sources around the internet. I have also included some of my own original recipes that I have developed
                    over the years. <br> <br>
                    I hope that you will find something on this site that interests you and that you will enjoy my content.
                    Thank you for taking the time to visit my site and I hope you come back again soon!</p>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Aboutme",
}
</script>