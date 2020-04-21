import { createSelector } from 'reselect';
import {
    _EVERY_PAGE_LIMIT_MESSAGES
} from 'components/shared/helpers/constants';

const _messagesData = state => state;
const _everyPage = _EVERY_PAGE_LIMIT_MESSAGES;

export const __getUserMessages = createSelector(
    _messagesData,
    ({data, page}) => {
        let returnedData = [];
        for (let i = data.length - 1; i > data.length - (page * _everyPage) - 1; i--) {
            if (!data[i]) break;
            returnedData.unshift(data[i])
        }
        return returnedData;
    }
);
