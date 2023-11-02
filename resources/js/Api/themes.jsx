import client from './client';

export const getThemes = () => {
    return client('/api/themes');
};

export const getThemesAdvices = () => {
    return client('/api/advices');
}
export const addThemeResult = ({theme_name, session_id, number_nu, number_straks, number_later}) => {
    return client('/api/add/theme', {
        body: { theme_name, session_id, number_nu, number_straks,number_later }
    });
}
