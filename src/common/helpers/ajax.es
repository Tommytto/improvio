function convertToFormData(data) {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
    });
    return formData;
}

export {
    convertToFormData,
};