import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists.'],
        required: [true, 'Email is required.']
    },
    username: {
        type: String,
        required: [true, 'Username is required.'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid. it should contain 8-20 alphanumeric letters and be unique."]
    },
    image: {
        type: String,
    }
});

// look into the models see if it is there, ONLY if it is not there, then create a new model,
// this is because this route is called every time and the connnection is establish every time from scratch
// so we have to make thius additional check 


// const User = models.user || model("User", UserSchema);

// the above code seems to have error when refreshing the page. so implemented below
let User;
try {
  User = model("User");
} catch {
  User = model("User", UserSchema);
}

export default User;