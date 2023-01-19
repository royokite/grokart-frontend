import React from "react";
import "./Footer.css"

function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <h4>Get connected with us on social networks: </h4>
                    <hr />

                    {/* Column1 */}
                    <div className="col">
                        <h4>GROKART</h4>
                        <h1 className="list-unstyled">
                            <h2></h2>
                        </h1>
                    </div>

                    {/* Column2 */}
                    <div className="col">
                        <h4>PRODUCTS</h4>
                        <ui className="list-unstyled">
                            <li>Dairy</li>
                            <li>Meat</li>
                            <li>Fruits</li>
                            <li>Vegies</li>
                        </ui>
                    </div>

                    {/* Column3 */}
                    <div className="col">
                        <h4>USEFUL LINKS</h4>
                        <ui className="list-unstyled">
                            <li>Pricing</li>
                            <li>Settings</li>
                            <li>Orders</li>
                            <li>Help</li>
                        </ui>
                    </div>


                    {/* Column4 */}
                    <div className="col">
                        <h4> CONTACT</h4>
                        <ui className="list-unstyled">
                            <li>📌 Nairobi</li>
                            <li>✉ info@grokart.com</li>
                            <li>✆ +254 701 234 567</li>
                            <li>☏ +254 701 234 568</li>
                        </ui>
                    </div>
                </div>
                <div className="row">
                    <p className="col-sm">
                    © 2023 Copyright: Grokart.com
                    </p>
                </div>
            </div>
        </div>
 )
}
export default Footer