import {normalize, schema} from 'normalizr';

function normalizeCourseList(data) {
    let normData = {
        data: {},
        list: [],
    };

    normData.data = data.reduce((result, item) => {
        result[item.id] = item;
        normData.list.push(item.id);
        return result;
    }, {});

    return normData;
}

export {
    normalizeCourseList,
};