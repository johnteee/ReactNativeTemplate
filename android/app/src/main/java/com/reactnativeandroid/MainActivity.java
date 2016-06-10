package com.reactnativeandroid;

import android.content.Intent;
import android.os.Bundle;
import android.os.PersistableBundle;

import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {
    CallbackManager _callbackManager;

    @Override
    public void onCreate(Bundle savedInstanceState, PersistableBundle persistentState) {
        FacebookSdk.sdkInitialize(getApplicationContext());

        super.onCreate(savedInstanceState, persistentState);
    }

    @Nullable
    @Override
    protected String getBundleAssetName() {
        return super.getBundleAssetName();
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "SimpleApp";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        _callbackManager = CallbackManager.Factory.create();
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new FBSDKPackage(_callbackManager),
            new MapsPackage()
        );
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        _callbackManager.onActivityResult(requestCode, resultCode, data);
    }
}
