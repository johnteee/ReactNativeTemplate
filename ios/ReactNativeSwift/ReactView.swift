//
//  ReactView.swift
//  ReactNativeSwift
//
//  Created by LeeJunYi JohnTeee on 2016/5/7.
//  Copyright © 2016年 LeeJunYi JohnTeee. All rights reserved.
//

import Foundation

import UIKit
import React
class ReactView: UIView {
    let rootView: RCTRootView = RCTRootView(
        bundleURL: NSURL(string: "main.jsbundle"),
        //bundleURL: NSURL(string: "http://localhost:8081/index.ios.bundle?platform=ios"),
        moduleName: "SimpleApp",
        initialProperties: nil,
        launchOptions: nil)
    
    override func layoutSubviews() {
        super.layoutSubviews()
        loadReact()
    }
    
    func loadReact () {
        addSubview(rootView)
        rootView.frame = self.bounds
    }
}
