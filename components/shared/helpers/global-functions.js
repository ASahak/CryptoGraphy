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
export function __getRandomColor() {
    let letters = '012345'.split('');
    let color = '#';
    color += letters[Math.round(Math.random() * 5)];
    letters = '0123456789ABCDEF'.split('');
    for (let i = 0; i < 5; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

export function __detectCryptIcon (msg) {
    return msg.message === msg.key && msg.message === msg.encryptType && msg.message === msg.decryptedMsg && msg.message === msg.encryptType
}