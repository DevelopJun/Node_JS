const Sequelize = require('sequelize');
const User = require('./user');
const Comment = require('./comment');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

// db 라는 객체 안에 User와 Comment 모델을 담아 두었다. 앞으로 db객체를 require 하여 User와 Comment 모델에 접근할 수 있다.
db.User = User; 
db.Comment = Comment;

User.init(sequelize); // 이건 각각의 static init 메서드 호출하는 것임. init이 실행되어야 테이블이 모델로 연결된다. 
Comment.init(sequelize);

User.associate(db); // 이것도 미리 설정해놓는거임. 
Comment.associate(db);

module.exports = db;
