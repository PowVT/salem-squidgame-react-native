# First React Native Project

## Quick Start

Open Android Studio and select the AVD (Android Virtual device) you want to use. This can be found under 'More Actions' in the start screen. Then select AVD Manager. Next, choose from a virtual device you have already created or 'Create Virtual Device'. Once the AVD is active you can run the command `expo start` in the root of the directory. Then press `a` to open the android emulator or select it from the 'Expo Developer tools' window which launches on localhost when starting.

## Notes

views = divs
(SafeAreaView is better than View, especially on apples products.)

local images use:

```bash
<Image source={require("./assets/splash.png")}/>
```

external images use:

```bash
<Image
    source={{
        width:200, // also can use percentages
        height300,
        uri:"some-url-here"
    }}
/>
```

'Buttons' are a subset of 'touchables'.

Default Styling:

```bash
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

For both portrait and landscape orientations, chnage app.json property 'orientation' to 'default' instead of 'portrait' or 'landscape'.
