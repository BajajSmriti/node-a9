const mongoose = require('mongoose');
const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    website: String,
    location: String,
    dateOfBirth: { type: Date },
    dateJoined: { type: Date },
    followingCount: { type: Number },
    followersCount: { type: Number }
}, { collection: "profile" });
module.exports = schema;
