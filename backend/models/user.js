const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please enter your first name"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "Please enter your last name"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "Please enter your username"],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
    },
    picture: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
      trim: true,
    },
    cover: {
      type: String,
      default: "",
      trim: true,
    },
    // gender: {
    //   type: String,
    //   required: [true, "gender is required"],
    //   enum: {
    //     values: ["Male", "Female", "Others"],
    //     message: "gender is required.",
    //   },
    //   trim: true,
    // },
    gender: {
      type: String,
      required: [true, "gender is required"],
      trim: true,
    },
    bYear: {
      type: Number,
      required: true,
      trim: true,
    },
    bMonth: {
      type: Number,
      required: true,
      trim: true,
    },
    bDay: {
      type: Number,
      required: true,
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    request: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: {
        type: String,
      },
      other_name: {
        type: String,
      },
      job: {
        type: String,
      },
      workplace: {
        type: String,
      },
      highschool: {
        type: String,
      },
      college: {
        type: String,
      },
      current_city: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationship: {
        type: String,
        enum: [
          "Single",
          "In a relationship ",
          "Married",
          "Divorced",
          "Widowed",
          "Separated",
          "Complicated",
        ],
      },
      religious_views: {
        type: String,
      },
      instagram: {
        type: String,
      },
    },
    saved_posts: [
      {
        post: {
          type: ObjectId,
          ref: "Post",
        },
        saved_at: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema); // User is the name of the collection
