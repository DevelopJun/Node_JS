const mongoose = require('mongoose');





const db = mongoose.connection;

const connect = () => {
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }
  mongoose.connect('mongodb://pogba:pogba123@localhost:27017/admin', {
    dbName: 'nodejs',
    // 여기서 책에는 userNewUrlParser 이 부분은 mongoose6부터 안입력해도 자동으로 default 값으로 되어 있어서, 적으면 오류난다.
  }, (error) => {
    if (error) {
      console.log('몽고디비 연결 에러', error);
    } else {
      console.log('몽고디비 연결 성공');
    }
  });
};

mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

module.exports = connect;