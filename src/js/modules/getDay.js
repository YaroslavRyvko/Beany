export function initGetDay() {
    let dayFields = document.querySelectorAll('.current-day');
    dayFields.forEach(el=>{
        el.textContent = new Date().toLocaleString('en-us', {  weekday: 'long' });
    })
}
