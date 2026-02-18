const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");
async function followController(req, res) {
  const followerUser = req.user.username;
  const followeeUser = req.params.username;

  if (followeeUser == followerUser) {
    return res.status(400).json({
      message: "you can not follow your salf",
    });
  }

  const alreadyFollowUser = await followModel.findOne({
    follower: followerUser,
    followee: followeeUser,
  });
  if (alreadyFollowUser) {
    return res.status(200).json({
      message: "you are already following this user",
      follow: alreadyFollowUser,
    });
  }

  const isFolloweeExist = await userModel.findOne({
    username: followeeUser,
  });

  if (!isFolloweeExist) {
    return res.status(404).json({
      message: `${followeeUser} is not exist`,
    });
  }
  const followRecord = await followModel.create({
    follower: followerUser,
    followee: followeeUser,
  });

  res.status(201).json({
    message: `You are now following ${followeeUser}`,
    follow: followRecord,
  });
}

async function unfollowController(req, res) {
  const followerUser = req.user.username;
  const followeeUser = req.params.username;

  const isUserFollowing = await followModel.findOne({
    follower: followerUser,
    followee: followeeUser,
  });

  if (!isUserFollowing) {
    return res.status(200).json({
      message: `you are not following ${followeeUser}`,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `You have unfollow ${followeeUser}`,
  });
}
module.exports = {
  followController,
  unfollowController,
};
