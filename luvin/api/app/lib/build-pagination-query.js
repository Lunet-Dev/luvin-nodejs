export default (queryBuilder, limit = 50, page = 1) => {
  return queryBuilder
    .limit(parseInt(limit, 10))
    .skip((parseInt(page, 10) - 1) * parseInt(limit, 10));
};
