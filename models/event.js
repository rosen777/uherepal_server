'use strict';
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        title: DataTypes.STRING,
        date: DataTypes.DATE,
        latitude: DataTypes.FLOAT,
        longtitude: DataTypes.FLOAT,
        capacity: DataTypes.INTEGER,
        hashtags: DataTypes.STRING,
        icon: DataTypes.STRING,
    }, {});
    Event.associate = function (models) {
        // associations can be defined here
        Event.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE'
    })
    };
    return Event;
};