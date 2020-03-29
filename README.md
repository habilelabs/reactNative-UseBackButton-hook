# `UseBackButtonHook`

> Handle back button on react native.

## Usage

```
import {useBackButton} from "@shankarmorwal/usebackbuttonhook";
```

Now use it as 

```javascript
useBackButton(()=>{
        if(something){
            //do something.
            //when return true then it does not back. 
            return true;
        }
        else {
            //nothing to do in this mode.
            //default back will work now. 
            return false;
        }
    });
```
Rememeber this is custom hook so it can not be used inside any condition. 