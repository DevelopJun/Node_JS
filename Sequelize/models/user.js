const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    // 메서드 2개 존재, 
    // init은 테이블에 대한 설정 
    static init(sequelize){
        return super.init({
            name:{
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.INTEGER.UNSIGNED,
                allowNull: false,
            },
            married: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            created_at:{
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
        },{
            sequelize,
            timestamps: false, // 이 값이 true 이면 시퀄라이즈는 createdAt과 updatedAt 컬럼을 추가한다. 각각 로우가 생성될 떄와 수정될 떄의 시간이 자동으로 입력된다. 근데 예제에서 create_at 만들어서 그냥 false
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false, // true로 설정하면 deletedAT이라는 컬럼이 생긴다. deletedAT에 지운 시각이 기록된다. deletedAT의 값이 null인 로우를 조회한다. 
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    //associate는 다른 모델과 관계 설정
    static associate(db) {
        db.User.hasMany(db.Comment, { foreignKey : 'commenter', sourceKey: 'id'}); // hasMany에서는 sourceKey에 id를 넣고 
    }
};



// MySQL => 쉬퀄라이즈 

// VARCHAR(100) => STRING(100)
// INT => INTEGER
// TINYINT => BOOLEAN
// DATETIME => DATEINT 
// INT UNSIGNED => INTEGER.UNSIGNED
// NOT NULL => allowNull: false
// UNIQUE => unique: true
// DEFAULT now() => defaultValue: Sequelize.NOW
