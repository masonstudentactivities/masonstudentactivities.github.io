window.addEventListener('load', function() {
    function checkBootstrap(){
        if(bootstrap){
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })
        } else{
            setTimeout(checkBootstrap,50);
        }
    }
    checkBootstrap();
});