export function bodyLoading (isLoading) {
    if (typeof window !== 'undefined') {
        const _body = document.body;
        if (!isLoading) {
            _body.classList.add('still-animation-leave');
            setTimeout(() => {
                _body.classList.remove('still-loading');
                _body.classList.remove('still-animation-leave');
            }, 500);
        } else  _body.classList.add('still-loading')
    }
}