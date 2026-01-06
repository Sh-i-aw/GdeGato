import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
    // `requestLocale` is resolved from the URL/middleware (and may be undefined/invalid)
    const locale = await requestLocale;

    const safeLocale = locale === 'es' || locale === 'en' ? locale : 'en';

    return {
        locale: safeLocale,
        messages: (await import(`../messages/${safeLocale}.json`)).default
    };
});