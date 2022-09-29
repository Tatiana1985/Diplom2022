let colors = {
    color1: "rgba(255,255,255, 0.3)",
    color2: "rgba(222,184,142,0.3)",
    color3: "rgba(232,248,255,0.3)",
    color4: "rgba(135,143,145,0.3)"
    };
    let options = {
        alphaSpeed: 10,
        alphaVariance: 1,
        color: [colors.color1, colors.color2, colors.color3, colors.color4],
        composition: "source-over",
        count: 250,
        direction: 161,
        float: 1.75,
        glow: 0,
        imageUrl: [
            "/static/img/cake.png",
        ],
        maxAlpha: 2,
        maxSize: 100,
        minAlpha: -0.2,
        minSize: 4,
        parallax: 1.75,
        rotation: 0.5,
        shape: "image",
        speed: 3,
        style: "fill",
        twinkle: false,
        xVariance: 10,
        yVariance: 0,
    };
    window.onload = function() {
        initSparticles();
    }
    window.initSparticles = function() {
        var $main = document.querySelector('.falling');
        window.mySparticles = new sparticles.Sparticles($main, options);
    };