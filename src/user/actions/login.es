import {login} from 'src/profile/index.es';

function guestLogin(data, history) {
    return () => {
        (async () => {
            try {
                const isLogin = await login(data);
                if (isLogin) {
                    history.push('/teaching');
                }
            } catch (e) {
                console.error(e);
            }
        })();
    }
}

export {
    guestLogin,
};