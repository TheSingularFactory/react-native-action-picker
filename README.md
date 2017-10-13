# Preview

![github_android](https://user-images.githubusercontent.com/25365731/31549980-bea08910-b027-11e7-9e62-3df2810c1e5d.jpeg)
![github_ios](https://user-images.githubusercontent.com/25365731/31549982-beed5f24-b027-11e7-9029-5e7726ce2d7b.png)

Try it on expo!
https://expo.io/@enriquedev/react-native-action-picker-demo


# Install
To Install this library navigate to your project root in terminal and type:

```
npm install --save react-native-action-picker
```

This component does not require linking and its compatible with Expo!


# API reference

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| options | Array | - | Required. An array of objects containing an object with two keys action(func) and label(string) |
| isVisible | boolean | - | Determines if the modal is visible or not |
| cancelLabel | string | 'Cancel' | Label for the cancel action. |
| onCancelRequest | function | - | function responsible for hiding the picker. |
