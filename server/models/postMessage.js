import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize";

import { sequelize } from "../util/database.js";

const postSchema = sequelize.define("postSchema", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  creator: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  selectedFile: {
    type: DataTypes.TEXT("long"),
    allowNull: true,
  },
  likeCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  //   createdAt: {
  //     type: DataTypes.DATE,
  //     default: new DATE(),
  //   },
});

//console.log(postSchema === sequelize.models.postSchema);

export default postSchema;
