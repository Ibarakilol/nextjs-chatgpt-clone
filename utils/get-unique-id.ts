export const getUniqueId = () => `id${(Math.random() * Date.now()).toString(16).replace('.', '')}`;
