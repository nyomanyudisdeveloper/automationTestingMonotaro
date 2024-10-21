export const generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 11);
    return `test_${randomString}@example.com`;
}