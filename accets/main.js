var btn = document.querySelector('.schedule h4')
var overlay = document.querySelector('.overlay')
var schedule = document.querySelector('.schedule-detail')
var close = document.querySelector('.icon-close')
var lich = document.querySelector('.schedule-detail')
var scroll = document.querySelector('.schedule-detail-body')
var scroll_mobile = document.querySelector('.schedule-detail-body-mobile')
var body = document.querySelector('body')

btn.onclick = function(){
    overlay.style.display = 'block'
    lich.style.transform = 'translateY(0%)'
    body.style.overflow = 'hidden'
}

close.onclick = function() {
    overlay.style.display = 'none'
    // schedule.style.display = 'none'
    lich.style.transform = 'translateY(150%)'
    scroll.scrollTo(0, 1);
    scroll_mobile.scrollTo(0, 1);
    body.style.overflow = 'unset'
}


document.onkeyup = function(e) {
    switch(e.which) {
        case 27: //khi bấm phím esc thì:
            overlay.style.display = 'none'
            // schedule.style.display = 'none'
            lich.style.transform = 'translateY(150%)'
            scroll.scrollTo(0, 1);
            body.style.overflow = 'unset'
            break
     }
}


//************** */
const top_goal_click = document.querySelector('.top_goal')
const close_topGoal = document.querySelector('.close-top_goal')
const top_goal = document.querySelector('.top_goal-detail')

top_goal_click.onclick = () => {
    overlay.style.display = 'block'
    top_goal.style.transform = 'translateY(-50%)'
    body.style.overflow = 'hidden'
}

close_topGoal.onclick = () => {
    overlay.style.display = 'none'
    top_goal.style.transform = 'translateY(150%)'
    body.style.overflow = 'unset'
}

document.onkeyup = function(e) {
    switch(e.which) {
        case 27:
            overlay.style.display = 'none'
            top_goal.style.transform = 'translateY(150%)'
            body.style.overflow = 'unset'
            break
     }
}


