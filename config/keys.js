const mongoUser = "dbuser";
const mongoPass = "z1xkrefNmYa3gMfQ";
const mongoCreds = `${mongoUser}:${mongoPass}`;
const mongoDbName = "test";

module.exports = {
  mongoURI: `mongodb+srv://${mongoCreds}@cluster0.r4diu.mongodb.net/${mongoDbName}?retryWrites=true&w=majority`,
};
