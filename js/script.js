new fullpage('#fullpage', {
    navigation: true,
    onLeave: (origin,destination, direction) =>{
        const section = destination.item;
        const tl = new TimelineMax({delay: 0.5});
        const title = section.querySelector("h1");
        const headerDescription = document.querySelector(".s1-p");
        tl.fromTo(title, 0.5, {y: "50", opacity: 0}, {y:0, opacity: 1});
    if(destination.index === 0){


    tl.fromTo(headerDescription, 0.5, {y: "50", opacity: 0}, {y:0, opacity: 1});

    }
    else if(destination.index === 1){
    const chairs = document.querySelectorAll(".chair");
    const description = document.querySelector(".description");

    tl.fromTo(chairs, 0.7, {x: "100%"}, {x: "-40%"})
    .fromTo(description, 0.5, {y: "50", opacity: 0}, {y:0, opacity: 1})
    .fromTo(chairs[0], 1, {opacity: 1},{opacity: 1})
    .fromTo(chairs[1], 1, {opacity: 0},{opacity: 1})
    .fromTo(chairs[2], 1, {opacity: 0},{opacity: 1})
    }
    else if(destination.index === 2){

    const closet = document.querySelector(".closet");
    const closetDescription = document.querySelector(".description-closet")

    tl.fromTo(closet, 0.7, {x:"-100%", opacity: 0}, {x: "-70%", opacity: 1})
    .fromTo(closetDescription, 0.5, {y: "50", opacity: 0}, {y:0, opacity: 1})
    }
    else if(destination.index === 3){

        const sofa = document.querySelector(".sofa");
        const sofaDescription = document.querySelector(".description-sofa");

        tl.fromTo(sofa, 0.7, {x: "100%"}, {x: "-40%"})
        .fromTo(sofaDescription, 0.5, {y: "50", opacity: 0}, {y:0, opacity: 1})
        }
    }

    });
