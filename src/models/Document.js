module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define(
    "Document",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(300),
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: "documents",
      timestamps: true,
      //   publish date will be in field 'createdAt'
      //   update date will be in field 'updatedAt'
    }
  );
  return Document;
};
