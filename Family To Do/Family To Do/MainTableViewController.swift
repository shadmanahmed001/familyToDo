//
//  MainTableViewController.swift
//  Family To Do
//
//  Created by Shadman Ahmed  on 10/30/17.
//  Copyright © 2017 Shadman Ahmed . All rights reserved.
//

import UIKit
import Alamofire

class MainTableViewController: UITableViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        Alamofire.request(Server.server+"items").responseJSON{ response in
            print(response)
            
        }
    }
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 4
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "toDoItem", for: indexPath)
        return cell
        
    }
}

