const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const hash = (password) => {
   return bcrypt.hashSync(password, salt);
}
const compare = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}

module.exports = { hash, compare }
