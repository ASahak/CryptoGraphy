import { __SET_LOGGED } from 'store/saga';


export function __bodyLoading (isLoading, isLogged = false) {
    if (typeof window !== 'undefined') {
        const _body = document.body;
        if (!isLoading) {
            __SET_LOGGED(isLogged).next();
            _body.classList.add('still-animation-leave');
            setTimeout(() => {
                _body.classList.remove('still-loading');
                _body.classList.remove('still-animation-leave');
            }, 500);
        } else  _body.classList.add('still-loading')
    }
}