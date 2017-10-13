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

Now, in your code, import the ActionPicker component:

```
import {ActionPicker} from 'react-native-action-picker';
```

And you are ready to go!

This component does not require linking and its compatible with Expo!


# API reference

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| options | Array | - | Required. An array of objects containing an object with two keys action(func) and label(string) |
| isVisible | boolean | - | Determines if the modal is visible or not |
| cancelLabel | string | 'Cancel' | Label for the cancel action. |
| onCancelRequest | function | - | Function responsible for hiding the picker. |

# Example
    import React from 'react';
    import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
    import { ActionPicker } from 'react-native-action-picker';

    export default class App extends React.Component {
      state = {
        isModalVisible: false,
      };

      render() {
        return (
          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={this.toggleModal}>
              <Text style={styles.text}>Open Modal</Text>
            </TouchableOpacity>

            <ActionPicker
              options={this.createOptions()}
              isVisible={this.state.isModalVisible}
              onCancelRequest={this.toggleModal} />
          </View>
        );
      }

      toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
      };

      sendAlert = (actionName) => {
        Alert.alert('Info', `${actionName} pressed!`);
      };

      createOptions = () => {
        return [
          {label: 'Action 1', action: () => this.sendAlert('Action 1')},
          {label: 'Action 2', action: () => this.sendAlert('Action 2')},
          {label: 'Action 3', action: () => this.sendAlert('Action 3')}
        ];
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      button: {
        width: 150,
        height: 70,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
      },

      text: {
        fontSize: 22,
        fontWeight: '500'
      }
    });
