import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
    //TODO:  static, will change later
    const locale = 'es';

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});