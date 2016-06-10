package com.reactnativeandroid;

import android.support.multidex.MultiDexApplication;

import com.facebook.FacebookSdk;

/**
 * Created by teee on 2016/6/6.
 */
public class MyApplication extends MultiDexApplication {
    @Override
    public void onCreate() {
        super.onCreate();

        FacebookSdk.sdkInitialize(getApplicationContext());
    }
}
