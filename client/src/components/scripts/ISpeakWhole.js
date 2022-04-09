
let LanguageToShow = 0;

let ShouldRollAutomatically = true;

const FindScrollDirection = (event) => {
    if (event.wheelDelta) {
        return event.wheelDelta > 0
    }
    return event.deltaY < 0;
}

const AutomaticRoll = () => {

    if (ShouldRollAutomatically === true){
    
        LanguageToShow === 6 ? LanguageToShow = 0 : LanguageToShow+=1;
    
        document.getElementById('scrollable').scrollTo({
            top: LanguageToShow * 70,
            behavior: 'smooth'
        })
    }

}

var RollInterval = setInterval(
    AutomaticRoll,
    3000
)

const Roll = (event) => {

    ShouldRollAutomatically = false;

    if (FindScrollDirection(event)) {
        /* SCROLLING UP */
        LanguageToShow === 0 ? LanguageToShow = 6 : LanguageToShow-=1
    } else {
        /* SCROLLING DOWN */
        LanguageToShow === 6 ? LanguageToShow = 0 : LanguageToShow+=1
    }

    document.getElementById('scrollable').scrollTo({
        top: LanguageToShow * 70,
        behavior: 'smooth'
    })

    setTimeout(
        () => {
            ShouldRollAutomatically = true
        },
        3000
    )

}