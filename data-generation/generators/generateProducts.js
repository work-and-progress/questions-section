/* eslint-disable camelcase */

const fs = require('file-system');

const writeUsers = fs.createWriteStream('csv/users.csv');
writeUsers.write('product_id\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 100; // how many units do you want? End goal is 10 mill
  let product_id = 0;

  function write() {
    let ok = true;
    do {
      i -= 1;
      product_id += 1;

      const data = `${product_id}\n`;
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
