import { SET_LOGGED } from 'store/saga';


export function bodyLoading (isLoading, isLogged) {
    if (typeof window !== 'undefined') {
        const _body = document.body;
        if (!isLoading) {
            SET_LOGGED(isLogged).next();
            _body.classList.add('still-animation-leave');
            setTimeout(() => {
                _body.classList.remove('still-loading');
                _body.classList.remove('still-animation-leave');
            }, 500);
        } else  _body.classList.add('still-loading')
    }
}