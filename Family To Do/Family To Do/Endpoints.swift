//
//  Endpoints.swift
//  Family To Do
//
//  Created by Shadman Ahmed  on 10/30/17.
//  Copyright © 2017 Shadman Ahmed . All rights reserved.
//

import Foundation
import Alamofire
class Server {
    static let server = "localhost:8000/"  // LOCALHOST Environment
    

    static func alamoFire()->Alamofire.SessionManager {
        let configuration = URLSessionConfiguration.default
        configuration.timeoutIntervalForResource = 20 // seconds
        configuration.httpAdditionalHeaders = SessionManager.defaultHTTPHeaders
        return Alamofire.SessionManager(configuration: configuration)
    }
}
