<h1 align="center">PixelForm</h1>

<div align="center">
  <strong>Back-end form app build with <code>Node.js</code></strong>
</div>
<br />
<div align="center">
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square"
      alt="API stability" />
  </a>
    <a href="https://travis-ci.org/choojs/choo">
    <img src="https://img.shields.io/travis/choojs/choo/master.svg?style=flat-square"
      alt="Build Status" />
  </a>
  </div>

<div align="center">
  <sub>Built with ❤︎ by
  <a href="https://www.linkedin.com/in/cudi7/">Roger Codina</a>
</div>
</br>
Live <code>API</code> endpoints examples:
</br>

<ul>
<li> <a href="http://pixelformback.onrender.com/api/users">
    getUsers
  </a>
</li>

<li> <a href="http://pixelformback.onrender.com/api/texts">
    getTexts
  </a>
</li>
</ul>

## Stack

- **Node.js**
- **Typescript**
- **Express**
- **MongoDB/Mongoose**

## Current Features

- **Get all users**
- **Get all texts**
- **Post new user**
- **Post new text**
- **Update text**
- **Update user**
- **Delete one or many users**
- **Delete one or many texts**

## Example

```js
export const updateUser = async (user: userInterface) => {
  try {
    const existingUser = await UserModel.findOne({ _id: user._id });

    if (!existingUser)
      return { success: false, error: `User: ${user.email} doesn't exist` };

    const doc = await UserModel.findOneAndUpdate(
      { _id: existingUser._id },
      user,
      {
        returnOriginal: false,
      }
    );

    return { success: true, user: doc };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

```

## What's next?

I'm currently working and adding more features, the next features will be regarding all the interaction between users, texts, forms, surveys, centers, statistics and <code>Auth</code>

## Installation

Clone or download & cd

```sh
$ npm install
```

Create and add a MongoDB connection to a <code>.env</code> file

```sh
$ npm run dev
```

Add data using <code>Postman</code> or the <a href="#">
PixelForm
</a> frontend

```js
POST--> http://pixelformback.onrender.com/api/texts/new

{
  "title": "Test Text",
  "description": "Generate Lorem Ipsum placeholder text",
  "type": "social"
}

GET--> http://pixelformback.onrender.com/api/texts

```

## License

[MIT](https://tldrlegal.com/license/mit-license)
<br/>
<br/>
<br/>
