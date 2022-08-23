import postSchema from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postSchema.findAll();
    console.log(postMessages);
    return res.status(200).json(postMessages);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  console.log("req.body: ", req.body);
  const title = req.body.title;
  const message = req.body.message;
  const creator = req.body.creator;
  const tags = req.body.tags.toString();
  const selectedFile = req.body.selectedFile;

  try {
    await postSchema.create({
      title: title,
      message: message,
      creator: creator,
      tags: tags,
      selectedFile: selectedFile,
    });
    console.log("success");
    return res.status(201).json({ postSchema });
  } catch (error) {
    console.log("fail");
    return res.status(409).json({ message: error.message });
  }
  //res.send(postSchema);
};

export const updatePost = async (req, res) => {
  console.log("req.body: ", req.body);
  const id = req.params.id;
  console.log("id:", id);
  const updatedTitle = req.body.title;
  const updatedMessage = req.body.message;
  const updatedCreator = req.body.creator;
  const updatedTags = req.body.tags.toString();
  const updatedSelectedFile = req.body.selectedFile;
  try {
    await postSchema.update(
      {
        title: updatedTitle,
        message: updatedMessage,
        creator: updatedCreator,
        tags: updatedTags,
        selectedFile: updatedSelectedFile,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(201).json({ postSchema });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    await postSchema.destroy({
      where: {
        id: id,
      },
    });

    return res.status(201).json({ message: "sucessfully deleted" });
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await postSchema.findByPk(id);

    const prevLikeCount = post["dataValues"].likeCount;
    console.log(post["dataValues"]);
    if (post) {
      await postSchema.update(
        {
          likeCount: prevLikeCount + 1,
        },
        {
          where: {
            id: id,
          },
        }
      );

      return res.status(201).json("like count");
    } else {
      throw err;
    }
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};
