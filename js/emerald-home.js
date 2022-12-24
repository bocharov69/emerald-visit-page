//// block2 progress bar
const progress_btns = document.querySelectorAll('.block2__progress-btn');
const progress_bar = document.querySelector('.block2__progress-line-bar');
const tabs_wrapper = document.querySelectorAll('.block2__tab');
if (progress_btns.length > 0) {
    progress_btns.forEach(element => {
        element.addEventListener("click", event => {
            progress_btns.forEach(e => {
                if (e.classList.contains('active')) {
                    e.classList.remove('active');
                }
            });
            tabs_wrapper.forEach(e => {
                if (e.classList.contains('active')) {
                    e.classList.remove('active');
                }
            });
            event.target.classList.add('active');
            switch (event.target.id) {
                case 'block2__progress1':
                    progress_bar.style.width = 'calc(20% + 10px)';
                    tabs_wrapper[0].classList.add('active');
                    break;
                case 'block2__progress2':
                    progress_bar.style.width = 'calc(40% + 10px)';
                    tabs_wrapper[1].classList.add('active');
                    break;
                case 'block2__progress3':
                    progress_bar.style.width = 'calc(60% + 10px)';
                    tabs_wrapper[2].classList.add('active');
                    break;
                case 'block2__progress4':
                    progress_bar.style.width = '100%';
                    tabs_wrapper[3].classList.add('active');
                    break;
                default:
                    progress_bar.style.width = '0px';
            }
        });
    });
}
