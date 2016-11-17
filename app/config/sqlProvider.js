const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  users: {
    all: sql('./sql/user/all.sql'),
    find: sql('./sql/user/find.sql'),
    create: sql('./sql/user/create.sql'),
    delete: sql('./sql/user/delete.sql'),
  },
  expedias: {
    all: sql('./sql/expedia/all.sql'),
    find: sql('./sql/expedia/find.sql'),
    create: sql('./sql/expedia/create.sql'),
    delete: sql('./sql/expedia/delete.sql'),
  },
};

module.exports = sqlProvider;
