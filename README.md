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
