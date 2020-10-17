/* eslint-disable camelcase */
const faker = require('faker');
const fs = require('file-system');

const writeUsers = fs.createWriteStream('../users.csv');
writeUsers.write('user_id,username,email,location\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 100; // how many units do you want? End goal is 10 mill

  function write() {
    let ok = true;
    do {
      i -= 1;

      const user_id = faker.random.uuid();
      let username = faker.internet.userName();
      username = username.toLowerCase();
      let email = faker.internet.email();
      email = email.toLowerCase();
      const location = `${faker.address.city()}, ${faker.address.stateAbbr()}`;

      const data = `${user_id},${username},${email},"${location}"\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

/* -------------------- Invocation ------------------- */
writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
